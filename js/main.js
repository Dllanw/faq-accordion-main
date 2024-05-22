document.addEventListener("DOMContentLoaded", () => {
  const btnAnswer = document.getElementById("btn");
  const btnImg = document.getElementById("btn-img");
  const btnImgAlt = document.getElementById("btn-img-alt");
  const answer = document.getElementById("answer");
  let hidden = false;

  btnAnswer.addEventListener("click", hiddenAnswer);

  function hiddenAnswer() {
    answer.classList.toggle("display-none");
    hidden = !hidden;
  }

  function 
});
