document.addEventListener("DOMContentLoaded", () => {
  const btnAnswers = document.querySelectorAll(".faq-btn");
  //   const btnImg = document.querySelector("img");

  btnAnswers.forEach((btnAnswer) => {
    btnAnswer.addEventListener("click", toggleAnswer);
  });

  function toggleAnswer(e) {
    const btn = e.target;
    const faqContainer = btn.closest(".faq"); // Encuentra el contenedor de la pregunta y respuesta
    const btnImg = faqContainer.querySelector(".btn-img"); //Encuentra el contenedor de la imagen utilizando la clase de css
    const answer = faqContainer.querySelector(".faq-answer"); // Encuentra la respuesta dentro del contenedo con la clase de css

    answer.classList.toggle("display-none"); // Alterna la visibilidad de la respuesta

    // Alternar la imagen del botón

    if (btnImg) {
      //Verifica que el contenedor de la imagen tenga algo
      const currentSrc = btnImg.src;
      if (currentSrc.includes("icon-plus.svg")) {
        // Si el contenido del elemento es icon-plus.svg entondes lo cambia a icon-minus.svg y viceversa
        btnImg.src = currentSrc.replace("icon-plus.svg", "icon-minus.svg"); // Remplaza icon-plus.svg por icon-minus.svg
      } else {
        btnImg.src = currentSrc.replace("icon-minus.svg", "icon-plus.svg"); // Remplaza icon-minus.svg por icon-plus.svg
      }
    }
  }
});
