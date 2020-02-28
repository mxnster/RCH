const num1 = Number(prompt("Введите первое число: "));
const operator = prompt("Введите знак: ");
const num2 = Number(prompt("Введите второе число: "));
switch (operator) {
    case "+":
        alert(num1 + num2);
        break;
    case "-":
        alert(num1 - num2);
        break;
    case "*":
        alert(num1 * num2);
        break;
    case "/":
        alert(num1 / num2);
        break;
}
