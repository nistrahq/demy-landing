import { loadLanguage } from "./load-language.js";
import { updateTexts } from "./update-dom.js";

export async function initializeLanguageSelector() {
    const savedLang = localStorage.getItem("lang") || 'en';
    await applyLanguage(savedLang);

    const langToggle = document.getElementById('lang-toggle');
    const langOptions = document.getElementById('lang-options');
    const currentLang = document.getElementById('current-lang');
    const langEn = document.getElementById('lang-en');
    const langEs = document.getElementById('lang-es');

    if (currentLang) currentLang.textContent = savedLang.toUpperCase();

    langToggle?.addEventListener('click', () => {
        langOptions?.classList.toggle('hidden');
    });

    langEn?.addEventListener('click', () => changeLanguage('en'));
    langEs?.addEventListener('click', () => changeLanguage('es'));

    document.addEventListener('click', (e) => {
        if (!langToggle?.contains(e.target) && !langOptions?.contains(e.target)) {
            langOptions?.classList.add('hidden');
        }
    });

    async function changeLanguage(lang) {
        localStorage.setItem('lang', lang);
        await applyLanguage(lang);
        if (currentLang) currentLang.textContent = lang.toUpperCase();
        langOptions?.classList.add('hidden');
    }

    async function applyLanguage(lang) {
        const translations = await loadLanguage(lang);
        updateTexts(translations);
    }
}