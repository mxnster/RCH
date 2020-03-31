let id = 0;
let setId = () => ++id;

const people = [{
    id: setId(),
    name: "Alexander Kostylev",
    position: "Sniper",
    employedDate: new Date(2016, 10, 01),
    salary: 2000
},
{
    id: setId(),
    name: "Denis Sharipov",
    position: "Riffler",
    employedDate: new Date(2017, 10, 20),
    salary: 1500
},
{
    id: setId(),
    name: "Kirill Mikhailov",
    position: "Leader",
    employedDate: new Date(2019, 08, 25),
    salary: 1000
},
{
    id: setId(),
    name: "Egor Vasiliev",
    position: "Support",
    employedDate: new Date(2015, 06, 10),
    salary: 1200
},
{
    id: setId(),
    name: "Ilya Zalutskiy",
    position: "Lurker",
    employedDate: new Date(2020, 01, 01),
    salary: 700
}
];

function render(products) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    products.forEach(({ id, name, position, employedDate, salary }) => {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        tr.insertAdjacentHTML('beforeend',
            `
        <td>${id}</td>
        <td>${name}</td>
        <td>${position}</td>
        <td>${employedDate.toLocaleDateString()}</td>
        <td>${salary}</td>
        <td> <button class='button-remove' data-id=${id}>Delete</button> </td>
        `
        );
    })

    const buttons = document.getElementsByClassName('button-remove');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            for (let j = 0; j < people.length; j++) {
                if (people[j].id === Number(this.getAttribute("data-id"))) {
                    people.splice(j, 1);
                    this.parentNode.parentNode.remove();
                }
            }
        });
    }

};

const buttonSortBySalary = document.getElementById('button-sort-salary');
let sortSalaryCounter = 0;
buttonSortBySalary.addEventListener('click', function () {
    if (sortSalaryCounter === 0) {
        people.sort((a, b) => b.salary - a.salary);
        render(people);
        sortSalaryCounter = 1;
    } else {
        people.reverse();
        render(people);
        sortSalaryCounter = 0;
    }
});

const buttonSortByDate = document.getElementById('button-sort-date');
let sortDateCounter = 0;
buttonSortByDate.addEventListener('click', function () {
    if (sortDateCounter === 0) {
        people.sort((a, b) => b.employedDate - a.employedDate);
        render(people);
        sortDateCounter = 1;
    } else {
        people.reverse();
        render(people);
        sortDateCounter = 0;
    }
});

const buttonAdd = document.getElementById('button-add');
const inputName = document.getElementById('inputName');
const inputPosition = document.getElementById('inputPosition');
const inputEmployedDate = document.getElementById('inputEmployedDate')
const inputSalary = document.getElementById('inputSalary');
buttonAdd.addEventListener('click', function () {
    if (inputEmployedDate.value != "") {
        const createdPerson = {
            id: setId(),
            name: inputName.value,
            position: inputPosition.value,
            employedDate: new Date(inputEmployedDate.value),
            salary: inputSalary.value
        };
        people.push(createdPerson);
    } else {
        const createdPerson = {
            id: setId(),
            name: inputName.value,
            position: inputPosition.value,
            employedDate: new Date,
            salary: inputSalary.value
        };
        people.push(createdPerson);

    }
    const peopleCopy = [...people]
    render(peopleCopy);
    inputName.value = ""
    inputPosition.value = "";
    inputSalary.value = "";
    inputEmployedDate = "";
});

render(people);