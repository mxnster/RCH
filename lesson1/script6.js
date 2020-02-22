const year = Number(prompt("Введите номер года: "));
if (year % 4 == 0) {
    alert("Високосный");
}
else if (year % 100 == 0) {
    alert("Вискоксный");
}
else alert("Невисокосный");

