
var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("you must write something")
  }
  else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputBox.value = '';
  saveData();
};

document.getElementById("list-container").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
  else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
  saveData();
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();

