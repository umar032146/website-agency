document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-link');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className += " activet";
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById('teamcount');
    const targetValue = 400;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 1); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById('yearcount');
    const targetValue = 21;
    let currentValue = 0;
    let timer;

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            startTimer();
        } else {
            stopTimer();
        }
    });

    observer.observe(timerElement);

    function startTimer() {
        timer = setInterval(() => {
            if (currentValue < targetValue) {
                currentValue++;
                timerElement.textContent = currentValue;
            } else {
                stopTimer();
            }
        }, 1); // Update every second
    }

    function stopTimer() {
        clearInterval(timer);
    }
});

window.onscroll = function() {
    toggleNavbar();
};

function toggleNavbar() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    const toggle = document.getElementsByClassName("navbartogglec");
    if (window.pageYOffset >= 400) {
        navbar.classList.add("sticky-top");
        logo.style.color= "black";
        toggle.style.color= "red";
    } else {
        navbar.classList.remove("sticky-top");
        logo.style.color= "white";
        toggle.style.color= "white";
    }
}

const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slides');


slides.forEach(slide => {
    // Get the computed style of the current slide
    const computedStyle = window.getComputedStyle(slide);

    // Get the min-width property (or any other property)
    const minWidth = computedStyle.getPropertyValue('min-width');

    // Do something with the minWidth, e.g., log it or store it
    console.log(minWidth);

    
});
let currentIndex = 0;

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index % dots.length].classList.add('active');
}

function moveSlide(index) {

    if (window.matchMedia("(max-width: 500px)").matches) {
        // Code to execute if screen width is 500px or less
        console.log("Screen width is 500px or less");
    } else {
        // Code to execute if screen width is more than 500px
        console.log("Screen width is greater than 500px");
    }


    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length - 2) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    updateDots(currentIndex);
    
    if (window.matchMedia("(max-width: 450px)").matches){
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }else{
        slider.style.transform = `translateX(-${currentIndex * 30.33}%)`;
    }
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => moveSlide(index));
});

updateDots(0);  // Initialize dots


//transition


document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Optional: remove observer after showing the element
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(element => {
        observer.observe(element);
    });
});
