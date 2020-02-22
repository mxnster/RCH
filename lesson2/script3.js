const x = Number(prompt("Введите х: "));
const n = Number(prompt("Введите n: "));
let num = 1, factorial = 1;
for (let i = 1; i < n + 1; i++) {
    factorial *= i;
    num = num + (x ** i) / factorial;
}
alert(num);