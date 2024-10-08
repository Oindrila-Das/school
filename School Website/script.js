// Get all dropdown buttons
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Toggle the visibility of the dropdown content
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

        // Prevent default anchor click behavior
        e.preventDefault();
    });
});
const members = document.querySelectorAll('.member-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the card is visible
});

// Observe each member card
members.forEach(member => {
    observer.observe(member);
});


// JavaScript to pause scrolling when hovered
const noticeList = document.getElementById('notice-list');

// Add event listeners to pause and resume animation on hover
noticeList.addEventListener('mouseenter', function() {
    noticeList.style.animationPlayState = 'paused';
});

noticeList.addEventListener('mouseleave', function() {
    noticeList.style.animationPlayState = 'running';
});

// JavaScript to control the slider
// Get the modal element
var modal = document.getElementById("noticeModal");

// Get the <span> element that closes the modal
var closeButton = document.getElementsByClassName("close-button")[0];

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = "block"; // Display the modal when the page loads
};

// JavaScript to handle pop-up modal functionality
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("popup-modal");

    // Get the close button
    var closeButton = document.getElementById("close-btn");

    // Show the modal when the page loads
    window.onload = function() {
        modal.style.display = "flex"; // Show modal with flex (to center it)
    };

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Close the modal when user clicks anywhere outside of the modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

document.querySelector('.next').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);

