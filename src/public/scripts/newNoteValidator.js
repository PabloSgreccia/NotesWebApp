document.getElementById('submit-note').addEventListener('click', function(e){
    const submitedField = document.querySelectorAll('.newNoteAttribute');
    submitedField.forEach(element => {
        if(element.value == ""){
            var alreadyValidated = document.querySelector('#empty-input');
            if(!alreadyValidated){
                const cardForm = document.getElementById('card-form');
                const element = document.createElement('div');
                element.id = "empty-input";
                element.className = "container mt-2";
                const alertText = document.createTextNode("You must fill all fields to create a new note.");
                element.appendChild(alertText);
                cardForm.appendChild(element);
            }
    
            e.preventDefault();
            return;
        }
    });
})

document.getElementById('submit-note-modal').addEventListener('click', function(e){
    const submitedField = document.querySelectorAll('.modifiedNoteAttribute');
    submitedField.forEach(element => {
        if(element.value == ""){
            var alreadyValidated = document.querySelector('#empty-input-modal');
            if(!alreadyValidated){
                const cardForm = document.getElementById('modal-body');
                const element = document.createElement('div');
                element.id = "empty-input-modal";
                element.className = "container mt-2";
                const alertText = document.createTextNode("You must fill all fields to create a new note.");
                element.appendChild(alertText);
                cardForm.appendChild(element);
            }

            e.preventDefault();            
            return;
        }
    });
})