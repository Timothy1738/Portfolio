
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-links a');
    const sections = document.querySelectorAll('section, #home');

    function changeActiveLink() {
        const scrollPosition = window.pageYOffset;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
                const targetId = section.getAttribute('id');
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${targetId}`) {
                        link.classList.add('active');
                    }
                });
                    }
        });
    }

    // Initial check on page load
    changeActiveLink();

    // Listen for scroll events
        window.addEventListener('scroll', changeActiveLink);
});

const scrollToTopButton = document.querySelector('.scroll-to-top');
// Add click event listener to scroll-to-top button
scrollToTopButton.addEventListener('click', function() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 0) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


//show nav bar
const toggle = document.getElementById('toggle');
const navDrop = document.getElementById('nav-links');
    
document.onclick = function(e) {
    if(e.target.id !== 'nav-links' && e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        navDrop.classList.remove('active');
    }
}
    
toggle.onclick = function(){
    toggle.classList.toggle('active');
    navDrop.classList.toggle('active');
}

// change theme
const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})


const issues = [];

function warn(el) {
  // Style the detected issues
  el.style.outline = '2px solid #FFCC00';
  el.style.backgroundColor = '#FFCC00';
  el.style.backgroundImage  = 'linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(255,204,0,1) 35%, rgba(0,212,255,1) 100%)';
}

function checkScrollingAncestor(elem) {
    if (!elem.parentElement || elem.parentElement.tagName.toLowerCase() === 'body') {
        return false;
    }

    const computedStyle = window.getComputedStyle(elem.parentElement);

    if (computedStyle.overflowX == 'auto') {
        return true;
    } else {
        return checkScrollingAncestor(elem.parentElement);
    }
}

function getSizedAncestor(elem) {
    if (!elem.parentElement) {
        return null;
    }

    if (elem.parentElement.offsetWidth > 0) {
        return elem.parentElement;
    } else {
        return getSizedAncestor(elem.parentElement);
    }
}

function checkElement(el) {
    const hasScrollingAncestor = checkScrollingAncestor(el);
    if (hasScrollingAncestor) {
        return;
    }

    // Find elements that overflow the document width
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        warn(el);
        issues.push(el);
    }

    const ancestor = getSizedAncestor(el);
    const info = window.getComputedStyle(el);

    // Find any negative margins (deliberate outflow)
    const adjustment = 
        (info.marginLeft.startsWith('-') ? parseFloat(info.marginLeft) * -1 : 0)
        +
        (info.marginRight.startsWith('-') ? parseFloat(info.marginRight) * -1 : 0);

    if (ancestor && (el.offsetWidth - adjustment) > ancestor.offsetWidth) {
      warn(el);
      issues.push(el);
    }
}

document.querySelectorAll('*').forEach(checkElement);

issues.length > 0 && issues[0].scrollIntoView();
console.log(issues);