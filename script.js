const interviewList = [];
const rejectedList = [];

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
  // interviewCount.innerText = interviewList.children.length;
  // rejectedCount.innerText = rejectedList.children.length;
}
calculateCount();

// toogling style
function toogleStyle(id) {
  allBtn.classList.add("btn-outline");
  interviewBtn.classList.add("btn-outline");
  rejectedBtn.classList.add("btn-outline");

  const seletedBtn = document.getElementById(id);
  seletedBtn.classList.remove("btn-outline");
}

// no job adding in filter button
allBtn.addEventListener("click", function () {
  noJob.classList.add("hidden");
  cardSection.classList.remove("hidden");
});
interviewBtn.addEventListener("click", function () {
  cardSection.classList.add("hidden");
  noJob.classList.remove("hidden");
});
rejectedBtn.addEventListener("click", function () {
  cardSection.classList.add("hidden");
  noJob.classList.remove("hidden");
});

// delete button functinality
for (let btn of deleteBtn) {
  btn.addEventListener("click", function () {
    const card = btn.parentElement;
    card.remove();
  });
}

// get card btn
