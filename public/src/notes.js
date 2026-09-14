const addItemBtn = document.querySelector('.dataBtn');
const historyBtn = document.querySelector('.historyBtn');
const tasksBtn = document.querySelector('.tasksBtn');
const formDisplay = document.querySelector('.add-form');
const addInput = document.getElementById('add-note');

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