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

// calculation of jobs
function calculateCount(activeTab = "all") {
  const total = cardSection.children.length;
  const interviewTotal = interviewList.length;
  const rejectedTotal = rejectedList.length;

  totalCount.innerText = total;
  interviewCount.innerText = interviewTotal;
  rejectedCount.innerText = rejectedTotal;

  const jobCountText = document.getElementById("job-count");

  if (activeTab === "all") {
    jobCountText.innerText = total;
  } else if (activeTab === "interview") {
    jobCountText.innerText = `${interviewTotal} of ${total}`;
  } else if (activeTab === "rejected") {
    jobCountText.innerText = `${rejectedTotal} of ${total}`;
  }
}

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

//creating array and badge change
cardSection.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (!card) return;
  const badge = card.querySelector(".badge");
  // Interview Btn Click
  if (e.target.classList.contains("iv-btn")) {
    if (!interviewList.includes(card)) {
      interviewList.push(card);
    }
    // remove from rejected list
    rejectedList = rejectedList.filter((c) => c !== card);
    badge.innerText = "Interview";
    badge.className = "badge badge-success w-fit";
    calculateCount();
  }

  // Rejected Click
  if (e.target.classList.contains("rj-btn")) {
    if (!rejectedList.includes(card)) {
      rejectedList.push(card);
    }

    // remove from interview list
    interviewList = interviewList.filter((c) => c !== card);

    badge.innerText = "REJECTED";
    badge.className = "badge badge-error w-fit";

    calculateCount();
  }
});

// Filtering Buttons toggleing
allBtn.addEventListener("click", function () {
  toogleStyle("all-btn");

  for (let card of cardSection.children) {
    card.classList.remove("hidden");
  }
  noJob.classList.add("hidden");
  calculateCount("all");
});
// Interview Buttons
interviewBtn.addEventListener("click", function () {
  toogleStyle("interview-btn");

  let hasJob = false;

  for (let card of cardSection.children) {
    if (interviewList.includes(card)) {
      card.classList.remove("hidden");
      hasJob = true;
    } else {
      card.classList.add("hidden");
    }
  }
  if (!hasJob) {
    noJob.classList.remove("hidden");
  } else {
    noJob.classList.add("hidden");
  }

  calculateCount("interview");
});
// Rejected Button
rejectedBtn.addEventListener("click", function () {
  toogleStyle("rejected-btn");

  let hasJob = false;

  for (let card of cardSection.children) {
    if (rejectedList.includes(card)) {
      card.classList.remove("hidden");
      hasJob = true;
    } else {
      card.classList.add("hidden");
    }
  }
  if (!hasJob) {
    noJob.classList.remove("hidden");
  } else {
    noJob.classList.add("hidden");
  }
  calculateCount("rejected");
});
