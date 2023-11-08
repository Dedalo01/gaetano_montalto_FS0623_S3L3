// Funzioni varie

function addTask(e) {
  e.preventDefault();

  const inputText = document.querySelector("#nomeTask").value;
  const ul = document.querySelector("#listaTask");
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.setAttribute("class", "li-task");

  deleteBtn.setAttribute("class", "delete-btn");

  li.textContent = inputText.trim();
  deleteBtn.innerHTML = "<ion-icon name='trash'></ion-icon>";

  li.appendChild(deleteBtn);
  ul.appendChild(li);

  const arrLi = document.querySelectorAll("li");

  for (let i = 0; i < arrLi.length; i++) {
    arrLi[i].setAttribute("value", `${i}`);
    arrLi[i].setAttribute("onclick", `completeTask(${i})`);
    deleteBtn.setAttribute("onclick", `deleteTask(${i})`);
  }
}

function deleteTask(index) {
  const arrLi = document.querySelectorAll("li");
  arrLi[parseInt(index)].remove();
  console.log(arrLi);
}

function completeTask(index) {
  const arrLi = document.querySelectorAll("li");
  arrLi[parseInt(index)].style.textDecoration = "line-through";
}

// Variabili e costanti

const btn = document.querySelector("#btn");

// Event Listeners
btn.addEventListener("click", addTask);
