export function initAccordion() {
    const accordionGroup = document.querySelector('.accordion-group[data-accordion="default-accordion"]');
    if (!accordionGroup) return;

    const buttons = accordionGroup.querySelectorAll('.accordion-toggle');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const currentAccordion = button.closest('.accordion');
            const content = button.nextElementSibling;

            const isOpen = currentAccordion.classList.contains('active');

            // Cerrar todos los acordeones
            buttons.forEach((btn) => {
                const acc = btn.closest('.accordion');
                const accContent = btn.nextElementSibling;
                acc.classList.remove('active');
                accContent.style.maxHeight = null;
            });

            // Abrir el actual solo si estaba cerrado
            if (!isOpen) {
                currentAccordion.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Opcional: inicializa el primero abierto al cargar (quítalo si no lo quieres)
    const firstAccordion = accordionGroup.querySelector('.accordion');
    if (firstAccordion) {
        const firstContent = firstAccordion.querySelector('.accordion-content');
        firstAccordion.classList.add('active');
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
}