const buttons = document.querySelectorAll('a');

buttons.forEach(button => {
    const buttonPath = button.getAttribute('href');
    if (buttonPath === window.location.pathname) {
        button.classList.toggle('active');
    }
})

