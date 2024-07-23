

// document.getElementById('scroll-left').addEventListener('click', () => {
//     document.querySelector('.header').scrollBy({
//         left: -200,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('scroll-right').addEventListener('click', () => {
//     document.querySelector('.header').scrollBy({
//         left: 200,
//         behavior: 'smooth'
//     });
// });
document.getElementById('toggleButton').addEventListener('click', function() {
    const div = document.getElementById('toggleDiv');
    if (div.style.display === 'none' || div.style.display === '') {
        div.style.display = 'block'; // Show the div
    } else {
        div.style.display = 'none'; // Hide the div
    }
});