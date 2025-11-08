// Seleciona o botão e o menu
const btnMenu = document.getElementById('btn-menu');
const navList = document.querySelector('.nav-list');

// Garante que os elementos existem antes de rodar
if (btnMenu && navList) {
  btnMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // abre/fecha o menu

    // Alterna o ícone (☰ ↔ ✖)
    if (navList.classList.contains('active')) {
      btnMenu.innerHTML = '&times;'; // X (fecha)
    } else {
      btnMenu.innerHTML = '&#9776;'; // ☰ (abre)
    }
  });
}



// Contador
const counters = document.querySelectorAll('.contador');
  const speed = 100; // menor = mais rápido

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 30); // anima cada contador separadamente
      } else {
        counter.innerText = target.toLocaleString() + '+';
      }
    };

    updateCount(); // inicia o contador
  });

  // slider 
  let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");

function mostrarSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  slides[slideIndex].classList.add("active");
}

function mudarSlide(n) {
  slideIndex += n;
  mostrarSlide(slideIndex);
}

// Inicializa o primeiro slide
mostrarSlide(slideIndex);

// Rolagem automática a cada 5 segundos
setInterval(() => {
  mudarSlide(1);
}, 5000);
  

  // faq
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove("active");
      });
    });
  });


 