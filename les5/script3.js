const url = window.location.hostname;
const exp = /\w*\.*\w+(\.+\w+)/;
let tag = url.match(exp);
alert(tag[1]);