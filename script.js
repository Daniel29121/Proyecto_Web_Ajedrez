document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado. Gracias por contactarnos.');
        form.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.getElementById('events-container');

    const events = [
        {
            title: "2da. Edición del Campeonato Nacional e Internacional de Ajedrez “Aguascalientes 2024”",
            date: "6 de agosto - 11 de agosto, 2024",
            location: "Centro de Convenciones y Exposiciones TRES Centurias, Aguascalientes, México",
            description: "Este evento reúne a los mejores ajedrecistas nacionales e internacionales en diversas categorías.",
            link: "https://fenamac.com.mx/event/2da-edicion-del-campeonato-nacional-e-internacional-de-ajedrez-aguascalientes-2024/",
            image: "C:/Users/lalod/OneDrive/Imágenes/438100425_444314024917867_311531777695363315_n.jpg"
        },
        {
            title: "Campeonato Nacional Juvenil Sub 20, Absoluto y Femenil “Pachuca 2024”",
            date: "17 de mayo - 19 de mayo, 2024",
            location: "Pachuca, Hidalgo, México",
            description: "Competencia que busca destacar a los mejores talentos juveniles en el ajedrez mexicano.",
            link: "https://fenamac.com.mx/events/",
            image: "C:/Users/lalod/OneDrive/Imágenes/438100425_444314024917867_311531777695363315_n.jpg"
        },
        {
            title: "XXXVIII Campeonato Nacional e Internacional de Ajedrez “Copa Benito Juárez”",
            date: "14 de junio - 16 de junio, 2024",
            location: "Complejo Deportivo Hermanos Flores Magón, Oaxaca, México",
            description: "Torneo tradicional que reúne a ajedrecistas de todas las edades y niveles.",
            link: "https://fenamac.com.mx/events/",
            image: "C:/Users/lalod/OneDrive/Imágenes/438100425_444314024917867_311531777695363315_n.jpg"
        },
        {
            title: "LXIX Campeonato Nacional e Internacional Abierto Mexicano de Ajedrez “Querétaro 2024”",
            date: "26 de marzo - 31 de marzo, 2024",
            location: "Hotel Misión Grand Juriquilla, Querétaro, México",
            description: "Evento válido para Rating FIDE, con participación de ajedrecistas nacionales e internacionales.",
            link: "https://mexicochess.com/torneos/lxix-campeonato-nacional-e-internacional-abierto-mexicano-de-ajedrez-queretaro-2024/",
            image: "C:/Users/lalod/OneDrive/Imágenes/438100425_444314024917867_311531777695363315_n.jpg"
        },
        {
            title: "Festival Panamericano de Ajedrez Juvenil Abierto 2023",
            date: "11 de agosto - 18 de agosto, 2023",
            location: "Chicago, Estados Unidos",
            description: "Competencia internacional que sirve como preámbulo para el mundial de ajedrez juvenil.",
            link: "https://www.uag.mx/es/mediahub/alondra-bagatella-se-alista-para-los-panamericanos-de-ajedrez/2023-07",
            image: "C:/Users/lalod/OneDrive/Imágenes/438100425_444314024917867_311531777695363315_n.jpg"
        },
        {
            title: "Copa Independencia 2024",
            date: "11 de septiembre - 16 de septiembre, 2024",
            location: "Hotel del Prado, Ciudad de México, México",
            description: "Torneo internacional y nacional abierto con categorías válidas para Rating FIDE y títulos de Maestro.",
            link: "http://www.promotoresdeajedrez.com/torneos/copaindependencia2024/ver_convocatoria.php",
            image: "images/event6.jpg"
        }
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-content">
                <h2>${event.title}</h2>
                <p><strong>Fecha:</strong> ${event.date}</p>
                <p><strong>Lugar:</strong> ${event.location}</p>
                <p><strong>Descripción:</strong> ${event.description}</p>
                <a href="${event.link}" target="_blank">Más información</a>
            </div>
        `;
        eventsContainer.appendChild(eventElement);
    });
});
