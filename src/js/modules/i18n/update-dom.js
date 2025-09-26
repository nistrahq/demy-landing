import { getElement } from "../../utils/get-element.js";

export function updateTexts(data) {
    getElement("hero-title").textContent = data.hero.title;
    getElement("hero-subtitle").textContent = data.hero.subtitle;
    getElement("nav-contact").textContent = data.nav.contact;

    getElement("contact-title").textContent = data.contact.title;
    getElement("contact-description").textContent = data.contact.description;
    getElement("contact-name-label").textContent = data.contact.nameLabel;
    getElement("contact-email-label").textContent = data.contact.emailLabel;
    getElement("contact-message-label").textContent = data.contact.messageLabel;
    getElement("submit-button").textContent = data.contact.submitButton;
    getElement("message").placeholder = data.contact.messagePlaceholder;
}