const textInput = document.getElementById("text-input");
const addTask = document.getElementById("add-task");
const table = document.getElementById("table");
const tableBody = table.querySelector("tbody");

let countNumber = 1;

addTask.addEventListener("click", function () {
  if (!textInput.value) {
    alert("Fill the input ");
  } else {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = countNumber++;
    const td2 = document.createElement("td");
    td2.innerText = textInput.value;
    const td3 = document.createElement("td");
    const actionButton = document.createElement("button");
    actionButton.innerText = "Delete";
    actionButton.setAttribute("class", "bg-red-500 text-white p-2");
    td3.appendChild(actionButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tableBody.appendChild(tr);
    actionButton.addEventListener("click", function () {
      tableBody.removeChild(tr);
    });
  }
});
