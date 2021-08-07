document.getElementById("square-option").addEventListener("click", showSquare);
document.getElementById("rectangle-option").addEventListener("click", showRectangle);
document.getElementById("triangle-option").addEventListener("click", showTriangle);
let squareChoosed = document.getElementById("square");
let rectangleChoosed = document.getElementById("rectangle");
let triangleChoosed = document.getElementById("triangle");
let toFindHyp = document.getElementById("hyp");
let toFindOpp = document.getElementById("opp");
let toFindAdj = document.getElementById("adj");
let showKnownSide = document.getElementById("continue-known-side");
let knownSide = document.getElementById("known-side");
let knownSideHyp = document.getElementById("known-side-hyp");
let knownSideOpp = document.getElementById("known-side-opp");
let knownSideAdj = document.getElementById("known-side-adj");
let hypAngleDegrees = document.getElementById("hyp-angle-degrees");
let oppAngleDegrees = document.getElementById("opp-angle-degrees");
let adjAngleDegrees = document.getElementById("adj-angle-degrees");
let hypSideInput = document.getElementById("hyp-side-value");
let oppSideInput = document.getElementById("opp-side-value");
let adjSideInput = document.getElementById("adj-side-value");

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
    toFindHyp.classList.remove("not-shown");
    toFindHyp.classList.add("shown-figure-block");
    // hide
    toFindOpp.classList.remove("shown-figure-block");
    toFindOpp.classList.add("not-shown");
    toFindAdj.classList.remove("show-figure-block");
    toFindAdj.classList.add("not-shown");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.add("show-figure-inline-block");
    // requirements of inputs
    hypAngleDegrees.setAttribute("required", "");
    oppAngleDegrees.removeAttribute("required");
    adjAngleDegrees.removeAttribute("required");
    // delete values of other inputs
    oppAngleDegrees.value = "";
    adjAngleDegrees.value = "";
}

function selectOpposite(){
    // show
    toFindOpp.classList.remove("not-shown");
    toFindOpp.classList.add("shown-figure-block");
    // hide
    toFindAdj.classList.remove("show-figure-block");
    toFindAdj.classList.add("not-shown");
    toFindHyp.classList.remove("shown-figure-block");
    toFindHyp.classList.add("not-shown");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.add("show-figure-inline-block");
    // requirements of inputs
    oppAngleDegrees.setAttribute("required", "");
    hypAngleDegrees.removeAttribute("required");
    adjAngleDegrees.removeAttribute("required");
    // delete values of other inputs
    hypAngleDegrees.value = "";
    adjAngleDegrees.value = "";
}

function selectAdjacent(){
    // show
    toFindAdj.classList.remove("not-shown");
    toFindAdj.classList.add("show-figure-block");
    // hide
    toFindOpp.classList.remove("shown-figure-block");
    toFindOpp.classList.add("not-shown");
    toFindHyp.classList.remove("shown-figure-block");
    toFindHyp.classList.add("not-shown");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.add("show-figure-inline-block");
    // requirements of inputs
    adjAngleDegrees.setAttribute("required", "");
    hypAngleDegrees.removeAttribute("required");
    oppAngleDegrees.removeAttribute("required");
    // delete values of other inputs
    hypAngleDegrees.value = "";
    oppAngleDegrees.value = "";
}

function selectKnownSide(){
    const validation1 = hypAngleDegrees.reportValidity();
    const validation2 = oppAngleDegrees.reportValidity();
    const validation3 = adjAngleDegrees.reportValidity();
    // validate that the values on the inputs are in order
    // if(validation1 === false && validation2 === false && validation3== false){console.log("1: "+validation1+". 2: "+validation2+". 3: "+validation3)}
    if(validation1 === true && validation2 === true && validation3 === true){
        // hide
        showKnownSide.classList.remove("show-figure-inline-block");
        showKnownSide.classList.add("not-shown");
        // show
        knownSide.classList.remove("not-shown");
        knownSide.classList.add("show-figure-block");
    }
}

function selectSecondHyp(){
    // hide
    knownSideOpp.classList.remove("show-figure-block");
    knownSideOpp.classList.add("not-shown");
    knownSideAdj.classList.remove("show-figure-block");
    knownSideAdj.classList.add("not-shown");
    // show
    knownSideHyp.classList.remove("not-shown");
    knownSideHyp.classList.add("show-figure-block");

}

function selectSecondOpp(){
    // hide
    knownSideHyp.classList.remove("show-figure-block");
    knownSideHyp.classList.add("not-shown");
    knownSideAdj.classList.remove("show-figure-block");
    knownSideAdj.classList.add("not-shown");
    // show
    knownSideOpp.classList.remove("not-shown");
    knownSideOpp.classList.add("show-figure-block");
}

function selectSecondAdj(){
    // hide
    knownSideHyp.classList.remove("show-figure-block");
    knownSideHyp.classList.add("not-shown");
    knownSideAdj.classList.remove("show-figure-block");
    knownSideAdj.classList.add("not-shown");
    // show
    knownSideOpp.classList.remove("not-shown");
    knownSideOpp.classList.add("show-figure-block");
}

function solveHypOppAdj(){
    let hypVisible = hypSideInput.offsetParent;
    let oppVisible = hypSideInput.offsetParent;
    let adjVisible = hypSideInput.offsetParent;

    if()
}