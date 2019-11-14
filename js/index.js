// Menu toggler
const menuToggle = () =>{
    document.querySelector('.navbar_items').classList.toggle('navbar_show');
}

document.querySelector('.navbar_toggler').addEventListener('click',  menuToggle);

// Education timeline show if it's in viewport
const timelines = document.querySelectorAll('.education__timeline li');

const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return(
        rect.top >= 0 && 
        rect.left >= 0 && 
        rect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) &&
        rect.right <= ( window.innerWidth || document.documentElement.clientWidth )
    );
}

const showTimeline = () => 
    timelines.forEach(timeline =>{
        if(isInViewport(timeline)){
            timeline.classList.add('show');
        }
    });

window.addEventListener('load', showTimeline);
window.addEventListener('resize', showTimeline);
window.addEventListener('scroll', showTimeline);

// Expertise Areas Animation
const animateExpertiseArea = () => {
    let tl = new TimelineLite();

    if(isInViewport(document.querySelector('.expertise__areas'))){
        tl.to(".ui", 0.5, {width: "78%"})
          .to(".fe", 0.5, {width: "98%"}, "-=0.25")
          .to(".fs", 0.5, {width: "60%"}, "-=0.25")
          .to(".tw", 0.5, {width: "90%"}, "0")
          .to(".tm", 0.5, {width: "80%"}, "-=0.45")
          .to(".ch", 0.5, {width: "57%"}, "-=0.48");
    }
};

window.addEventListener('load', animateExpertiseArea);
window.addEventListener('resize', animateExpertiseArea);
window.addEventListener('scroll', animateExpertiseArea);

//Header Animation
TweenMax.from(".header_leftside", 0.9, {x:-600, opacity:0});
TweenMax.from(".header_rightside", 0.9, { y:500, opacity:0, scale: 0, delay:0.2});

// About me header Animation
TweenMax.from (".more", 1.5, {x: 600, opacity: 0, ease: Back.easeOut.config(1.7) });

const animateAboutSection = () => {
    if(isInViewport(document.querySelector('.about_me--image'))){
        TweenMax.from('.about_me--image figure', 1.1, {x:-300});
    }

    if(isInViewport(document.querySelector('.about_me--story'))){
        let text = document.querySelector('#text'), text2 = document.querySelector('#text2');
        let newDom = '', newDom2 ='';
        let animationDelay = 0.5, animationDelay2 = 5;


        for(let i = 0; i < text.innerText.length; i++){
            newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
        }

        for(let i = 0; i < text2.innerText.length; i++){
            newDom2 += '<span class="char">' + (text2.innerText[i] == ' ' ? '&nbsp;' : text2.innerText[i])+ '</span>';
        }

        text.innerHTML = newDom;
        text2.innerHTML = newDom2;
        let length = text.children.length;
        let length2 = text2.children.length;

        for(let i = 0; i < length; i++)
        {
            text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
        }

        for(let i = 0; i < length2; i++)
        {
            text2.children[i].style['animation-delay'] = animationDelay2 * i + 'ms';
        }
    }

    if(isInViewport(document.querySelector('.btn-group'))){
        TweenMax.from('.btn-group button', 2, {opacity: 0, scale: 0, delay: 0.2});
    }
}

window.addEventListener('load', animateAboutSection);
window.addEventListener('resize', animateAboutSection);

//Menu Active link on Tab and Mobile view
const menuContainer = document.querySelector('.navbar_items');
const menuLinks = menuContainer.getElementsByClassName('nav-btn');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener("click", function() {
    let currentLink = document.getElementsByClassName("current");
    currentLink[0].className = currentLink[0].className.replace(" current", "");
    this.className += " current";
  });
}
