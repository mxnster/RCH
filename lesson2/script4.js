const text = prompt("Введите строку со скобками: ");
let counter = 0;
for (let i = 0; i < text.length; i++) {
    if (text[i] == "(") {
        counter++;
    }
    if (text[i] == ")") {
        counter--;
    }
    if (counter < 0){
        break;
    }
}
if (counter == 0){
    alert("Верно");
}
else {
    alert("Неверно");
}