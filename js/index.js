const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Header Element Getters

const header = document.querySelector('header')
const headerLink1 = document.querySelector('nav a') // services
const headerLink2 = headerLink1.nextElementSibling; // product 
const headerLink3 = headerLink2.nextElementSibling; // vision 
const headerLink4 = headerLink3.nextElementSibling; // features
const headerLink5 = headerLink4.nextElementSibling; // about
const headerLink6 = headerLink5.nextElementSibling; // contact

// Injecting content to header getters

headerLink1.textContent = siteContent['nav']["nav-item-1"];
headerLink2.textContent = siteContent['nav']["nav-item-2"];
headerLink3.textContent = siteContent['nav']["nav-item-3"];
headerLink4.textContent = siteContent['nav']["nav-item-4"];
headerLink5.textContent = siteContent['nav']["nav-item-5"];
headerLink6.textContent = siteContent['nav']["nav-item-6"];

// "DOM is Awesome" getters

const domHeading = document.querySelector(".cta-text h1");
const domButton = document.querySelector('.cta-text button')
const domImg = document.querySelector('#cta-img')

// "Dom is Awesome" content injection

domHeading.textContent = siteContent.cta.h1
domButton.textContent = siteContent.cta.button
domImg.src = siteContent.cta['img-src']

// Main Content getters

const mainFeatureHeading = document.querySelector('.top-content h4:nth-of-type(1)');
const mainFeatureContent = document.querySelector('.top-content p:nth-of-type(1)');
const mainAboutHeading = document.querySelector('.top-content h4:nth-of-type(2)');
const mainAboutContent = document.querySelector('.top-content p:nth-of-type(2)');

// Main content posting to DOM

mainFeatureHeading.textContent = siteContent['main-content']['features-h4'];
mainFeatureContent.textContent = siteContent['main-content']['features-content'];
mainAboutHeading.textContent = siteContent['main-content']['about-h4'];
mainAboutContent.textContent = siteContent['main-content']['about-content'];

