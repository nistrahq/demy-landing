export function initializeMenuToggle() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (!menuToggle || !mobileMenu || !iconMenu || !iconClose) return;

    let isOpen = false;

    const showMenu = () => {
        isOpen = true;
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-6');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');

        iconMenu.classList.remove('rotate-0', 'opacity-100');
        iconMenu.classList.add('rotate-90', 'opacity-0');

        iconClose.classList.remove('rotate-90', 'opacity-0');
        iconClose.classList.add('rotate-0', 'opacity-100');
    };

    const hideMenu = () => {
        isOpen = false;
        mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none', '-translate-y-6');

        iconMenu.classList.remove('rotate-90', 'opacity-0');
        iconMenu.classList.add('rotate-0', 'opacity-100');

        iconClose.classList.remove('rotate-0', 'opacity-100');
        iconClose.classList.add('rotate-90', 'opacity-0');
    };

    menuToggle.addEventListener('click', () => {
        isOpen ? hideMenu() : showMenu();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', hideMenu);
    });
}
