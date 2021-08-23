
let areaArray = ['Square Meters','Square Kilometers', 'Square Foot','Square Yards','Square Inches', 'Square Centimeters', ]
let lengthArray = [`Centimeters`,`Meters`,`Kilometers`, 'Inches', 'Foot', 'Yards' ]

function switchCategory(value){
    document.querySelector('#selection1').innerHTML = '';
    document.querySelector('#selection2').innerHTML = '';
    switch(value){
        case 'area':
            for(let i = 0; i < areaArray.length; i++){
                let area = document.createElement('option');
                area.value = areaArray[i];
                area.innerText = areaArray[i];
                let area2 = area.cloneNode(true);
                document.querySelector('#selection1').appendChild(area);
                document.querySelector('#selection2').appendChild(area2);
            }
            break;
        case 'length':
            for(let i = 0; i < lengthArray.length; i++){
                let length = document.createElement('option');
                length.value = lengthArray[i];
                length.innerText = lengthArray[i];
                let length2 = length.cloneNode(true);
                document.querySelector('#selection1').appendChild(length);
                document.querySelector('#selection2').appendChild(length2);
            }
            break;
    }
}

function compute(){
    
}

//Calculations:

//CM to ...
cmToM = function (x) {
    return x * 100   
}

cmToKm = function (x) {
    return x * 100000
}

cmToInch = function (x) {
    return x / 2.54   
}

cmToFoot = function (x) {
    return x / 30.48   
}

cmToYard = function (x) {
    return x / 91.44  
}

mToCm = function (x) {
    return x / 100
}


//Meter to ...
mToCm = function (x) {
    return x / 100
}

mToKm = function (x) {
    return x * 1000
}

mToInch = function (x) {
    return x * 39.37
}

mToFoot = function (x) {
    return x * 3.28084
}

mToYard = function (x) {
    return x * 1.09361
}


//KM to ...
kmToCm = function (x) {
    return x / 100000
}

kmToM = function (x) {
    return x / 1000
}

kmToInch = function (x) {
    return x * 39370
}

kmToFoot = function (x) {
    return x * 3280.84
}

kmToYard = function (x) {
    return x * 1093.61
}


//Inches to ...
inchToCm = function (x) {
    return x *2.54
}

inchToM = function (x) {
    return x / 39.37
}

inchToKm = function (x) {
    return x / 39370
}

inchToFoot = function (x) {
    return x / 12
}

inchToYard = function (x) {
    return x * 36
}


//Foot to ...
footToCm = function (x) {
    return x * 30.48
}

footToM = function (x) {
    return x / 3.281
}

footToKm = function (x) {
    return x / 3281
}

footToInch = function (x) {
    return x * 12
}

footToYard = function (x) {
    return x / 3
}


//Yard to ...
yardToCm = function (x) {
    return x * 91.44
}

yardToM = function (x) {
    return x / 1.094
}

yardToKm = function (x) {
    return x / 1094
}

yardToInch = function (x) {
    return x * 36
}

yardToFoot = function (x) {
    return x * 3
}

