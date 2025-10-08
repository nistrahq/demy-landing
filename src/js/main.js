import { initializeLanguageSelector } from "./modules/i18n/language-controller.js";
import { initializeMenuToggle } from "./modules/ui/menu-toggle.js";
import { initializeTilt } from "./modules/ui/tilt.js";
import { initializeModal } from "./modules/ui/modal.js";
import { initAccordion } from "./modules/ui/accordion.js";
import '../css/main.css'

document.addEventListener('DOMContentLoaded', async () => {
    await initializeLanguageSelector();
    initializeMenuToggle();
    initializeTilt();
    initializeModal();
    initAccordion()
})