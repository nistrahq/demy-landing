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

    // Footer Section (implementación)
    getElement("footer-product-title").textContent = data.footer.product.title;
    getElement("footer-product-features").textContent = data.footer.product.features;
    getElement("footer-product-howitworks").textContent = data.footer.product.howItWorks;
    getElement("footer-product-knowtheplatform").textContent = data.footer.product.knowThePlatform;
    getElement("footer-product-pricing").textContent = data.footer.product.pricing;

    getElement("footer-company-title").textContent = data.footer.company.title;
    getElement("footer-company-ourhistory").textContent = data.footer.company.ourHistory;
    getElement("footer-company-ourteam").textContent = data.footer.company.ourTeam;

    getElement("footer-support-title").textContent = data.footer.support.title;
    getElement("footer-support-faq").textContent = data.footer.support.faq;
    getElement("footer-support-contact").textContent = data.footer.support.contact;

    getElement("footer-legal-title").textContent = data.footer.legal.title;
    getElement("terms-modal-trigger").textContent = data.footer.legal.terms;
    getElement("privacy-modal-trigger").textContent = data.footer.legal.privacy;

    getElement("footer-copyright").textContent = data.footer.copyright;

    // Terms and Conditions Modal
    getElement("terms-modal-title").textContent = data.termsModal.title;
    getElement("terms-title-1").textContent = data.termsModal.section1.title;
    getElement("terms-p-1").textContent = data.termsModal.section1.p;

    getElement("terms-title-2").textContent = data.termsModal.section2.title;
    getElement("terms-p-2").textContent = data.termsModal.section2.p;
    getElement("terms-li-2-1").textContent = data.termsModal.section2.li1;
    getElement("terms-li-2-2").textContent = data.termsModal.section2.li2;
    getElement("terms-li-2-3").textContent = data.termsModal.section2.li3;
    getElement("terms-li-2-4").textContent = data.termsModal.section2.li4;
    getElement("terms-li-2-5").textContent = data.termsModal.section2.li5;
    getElement("terms-li-2-6").textContent = data.termsModal.section2.li6;

    getElement("terms-title-3").textContent = data.termsModal.section3.title;
    getElement("terms-p-3").textContent = data.termsModal.section3.p;

    getElement("terms-title-4").textContent = data.termsModal.section4.title;
    getElement("terms-p-4").textContent = data.termsModal.section4.p;
    getElement("terms-li-4-1").textContent = data.termsModal.section4.li1;
    getElement("terms-li-4-2").textContent = data.termsModal.section4.li2;
    getElement("terms-li-4-3").textContent = data.termsModal.section4.li3;
    getElement("terms-li-4-4").textContent = data.termsModal.section4.li4;
    getElement("terms-li-4-5").textContent = data.termsModal.section4.li5;

    getElement("terms-title-5").textContent = data.termsModal.section5.title;
    getElement("terms-p-5").textContent = data.termsModal.section5.p;

    getElement("terms-title-6").textContent = data.termsModal.section6.title;
    getElement("terms-p-6").textContent = data.termsModal.section6.p;

    getElement("terms-title-7").textContent = data.termsModal.section7.title;
    getElement("terms-p-7").textContent = data.termsModal.section7.p;

    getElement("terms-title-8").textContent = data.termsModal.section8.title;
    getElement("terms-p-8").textContent = data.termsModal.section8.p;

    getElement("terms-title-9").textContent = data.termsModal.section9.title;
    getElement("terms-p-9").textContent = data.termsModal.section9.p;

    getElement("terms-title-10").textContent = data.termsModal.section10.title;
    getElement("terms-p-10").textContent = data.termsModal.section10.p;
    getElement("terms-update-label").textContent = data.termsModal.lastUpdate.label;
    getElement("terms-update-date").textContent = data.termsModal.lastUpdate.date;

    // Privacy Policy Modal
    getElement("privacy-modal-title").textContent = data.privacyModal.title;
    getElement("privacy-title-1").textContent = data.privacyModal.section1.title;
    getElement("privacy-p-1").textContent = data.privacyModal.section1.p;
    getElement("privacy-li-1-1").innerHTML = data.privacyModal.section1.li1;
    getElement("privacy-li-1-2").innerHTML = data.privacyModal.section1.li2;
    getElement("privacy-li-1-3").innerHTML = data.privacyModal.section1.li3;
    getElement("privacy-li-1-4").innerHTML = data.privacyModal.section1.li4;
    getElement("privacy-li-1-5").innerHTML = data.privacyModal.section1.li5;

    getElement("privacy-title-2").textContent = data.privacyModal.section2.title;
    getElement("privacy-p-2").textContent = data.privacyModal.section2.p;
    getElement("privacy-li-2-1").textContent = data.privacyModal.section2.li1;
    getElement("privacy-li-2-2").textContent = data.privacyModal.section2.li2;
    getElement("privacy-li-2-3").textContent = data.privacyModal.section2.li3;
    getElement("privacy-li-2-4").textContent = data.privacyModal.section2.li4;
    getElement("privacy-li-2-5").textContent = data.privacyModal.section2.li5;
    getElement("privacy-li-2-6").textContent = data.privacyModal.section2.li6;

    getElement("privacy-title-3").textContent = data.privacyModal.section3.title;
    getElement("privacy-p-3").textContent = data.privacyModal.section3.p;
    getElement("privacy-li-3-1").textContent = data.privacyModal.section3.li1;
    getElement("privacy-li-3-2").textContent = data.privacyModal.section3.li2;
    getElement("privacy-li-3-3").textContent = data.privacyModal.section3.li3;
    getElement("privacy-li-3-4").textContent = data.privacyModal.section3.li4;
    getElement("privacy-li-3-5").textContent = data.privacyModal.section3.li5;

    getElement("privacy-title-4").textContent = data.privacyModal.section4.title;
    getElement("privacy-p-4").textContent = data.privacyModal.section4.p;
    getElement("privacy-li-4-1").textContent = data.privacyModal.section4.li1;
    getElement("privacy-li-4-2").textContent = data.privacyModal.section4.li2;
    getElement("privacy-li-4-3").textContent = data.privacyModal.section4.li3;
    getElement("privacy-li-4-4").textContent = data.privacyModal.section4.li4;

    getElement("privacy-title-5").textContent = data.privacyModal.section5.title;
    getElement("privacy-p-5").textContent = data.privacyModal.section5.p;
    getElement("privacy-li-5-1").innerHTML = data.privacyModal.section5.li1;
    getElement("privacy-li-5-2").innerHTML = data.privacyModal.section5.li2;
    getElement("privacy-li-5-3").innerHTML = data.privacyModal.section5.li3;
    getElement("privacy-li-5-4").innerHTML = data.privacyModal.section5.li4;

    getElement("privacy-title-6").textContent = data.privacyModal.section6.title;
    getElement("privacy-p-6").textContent = data.privacyModal.section6.p;
    getElement("privacy-li-6-1").textContent = data.privacyModal.section6.li1;
    getElement("privacy-li-6-2").textContent = data.privacyModal.section6.li2;
    getElement("privacy-li-6-3").textContent = data.privacyModal.section6.li3;
    getElement("privacy-li-6-4").textContent = data.privacyModal.section6.li4;
    getElement("privacy-li-6-5").textContent = data.privacyModal.section6.li5;
    getElement("privacy-li-6-6").textContent = data.privacyModal.section6.li6;

    getElement("privacy-title-7").textContent = data.privacyModal.section7.title;
    getElement("privacy-p-7").textContent = data.privacyModal.section7.p;

    getElement("privacy-title-8").textContent = data.privacyModal.section8.title;
    getElement("privacy-p-8").textContent = data.privacyModal.section8.p;

    getElement("privacy-title-9").textContent = data.privacyModal.section9.title;
    getElement("privacy-p-9").textContent = data.privacyModal.section9.p;

    getElement("privacy-title-10").textContent = data.privacyModal.section10.title;
    getElement("privacy-p-10").textContent = data.privacyModal.section10.p;
    getElement("privacy-p-11").innerHTML = data.privacyModal.section10.p2;

    getElement("privacy-update-label").textContent = data.privacyModal.lastUpdate.label;
    getElement("privacy-update-date").textContent = data.privacyModal.lastUpdate.date;
}