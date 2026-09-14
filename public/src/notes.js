const addItemBtn = document.querySelector('.dataBtn');
const historyBtn = document.querySelector('.historyBtn');
const tasksBtn = document.querySelector('.tasksBtn');
const formDisplay = document.querySelector('.add-form');
const addInput = document.getElementById('add-note');
const dateVisual = document.querySelectorAll('.container');


function createTimeVisual(daysElapsed, date) {
    
    const cells = date.querySelectorAll('.cell');
    const bar = [
        [12, 6, 0],
        [13, 7, 1],
        [14, 8, 2],
        [15, 9, 3],
        [16, 10, 4],
        [17, 11, 5]
    ]
    let dayCounter = 0;
    let barCounter = 0;
    let weekCounter = 0;

    console.log('daysElapsed', daysElapsed);
    for (let i = 0; i < daysElapsed; i++) {
        console.log('button clicked!')
        if (dayCounter < 3) {
            console.log(`Before Day access: Bar ${barCounter} | Day ${dayCounter} | Week ${weekCounter} `)
            cells[bar[barCounter][dayCounter]].classList.toggle('block');
            dayCounter += 1;
            weekCounter += 1;
            console.log(`Bar ${barCounter} | Day ${dayCounter} | Week ${weekCounter} `)
        } else if (weekCounter === 6) {
            bar[barCounter - 1].forEach((day) => {
                cells[day].classList.toggle('block');
            })
            cells[bar[barCounter - 1][0]].classList.toggle('bottom');
            cells[bar[barCounter - 1][1]].classList.toggle('middle');
            cells[bar[barCounter - 1][2]].classList.toggle('top');
            bar[barCounter].forEach((day) => {
                cells[day].classList.toggle('block');
            })
    
            dayCounter = 0;
            weekCounter = 0;
        } else {
            console.log(`Before Week access: Bar ${barCounter} | Day ${dayCounter} | Week ${weekCounter} `)
            barCounter += 1;
            dayCounter = 0;
            cells[bar[barCounter][dayCounter]].classList.toggle('block');
            dayCounter += 1;
            weekCounter += 1;
            console.log(`Bar ${barCounter} | Day ${dayCounter} | Week ${weekCounter} `)
        }
    }
}

const dateInMilliseconds = Date.now()
dateVisual.forEach((date) => {
    const diff = dateInMilliseconds - new Date(date.dataset.date);
    const daysElapsed = Math.floor(diff / (1000 * 60 * 60 * 24));
    // Creates the empty blocks
    for (let i = 0; i < 18; i++) {
        const dayBlock = document.createElement('div');
        dayBlock.classList.add('cell');
        date.appendChild(dayBlock);
    }
    createTimeVisual(daysElapsed, date);
})








addItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    formDisplay.classList.toggle('hidden');
})


document.addEventListener('keydown', (e) => {
    // Press 'n' when on page
    if (e.target.tagName === 'BODY' && e.key === 'n') {
        window.location.href = '/notes';
    }

    // Press 'h' when on page
    if (e.target.tagName === 'BODY' && e.key === 'h') {
        window.location.href = '/history';
    }

    // Press 't' when on page
    if (e.target.tagName === 'BODY' && e.key === 't') {
        window.location.href = '/tasks';
    }

    // Press 'a' when on page
    if (e.target.tagName === 'BODY' &&
        formDisplay.classList.contains('hidden')
    ) {
        if (e.key === 'a') {
            formDisplay.classList.toggle('hidden');
            e.preventDefault();
            addInput.focus();
        }
    }

    if (!formDisplay.classList.contains('hidden')) {
        if (e.key === 'Escape') {
            formDisplay.classList.toggle('hidden');
            e.preventDefault();
        }
    }

    // Press 'Enter' when inside a cell
    if (e.target.tagName === 'TD') {
        if (e.key === 'Enter') {
            e.preventDefault();
            const id = e.target.dataset.id;
            const value = e.target.textContent;
            fetch('/update-note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    value: value
                })
            });
            e.target.blur();
        }
    }
})