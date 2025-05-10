// document.addEventListener('DOMContentLoaded', function () {
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href');
//             const targetSection = document.querySelector(targetId);

//             if (targetSection) {
//                 const headerOffset = 70; // Height of the fixed header
//                 const elementPosition = targetSection.getBoundingClientRect().top;
//                 const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//                 window.scrollTo({
//                     top: offsetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     // Responsive navigation toggle
//     const createMobileNav = () => {
//         const nav = document.querySelector('nav');
//         const header = document.querySelector('.main-header');

//         // Create menu button
//         const menuBtn = document.createElement('div');
//         menuBtn.className = 'mobile-menu-btn';
//         menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

//         // Add toggle functionality
//         menuBtn.addEventListener('click', () => {
//             nav.classList.toggle('active');
//             menuBtn.classList.toggle('active');
//         });

//         // Add to DOM for mobile only
//         if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-btn')) {
//             header.appendChild(menuBtn);
//         }
//     };

//     // Call on load and resize
//     createMobileNav();
//     window.addEventListener('resize', createMobileNav);

//     // Case study modal functionality
//     const modal = document.getElementById('case-study-modal');
//     const closeModal = document.querySelector('.close-modal');

//     closeModal.addEventListener('click', () => {
//         modal.style.display = 'none';
//         document.body.style.overflow = 'auto'; // Re-enable scrolling
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         }
//     });

//     // Escape key to close modal
//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape' && modal.style.display === 'block') {
//             modal.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         }
//     });

//     // Reveal animations on scroll
//     const revealOnScroll = () => {
//         const sections = document.querySelectorAll('section');
//         const windowHeight = window.innerHeight;

//         sections.forEach(section => {
//             const sectionTop = section.getBoundingClientRect().top;
//             if (sectionTop < windowHeight - 100) {
//                 section.classList.add('visible');
//             }
//         });
//     };

//     window.addEventListener('scroll', revealOnScroll);
//     revealOnScroll(); // Initial check on load

//     // Typing effect for hero section
//     const heroText = document.querySelector('.hero p');
//     const originalText = heroText.textContent;
//     heroText.textContent = '';

//     let charIndex = 0;
//     const typeText = () => {
//         if (charIndex < originalText.length) {
//             heroText.textContent += originalText.charAt(charIndex);
//             charIndex++;
//             setTimeout(typeText, 50);
//         }
//     };

//     // Start typing after a short delay
//     setTimeout(typeText, 500);
// });


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});
