const str = prompt("Enter phone number: ");
const exp = /[+][1][-]?\d{3}[-]?\d{3}[-]?\d{4}/g;
console.log(str.match(exp));