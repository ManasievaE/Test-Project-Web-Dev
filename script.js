// PURCHASE

const buyNowButtons = document.querySelectorAll(".btn");

buyNowButtons.forEach((button) => {
  const sectionId = button.dataset.section;
  const section = document.getElementById(sectionId);

  button.addEventListener("click", () => {
    section.scrollIntoView();
  });
});

//FAQ

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const content = question.querySelector(".content");
  const answer = question.querySelector(".awnser");
  const icon = question.querySelector(".icon");

  content.addEventListener("click", () => {
    // Close all other questions
    questions.forEach((q) => {
      if (q !== question) {
        const otherContent = q.querySelector(".content");
        const otherAnswer = q.querySelector(".awnser");
        const otherIcon = q.querySelector(".icon");
        otherContent.classList.remove("open");
        otherContent.classList.add("closed");
        otherAnswer.style.display = "none";
        otherIcon.classList.remove("open");
      }
    });

    // Toggle Questions
    if (content.classList.contains("closed")) {
      content.classList.remove("closed");
      content.classList.add("open");
      answer.style.display = "block";
      icon.classList.add("open");
    } else {
      content.classList.remove("open");
      content.classList.add("closed");
      answer.style.display = "none";
      icon.classList.remove("open");
    }
  });
});
