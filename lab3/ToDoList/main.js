document.querySelector('.button').addEventListener('click', () => {
    addToDo();
})
document.querySelector('.input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addToDo();
    }
})





function addToDo() {
    const inputText = document.querySelector('.input').value;
    if (inputText != "") {

        var deleteButton = document.createElement('button');
        deleteButton.className = "deleteButton";
        deleteButton.innerText = "📛Delete";

        var inputElement = document.createElement('p');

        inputElement.innerText = inputText;
        var conteiner = document.querySelector('.tasks');
        var doneButton = document.createElement('input');
        doneButton.className = "doneButtonElement";
        doneButton.type = "checkbox";

        var emoji = document.createElement('p');
        emoji.innerText = "🕒";
        var tasksDiv = document.createElement('div');
        tasksDiv.className = "divTask";
        tasksDiv.appendChild(emoji);
        tasksDiv.appendChild(doneButton);
        tasksDiv.appendChild(inputElement);
        tasksDiv.appendChild(deleteButton);
        deleteButton.addEventListener("click", function() {
            if (doneButton.checked) {
                this.parentElement.remove();

            }
        });

        doneButton.addEventListener('click', () => {
            inputElement.style.textDecoration =
                doneButton.checked ? "line-through" : "none";
        })



        conteiner.appendChild(tasksDiv);
        document.querySelector('.input').value = "";

    }
}