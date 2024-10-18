
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerIcon.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });

