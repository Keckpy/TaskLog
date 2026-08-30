const addItemBtn = document.querySelector('.dataBtn');
const historyBtn = document.querySelector('.historyBtn');
const formDisplay = document.querySelector('.add-form');
const addInput = document.getElementById('add-note');

addItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/log');
    formDisplay.classList.toggle('hidden');
})


document.addEventListener('keydown', (e) => {
    // Press 'h' when on page
    if (e.target.tagName === 'BODY' && e.key === 'h') {
        window.location.href = '/history';
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
            e.target.blur();
        }
    }
})