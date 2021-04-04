/**************************************/
/**** Script 1: Sticky Navigation *****/
/**************************************/

//Initialize and set defaults

let stickyNav = document.querySelector("#sticky-nav");
let stickyNavTop = 343;

// When the menu reaches the position we want it to stick at, this adds a class and some padding.
function stickItHere() {
    if (window.scrollY >= stickyNavTop) {
        //stickyNav.style.paddingTop = nav.offsetHeight + 'px';
        stickyNav.classList.add('stick-it');
    } else {
        //stickyNav.style.paddingTop = 0;
        stickyNav.classList.remove('stick-it');
    }
}

// Listen to the scrolling to find when it reaches the sticky spot
window.addEventListener('scroll', stickItHere);

/*************************************************/
/**** Script 2: Highlight Links when clicked *****/
/*************************************************/

//locate all the navigation links and arrows
let navLinks = document.querySelectorAll('.sticky-nav a');

for (let i = 0; i < navLinks.length; i++) {

    navLinks[i].addEventListener('click', function (event) {

        // Disable scroll handler when click on navigation link if using smooth scroll
        document.removeEventListener('scroll', scrollHandler, true);

        //check if a link is currently selected, remove is-active class if yes
        isActive = document.getElementsByClassName('is-active')[0];

        if (isActive != undefined) {
            isActive.classList.remove('is-active');
        }

        //then add is-active class to the most recent selected link
        this.classList.add('is-active');

        //re-enable scroll event 1 second after is-active class is added
        setTimeout(function () {
            document.addEventListener("scroll", scrollHandler, true);
        }, 1000);

    });
}


/***************************************************/
/**** Script 3: Highlight links when scrolling *****/
/***************************************************/

// Initialize
//locate all the navigation links
let quickLinks = document.querySelectorAll('.sticky-nav a');
let qlArray = [];
let positionArray = [];

for (let i = 0; i < quickLinks.length; i++) {

    // Create an array of ids
    qlArray.push(quickLinks[i].href.substring(quickLinks[i].href.indexOf('#') + 1));
}

// create an array of the position of each id
for (var i = 0; i < qlArray.length; i++) {
    positionArray.push(document.getElementById(qlArray[i]).getBoundingClientRect().top);
}

document.addEventListener('scroll', scrollHandler, true);

// alignment of page card with its corresponding link on the sticky navigation 
function scrollHandler() {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    currentActive = document.getElementsByClassName('is-active')[0];
    for (let i = 0; i < qlArray.length - 1; i++) {
        const top = document.getElementById(qlArray[i]).getBoundingClientRect().top
        const bottom = document.getElementById(qlArray[i + 1]).getBoundingClientRect().top
        if (top > 0 && top < vh * 0.8 || bottom >= vh * 0.8) {
            if (currentActive != undefined) {
                currentActive.classList.remove('is-active');
            }
            quickLinks[i].classList.add('is-active');
            return;
        }
    }
    if (currentActive != undefined) {
        currentActive.classList.remove('is-active');
    }
    quickLinks[qlArray.length - 1].classList.add('is-active');

};

