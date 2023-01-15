/* IMPORTACIONES*/
import { skillsListArray } from "./data/skills.js";
import { portafolioDataList } from "./data/portafolio.js";

/* VARIABLES */

const skillsDom = document.getElementById('skill-div');
const typed = new Typed('.typed', {
    strings: [
        '<i>Juan Camilo</i>', 
        '<i class="text-success">Developer</i>'
    ],
    typeSpeed: 70,
    backSpeed: 60,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    cursorChar: '|',
});

const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}


const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

var github = document.getElementById('content-github');
var linkedin = document.getElementById('content-linkedin');
var whatsapp = document.getElementById('content-whatsapp');

/* FUNCIONES */


let backtotop = select('.back-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

/* mouse events */
github.onmouseover = function() {
  this.style.textDecoration = "underline";
};

github.onmouseout = function() {
  this.style.textDecoration = "none";
  this.style.color = "black";
};

linkedin.onmouseover = function() {
  this.style.textDecoration = "underline";
  this.style.color = 'blue';
};

linkedin.onmouseout = function() {
  this.style.textDecoration = "none";
  this.style.color = "black";
};

whatsapp.onmouseover = function() {
  this.style.textDecoration = "underline";
  this.style.color = 'green';
};

whatsapp.onmouseout = function() {
  this.style.textDecoration = "none";
  this.style.color = "black";
};



//scroll menu click
var menuClickScrollContent = {

    move : function (old, des, actual) {
      easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
      actual += 1;
      ease = easeInOutQuart(actual / 100);
      delta = des - old;
      delta *= ease;
      delta += old;
      window.scrollTo(0, delta);
      if (actual < 100) {
        window.requestAnimationFrame(function () {
          menuClickScrollContent.move(old, des, actual);
        });
      }
    },
  
    linkInit : function (e) {
      e.preventDefault();
      link = e.target.getAttribute("href").substr(1);
      block = document.getElementById(link).offsetTop;
      client = document.documentElement.scrollTop;
  
      menuClickScrollContent.move(client, block, 0);
    },
  
    init : function () {
      var links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        link = links[i].getAttribute("href");
        if (link.search("#") == 0 & link.substr(1) != "") {
          links[i].onclick = menuClickScrollContent.linkInit;
        }
      }
    }
  };

window.onload = menuClickScrollContent.init;

//js function library ScrollReveal.js
ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
    reset: false
});

ScrollReveal().reveal(".title", {
    duration: 3000,
    origin: "top",
    distance: "400px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    rotate: {
      x: 20,
      z: -10
    }
});

ScrollReveal().reveal(".slide-right", {
    duration: 3000,
    origin: "left",
    distance: "300px",
    easing: "ease-in-out"
});

/* EVENTOS */

// Código que se ejecutará una vez que el documento HTML ha sido cargado

window.addEventListener("load", function() {
    console.log("Todas las funciones del documento se han cargado sin errores :)");
});

/* filter */

window.addEventListener('load', () => {
  let portfolioContainer = select('.portafolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portafolio-item',
      filter: '.filter-css'
    });
    let portfolioFilters = select('#portafolio-filters li', true);

    on('click', '#portafolio-filters li', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      portfolioIsotope.on('arrangeComplete', function() {
        AOS.refresh()
      });
    }, true);
  }

});

 /**
   * Initiate portfolio lightbox 
   */
 const portfolioLightbox = GLightbox({
  selector: '.portafolio-lightbox'
});

/**
 * Portfolio details slider
 */
new Swiper('.portafolio-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Testimonials slider
 */
new Swiper('.testimonials-slider', {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

/**
 * Initiate Pure Counter 
 */
new PureCounter();



/* SKILLS JS */
skillsListArray.forEach(skill => {
  const {nameSkill, img} = skill;
  const skillContainerView = document.createElement('card');
  skillContainerView.classList.add('card','col-5','col-sm-5','col-md-4','col-lg-1','card2');
  const skillImageSrc = document.createElement('img');
        skillImageSrc.classList.add('img-fluid');
        skillImageSrc.src = img;
        skillImageSrc.alt = `${nameSkill} Logo`;
        skillImageSrc.style.height = '70%';
  const skillName = document.createElement('p');
  skillName.textContent = nameSkill;
  skillName.classList.add('text-center','text-dark');
  skillContainerView.appendChild(skillImageSrc);
  skillContainerView.appendChild(skillName);
  skillsDom.appendChild(skillContainerView);
});

/* PORTAFOLIO JS */

const portfolioContainer = document.querySelector('#portafolio-container');
portafolioDataList.forEach(project => {
  const { name, img, project_url, repository_url, category } = project;
  const projectContainer = document.createElement('div');
    projectContainer.classList.add('col-lg-4', 'col-sm-6', 'portafolio-item', `filter-${category}`);
  const shadowContainer = document.createElement('div');
    shadowContainer.classList.add('portafolio-wrap', 'shadow', 'rounded-1');
  const projectTitle = document.createElement('h5');
    projectTitle.classList.add('portafolio-item-title');
    projectTitle.textContent = name;
  const projectImg = document.createElement('img');
    projectImg.src = img;
    projectImg.classList.add('img-fluid');
    projectImg.alt = `${name} Project Screenshot`;
  const linksContainer = document.createElement('div');
    linksContainer.classList.add('portafolio-links');
  const projectLink = document.createElement('a');
    projectLink.href = project_url;
    projectLink.target = '_blank';
    projectLink.title = 'View';
  const projectLinkIcon = document.createElement('i');
    projectLinkIcon.classList.add('bi', 'bi-browser-chrome');
  const repositoryLink = document.createElement('a');
    repositoryLink.href = repository_url;
    repositoryLink.target = '_blank';
    repositoryLink.title = 'Repository';
  const repositoryLinkIcon = document.createElement('i');
    repositoryLinkIcon.classList.add('bi', 'bi-github');

  projectLink.appendChild(projectLinkIcon);
  repositoryLink.appendChild(repositoryLinkIcon);
  linksContainer.appendChild(projectLink);
  linksContainer.appendChild(repositoryLink);
  shadowContainer.appendChild(projectTitle);
  shadowContainer.appendChild(projectImg);
  shadowContainer.appendChild(linksContainer);
  projectContainer.appendChild(shadowContainer);
  portfolioContainer.appendChild(projectContainer);
})