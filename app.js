let home = document.getElementById('loyer');
let water = document.getElementById('eau');
let phone = document.getElementById('phone');
let assuH = document.getElementById('assu_h');
let assuV = document.getElementById('assu_v');
let mutual = document.getElementById('mutuelle');
let credits = document.getElementById('credits');
let duty = document.getElementById('garde');
let tax = document.getElementById('impot_r');
let taxL = document.getElementById('impot_l');
let shop = document.getElementById('courses');
let transport = document.getElementById('transport');
let activities = document.getElementById('activities');
let trip = document.getElementById('sortie');
let other = document.getElementById('other');
let salary = document.getElementById('salaire');
let help = document.getElementById('help');
let rentes = document.getElementById('rentes');
let other2 = document.getElementById('other2');
let savings = document.getElementById('savings2');
let total = document.getElementById('total2');
let input = document.createElement('input');
let expenditures = document.getElementById('expenditure');

let but = document.getElementById('but');
let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');
let but6 = document.getElementById('but6');

let input2 = document.createElement('input');

but3.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat(shop.value) -
        parseFloat(transport.value) - parseFloat(activities.value) - parseFloat(trip.value) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value);

    if (total.innerHTML > 0) {
        alert('BUDGET POSITIF, il vous reste ' + total.innerHTML + "€");
    }

    if (total.innerHTML > 200) {
        alert('Vous avez plus de 200€, il vous reste' + total.innerHTML + "€, BasicFit vous attend");
    }

    if (total.innerHTML < 0) {
        alert('BUDGET NEGATIF, vous êtes en négatif de ' + total.innerHTML + "€");
    }

    if (total.innerHTML < 200) {
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous le cul !");
    }
})


but4.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat(shop.value) -
        parseFloat(transport.value) - parseFloat(activities.value) - parseFloat(trip.value) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) - parseFloat(input.value);

    if (total.innerHTML > 0) {
        alert('BUDGET POSITIF, il vous reste ' + total.innerHTML + "€");
    }

    if (total.innerHTML > 200) {
        alert('Vous avez plus de 200€, il vous reste' + total.innerHTML + "€, BasicFit vous attend");
    }

    if (total.innerHTML < 0) {
        alert('BUDGET NEGATIF, vous êtes en négatif de ' + total.innerHTML + "€");
    }

    if (total.innerHTML < 200) {
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous le cul !");
    }
})

but5.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat(shop.value) -
        parseFloat(transport.value) - parseFloat(activities.value) - parseFloat(trip.value) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) + parseFloat(input2.value);

    if (total.innerHTML > 0) {
        alert('BUDGET POSITIF, il vous reste ' + total.innerHTML + "€");
    }

    if (total.innerHTML > 200) {
        alert('Vous avez plus de 200€, il vous reste' + total.innerHTML + "€, BasicFit vous attend");
    }

    if (total.innerHTML < 0) {
        alert('BUDGET NEGATIF, vous êtes en négatif de ' + total.innerHTML + "€");
    }

    if (total.innerHTML < 200) {
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous le cul !");
    }
})

but6.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat(shop.value) -
        parseFloat(transport.value) - parseFloat(activities.value) - parseFloat(trip.value) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) - parseFloat(input.value) + parseFloat(input2.value);

    if (total.innerHTML > 0) {
        alert('BUDGET POSITIF, il vous reste ' + total.innerHTML + "€");
    }

    if (total.innerHTML > 200) {
        alert('Vous avez plus de 200€, il vous reste' + total.innerHTML + "€, BasicFit vous attend");
    }

    if (total.innerHTML < 0) {
        alert('BUDGET NEGATIF, vous êtes en négatif de ' + total.innerHTML + "€");
    }

    if (total.innerHTML < 200) {
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous le cul !");
    }
})

but1.addEventListener('click', () => {
    expenditures.append(input);
})

but2.addEventListener('click', () => {
    expenditures.append(input2);
})

but.addEventListener('click', () => {
    window.location.reload();
})
