const text = prompt("Vvdedite stroky: ");
const textSplit = text.split(" ");
const vowelsLower = "aeiouy";
const vowelsUpper = "AEIOUY";
let longestWord = "";
let vowelsCounter = 0;
for (let i = 0; i < textSplit.length; i++) {
    if (textSplit[i].length > longestWord.length) {
        longestWord = textSplit[i];
    }
}
for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < vowelsLower.length; j++) {
        if (text[i] == vowelsLower[j] || text[i] == vowelsUpper[j]) {
            vowelsCounter++;
        }
    }
}
alert("Самое длинное слово: " + longestWord);
alert("Количество гласных: " + vowelsCounter);