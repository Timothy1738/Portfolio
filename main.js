
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

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

// Get all the head elements
const headElements = document.querySelectorAll('.head');

// Add click event listener to each head element
headElements.forEach(function(head) {
    head.addEventListener('click', function() {
        // Get the corresponding items element
        const items = this.nextElementSibling;

        // Toggle the display of the items element
        if (items.style.display === 'none') {
            items.style.display = 'block';
        } else {
            items.style.display = 'none';
        }
    });
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

