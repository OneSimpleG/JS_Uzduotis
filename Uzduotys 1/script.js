"use strict";
//  Uzd. 1
const paz = 8
switch (paz) {
    case 1||2||3:
        console.log('Neigiams pazimys');
        break
    case 4||5:
        console.log('Teigiamas, bet reikia pasistengti');
        break
    case 6||7:
        console.log('Vidutiniskai, ar tikrai tau to gana?');
        break
    case 8||9:
        console.log('Pagirk save!');
        break
    case paz == 10:
        console.log('Super!');
        break
    default:
        console.log('Pateikta neteisinga reiksme');
        break;
}
//  Uzd. 2
const men = 'liepa'
switch(men){
    case "gruodis":
    case "sausis":
    case "vasaris":
        console.log('Ziema');
        break
    case "kovas" :
    case "balandis":
    case "geguze":
        console.log('Pavasaris');
        break
    case "birzelis":
    case "liepa":
    case"rugpjutis":
        console.log('Vasara');
        break
    case "rugsejis":
    case "spalis":
    case "lapkritis":
        console.log('Ruduo');
        break
    default:
        console.log('Neteisingai ivestas menuo');
}
//Uzd. 3
const val = 7

if (6<= val && val < 11) console.log("Labas rytas");
else if (11<= val && val < 18) console.log("Laba diena");
else if (18<= val && val < 21) console.log("Labas vakaras");
else if (21<= val || val <= 24 && 0 <= val || val < 6) console.log("Labanakt");
//Uzd. 4
let date = new Date()
const day = date.getDay()
switch(day){
    case 1:
        console.log('Pirmadienis');
        break
    case 2:
        console.log("Antradienis");
        break
    case 3:
        console.log('Treciadienis');
        break
    case 4:
        console.log('Ketvirtadienis');
        break
    case 5:
        console.log('Penktadienis');
        break
    case 6:
        console.log('Sestadienis');
        break
    case 7:
        console.log('Sekmadienis');
        break
    default:
        console.log('Neteisingai ivesta diena');
}
console.log(date);
//Uzd. 5
const age = 18
const hasLicense = false
if (age>=18){
    if (hasLicense == true) console.log('Pilnametis turintis teises');
    else console.log("Pilnametis neturintis teises");
}
else console.log('Nepilnametis');
//Uzd. 6
const num = 0
if (num > 0) console.log('Skaicius teigiamas');
else if (num < 0) console.log('Skaicius neigiamas');
else console.log('Skaicius yra nulis');
//Uzd. 7
const login = true
const isAdmin = false
if (login==true){
    if (isAdmin==true) console.log('Prisijunge admin');
    else console.log('Prisijunge paprastas vartotojas');
}
else console.log('Niekas neprisijunges');
//Uzd. 8
const login2 = true
const user = 'simple'
const skelbimas = true
if (login2 == true){
    if (user == 'admin') console.log('Reikia patvirtinti skelbima');
    else if (user == 'simple')
        if (skelbimas == true) console.log('Galite sukurti arba istrinti skelbima');
        else console.log('Sveiki prisijunge');
}
else console.log('Reikia prisijungti');
//Uzd. 9
const number = 60
if (number>50)console.log(number)
else if (number<50) console.log('skaicius mazesnis uz 50');
else console.log('skaicius yra 50');
//Uzd. 10
let pirmasSkaicius = parseInt(prompt('Iveskite pirma skaiciu'))
let veiksmas = prompt('Iveskite veiksma (+,-,*,/)')
let antrasSkaicius = parseInt(prompt('Iveskite antra skaiciu'))
let suma = 0
if (veiksmas== '+'){
    suma = pirmasSkaicius + antrasSkaicius
    console.log(`${pirmasSkaicius} + ${antrasSkaicius} = ${suma}`);
}
else if (veiksmas == '-'){
    suma = pirmasSkaicius - antrasSkaicius
    console.log(`${pirmasSkaicius} - ${antrasSkaicius} = ${suma}`);
}
else if (veiksmas == '*'){
    suma = pirmasSkaicius * antrasSkaicius
    console.log(`${pirmasSkaicius} * ${antrasSkaicius} = ${suma}`);
}
else if (veiksmas == '/'){
    suma = pirmasSkaicius / antrasSkaicius
    console.log(`${pirmasSkaicius} / ${antrasSkaicius} = ${suma}`);
}
else console.log('Ivestas neteisingas skaicius');