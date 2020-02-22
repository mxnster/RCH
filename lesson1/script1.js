const num1 = Number(prompt("Введите число 1: "));
const num2 = Number(prompt("Введите число 2: "));
const num3 = Number(prompt("Введите число 3: "));
const num4 = Number(prompt("Введите число 4: "));
const max1 = (num1 > num2) ? num1 : num2;
const max2 = (num3 > num4) ? num3 : num4;
alert(max1 > max2 ? max1 : max2);
alert(4 / (1 / num1 + 1 / num2 + 1 / num3 + 1 / num4));