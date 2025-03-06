//todoList
let enterInput = document.getElementById('enter')
let addButton = document.getElementById('add')
let taskList = document.getElementById('addList')

addButton.addEventListener('click', function () {
    if (enterInput.value.trim() !== "") {

        let li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = enterInput.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Sil";
        deleteButton.className = "deleteButton";

        deleteButton.addEventListener('click', function () {
            li.remove(); 
        });

        li.appendChild(span);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        enterInput.value = "";
    }
});
