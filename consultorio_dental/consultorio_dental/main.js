document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('citaForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

       
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.querySelector('.dentistas-carousel');
            const cards = document.querySelectorAll('.dentista-card');
            
           
            if (!carousel || cards.length === 0) {
                return;
            }
        
            let currentIndex = 0;
            const totalCards = cards.length;
        
          
            function getVisibleCards() {
                if (window.innerWidth >= 900) {
                    return 3;
                } else if (window.innerWidth >= 600) {
                    return 2;
                } else {
                    return 1;
                }
            }
        
            function showNextCard() {
                const visibleCards = getVisibleCards();
                
               
                if (totalCards > visibleCards) {
                    currentIndex = (currentIndex + 1) % (totalCards - visibleCards + 1);
                    const offset = -currentIndex * (100 / visibleCards);
                    carousel.style.transform = `translateX(${offset}%)`;
                }
            }
        
           
            setInterval(showNextCard, 3000);
        
            
            window.addEventListener('resize', () => {
                currentIndex = 0;
                carousel.style.transform = 'translateX(0%)';
            });
        });
        
        const especialidad = document.getElementById('especialidad').value;

        
        if (nombre === "" || telefono === "" || especialidad === "") {
            mensaje.textContent = "Error: Por favor, complete todos los campos requeridos.";
            mensaje.style.color = 'red';
            return;
        }

        
        if (telefono.length < 8) {
            mensaje.textContent = "Error: El número de teléfono parece incompleto.";
            mensaje.style.color = 'red';
            return;
        }

        
        mensaje.textContent = `¡Solicitud enviada! ${nombre}, con teléfono ${telefono}, confirmaremos su cita de ${especialidad} pronto.`;
        mensaje.style.color = 'green';
        
        
        form.reset();
    });
});