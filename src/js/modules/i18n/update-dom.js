import { getElement } from "../../utils/get-element.js";

export function updateTexts(data) {
    getElement("hero-title").textContent = data.hero.title;
    getElement("hero-subtitle").textContent = data.hero.subtitle;
    getElement("nav-contact").textContent = data.nav.contact;
    getElement("hero-description").textContent = data.hero.description;
    getElement("hero-buttonStartNow").textContent = data.hero.buttonStartNow;
    getElement("hero-buttonPricing").textContent = data.hero.buttonPricing;
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
    getElement("aboutProduct-title").textContent = data.aboutProduct.title;
    getElement("aboutProduct-description1").textContent = data.aboutProduct.description1;
    getElement("aboutProduct-description2").textContent = data.aboutProduct.description2;
    getElement("aboutProduct-description3").textContent = data.aboutProduct.description3;
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
    getElement("aboutTeam-title1").textContent = data.aboutTeam.title1;
    getElement("aboutTeam-description1").textContent = data.aboutTeam.description1;
    getElement("aboutTeam-title2").textContent = data.aboutTeam.title2;
    getElement("aboutTeam-description2").textContent = data.aboutTeam.description2;
    getElement("aboutTeam-description3").textContent = data.aboutTeam.description3;


}