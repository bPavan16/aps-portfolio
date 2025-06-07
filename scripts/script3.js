// function toggleCodeSnippet(id) {
//     const snippet = document.getElementById(id);
//     const button = snippet.previousElementSibling.querySelector('.toggle-btn');

//     if (snippet.style.display === 'none' || snippet.style.display === '') {
//         snippet.style.display = 'block';
//         button.innerHTML = '<i class="fas fa-code"></i> Hide Implementation';
//     } else {
//         snippet.style.display = 'none';
//         button.innerHTML = button.innerHTML.replace('Hide', 'View');
//     }
// }

function toggleCodeSnippet(id) {
    const snippet = document.getElementById(id);
    const button = snippet.previousElementSibling.querySelector('.toggle-btn');

    if (snippet.style.display === 'none' || snippet.style.display === '') {
        snippet.style.display = 'block';
        button.innerHTML = button.innerHTML.replace('View', 'Hide');
    } else {
        snippet.style.display = 'none';
        button.innerHTML = button.innerHTML.replace('Hide', 'View');
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-card');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});