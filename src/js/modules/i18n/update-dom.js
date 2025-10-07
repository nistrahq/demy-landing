import { getElement } from "../../utils/get-element.js";

export function updateTexts(data) {
    getElement("hero-title").textContent = data.hero.title;
    getElement("hero-subtitle").textContent = data.hero.subtitle;
    getElement("nav-contact").textContent = data.nav.contact;

    // FAQ Section
    getElement("faq-heading").textContent = data.faq.heading;

    // FAQ Question 1
    getElement("faq-question-one").textContent = data.faq.question_one.title;
    getElement("faq-answer-one").textContent = data.faq.question_one.answer;

    // FAQ Question 2
    getElement("faq-question-two").textContent = data.faq.question_two.title;
    getElement("faq-answer-two").textContent = data.faq.question_two.answer;

    // FAQ Question 3
    getElement("faq-question-three").textContent = data.faq.question_three.title;
    getElement("faq-answer-three").textContent = data.faq.question_three.answer;

    // FAQ Question 4
    getElement("faq-question-four").textContent = data.faq.question_four.title;
    getElement("faq-answer-four").textContent = data.faq.question_four.answer;

}