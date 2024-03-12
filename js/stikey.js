const sectionTwo = document.getElementById("section_1");
const bottomDiv = document.getElementById("timer");
let offsettop = sectionTwo.offsetTop;
offsettop = offsettop + 20;
const timecardoff = "timer position-fixed bg-white d-none";
const timecardon = "timer position-fixed bg-white d-flex";
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= offsettop) {
    bottomDiv.className = timecardon;
  } else {
    bottomDiv.className = timecardoff;
  }
});
