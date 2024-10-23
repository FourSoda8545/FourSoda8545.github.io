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


    // SCROLL DEL MENÚ
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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
        

    // CONTROL DEL CLIMA

    const apiKey = "40de3acb60836a48496b14ca8bfa6cd7";
    const city = "Veracruz,MX";
    
    // URL DE LA API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // DATOS DEL CLIMA
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la API');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // DATOS JSON
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const description = data.weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
    
            // SELECCIONA EL ELEMENTO DEL CLIMA
            const weatherElement = document.getElementById('weather');
            
            // INSETAR SOLO CUANDO SE OBTENGAN LOS DATOS CORRECTOS
            if (temperature && description) {
                weatherElement.style.display = 'block'; // MOSTRAR EL DIV
                weatherElement.innerHTML = `
                    <div style="display: flex; align-items: center;">
                    <img src="${icon}" alt="Weather icon" style="width: 50px; height: 50px;">
                    <p style="margin-left: 10px;">
                        ${temperature}°C - ${description} <br>
                        Sensación térmica: ${feelsLike}°C <br>
                        Humedad: ${humidity}% <br>
                        Viento: ${windSpeed} m/s
                    </p>
                </div>
                `;
            }
        })
        .catch(error => {
            console.error("Error al obtener los datos del clima: ", error);
            const weatherElement = document.getElementById('weather');
            weatherElement.style.display = 'none'; // OCULTA EL DIV SI HAY ALGUN ERROR Y MUESTRA UN MENSAJE
            weatherElement.innerHTML = `<p>No se pudo obtener el clima en este momento. Inténtalo más tarde.</p>`;
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