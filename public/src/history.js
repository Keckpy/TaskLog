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