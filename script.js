    // LAZY LOADING
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    });
    lazyImages.forEach(img => observer.observe(img));
});

    // ANIMACION DE SCROLL
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('visible');
        }
    });
});

    // REGRESAR BOTON
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

        // CONTROL DE WHATSAPP

        const whatsappButton = document.getElementById('whatsapp-button');

        whatsappButton.addEventListener('click', () => {
            const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappApiUrl, '_blank');
        });





                    // COMENTARIOS, IDEAS, CAMBIOS O SUGERENCIAS

    // fetch('https://api.openweathermap.org/data/2.5/weather?q=Veracruz&appid=40de3acb60836a48496b14ca8bfa6cd7')
// .then(response => response.json())
// .then(data => {
// const weatherElement = document.getElementById('weather');
// weatherElement.textContent = `La temperatura en Londres es ${data.main.temp}°C`;
// });


// const whatsappButton = document.getElementById('whatsappButton');
// const whatsappNumber = 'your_phone_number';
// const whatsappMessage = 'Hola, ¿en qué puedo ayudarte?';
// const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
// whatsappButton.addEventListener('click', () => {window.open(whatsappUrl, '_blank');});