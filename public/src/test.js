const container = document.querySelector('.container');
const item = document.querySelector('.item');
const btn = document.querySelector('.btn');

// Creates the empty blocks
for (let i = 0; i < 18; i++) {
    const dayBlock = document.createElement('div');
    dayBlock.classList.add('cell');
    container.appendChild(dayBlock);
}

const cells = document.querySelectorAll('.cell');

// cells.forEach((cell, index) => {
//     cell.textContent = index;
// });
const dateInMilliseconds = Date.now()
const dateCreated = '2026-09-01';
const diff = dateInMilliseconds - new Date(dateCreated);
const daysElapsed = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log('daysElapsed', daysElapsed);
console.log(`Days: ${Math.floor(diff / (1000 * 60 * 60 * 24))}`);

function createTimeVisual(daysElapsed) {
    
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

// btn.addEventListener('click', (e) => {
//     createTimeVisual(daysElapsed);
// })



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
btn.addEventListener('click', (e) => {
    e.preventDefault();
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
})