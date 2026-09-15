const buttons = document.querySelectorAll('a');
// Toggles the background of the link in the sidebar that cooresponds to 
// the current page
buttons.forEach(button => {
    const buttonPath = button.getAttribute('href');
    if (buttonPath === window.location.pathname) {
        button.classList.toggle('active');
    }
})

