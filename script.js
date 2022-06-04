//Form button
const submitBtn = document.querySelector(".form-submit-btn");

const btnScrollTools = document.querySelector(".btn-tools");
const btnScrollProjects = document.querySelector(".btn-projects");
const btnScrollConnect = document.querySelector(".btn-connect");
const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");

btnScrollTools.addEventListener("click", function (e) {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

btnScrollProjects.addEventListener("click", function (e) {
  section2.scrollIntoView({ behavior: "smooth" });
});

btnScrollConnect.addEventListener("click", function (e) {
  section3.scrollIntoView({ behavior: "smooth" });
});
