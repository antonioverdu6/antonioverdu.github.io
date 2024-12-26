function toggleExpand() {
    var box = document.querySelector('.expandable-box');
    box.classList.toggle('expanded');
    box.classList.toggle('collapsed');
  }

function copyEmail() {
    const email = "antoverdusal@gmail.com"; // Cambia este correo por el tuyo
    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    alert("Email copied to clipboard: " + email);
  }
  
function openLinkedIn() {
    const linkedinUrl = 'https://www.linkedin.com/in/antonio-verdu-salpico/'; // Cambia este enlace por tu perfil de LinkedIn
    window.open(linkedinUrl, "_blank");
  }

function openInstagram() {
    const instagramUrl = "https://www.instagram.com/antonioverduu"; // Cambia este enlace por tu perfil de Instagram
    window.open(instagramUrl, "_blank");
  }
  
document.addEventListener("DOMContentLoaded", () => {
    const projectBoxes = document.querySelectorAll(".project-box");
  
    const revealOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal"); // Añadir la clase para revelar la caja
            observer.unobserve(entry.target); // Dejar de observar la caja
          }
        });
      },
      {
        root: null, // Usa el viewport completo
        rootMargin: "0px", // Sin margen adicional
        threshold: 0.2, // Revelar cuando el 20% de la caja es visible
      }
    );
  
    projectBoxes.forEach((box) => revealOnScroll.observe(box));
  });
