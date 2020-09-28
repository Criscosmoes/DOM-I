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



//input the nav 

let nav = document.querySelectorAll('nav a'); 

for(let i = 0; i < nav.length; i++){
  let selector = i + 1; 
  nav[i].textContent = siteContent.nav["nav-item-" + selector.toString()]  
}


//cta section 

//selecting parent
let ctaText = document.querySelector('.cta-text'); 

//h1 
ctaText.querySelector('h1').textContent = siteContent.cta.h1; 

let text = ctaText.querySelector('h1').textContent; 
let br = document.createElement('BR'); 

let arr = text.split(' '); 

console.log(arr); 












//button
ctaText.querySelector('button').textContent = siteContent.cta.button; 

//img
document.getElementById('cta-img').src = siteContent.cta["img-src"];


//main content

let topContenth4 = document.querySelectorAll('.top-content h4'); 
let topContentp = document.querySelectorAll('.top-content p'); 
 

topContenth4[0].textContent = siteContent["main-content"]["features-h4"]; 
topContentp[0].textContent = siteContent["main-content"]["features-content"]; 


topContenth4[1].textContent = siteContent["main-content"]["about-h4"]; 
topContentp[1].textContent = siteContent["main-content"]["about-content"]; 


document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"]; 




let bottomContenth4 = document.querySelectorAll('.bottom-content h4'); 
let bottomContentp = document.querySelectorAll('.bottom-content p'); 



bottomContenth4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentp[0].textContent = siteContent["main-content"]["services-content"]; 



bottomContenth4[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentp[1].textContent = siteContent["main-content"]["product-content"]


bottomContenth4[2].textContent = siteContent["main-content"]["vision-h4"]
bottomContentp[2].textContent = siteContent["main-content"]["vision-content"]


//contact 

let contactH4 = document.querySelector('.contact'); 


contactH4.querySelector('h4').textContent = siteContent.contact["contact-h4"]; 

let paragraphs = contactH4.querySelectorAll('p'); 

paragraphs[0].textContent = siteContent.contact.address;
paragraphs[1].textContent = siteContent.contact.phone;
paragraphs[2].textContent = siteContent.contact.email;


//footer 

let footerParagraph = document.querySelector('footer p'); 

footerParagraph.textContent = siteContent.footer.copyright; 







