const text = prompt("Введите строку: ");
let newText = text[0];
for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
        newText += text[i + 1];
    }
}
alert(newText);