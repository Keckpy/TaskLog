// ##### SETUP #####
require('dotenv').config();

// Express
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// MySQL
const db = require('./database/db-connector.js');


// Handlebars
const { engine } = require('express-handlebars');
const { setSourceMapsSupport } = require('node:module');

app.engine('.hbs', engine({ extname: '.hbs'}));

app.set('view engine', '.hbs');

// ##### ROUTES #####

app.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (error) {
        console.error(error);
        res.status(500).send('Database error');
    }
    
})
// cron-job.org uses this endpoint to keep the render and aiven instances running **DO NOT DELETE**
app.get('/log', async (req, res) => {
    try {
        const query1 = `SELECT Count(*) AS count FROM Notes`;
        
        const [[tableLen]] = await db.query(query1);
        console.log(tableLen.count);
        res.send({
            Status: 'Success',
            Table: 'Notes',
            Length: tableLen.count
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Log failed');
        
    }
})

app.get('/notes', async (req, res) => {
    try {
        const query1 = `SELECT noteID, notes, DATE_FORMAT(dateCreated, '%Y-%m-%d') AS dateCreated,
                        DATE_FORMAT(dateCreated, '%c/%d/%Y') AS dateCreatedFormatted, priority,
                        DATE_FORMAT(dateCreated, '%c/%d/%Y') AS dateCompleted
                        FROM Notes
                        WHERE dateCompleted IS NULL
                        ORDER BY priority DESC, noteID DESC
                        `;

        const [notes] = await db.query(query1);

        res.render('notes', {
            notes: notes,
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Database failed')
    }
})

app.get('/history', async (req, res) => {
    try {
        const query1 = `SELECT noteID, notes, DATE_FORMAT(dateCompleted, '%c/%d/%Y') AS dateCompleted
                        FROM Notes
                        WHERE dateCompleted
                        ORDER BY Notes.dateCompleted DESC
                        `;

        const [history] = await db.query(query1);
        const groupDates = []
        for (const row of history) {
            const foundDate = groupDates.find(item => {
                return item.date === row.dateCompleted
            })
            if (!foundDate) {
                groupDates.push({
                    date: row.dateCompleted,
                    rows: [row]
                })
            } else {
                foundDate.rows.push(row);
            }
        }
        res.render('history', {
            groupDates: groupDates
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send('History failed')
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const query1 = `SELECT * FROM Tasks
                        ORDER BY taskID Desc`;

        const [tasks] = await db.query(query1);

        res.render('tasks', {
            tasks: tasks
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Tasks failed')
    }
})

app.get('/test', async (req, res) => {
    try {

        res.render('test') 
    } catch (error) {
        console.log(error);
        res.status(500).send('Test failed')
    }
})

app.post('/add-note', async (req, res) => {
    try {
        const query1 = `INSERT INTO Notes (notes)
                        VALUES (?)`;

        const text = req.body['add-note'];

        await db.query(query1, [text]);

        res.redirect('/notes');
    } catch (error) {
        console.log(error);
        res.status(500).send('Add-note Failed');
    }
})

app.post('/update-note', async (req, res) => {
    try {
        const { id, value } = req.body;
        const query1 = `UPDATE Notes
                        SET notes = ?
                        WHERE noteID = ?`;
        
        await db.query(query1, [value, id]);
        res.redirect('/notes');
    } catch (error) {
        console.log(error);
        res.status(500).send('Add-note Failed');
    }
})

app.post('/add-task', async (req, res) => {
    try {
        const query1 = `INSERT INTO Tasks (task)
                        VALUES (?)`;

        const text = req.body['add-task'];

        await db.query(query1, [text]);

        res.redirect('/tasks');
    } catch (error) {
        console.log(error);
        res.status(500).send('Update-task Failed');
    }
})

app.post('/update-task', async (req, res) => {
    try {
        const { id, value } = req.body;
        const query1 = `UPDATE Tasks
                        SET task = ?
                        WHERE taskID = ?`;
        
        await db.query(query1, [value, id]);
        res.redirect('/tasks');
    } catch (error) {
        console.log(error);
        res.status(500).send('Update-task Failed');
    }
})

app.post('/notes/delete/:id', async (req, res) => {
    try {
        const noteID = req.params.id;
        console.log('delete button pressed', noteID);
        const query1 = `DELETE FROM Notes
                        WHERE noteID = ?`;

        await db.query(query1, [noteID]);

        res.redirect('/history');
    } catch (error) {
        console.log(error);
        res.status(500).send('Deletion failed')
    }
})
app.post('/tasks/delete/:id', async (req, res) => {
    try {
        const taskID = req.params.id;
        console.log('delete button pressed', taskID);
        const query1 = `DELETE FROM Tasks
                        WHERE taskID = ?`;

        await db.query(query1, [taskID]);

        res.redirect('/tasks');
    } catch (error) {
        console.log(error);
        res.status(500).send('Deletion failed')
    }
})

app.post('/notes/complete/:id', async (req, res) => {
    try {
        const noteID = req.params.id;
        console.log('complete button pressed', noteID);
        const query1 = `UPDATE Notes
                        SET dateCompleted = CURRENT_TIMESTAMP
                        WHERE noteID = ?`;
        
        await db.query(query1, [noteID]);

        res.redirect('/notes');
    } catch (error) {
        console.log(error);
        res.status(500).send('Completion failed')
    }
})

app.post('/notes/priority/:id', async (req, res) => {
    try {
        const noteID = req.params.id;
        console.log('priority button pressed', noteID);
        grabQuery = `SELECT priority
                    FROM Notes
                    WHERE noteID = ?`;

        query1 = `UPDATE Notes
                SET priority = TRUE
                WHERE noteID = ?`;

        query2 = `UPDATE Notes
                SET priority = FALSE
                WHERE noteID = ?`;
        const result = await db.query(grabQuery, [noteID]);
        const data = result[0][0]?.priority
        if (!data) {
            await db.query(query1, [noteID]);
        } else {
            await db.query(query2, [noteID]);
        }
        

        res.redirect('/notes');
    } catch (error) {
        console.log(error);
        res.status(500).send('Priority failed')
    }
})

// ##### START SERVER #####

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});