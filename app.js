const navSlide = () => {


    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index) => {
        link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 2}s`;
        console.log(index / 7);
    });
}

const burger = document.querySelector('.burger');

const burgerAnim = () => {
    const line1 = document.getElementById('line1')
    const line2 = document.getElementById('line2')
    const line3 = document.getElementById('line3')
    line1.classList.toggle('new-class1')
    line2.classList.toggle('new-class2')
    line3.classList.toggle('new-class3')

}

burger.addEventListener('click', () => {
    burgerAnim();
})



navSlide();