const num = Number(prompt("Введите число: "));
let counter = 0;
for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        counter++;
    }
}
if (counter == 2) {
    alert("Простое");
}
else {
    alert("Составное");
}

