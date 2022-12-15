/*
    Assign IDs to a variable
 */
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
/*
Assign buttons to a variable
 */
let but = document.getElementById('but');
let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');
let but6 = document.getElementById('but6');
/*
Assign input to a variable
 */
let input2 = document.createElement('input');

/*
Creating a function on a button click and adding the values with a ParseFloat,
 to finally display the addtions in an innerHTML
*/

but3.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat((shop.value) * 4) -
        parseFloat((transport.value) * 4) - parseFloat((activities.value) / 12) -
        parseFloat((trip.value) * 4) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value);
    /*
    Conditon :
    If innerHTML is positive do:
    If it is positive by more than 200€ do:
    If it is negative do :
    If it is negative by more than 200€ do:
     */
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
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous !");
    }
})
/*
Creating a function with a button click and adding values with a ParseFloat,
  to finally display the addtions in an innerHTML, the same as on the first
  addEventListener except that the value of the input add
*/

but4.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat((shop.value) * 4) -
        parseFloat((transport.value) * 4) - parseFloat((activities.value) / 12) -
        parseFloat((trip.value) * 4) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) - parseFloat(input.value);
    /*
    Conditon :
    If innerHTML is positive do:
    If it is positive by more than 200€ do:
    If it is negative do :
    If it is negative by more than 200€ do:
     */
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
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous !");
    }
})
/*
Creating a function with a button click and adding values with a ParseFloat,
 to finally display the addtions in an innerHTML, the same as on the first
 addEventListener except that the value of the input add
 */
but5.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat((shop.value) * 4) -
        parseFloat((transport.value) * 4) - parseFloat((activities.value) / 12) -
        parseFloat((trip.value) * 4) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) + parseFloat(input2.value);
    /*
    Conditon :
    If innerHTML is positive do:
    If it is positive by more than 200€ do:
    If it is negative do :
    If it is negative by more than 200€ do:
     */
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
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous !");
    }
})
/*
Creating a function with a button click and adding values with a ParseFloat,
  to finally display the addtions in an innerHTML, the same as on the first
  addEventListener except that we remove and add the value of the input add
 */
but6.addEventListener('click', () => {
    total.innerHTML = parseFloat(home.value) - parseFloat(water.value) - parseFloat(phone.value) -
        parseFloat(assuH.value) - parseFloat(assuV.value) - parseFloat(mutual.value) - parseFloat(credits.value) -
        parseFloat(duty.value) - parseFloat(tax.value) - parseFloat(taxL.value) - parseFloat((shop.value) * 4) -
        parseFloat((transport.value) * 4) - parseFloat((activities.value) / 12) -
        parseFloat((trip.value) * 4) - parseFloat(other.value) +
        parseFloat(salary.value) + parseFloat(help.value) + parseFloat(other2.value) +
        parseFloat(rentes.value) + parseFloat(savings.value) - parseFloat(input.value) + parseFloat(input2.value);
    /*
    Conditon :
    If innerHTML is positive do:
    If it is positive by more than 200€ do:
    If it is negative do :
    If it is negative by more than 200€ do:
     */
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
        alert('Vous avez moins de 200€, ' + total.innerHTML + "€, bougez-vous !");
    }
})
/*
Activate the buttons for the results and the reset of the boxes
 */
but1.addEventListener('click', () => {
    expenditures.append(input);
})

but2.addEventListener('click', () => {
    expenditures.append(input2);
})

but.addEventListener('click', () => {
    window.location.reload();
})
