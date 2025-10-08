export function initializeModal() {
    const termsModal = document.getElementById('terms-modal');
    const termsTrigger = document.getElementById('terms-modal-trigger');
    const termsCloseBtn = document.getElementById('terms-modal-close');

    const privacyModal = document.getElementById('privacy-modal');
    const privacyTrigger = document.getElementById('privacy-modal-trigger');
    const privacyCloseBtn = document.getElementById('privacy-modal-close');

    if (termsModal && termsTrigger && termsCloseBtn) {
        initializeSingleModal(termsModal, termsTrigger, termsCloseBtn);
    }

    if (privacyModal && privacyTrigger && privacyCloseBtn) {
        initializeSingleModal(privacyModal, privacyTrigger, privacyCloseBtn);
    }
}

function initializeSingleModal(modal, trigger, closeBtn) {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}
