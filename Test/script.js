// Ajouter une tache
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value));

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        var editButton = document.createElement('button');
        editButton.textContent = 'Editer';
        editButton.addEventListener('click', function() {
            editTask(li);
        });
        li.appendChild(editButton);

        taskList.appendChild(li);
        taskInput.value = '';

        updateTaskCount();
        addDeleteButtonStyle();
    }
}

// Ajouter une tâche en appuyant sur la touche entrée
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Supprimer toutes les tâches
function clearList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
}

// Sauvegarder la liste dans le localStorage
function saveList() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.getElementsByTagName('li');

    var tasksArray = [];
    for (var i = 0; i < tasks.length; i++) {
        var taskText = document.createElement('li');
        taskText.appendChild(document.createTextNode(tasks[i].firstChild.textContent));
        tasksArray.push(taskText.textContent);
    }
    console.log(tasksArray);

    localStorage.setItem('tasks', JSON.stringify(tasksArray));
}


// Charger la liste au chargement de la page
function loadList() {
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(tasks[i]));
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        var editButton = document.createElement('button');
        editButton.textContent = 'Editer';
        editButton.addEventListener('click', function() {
            editTask(li);
        });
        li.appendChild(editButton);
        taskList.appendChild(li);
        updateTaskCount();
    }
}

// Function qui permet de compter le nombre de tâches
function updateTaskCount() {
    var taskList = document.getElementById('taskList');
    var taskCount = taskList.getElementsByTagName('li').length;
    document.getElementById('taskCount').textContent = taskCount + ' tâches';
}

// Charger la liste au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    loadList();
    addDeleteButtonStyle();
});



// Récupère les btn et leur affecte un style
function addDeleteButtonStyle() {
    var taskList = document.getElementById('taskList');
    var allBTN = taskList.getElementsByTagName('button');
    var deleteButtons = Array.from(allBTN).filter(button => button.textContent === 'Supprimer');

    for (var i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].classList.add('btn','btn-danger');
    }

    var editButton = Array.from(allBTN).filter(button => button.textContent === 'Editer');
    for (var i = 0; i < editButton.length; i++) {
        editButton[i].classList.add('btn','btn-warning');
    }

}

//  Faire en sorte de pouvoir supprimer une tache de la liste
function deleteTask() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.getElementsByTagName('li');

    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {
            this.parentNode.removeChild(this);
        }
    }
}

function editTask(task) {
    var newName = prompt("Entrez le nouveau nom de la tâche", task.firstChild.textContent);
    if (newName !== null) {
        task.firstChild.textContent = newName;
    }
}