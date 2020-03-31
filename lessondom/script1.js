const n = Number(prompt('Enter n: ', 10));
const table = document.getElementById('table');
for (let i = 1; i < n + 1; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j < n + 1; j++) {
        const td = document.createElement('td');
        td.innerText = j * i;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}