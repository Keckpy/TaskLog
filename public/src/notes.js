const addItemBtn = document.querySelector('.dataBtn');
const formDisplay = document.querySelector('.add-form');
const addInput = document.getElementById('add-note');

addItemBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/log');
    formDisplay.classList.toggle('hidden');
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'a') {
        formDisplay.classList.toggle('hidden');
        e.preventDefault();
        addInput.focus();
    }
})