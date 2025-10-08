function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const iconSvg = type === 'success'
        ? `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>`
        : `<svg class="toast-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`;

    toast.innerHTML = `
        ${iconSvg}
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 4000);
}


// --- Lógica principal del formulario ---
export function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const submitButton = document.getElementById('submit-button');
    const requiredInputs = form.querySelectorAll('[required]');

    function validateForm() {
        let allValid = true;
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                allValid = false;
            }
        });
        submitButton.disabled = !allValid;
    }

    requiredInputs.forEach(input => {
        input.addEventListener('input', validateForm);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        setTimeout(() => {
            const isSuccess = true;

            if (isSuccess) {
                showToast('¡Mensaje enviado con éxito!');
                form.reset();
            } else {
                showToast('Hubo un error, inténtalo de nuevo.', 'error');
            }

            submitButton.textContent = 'Enviar Mensaje';
            validateForm();
        }, 1500);
    });

    validateForm();
}