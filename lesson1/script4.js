const byte = Number(prompt("Введите количество байт: "));
if (byte >= 0 && byte < 1024) {
    alert(byte + " байт");
}
if (byte >= 1024 && byte < 1048576) {
    alert((byte / 1024).toFixed(2) + " Кб");
}
if (byte >= 1048576 && byte < 1073741824) {
    alert((byte / 1048576).toFixed(2) + " Мб");
}
if (byte >= 1073741824) {
    alert((byte / 1073741824).toFixed(2) + " Гб");
}