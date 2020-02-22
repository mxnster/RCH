const text = prompt("Введите строку: ").toLowerCase();
const vowels = "aeiouy";
const consonants = "bcdfghjklmnpqrstvwxz";
let vowelsCounter = 0;
let consonantsCounter = 0;
let othersCounter = 0;
for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < consonants.length; j++) {
        if (text[i] == vowels[j]) {
            vowelsCounter++;
        }
        if (text[i] == consonants[j]) {
            consonantsCounter++;
        }
    }
}
othersCounter = text.length - vowelsCounter - consonantsCounter;
alert("Гласных " + vowelsCounter);
alert("Согласных " + consonantsCounter);
alert("Не букв: " + othersCounter);