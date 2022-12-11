window.addEventListener("load", () => {
    setTimeout(openPopup, 1000);
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const task = document.querySelector("#tasks");

    form.addEventListener("submit", (e) =>{
        e.preventDefault(); // to prevent refreshing page but the submit signal still there
        
        const new_task = input.value;
        if(!new_task){
            alert("Please fill in the tasks to submit");
            return;
        }

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('contents');

        const task_text_el = document.createElement('input');
        task_text_el.classList.add('text');
        task_text_el.type = 'text';
        task_text_el.value = new_task;
        task_text_el.setAttribute('readonly', 'readonly');

        task_content_el.appendChild(task_text_el);
        task_el.appendChild(task_content_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = "EDIT";
        task_actions_el.appendChild(task_edit_el);

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = "DELETE";
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        task.appendChild(task_el);

        input.value = '';

        task_edit_el.addEventListener('click', () =>{
            if(task_edit_el.innerText == 'EDIT'){
                task_text_el.removeAttribute('readonly');
                task_edit_el.innerText = 'SAVE';
                task_edit_el.focus();
            }
            else{
                task_edit_el.innerText = 'EDIT';
                task_text_el.setAttribute('readonly', 'readonly')
            }
        });

        task_delete_el.addEventListener('click', () =>{
            task.removeChild(task_el);
        });
    });
});

function openPopup(){
    let login = document.getElementById("login");
    login.classList.add("popup-open");
    const form = document.querySelector("#new-task-form");
    form.style.setProperty("pointer-events", "none");
}

function closePopup(){
    let login = document.getElementById("login");
    login.classList.remove("popup-open");
    const form = document.querySelector("#new-task-form");
    form.style.removeProperty("pointer-events");
}