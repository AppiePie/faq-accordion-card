const questions = document.body.querySelectorAll(".question");
for (let question of questions) {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
  });
}
