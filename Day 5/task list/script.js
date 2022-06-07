
class Task{
    constructor(task){
        this.title = task;
    }

    static fromJSON(json) {
        return new Task(
            json.title,
        );
    }
}


class UserInterface{
    constructor(){
        this.form = document.getElementById('form');
        this.task = document.getElementById('title-input');
        this.tableBody = document.getElementById('table-body');

        this.form.addEventListener('submit', (e) => {
            this.onFormSubmitted(e);
        })

        this.tasks = [];

        this.loadTasksFromLocalStorage();
        this.renderTableBody();
    }

    onFormSubmitted(e){
        e.preventDefault();

        const task = new Task(
            this.task.value,
        );

        this.tasks.push(task);
        this.saveTasksToLocalStorage();
        this.renderTableBody();

        this.task.value = '';
    }

    renderTableBody(){
        this.tableBody.innerHTML = '';

        for(let i = 0; i<this.tasks.length;i++){
            const task = this.tasks[i];

            const tableRow = this.generateTaskRow(task);
            this.tableBody.appendChild(tableRow);
        }
    }

    generateTaskRow(task){
        const tr = document.createElement('tr');

        const cellTask = document.createElement('td');
        const cellStatus = document.createElement('td');
        const cellActions = document.createElement('td');

        cellTask.innerHTML = task.title;

        //generate remove task button
        const removeButton = this.generateRemoveButton(task);
        cellActions.appendChild(removeButton);

        //generate check the task for status button
        const checkTask = this.generateCheckButton(task);
        cellStatus.appendChild(checkTask);

        tr.appendChild(cellTask);
        tr.appendChild(cellStatus);
        tr.appendChild(cellActions);

        //return the row 
        return tr;
    }

    generateRemoveButton(task){
        const button = document.createElement('button');

        button.innerHTML = '🗑';
        button.setAttribute('class', 'btn btn-sm')
        button.addEventListener('click', () =>{
            this.onRemoveTaskClicked(task);
        })

        return button
    }

    onRemoveTaskClicked(task){
        this.tasks = this.tasks.filter((b) =>{
            return task.title !== b.title;
        })

        this.saveTasksToLocalStorage();
        this.renderTableBody();
    }

    
    generateCheckButton(){
        const check = document.createElement('input');

        check.setAttribute('class', 'form-check-input');
        check.setAttribute('type', 'checkbox');

        check.addEventListener('change', ()=>{
            if(check.checked){
                cellTask.value.classList.add ('text-decoration-line-through');
            }  
            else{
                cellTask.value.classList.remove('text-decoration-line-through')
            }  
            this.saveTasksToLocalStorage();
        })

        return check;
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }
    
    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map(b => Task.fromJSON(b));
        }
}
}

new UserInterface()
