
let areaArray = ['Square Meters','Square Kilometers', 'Square Foot','Square miles','Square Inches', 'Square Centimeters', ]
let lengthArray = [`Centimeters`,`Meters`,`Kilometers`, 'Inches', 'Foot', 'Miles' ]

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