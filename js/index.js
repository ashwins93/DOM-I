const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};
const contents = ['features', 'about', 'services', 'product', 'vision'];
// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let qs = document.querySelector.bind(document);
let qsa = document.querySelectorAll.bind(document);

// Nav
qsa('nav a').forEach((a, idx) => {
  a.textContent = siteContent.nav[`nav-item-${idx + 1}`];
});

// CTA
qs('.cta h1').textContent = siteContent.cta.h1;
qs('.cta button').textContent = siteContent.cta.button;
qs('#cta-img').src = siteContent.cta['img-src'];

// Main content
qsa('.text-content').forEach((txtContainer, idx) => {
  const section = contents[idx];
  txtContainer.querySelector('h4').textContent =
    siteContent['main-content'][`${section}-h4`];
  txtContainer.querySelector('p').textContent =
    siteContent['main-content'][`${section}-content`];
});
qs('#middle-img').src = siteContent['main-content']['middle-img-src'];

// Contact
qs('.contact h4').textContent = siteContent.contact['contact-h4'];
qsa('.contact p')[0].textContent = siteContent.contact.address;
qsa('.contact p')[1].textContent = siteContent.contact.phone;
qsa('.contact p')[2].textContent = siteContent.contact.email;

// Footer
qs('footer p').textContent = siteContent.footer.copyright;
