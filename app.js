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

app.get('/log', async (req, res) => {
    try {
        console.log('button clicked');
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send('Log failed');
        
    }
})

app.get('/notes', async (req, res) => {
    try {
        const query1 = `SELECT noteID, notes, DATE_FORMAT(dateCreated, '%c/%d/%Y') AS dateCreated, priority
                        FROM Notes
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

app.post('/notes/delete/:id', async (req, res) => {
    try {
        const noteID = req.params.id;
        console.log('delete button pressed', noteID);
        const query1 = `DELETE FROM Notes
                        WHERE noteID = ?`;

        await db.query(query1, [noteID]);

        res.redirect('/notes');
    } catch (error) {
        console.log(error);
        res.status(500).send('Deletion failed')
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