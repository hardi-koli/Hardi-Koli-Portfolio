const themeBtn = document.getElementById('theme-toggle');
const icon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', () => {
    //Toggles the light theme on and off
    document.body.classList.toggle('light-theme');

    //Swaps the FontAwesome icon between a sun and a moon
    if(document.body.classList.contains('light-theme')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});
