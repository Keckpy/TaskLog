const historyBtn = document.querySelector('.historyBtn');

document.addEventListener('keydown', (e) => {
    if (e.key === 'b') {
        window.location.href = '/notes';
    }
})