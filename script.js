let interviewList = [];
let rejectedList = [];
console.log(interviewList);

// containers
const cardSection = document.getElementById("card-container");
const mainContainer = document.querySelector("main");
const noJob = document.getElementById("no-job");

// countdown
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

// filter buttons
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");
// delete btn
const deleteBtn = document.getElementsByClassName("delete-btn");

function calculateCount() {
  totalCount.innerText = cardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// toogling color style
function toogleStyle(id) {
  allBtn.classList.add("btn-outline");
  interviewBtn.classList.add("btn-outline");
  rejectedBtn.classList.add("btn-outline");

  const seletedBtn = document.getElementById(id);
  seletedBtn.classList.remove("btn-outline");
}

// delete button functinality
cardSection.addEventListener("click", function (e) {
  if (e.target.closest(".delete-btn")) {
    const card = e.target.closest(".card");

    interviewList = interviewList.filter((c) => c !== card);
    rejectedList = rejectedList.filter((c) => c !== card);

    card.remove();

    calculateCount();
  }
});
