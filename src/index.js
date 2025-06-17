import './styles.css';

let slideIndex = 1;
let prev = document.querySelector(".previous");
let next = document.querySelector(".next");
prev.addEventListener('click', previousSlide);
next.addEventListener('click', nextSlide);

showSlide(slideIndex);

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
}

function previousSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function showSlide(n) {
    let slide = document.getElementsByClassName('Slide');
    let dot = document.getElementsByClassName('dot');
    let length = slide.length;

    if (n < 1) slideIndex = length;
    if (n > length) slideIndex = 1;

    for (let i = 0; i < length; i++) {
        dot[i].classList.remove('active');
        //slide[i].style.display = 'none'; // dont use this because this is an inline element and thus has higher precedence to css classes. so it did not get changed.
        // the next qn is, why did the line where i added the class show not affect it? This is because while the class was added, the style of the class 'show' did not get used
        // as the inline style had higher precedence. 
        // if i use inline css i.e add or modify style directly through js, then i need to continue it. If i add or remove classes to change styles, then only do that for all
        // in this case, i shouldve done slide[i].style.display = 'block', instead of adding class 'show' if i used the above one.
        slide[i].classList.remove('show');
    }

    dot[slideIndex - 1].classList.add('active');
    slide[slideIndex - 1].classList.add('show');
    console.log(dot[slideIndex - 1].classList);
    console.log(slide[slideIndex - 1].classList);
}

// optional: expose currentSlide globally if needed in HTML
window.currentSlide = currentSlide;
