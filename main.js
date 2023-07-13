
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

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    // Set the scroll position when the background color should change
    var scrollPosition = 300; // Adjust this value to your needs
  
    if (currentPosition >= scrollPosition) {
      navbar.style.backgroundColor = 'var(--color-light2)'; // Change to your desired color
    } else {
      navbar.style.backgroundColor = 'transparent'; // Change to your initial color
    }
  });
  