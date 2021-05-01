var lacznie = 0;

var egzaminy = 0;
var egzaminyPolski = 0;
var egzaminyMatematyka = 0;
var egzaminyJezyki = 0;

var oceny = 0;
var ocenyPolski = 0;
var ocenyMatematyka = 0;
var ocenyPrzedmiot1 = 0;
var ocenyPrzedmiot2 = 0;

var swiadectwo = 0;

var wolontariat = 0;

var konkursy = 0;
var konkursy1 = 0;
var konkursy2 = 0;
var konkursy3 = 0;
var konkursy4 = 0;
var konkursy5 = 0;

function updateValue(){

    //updates egzamin values

    var ePol = document.getElementsByName('egzamin-polski')[0].value;
    var eMat = document.getElementsByName('egzamin-matematyka')[0].value;
    var eJez = document.getElementsByName('egzamin-jezyki')[0].value;

    // updates ocena values

    var oPol = document.getElementsByName('ocena-polski');
    for (var i = 0, length = oPol.length; i < length; i++){
        if (oPol[i].checked) {
            oPol = oPol[i].value;
            break;
        }
    }
    var oMat = document.getElementsByName('ocena-matematyka');
    for (var i = 0, length = oMat.length; i < length; i++){
        if (oMat[i].checked) {
            oMat = oMat[i].value;
            break;
        }
    }
    var oP1 = document.getElementsByName('ocena-przedmiot1');
    for (var i = 0, length = oP1.length; i < length; i++){
        if (oP1[i].checked) {
            oP1 = oP1[i].value;
            break;
        }
    }
    var oP2 = document.getElementsByName('ocena-przedmiot2');
    for (var i = 0, length = oP2.length; i < length; i++){
        if (oP2[i].checked) {
            oP2 = oP2[i].value;
            break;
        }
    }
    
    // updates swiadectwo values

    var swi = document.getElementsByName('swiadectwo');
    for (var i = 0, length = swi.length; i < length; i++){
        if (swi[i].checked) {
            swi = swi[i].value;
            break;
        }
    }

    // updates wolontariat values

    var wol = document.getElementsByName('wolontariat');
    for (var i = 0, length = wol.length; i < length; i++){
        if (wol[i].checked) {
            wol = wol[i].value;
            break;
        }
    }

    // updates konkurs values

    var kon = document.getElementsByName('konkursy');
    for (var i = 0, length = kon.length; i < length; i++){
        if (kon[i].checked) {
            kon = kon[i].value;
            break;
        }
    }
    var kP1 = document.getElementsByName('pytanie1');
    for (var i = 0, length = kP1.length; i < length; i++){
        if (kP1[i].checked) {
            kP1 = kP1[i].value;
            break;
        }
    }
    var kP2 = document.getElementsByName('pytanie2');
    for (var i = 0, length = kP2.length; i < length; i++){
        if (kP2[i].checked) {
            kP2 = kP2[i].value;
            break;
        }
    }
    var kP3 = document.getElementsByName('pytanie3');
    for (var i = 0, length = kP3.length; i < length; i++){
        if (kP3[i].checked) {
            kP3 = kP3[i].value;
            break;
        }
    }
    var kP4 = document.getElementsByName('pytanie4');
    for (var i = 0, length = kP4.length; i < length; i++){
        if (kP4[i].checked) {
            kP4 = kP4[i].value;
            break;
        }
    }
    var kP5 = document.getElementsByName('pytanie5');
    for (var i = 0, length = kP5.length; i < length; i++){
        if (kP5[i].checked) {
            kP5 = kP5[i].value;
            break;
        }
    }

    //counts points for egzamin & styles inputs

    if(ePol>=0 && ePol<=100){
        egzaminyPolski = Math.round(ePol*0.35);
        document.getElementsByName('egzamin-polski')[0].classList.remove('invalid');
        document.getElementsByName('egzamin-polski')[0].classList.add('valid');
    }
    else{
        egzaminyPolski = 0;
        document.getElementsByName('egzamin-polski')[0].classList.remove('valid');
        document.getElementsByName('egzamin-polski')[0].classList.add('invalid');
    }
    if(ePol == 0){
        document.getElementsByName('egzamin-polski')[0].classList.remove('valid');
        document.getElementsByName('egzamin-polski')[0].classList.remove('invalid');
    }

    if(eMat>=0 && eMat<=100){
        egzaminyMatematyka = Math.round(eMat*0.35);
        document.getElementsByName('egzamin-matematyka')[0].classList.remove('invalid');
        document.getElementsByName('egzamin-matematyka')[0].classList.add('valid');
    }
    else{
        egzaminyMatematyka = 0;
        document.getElementsByName('egzamin-matematyka')[0].classList.remove('valid');
        document.getElementsByName('egzamin-matematyka')[0].classList.add('invalid');
    }
    if(eMat == 0){
        document.getElementsByName('egzamin-matematyka')[0].classList.remove('valid');
        document.getElementsByName('egzamin-matematyka')[0].classList.remove('invalid');
    }

    if(eJez>=0 && eJez<=100){
        egzaminyJezyki = Math.round(eJez*0.3);
        document.getElementsByName('egzamin-jezyki')[0].classList.remove('invalid');
        document.getElementsByName('egzamin-jezyki')[0].classList.add('valid');
    }
    else{
        egzaminyJezyki = 0;
        document.getElementsByName('egzamin-jezyki')[0].classList.remove('valid');
        document.getElementsByName('egzamin-jezyki')[0].classList.add('invalid');
    }
    if(eJez == 0){
        document.getElementsByName('egzamin-jezyki')[0].classList.remove('valid');
        document.getElementsByName('egzamin-jezyki')[0].classList.remove('invalid');
    }
    egzaminy = egzaminyPolski + egzaminyMatematyka + egzaminyJezyki;
    document.getElementById('egzaminy').textContent = egzaminy;

    //counts points for oceny    

    if(oPol == 2){ocenyPolski = 2;}
    else if(oPol == 3){ocenyPolski = 8;}
    else if(oPol == 4){ocenyPolski = 14;}
    else if(oPol == 5){ocenyPolski = 17;}
    else if(oPol == 6){ocenyPolski = 18;}
    else {ocenyPolski = 0;}

    if(oMat == 2){ocenyMatematyka = 2;}
    else if(oMat == 3){ocenyMatematyka = 8;}
    else if(oMat == 4){ocenyMatematyka = 14;}
    else if(oMat == 5){ocenyMatematyka = 17;}
    else if(oMat == 6){ocenyMatematyka = 18;}
    else {ocenyMatematyka = 0;}

    if(oP1 == 2){ocenyPrzedmiot1 = 2;}
    else if(oP1 == 3){ocenyPrzedmiot1 = 8;}
    else if(oP1 == 4){ocenyPrzedmiot1 = 14;}
    else if(oP1 == 5){ocenyPrzedmiot1 = 17;}
    else if(oP1 == 6){ocenyPrzedmiot1 = 18;}
    else {ocenyPrzedmiot1 = 0;}

    if(oP2 == 2){ocenyPrzedmiot2 = 2;}
    else if(oP2 == 3){ocenyPrzedmiot2 = 8;}
    else if(oP2 == 4){ocenyPrzedmiot2 = 14;}
    else if(oP2 == 5){ocenyPrzedmiot2 = 17;}
    else if(oP2 == 6){ocenyPrzedmiot2 = 18;}
    else {ocenyPrzedmiot2 = 0;}

    oceny = ocenyPolski + ocenyMatematyka + ocenyPrzedmiot1 + ocenyPrzedmiot2;
    document.getElementById('oceny').textContent = oceny;

    //counts points for swiadectwo

    if(swi == 1){swiadectwo = 7;}
    else{swiadectwo = 0;}
    document.getElementById('swiadectwo').textContent = swiadectwo;

    //counts points for wolontariat

    if(wol == 1){wolontariat = 3;}
    else{wolontariat = 0;}
    document.getElementById('wolontariat').textContent = wolontariat;

    //shows or hides questions

    if(kon == 1){
        document.getElementById('pytania').classList.remove('hidden');
    }
    else{
        document.getElementById('pytania').classList.add('hidden');
    }

    // counts points for konkursy

    if(kP1 == 1){konkursy1 = 10;}
    else if(kP1 == 2){konkursy1 = 7;}
    else if(kP1 == 3){konkursy1 = 5;}
    else {konkursy1 = 0;}

    if(kP2 == 1){konkursy2 = 10;}
    else if(kP2 == 2){konkursy2 = 4;}
    else if(kP2 == 3){konkursy2 = 3;}
    else {konkursy2 = 0;}

    if(kP3 == 1){konkursy3 = 10;}
    else if(kP3 == 2){konkursy3 = 7;}
    else if(kP3 == 3){konkursy3 = 5;}
    else if(kP3 == 4){konkursy3 = 7;}
    else if(kP3 == 5){konkursy3 = 5;}
    else if(kP3 == 6){konkursy3 = 3;}
    else {konkursy3 = 0;}

    if(kP4 == 1){konkursy4 = 10;}
    else if(kP4 == 2){konkursy4 = 7;}
    else if(kP4 == 3){konkursy4 = 5;}
    else if(kP4 == 4){konkursy4 = 7;}
    else if(kP4 == 5){konkursy4 = 3;}
    else if(kP4 == 6){konkursy4 = 2;}
    else {konkursy4 = 0;}

    if(kP5 == 1){konkursy5 = 4;}
    else if(kP5 == 2){konkursy5 = 3;}
    else if(kP5 == 3){konkursy5 = 2;}
    else if(kP5 == 4){konkursy5 = 1;}
    else {konkursy5 = 0;}

    konkursy = konkursy1 + konkursy2 + konkursy3 + konkursy4 + konkursy5;
    if(konkursy > 18) {konkursy = 18;}
    document.getElementById('konkursy').textContent = konkursy;

    // counts tolal points

    lacznie = egzaminy + oceny + swiadectwo + wolontariat + konkursy;
    document.getElementById('lacznie').textContent = lacznie;
}