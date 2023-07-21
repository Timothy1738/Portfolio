
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

//media screen theme toggler
const body = document.querySelector('body');
const theme = document.getElementById('theme');
theme.onclick = function() {
    theme.classList.toggle('active');
    body.classList.toggle('active');
}


//show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');
const rotateIcon = document.getElementById('icon');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
        skill.querySelector('span').classList.toggle('active');
    })
})


//Form action
function removePlaceholder(element) {
    if (element.value === element.defaultValue) {
      element.value = '';
    }
}

function restorePlaceholder(element) {
    if (element.value === '') {
      element.value = element.defaultValue;
    }
  }

//read more about
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-about');
    if(readMoreContent.classList.contains('show-about')) {
        readMoreBtn.textContent = "Show Less";
    }
    else {
        readMoreBtn.textContent = "Show More";
    }
})
