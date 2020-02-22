const a = Number(prompt("Введите сторону а: "));
const b = Number(prompt("Введите сторону b: "));
const c = Number(prompt("Введите сторону c: "));
const p = ((a + b + c) / 2);
alert("Площадь " + ((p * (p - a) * (p - b) * (p - c)) ** (1 / 2)).toFixed(2));
