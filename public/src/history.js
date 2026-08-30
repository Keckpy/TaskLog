const historyBtn = document.querySelector('.historyBtn');

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.key === 'b') {
        window.location.href = '/notes';
    }
})