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
const mainAboutHeading = document.querySelector(".text-content:nth-of-type(2) h4");
const mainAboutContent = document.querySelector(".text-content:nth-of-type(2) p");
const middleImg = document.querySelector("#middle-img");
const servicesHeading = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
const productHeading = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
const visionHeading = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

// Main content posting to DOM

mainFeatureHeading.textContent = siteContent['main-content']['features-h4'];
mainFeatureContent.textContent = siteContent['main-content']['features-content'];
mainAboutHeading.textContent = siteContent['main-content']['about-h4'];
mainAboutContent.textContent = siteContent['main-content']['about-content'];
middleImg.src = siteContent["main-content"]["middle-img-src"];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];
productHeading.textContent = siteContent["main-content"]["product-h4"]
productContent.textContent = siteContent["main-content"]["product-content"];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// Footer content getters

const contactHeading = document.querySelector('.contact h4');
const contactAddress = contactHeading.nextElementSibling;
const contactPhone = contactAddress.nextElementSibling;
const contactEmail = contactPhone.nextElementSibling;
const copyright = document.querySelector('footer p')

// Posting Footer content to the DOM

contactHeading.textContent = siteContent.contact['contact-h4'];
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;
copyright.textContent = siteContent.footer['copyright']

// Creating new nav links and adding to Header

const navigation = document.querySelector('nav')
const newNav1 = document.createElement('a');
newNav1.textContent = 'Team';
const newNav2 = document.createElement('a')
newNav2.textContent = 'Mission'
navigation.appendChild(newNav1)
navigation.appendChild(newNav2)


// Changing header text to green


const headerLinks = document.querySelectorAll('header nav a')
const realHeaderLinks = Array.from(headerLinks)
realHeaderLinks.map( link => link.style.color = 'green') 
