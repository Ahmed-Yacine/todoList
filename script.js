

let btn = document.querySelector('.btn');

let Tasks = JSON.parse(localStorage.getItem('MyTasks')) ?? [];

function writeTask() {
    let Catrs = document.querySelector('.carts');

    Catrs.innerHTML = ' ';

    let index = 0;

    for (let task of Tasks) {
        let content = `
                    <div  class="one_cart ${task.isDone ? 'done' : ''}">
                        <div class="text">
                            <h3>${task.Task}</h3>
                            <div class="paragraphe">
                                <p>${task.Date}</p>
                                <i class="fa-regular fa-calendar-days"></i>
                            </div>
                        </div>
                        <div class="icons">
                            <button onclick="t3dil(${index})" class="btn_1"><i class="fa-solid fa-pen"></i></button>
                            <button onclick="chek(${index})" class="btn_2 ${task.isDone ? 'red' : ''}">${task.isDone ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-check"></i>'}</button>
                            <button onclick="delet(${index})" class="btn_3"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                        `;
        Catrs.innerHTML += content;
        localStorage.setItem('MyTasks', JSON.stringify(Tasks));
        index++;
    }
};

function getfromstoreg() {
    Tasks = JSON.parse(localStorage.getItem('MyTasks')) ?? [];
}

getfromstoreg();
writeTask();

btn.addEventListener('click', () => {
    let New_Task = prompt('Enter The Task');
    if (New_Task !== null) {
        let date = new Date();
        let now = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        let My_Task = {
            'Task': New_Task,
            'Date': now,
            'isDone': false
        }
        Tasks.push(My_Task);
        writeTask();
    }
});


function getfromstoreg() {
    Tasks = JSON.parse(localStorage.getItem('MyTasks')) ?? [];
};

getfromstoreg();

function t3dil(index) { 
    for (let i = 0; i < Tasks.length; i++) {
        if (i == index) {
            Tasks[i].Task = prompt('Enter The New Task', `${Tasks[i].Task}`);
        }
    }
    // Tasks = JSON.parse(localStorage.getItem('MyTasks')) || [];
    writeTask();
};

getfromstoreg(); // get the data from the local storage;

function chek(index) {
    for (let i = 0; i < Tasks.length; i++) {
        if (i == index) {
            Tasks[i].isDone = !Tasks[i].isDone;
        }
    }
    // Tasks = JSON.parse(localStorage.getItem('MyTasks')) || [];
    writeTask();
};

getfromstoreg();

function delet(index) {
    let conferm = confirm(`Are You Sure You Want To Delete ${Tasks[index].Task}?`);
    Tasks = JSON.parse(localStorage.getItem('MyTasks')) || [];
    if (conferm == false) {
        return;
    } else {
        if (Tasks.length == 1) {
            localStorage.clear();
            Tasks = [];
        }
    for (let i = 0; i < Tasks.length; i++) { 
        if (i == index) {
            Tasks.splice(i, 1);
        }
    }
        writeTask();
    }
};