const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const title = document.querySelector('#title');
const btn = document.querySelector('.dataBtn');
const schedules = document.querySelector('.schedules');
const today = new Date().toISOString().split('T')[0];

// // Days in the current month
// const daysThisMonth = new Date(
//     new Date().getFullYear(),
//     new Date().getMonth() + 1,
//     0
// ).getDate();

btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let scheduleStart = new Date(startDate.value);
    const scheduleEnd = new Date(endDate.value);
    const schedule = document.createElement('div');
    const scheduleTitle = document.createElement('h1');
    scheduleTitle.textContent = title.value;
    schedule.classList.add('schedule');
    schedules.appendChild(scheduleTitle);
    schedules.appendChild(schedule);
    
    while (scheduleStart <= scheduleEnd) {
        const dayBlock = document.createElement('div');
        dayBlock.classList.add('month');
        scheduleStart.setDate(scheduleStart.getDate() + 1);
        dayBlock.textContent = scheduleStart.getDate();
        schedule.appendChild(dayBlock);
        
    }
})

// Creates the empty blocks
for (let i = 0; i < 28; i++) {
}

document.addEventListener('keydown', (e) => {
    // Press 'n' when on page
    if (e.target.tagName === 'BODY' && e.key === 'n') {
        window.location.href = '/';
    }

    // Press 'h' when on page
    if (e.target.tagName === 'BODY' && e.key === 'h') {
        window.location.href = '/history';
    }

    // Press 't' when on page
    if (e.target.tagName === 'BODY' && e.key === 't') {
        window.location.href = '/tasks';
    }

    // Press 's' when on page
    if (e.target.tagName === 'BODY' && e.key === 's') {
        window.location.href = '/schedule';
    }
})