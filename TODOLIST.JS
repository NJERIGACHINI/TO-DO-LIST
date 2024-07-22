document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector('#submit-button');
    const newTask = document.querySelector('#input-task');
    const form = document.querySelector('#task-form');
    const ul = document.querySelector('#task-list');

    submit.disabled = true;

    newTask.addEventListener('input', () => {
        submit.disabled = newTask.value.trim() === "";
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = newTask.value.trim();
        if (task === "") return;

        const li = document.createElement('li');
        li.textContent = task;
        ul.appendChild(li);

        newTask.value = "";
        submit.disabled = true;
        return false;
    });
});
