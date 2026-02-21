const interviewList = [];
const rejectedList = [];
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const cardSection = document.getElementById("card-container");

const mainContainer = document.querySelector("main");
console.log(mainContainer);

function calculateCount() {
  totalCount.innerText = cardSection.children.length;
//   interviewCount.innerText = interviewList.children.length;
//   rejectedCount.innerText = rejectedList.children.length;
}
calculateCount();

