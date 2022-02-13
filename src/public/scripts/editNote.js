class UI{

    editNote(element){
        if(element.className.includes("btn-edit-note")){
            var editableTitle = element.parentElement.parentElement.parentElement.querySelector("#note-title").textContent;
            var editableDescription = element.parentElement.parentElement.querySelector("#note-description").textContent;
            var editableId = element.parentElement.parentElement.querySelector("#note-id").textContent;
        } else if(element.className.includes("img-edit-note")){
            var editableTitle = element.parentElement.parentElement.parentElement.parentElement.querySelector("#note-title").textContent;
            var editableDescription = element.parentElement.parentElement.parentElement.querySelector("#note-description").textContent;
            var editableId = element.parentElement.parentElement.parentElement.querySelector("#note-id").textContent;
        } else{
            return;
        }

        //console.log(editableId);
        document.getElementById('title-edit').setAttribute('value', editableTitle);
        document.getElementById('description-edit').value = editableDescription;
        document.getElementById('note-id-edit').setAttribute('value', editableId);

    }

}

document.getElementById('notes-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.editNote(e.target); 
    //console.log('hi how you doing');
});
