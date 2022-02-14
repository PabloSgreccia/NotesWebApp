// CLASSES
// CLASSES
// CLASSES

// class Task{
//     constructor(description, time){
//         if(time == null){
//             var today = new Date();
//             if(today.getMinutes() < 10){
//                 var minutes = '0' + today.getMinutes()
//             } else{
//                 var minutes = today.getMinutes()
//             }
//             var time = today.getDate() + "/" + (today.getMonth() + 1)+ " - " +  today.getHours() + ":" + minutes;
//         }

//         this.description = description;
//         this.time = time;
//     }
// }

// class UI{
    // addTask(task){
    //     const taskList = document.getElementById('tasks-list');
    //     const element = document.createElement('div');
    //     element.className = "draggable";
    //     element.draggable = true;
    //     element.innerHTML = `
    //         <div class="card mb-2">
    //             <div class="card-body">
    //                 <div class="row align-items-center">
    //                     <div class="col-8">
    //                         <span class="taskDescription">${task.description}</span>                    
    //                     </div>
    //                     <div class="col-3 text-center">
    //                         <span class="taskTime">${task.time}</span>
    //                     </div>
    //                     <div class="col-1 text-center">
    //                         <a href="#" class="btn btn-danger" name="deleteA">
    //                             <i class="bi bi-trash" name="deleteI"></i>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    //     taskList.appendChild(element);
        
    //     draggableFunctions();
    // }

    // resetForm(){
    //     document.getElementById('task-form').reset();
    // }

    // deleteTask(element){

    //     console.log('el nombre es: ' + element.className);

    //     if(element.name === 'deleteA'){
    //         console.log(element.parentElement.parentElement.querySelector(".taskDescription").textContent);
    //         const descriptionValue = element.parentElement.parentElement.querySelector(".taskDescription").textContent;
    //         localStorage.removeItem(descriptionValue);
    //         element.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    //         this.showToastr("Task deleted successfully", "success");
    //     } else if (element.className === 'bi bi-trash'){
    //         console.log(element.parentElement.parentElement.parentElement.querySelector(".taskDescription").textContent);
    //         const descriptionValue = element.parentElement.parentElement.parentElement.querySelector(".taskDescription").textContent;
    //         localStorage.removeItem(descriptionValue);
    //         element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    //         this.showToastr("Task deleted successfully", "success");
    //     } 
        
    //     const tasksList = document.querySelectorAll('.draggable');
    //     if(tasksList.length == 0){
    //         document.getElementById('taskListHeader').style.display = "none";
    //     }
        
    // }

//     showToastr(message, cssClass){
//         toastr[cssClass](message);
//     }

// }


// DRAGGABLE functions
// DRAGGABLE functions
// DRAGGABLE functions
function draggableFunctions() {
        
    const draggables = document.querySelectorAll('.draggable');
    const containers = document.querySelectorAll('#tasks-list');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        })

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    })

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging');
            if (afterElement == null){
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        })
    })

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if((offset < 0) && (offset > closest.offset)){
                return {offset: offset, element: child}
            } else {
                return closest;
            }

        }, {offset: Number.NEGATIVE_INFINITY}).element
    }
}

draggableFunctions();

// DOM Events
// DOM Events
// DOM Events

document.getElementById('task-form').addEventListener('submit', function(e){
    
    // const tasksList = document.querySelectorAll('.draggable');
    // if(tasksList.length == 0){
    //     document.getElementById('taskListHeader').style.display = "flex";
    // }

    const taskDescription =  document.getElementById('taskDescription').value;
    // const task = new Task(taskDescription);
    
    // const ui = new UI();

    if(taskDescription === ''){
        // ui.showToastr("Please add a task description", "warning");
        e.preventDefault();
        //return;
    } 

    // ui.addTask(task);
    // ui.resetForm();
    // ui.showToastr("Task added successfully", "success");

    // localStorage.setItem(task.description, task.time)
    // console.log(localStorage);

    //e.preventDefault();
})

// document.getElementById('tasks-list').addEventListener('click', function(e){
//     const ui = new UI();
//     ui.deleteTask(e.target);
// })

// use localStorage to load saved data
// for(var i=0 ; i<localStorage.length ; i++){
//     const key = localStorage.key(i);
//     const time = localStorage.getItem(key);

//     const task = new Task(key, time);
//     const ui = new UI();
//     ui.addTask(task);

//     if(localStorage.length > 0){
//         document.getElementById('taskListHeader').style.display = "flex";
//     }
// }