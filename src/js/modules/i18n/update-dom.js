import { getElement } from "../../utils/get-element.js";

export function updateTexts(data) {
    getElement("hero-title").textContent = data.hero.title;
    getElement("hero-subtitle").textContent = data.hero.subtitle;
    getElement("hero-description").textContent = data.hero.description;
    getElement("features-anchor").textContent = data.features_anchor;
    getElement("how-it-works-anchor").textContent = data.how_it_works_anchor;
    getElement("testimonials-anchor").textContent = data.testimonials_anchor;
    getElement("about-us-anchor").textContent = data.about_us_anchor;
    getElement("pricing-anchor").textContent = data.pricing_anchor;
    getElement("faq-anchor").textContent = data.faq_anchor;
    getElement("contact-anchor").textContent = data.contact_anchor;
    getElement("features-anchor-mobile").textContent = data.features_anchor_mobile;
    getElement("how-it-works-anchor-mobile").textContent = data.how_it_works_anchor_mobile;
    getElement("testimonials-anchor-mobile").textContent = data.testimonials_anchor_mobile;
    getElement("about-us-anchor-mobile").textContent = data.about_us_anchor_mobile;
    getElement("pricing-anchor-mobile").textContent = data.pricing_anchor_mobile;
    getElement("faq-anchor-mobile").textContent = data.faq_anchor_mobile;
    getElement("contact-anchor-mobile").textContent = data.contact_anchor_mobile;

    //Feature section
    getElement("feature-title1").textContent = data.feature.title1;
    getElement("feature-description1").textContent = data.feature.description1;
    getElement("feature-item1").textContent = data.feature.item1;
    getElement("feature-item2").textContent = data.feature.item2;
    getElement("feature-item3").textContent = data.feature.item3;
    getElement("feature-item4").textContent = data.feature.item4;
    getElement("feature-title2").textContent = data.feature.title2;
    getElement("feature-description2").textContent = data.feature.description2;
    getElement("feature-item5").textContent = data.feature.item5;
    getElement("feature-item6").textContent = data.feature.item6;
    getElement("feature-item7").textContent = data.feature.item7;
    getElement("feature-item8").textContent = data.feature.item8;

    //How it works section
    getElement("howItWorks-title").textContent = data.howItWorks.title;
    getElement("howItWorks-description").textContent = data.howItWorks.description;
    getElement("howItWorks-subtitle1").textContent = data.howItWorks.subtitle1;
    getElement("howItWorks-description1").textContent = data.howItWorks.description1;
    getElement("howItWorks-subtitle2").textContent = data.howItWorks.subtitle2;
    getElement("howItWorks-description2").textContent = data.howItWorks.description2;
    getElement("howItWorks-subtitle3").textContent = data.howItWorks.subtitle3;
    getElement("howItWorks-description3").textContent = data.howItWorks.description3;

    //Message section
    getElement("message-title").textContent = data.message.title;
    getElement("message-description").textContent = data.message.description;

    // About the Product
/*    getElement("aboutProduct-title").textContent = data.aboutProduct.title;
    getElement("aboutProduct-description1").textContent = data.aboutProduct.description1;
    getElement("aboutProduct-description2").textContent = data.aboutProduct.description2;
    getElement("aboutProduct-description3").textContent = data.aboutProduct.description3;*/

    //Testimonials
    getElement("testimonials-title").textContent = data.testimonials.title;
    getElement("testimonials-description").textContent = data.testimonials.description;
    getElement("testimonials-testimony1").textContent = data.testimonials.testimony1;
    getElement("testimonials-testimony2").textContent = data.testimonials.testimony2;
    getElement("testimonials-testimony3").textContent = data.testimonials.testimony3;
    getElement("testimonials-testimony4").textContent = data.testimonials.testimony4;
    getElement("testimonials-testimony5").textContent = data.testimonials.testimony5;
    getElement("testimonials-testimony6").textContent = data.testimonials.testimony6;

    //About the TEAM
/*    getElement("aboutTeam-title1").textContent = data.aboutTeam.title1;
    getElement("aboutTeam-description1").textContent = data.aboutTeam.description1;
    getElement("aboutTeam-title2").textContent = data.aboutTeam.title2;
    getElement("aboutTeam-description2").textContent = data.aboutTeam.description2;
    getElement("aboutTeam-description3").textContent = data.aboutTeam.description3;*/

    // Contact Section
    getElement("contact-title").textContent = data.contact.title;
    getElement("contact-description").textContent = data.contact.description;
    getElement("contact-name-label").textContent = data.contact.nameLabel;
    getElement("contact-email-label").textContent = data.contact.emailLabel;
    getElement("contact-message-label").textContent = data.contact.messageLabel;
    getElement("submit-button").textContent = data.contact.submitButton;
    getElement("message").placeholder = data.contact.messagePlaceholder;

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

    //PRICING SECTION
    // Section header
    getElement("see-pricing").textContent = data.see_pricing;
    getElement("see-pricing-mobile").textContent = data.see_pricing_mobile;
    getElement("pricing-title").textContent = data.pricing.title;
    getElement("pricing-description").textContent = data.pricing.description;

    // ESSENTIAL
    getElement("essential-title").textContent = data.essential.title;
    getElement("essential-price").textContent = data.essential.price;
    getElement("essential-price_per_month").textContent = data.essential.price_per_month;
    getElement("starter-description").textContent = data.essential.description;
    getElement("essential-features-feature_1").textContent = data.essential.features.feature_1;
    getElement("essential-features-feature_2").textContent = data.essential.features.feature_2;
    getElement("essential-features-feature_3").textContent = data.essential.features.feature_3;
    getElement("essential-features-feature_4").textContent = data.essential.features.feature_4;
    getElement("get-started").textContent = data.essential.get_started;

    // PRO
    getElement("most-popular").textContent = data.pro.most_popular;
    getElement("pro-title").textContent = data.pro.title;
    getElement("pro-price").textContent = data.pro.price;
    getElement("pro-price-per-month").textContent = data.pro.price_per_month;
    getElement("pro-description").textContent = data.pro.description;
    getElement("pro-features-feature_1").textContent = data.pro.features.feature_1;
    getElement("pro-features-feature_2").textContent = data.pro.features.feature_2;
    getElement("pro-features-feature_3").textContent = data.pro.features.feature_3;
    getElement("pro-features-feature_4").textContent = data.pro.features.feature_4;
    getElement("pro-get-started").textContent = data.pro.get_started;

    // ELITE
    getElement("elite-title").textContent = data.elite.title;
    getElement("elite-price").textContent = data.elite.price;
    getElement("elite-price_per_month").textContent = data.elite.price_per_month;
    getElement("elite-description").textContent = data.elite.description;
    getElement("elite-features-feature_1").textContent = data.elite.features.feature_1;
    getElement("elite-features-feature_2").textContent = data.elite.features.feature_2;
    getElement("elite-features-feature_3").textContent = data.elite.features.feature_3;
    getElement("elite-features-feature_4").textContent = data.elite.features.feature_4;
    getElement("elite-get-started").textContent = data.elite.get_started;

    // About the Product
    getElement("aboutProduct-title").textContent = data.aboutProduct.title;
    getElement("aboutProduct-description1").textContent = data.aboutProduct.description1;
    getElement("aboutProduct-description2").textContent = data.aboutProduct.description2;
    getElement("aboutProduct-description3").textContent = data.aboutProduct.description3;

// About the TEAM
    getElement("aboutTeam-title1").textContent = data.aboutTeam.title1;
    getElement("aboutTeam-description1").textContent = data.aboutTeam.description1;
    getElement("aboutTeam-title2").textContent = data.aboutTeam.title2;
    getElement("aboutTeam-description2").textContent = data.aboutTeam.description2;
    getElement("aboutTeam-description3").textContent = data.aboutTeam.description3;
}