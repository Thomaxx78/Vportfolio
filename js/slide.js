const btn = document.querySelector('.slider__navlink');
const comp = document.querySelector('.competences');

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: "smooth"
    })
})
