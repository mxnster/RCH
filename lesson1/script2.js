const a = Number(prompt("Введите сторону а: "));
const b = Number(prompt("Введите сторону b: "));
const c = Number(prompt("Введите сторону c: "));
(a + b > c) && (a + c > b) && (b + c > a) ? alert("Существует") : alert("Не существует");