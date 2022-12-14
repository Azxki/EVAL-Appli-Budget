import {
    but, home, water, phone, assuH, assuV, mutual, credits, duty, tax, taxL, shop, transport,
    activities, trip, other, but2, salary, help, savings, other2, but3, rentes, but1
} from './export.js';

let total = document.getElementById('total2');
let input = document.createElement('input');
let expenditures = document.getElementById('expenditure');

but3.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat(shop.value) -
        parseFloat(transport.value) - parseFloat(activities.value) - parseFloat(trip.value) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value);
})

but.addEventListener('click', () => {
    window.location.reload();
})

for (let i = 0; i < expenditures; i++) {
    but1.addEventListener('click', () => {
        expenditures.appendChild(input);
    })
}
