import { getElement } from "../../utils/get-element.js";

export function updateTexts(data) {
    getElement("hero-title").textContent = data.hero.title;
    getElement("hero-subtitle").textContent = data.hero.subtitle;
    getElement("nav-contact").textContent = data.nav.contact;


    //PRICING SECTION
    // Section header
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
}