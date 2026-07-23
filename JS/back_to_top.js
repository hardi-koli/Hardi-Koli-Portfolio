const backToTopBtn = document.getElementById('back-to-top');

//1. Listen to the user scrolling
window.addEventListener('scroll', () => {
    // If they scroll down more than 300 pixels, show the button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        // Otherwise, hide it
        backToTopBtn.classList.remove('show');
    }
});

//2. What happens when they click the button 
backToTopBtn.addEventListener('click', () => {
    //Smoothly scroll back to the absolute top (0 pixels)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
