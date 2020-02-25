const name = ["Alex", "Max", "Braxton", "Mike", "Nikolas", "Roman", "Dmitriy", "Victor"];
const d1 = new Date('1980-01-01');
const d2 = new Date('1995-12-31');
const human = new Object();
let maxSalary = 0;
let age = 0;
let j = 0;
const n = Number(prompt("Введите кол-во людей: "));
for (let i = 0; i < n; i++) {
    human[i] = {},
        human[i].name = name[Math.floor(Math.random() * name.length)],
        human[i].salary = Math.round(Math.random() * 500),
        human[i].birthday = new Date(Math.round(Math.random() * (d2 - d1) + Number(d1))),
        human[i].age = (Date.now() - (human[i].birthday)) / (3600 * 24 * 365 * 1000)
}
for (let i = 0; i < n; i++) {
    if (human[i].salary > maxSalary) {
        maxSalary = human[i].salary;
        j = i;
    }
}
for (let i = 0; i < n; i++) {
    age += human[i].age;
}

console.log(human);
console.log("Самая высокая зарплата у " + human[j].name + " - " + maxSalary + "$");
console.log("Средний возраст: " + (age / n).toFixed(2));