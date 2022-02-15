document.getElementById('task-form').addEventListener('submit', function(e){
    const taskDescription =  document.getElementById('taskDescription').value;
    if(taskDescription === ''){
        e.preventDefault();
    } 
})