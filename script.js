const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("Enter the Task");
  } else {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    var span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (c) {
    if (c.target.tagName === "LI") {
      c.target.classList.toggle("checked");
      saveData();
    }
    if (c.target.tagName === "SPAN") {
      c.target.parentElement.remove();
      saveData();
    }
  },
  false
);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
