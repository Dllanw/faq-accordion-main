document.addEventListener("DOMContentLoaded", () => {
  const btnAnswers = document.querySelectorAll(".faq-btn");

  btnAnswers.forEach((btnAnswer) => {
      btnAnswer.addEventListener("click", toggleAnswer);
  });

  function toggleAnswer(e) {
      const btn = e.target;
      const faqContainer = btn.closest(".faq"); // Encuentra el contenedor de la pregunta y respuesta
      const answer = faqContainer.querySelector(".faq-answer"); // Encuentra la respuesta dentro del contenedor

      answer.classList.toggle("display-none"); // Alterna la visibilidad de la respuesta

      // Alternar la imagen del botón
      const btnImg = btn.querySelector("img");
      if (btnImg) {
          const currentSrc = btnImg.src;
          console.log(currentSrc);
          if (currentSrc.includes("icon-plus.svg")) {
              btnImg.src = currentSrc.replace("icon-plus.svg", "icon-minus.svg");
          } else {
              btnImg.src = currentSrc.replace("icon-minus.svg", "icon-plus.svg");
          }
      }
  }
});
