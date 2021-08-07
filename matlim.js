document.getElementById("square-option").addEventListener("click", showSquare);
document.getElementById("rectangle-option").addEventListener("click", showRectangle);
document.getElementById("triangle-option").addEventListener("click", showTriangle);
const squareChoosed = document.getElementById("square");
const rectangleChoosed = document.getElementById("rectangle");
const triangleChoosed = document.getElementById("triangle");
const divAngleDegrees = document.getElementById("hyp-opp-adj");
let angleDegreesInput = document.getElementById("hyp-opp-adj-angle-degrees");
let sideToDiscover;
let showKnownSide = document.getElementById("continue-known-side");
let knownSide = document.getElementById("known-side");
let showKnownSideValueDiv = document.getElementById("known-side-value-div")
let labelKnownSide = document.getElementById("known-side-value-div__label");
let valueKnownSide = document.getElementById("hyp-opp-adj-side-value");
let solverButton = document.getElementById("solver-button");

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

function showSquare(){
    squareChoosed.classList.remove("not-shown");
    squareChoosed.classList.add("show-figure-block");
    // don't show
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    triangleChoosed.classList.remove("show-figure-block");
    triangleChoosed.classList.add("not-shown");
}

function showRectangle(){
    rectangleChoosed.classList.remove("not-shown");
    rectangleChoosed.classList.add("show-figure-block");
    // don't show
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    triangleChoosed.classList.remove("show-figure-block");
    triangleChoosed.classList.add("not-shown");
}

function showTriangle(){
    triangleChoosed.classList.remove("not-shown");
    triangleChoosed.classList.add("show-figure-block");
    // don't show
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
}


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
    const unitSelected = document.getElementById("square-unit-selected").value;
    writePerimeter.textContent = perimeter + " " + unitSelected;
    writeArea.textContent = area + " " + unitSelected + "^2";
}

function calculateRectangle(){
    // const validation1 = document.getElementById("rectangle-decimals");
    const validation2 = document.getElementById("rectangle-length");
    const validation3 = document.getElementById("rectangle-width");
    // validation1.reportValidity(); // esto permite revisar si el elemento tiene todo lo necesario para ser pasado
    validation2.reportValidity();
    validation3.reportValidity();

    const inputLengthValue = document.getElementById("rectangle-length").value;
    const inputWidthValue = document.getElementById("rectangle-width").value;
    let decimalsNumber = document.getElementById("rectangle-decimals").value;

    
    if(decimalsNumber > 10){
        decimalsNumber = 10;
    }
    
    const perimeter = parseFloat(rectanglePerimeter(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
    const area = parseFloat(rectangleArea(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
    const writePerimeter = document.getElementById("perimeter-text");
    const writeArea = document.getElementById("area-text");
    const unitSelected = document.getElementById("rectangle-unit-selected").value;
    writePerimeter.textContent = perimeter + " " + unitSelected;
    writeArea.textContent = area + " " + unitSelected;

}

function selectHypothenuse(){
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    angleDegreesInput.value = "";
    sideToDiscover = "hypothenuse";
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
}

function selectOpposite(){
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    angleDegreesInput.value = "";
    sideToDiscover = "opposite side";
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
}

function selectAdjacent(){
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    angleDegreesInput.value = "";
    sideToDiscover = "adjacent side";
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
}

function selectKnownSide(){
    let validation1 = angleDegreesInput.reportValidity();
    if(validation1 === true){
        knownSide.classList.remove("not-shown");
        knownSide.classList.add("show-figure-block");
        solverButton.textContent = "Calculate " + sideToDiscover;
    }
}

function selectSecondHyp(){
    valueKnownSide.value = "";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Hypothenuse value:";
    solverButton.classList.remove("not-shown");
    solverButton.classList.add("show-figure-inline-block");
}

function selectSecondOpp(){
    valueKnownSide.value = "";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Opposite side value:";
    
}

function selectSecondAdj(){
    valueKnownSide.value = "";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Adjacent side value:";
}

function calcHypOppAdj(){
    let validation1 = document.getElementById("hyp-opp-adj-side-value").reportValidity();
    if(validation1 === true){
        switch(sideToDiscover){
            case "hypothenuse":
                console.log("you are calc the hyp");
                break;
            case "opposite side":
                console.log("you are calc the opp");
                break;
            case "adjacent side":
                console.log("you are calc the adj");
                break;
        }
    }
}