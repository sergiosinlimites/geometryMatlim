const pi = Math.PI;
/* const preventReload = document.getElementsByClassName("button-submit");
for(let i = 0; i < preventReload.length; i++){
    preventReload[i].addEventListener("click", function(event){
        event.preventDefault();
    })
} */

/* document.getElementById("button-submit-square").addEventListener("click", function(event){
    event.preventDefault();
})
document.getElementById("button-submit-rectangle").addEventListener("click", function(event){
    event.preventDefault();
})
document.getElementById("button-submit-square").addEventListener("click", function(event){
    event.preventDefault();
})
document.getElementById("button-submit-square").addEventListener("click", function(event){
    event.preventDefault();
})
 */


function squarePerimeter(width){
    return width * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

/* const areaCuadrado */ 
function squareArea(width){
    return width**2;
}

function rectanglePerimeter(length, width){
    return length * 2 + width * 2;
}

function rectangleArea(length, width){
    return length * width;
}

function trianglePerimeter(lado1, lado2, base){
    return lado1 + lado2 + base
}

function triangleArea(base, lado1){
    const alturaTriangulo = Math.sqrt((lado1 ** 2) - ((base/2) ** 2));
    return parseFloat(((alturaTriangulo * base)/2).toFixed(4));
}

function circleDiameter(radio){
    return radio * 2
}

function circlePerimeter(radio){
    const diameter = circleDiameter(radio);
    
    return diameter * pi;
}

function circleArea(radio){
    return pi * (radio**2);
}

function calculateSquare(){
    // pruebas
    const validation1 = document.getElementById("square-decimals");
    const validation2 = document.getElementById("square-width");
    validation1.reportValidity(); // esto permite revisar si el elemento tiene todo lo necesario para ser pasado
    validation2.reportValidity();

    const inputWidthValue = document.getElementById("square-width").value
    const decimalsNumber = document.getElementById("square-decimals").value;
    const perimeter = parseFloat(squarePerimeter(inputWidthValue).toFixed(decimalsNumber));
    const area = parseFloat(squareArea(inputWidthValue).toFixed(decimalsNumber));
    const writePerimeter = document.getElementById("perimeter-text");
    const writeArea = document.getElementById("area-text");
    const unitSelected = document.getElementById("unit-selected").value;
    writePerimeter.textContent = perimeter + " " + unitSelected;
    writeArea.textContent = area + " " + unitSelected + "^2";

    
}

function calculateRectangle(){
    const validation1 = document.getElementById("rectangle-decimals");
    const validation2 = document.getElementById("rectangle-length");
    const validation3 = document.getElementById("rectangle-width");
    validation1.reportValidity(); // esto permite revisar si el elemento tiene todo lo necesario para ser pasado
    validation2.reportValidity();
    validation3.reportValidity();

    const inputLengthValue = document.getElementById("rectangle-length").value;
    const inputWidthValue = document.getElementById("rectangle-width").value;
    const decimalsNumber = document.getElementById("rectangle-decimals").value;
    const perimeter = parseFloat(rectanglePerimeter(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
    const area = parseFloat(rectangleArea(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
    const writePerimeter = document.getElementById("perimeter-text");
    const writeArea = document.getElementById("area-text");
    const unitSelected = document.getElementById("unit-selected").value;
    writePerimeter.textContent = perimeter + " " + unitSelected;
    writeArea.textContent = area + " " + unitSelected;

    
}

function calculateTriangle(){

}