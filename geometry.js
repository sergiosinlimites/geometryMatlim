document.getElementById("square-option").addEventListener("click", showSquare);
document.getElementById("rectangle-option").addEventListener("click", showRectangle);
document.getElementById("isosceles-triangle-option").addEventListener("click", showIsosceles);
document.getElementById("equilateral-triangle-option").addEventListener("click", showEquilateral);
document.getElementById("right-triangle-option").addEventListener("click", showRightTriangle);
document.getElementById("circle-option").addEventListener("click", showCircle);
const squareChoosed = document.getElementById("square");
const rectangleChoosed = document.getElementById("rectangle");
const isoscelesTriangleChoosed = document.getElementById("isosceles-triangle");
const equilateralTriangleChoosed = document.getElementById("equilateral-triangle");
const rightTriangleChoosed = document.getElementById("right-triangle");
const circleChoosed = document.getElementById("circle");
const divAngleDegrees = document.getElementById("hyp-opp-adj");
let angleDegreesInput = document.getElementById("hyp-opp-adj-angle-degrees");
let secondaryHyp = document.getElementById("secondary-hyp");
let secondaryOpp = document.getElementById("secondary-opp");
let secondaryAdj = document.getElementById("secondary-adj");
let sideToDiscover;
let sideUserKnows;
let result;
let showKnownSide = document.getElementById("continue-known-side");
let knownSide = document.getElementById("known-side");
let showKnownSideValueDiv = document.getElementById("known-side-value-div")
let labelKnownSide = document.getElementById("known-side-value-div__label");
let valueKnownSide = document.getElementById("hyp-opp-adj-side-value");
let solverButton = document.getElementById("solver-button");
let diameterDiv = document.getElementById("diameter-div");
let perimeterDiv = document.getElementById("perimeter-div");
let areaDiv = document.getElementById("area-div");
let volumeDiv = document.getElementById("volume-div");
let hypDiv = document.getElementById("hyp-div");
let oppDiv = document.getElementById("opp-div");
let adjDiv = document.getElementById("adj-div");

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
    // show
    squareChoosed.classList.remove("not-shown");
    squareChoosed.classList.add("show-figure-block");
    areaDiv.classList.remove("not-shown");
    areaDiv.classList.add("show-figure-inline");
    perimeterDiv.classList.remove("not-shown");
    perimeterDiv.classList.add("show-figure-inline");
    // hide
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    isoscelesTriangleChoosed.classList.remove("show-figure-block");
    isoscelesTriangleChoosed.classList.add("not-shown");
    equilateralTriangleChoosed.classList.remove("show-figure-block");
    equilateralTriangleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    diameterDiv.classList.remove("show-figure-inline");
    diameterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
    hypDiv.classList.remove("show-figure-inline");
    hypDiv.classList.add("not-shown");
    oppDiv.classList.remove("show-figure-inline");
    oppDiv.classList.add("not-shown");
    adjDiv.classList.remove("show-figure-inline");
    adjDiv.classList.add("not-shown");
}

function showRectangle(){
    rectangleChoosed.classList.remove("not-shown");
    rectangleChoosed.classList.add("show-figure-block");
    areaDiv.classList.remove("not-shown");
    areaDiv.classList.add("show-figure-inline");
    perimeterDiv.classList.remove("not-shown");
    perimeterDiv.classList.add("show-figure-inline");
    // hide
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    isoscelesTriangleChoosed.classList.remove("show-figure-block");
    isoscelesTriangleChoosed.classList.add("not-shown");
    equilateralTriangleChoosed.classList.remove("show-figure-block");
    equilateralTriangleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    diameterDiv.classList.remove("show-figure-inline");
    diameterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
    hypDiv.classList.remove("show-figure-inline");
    hypDiv.classList.add("not-shown");
    oppDiv.classList.remove("show-figure-inline");
    oppDiv.classList.add("not-shown");
    adjDiv.classList.remove("show-figure-inline");
    adjDiv.classList.add("not-shown");
}

function showIsosceles(){
    isoscelesTriangleChoosed.classList.remove("not-shown");
    isoscelesTriangleChoosed.classList.add("show-figure-block");
    areaDiv.classList.remove("not-shown");
    areaDiv.classList.add("show-figure-inline");
    perimeterDiv.classList.remove("not-shown");
    perimeterDiv.classList.add("show-figure-inline");
    // hide
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    equilateralTriangleChoosed.classList.remove("show-figure-block");
    equilateralTriangleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    diameterDiv.classList.remove("show-figure-inline");
    diameterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
    hypDiv.classList.remove("show-figure-inline");
    hypDiv.classList.add("not-shown");
    oppDiv.classList.remove("show-figure-inline");
    oppDiv.classList.add("not-shown");
    adjDiv.classList.remove("show-figure-inline");
    adjDiv.classList.add("not-shown");
}

function showEquilateral(){
    equilateralTriangleChoosed.classList.remove("not-shown");
    equilateralTriangleChoosed.classList.add("show-figure-block");
    areaDiv.classList.remove("not-shown");
    areaDiv.classList.add("show-figure-inline");
    perimeterDiv.classList.remove("not-shown");
    perimeterDiv.classList.add("show-figure-inline");
    // hide
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    isoscelesTriangleChoosed.classList.remove("show-figure-block");
    isoscelesTriangleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    diameterDiv.classList.remove("show-figure-inline");
    diameterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
    hypDiv.classList.remove("show-figure-inline");
    hypDiv.classList.add("not-shown");
    oppDiv.classList.remove("show-figure-inline");
    oppDiv.classList.add("not-shown");
    adjDiv.classList.remove("show-figure-inline");
    adjDiv.classList.add("not-shown");
}

function showRightTriangle(){
    // show
    rightTriangleChoosed.classList.remove("not-shown");
    rightTriangleChoosed.classList.add("show-figure-block");
    hypDiv.classList.add("show-figure-inline");
    hypDiv.classList.remove("not-shown");
    oppDiv.classList.add("show-figure-inline");
    oppDiv.classList.remove("not-shown");
    adjDiv.classList.add("show-figure-inline");
    adjDiv.classList.remove("not-shown");
    // hide
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    isoscelesTriangleChoosed.classList.remove("show-figure-block");
    isoscelesTriangleChoosed.classList.add("not-shown");
    equilateralTriangleChoosed.classList.remove("show-figure-block");
    equilateralTriangleChoosed.classList.add("not-shown");
    circleChoosed.classList.remove("show-figure-block");
    circleChoosed.classList.add("not-shown");
    areaDiv.classList.remove("show-figure-inline");
    areaDiv.classList.add("not-shown");
    perimeterDiv.classList.remove("show-figure-inline");
    perimeterDiv.classList.add("not-shown");
    diameterDiv.classList.remove("show-figure-inline");
    diameterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
}

function showCircle(){
    // show
    circleChoosed.classList.remove("not-shown");
    circleChoosed.classList.add("show-figure-block");
    areaDiv.classList.remove("not-shown");
    areaDiv.classList.add("show-figure-inline");
    perimeterDiv.classList.remove("not-shown");
    perimeterDiv.classList.add("show-figure-inline");
    diameterDiv.classList.remove("not-shown");
    diameterDiv.classList.add("show-figure-inline");
    // hide
    squareChoosed.classList.remove("show-figure-block");
    squareChoosed.classList.add("not-shown");
    rectangleChoosed.classList.remove("show-figure-block");
    rectangleChoosed.classList.add("not-shown");
    isoscelesTriangleChoosed.classList.remove("show-figure-block");
    isoscelesTriangleChoosed.classList.add("not-shown");
    equilateralTriangleChoosed.classList.remove("show-figure-block");
    equilateralTriangleChoosed.classList.add("not-shown");
    rightTriangleChoosed.classList.remove("show-figure-block");
    rightTriangleChoosed.classList.add("not-shown");
    perimeterDiv.classList.remove("show-figure-inline");
    perimeterDiv.classList.add("not-shown");
    volumeDiv.classList.remove("show-figure-inline");
    volumeDiv.classList.add("not-shown");
    hypDiv.classList.remove("show-figure-inline");
    hypDiv.classList.add("not-shown");
    oppDiv.classList.remove("show-figure-inline");
    oppDiv.classList.add("not-shown");
    adjDiv.classList.remove("show-figure-inline");
    adjDiv.classList.add("not-shown");
}

function squarePerimeter(width){
    return width * 4;
}

function squareArea(width){
    return width**2;
}

function rectanglePerimeter(length, width){
    return length * 2 + width * 2;
}

function rectangleArea(length, width){
    return length * width;
}

function isoscelesArea(sidea, sideb, sidebase){
    if(sidea === sideb && sidea != sidebase){
        console.log("Side a:" + sidea + ", side b: " + sideb + ", base: " + sidebase);
        if(sidebase < (sidea*2)){
            const halfbase = sidebase/2;
            return Math.sqrt((sidea)**2 - (halfbase)**2);
        } else {
            alert("The sides do not match to a real triangle");
        }
    } else { alert("your sides are not the ones of an Isosceles triangle")}
}

function isoscelesPerimeter(sidea, sideb, sidebase){
    if(sidea === sideb && sidea != sidebase){
        console.log("Side a:" + sidea + ", side b: " + sideb + ", base: " + sidebase);
        if(sidebase < (sidea*2)){
            let result = parseFloat(sidea) + parseFloat(sideb) + parseFloat(sidebase);
            return result;
        } else {
        }
    } else { alert("your sides are not the ones of an Isosceles triangle")}
}

function equilateralArea(side){
    const halfbase = side/2;
    return Math.sqrt((side)**2 - (halfbase)**2);
}

function equilateralPerimeter(side){
    return side * 3;
}

function trianglePerimeter(lado1, lado2, base){
    return lado1 + lado2 + base
}

/* function triangleArea(base, lado1){
    const alturaTriangulo = Math.sqrt((lado1 ** 2) - ((base/2) ** 2));
    return parseFloat(((alturaTriangulo * base)/2).toFixed(4));
} */

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
    // requirements
    let validation1 = document.getElementById("square-decimals").reportValidity();
    let validation2 = document.getElementById("square-width").reportValidity();
    // esto permite revisar si el elemento tiene todo lo necesario para ser pasado

    if(validation1 === true && validation2 === true){
        const inputWidthValue = document.getElementById("square-width").value
        const decimalsNumber = document.getElementById("square-decimals").value;
        const perimeter = parseFloat(squarePerimeter(inputWidthValue).toFixed(decimalsNumber));
        const area = parseFloat(squareArea(inputWidthValue).toFixed(decimalsNumber));
        // write
        const writePerimeter = document.getElementById("perimeter-text");
        const writeArea = document.getElementById("area-text");
        const unitSelected = document.getElementById("square-unit-selected").value;
        writePerimeter.textContent = perimeter + " " + unitSelected;
        writeArea.textContent = area + " " + unitSelected + "^2";
    }
}

function calculateRectangle(){
    let validation1 = document.getElementById("rectangle-decimals").reportValidity();
    let validation2 = document.getElementById("rectangle-length").reportValidity()
    let validation3 = document.getElementById("rectangle-width").reportValidity()
    // esto permite revisar si el elemento tiene todo lo necesario para ser pasado
    if(validation1 === true && validation2 === true && validation3 === true){
        let inputLengthValue = document.getElementById("rectangle-length").value;
        let inputWidthValue = document.getElementById("rectangle-width").value;
        let decimalsNumber = document.getElementById("rectangle-decimals").value;
        // write
        let perimeter = parseFloat(rectanglePerimeter(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
        let area = parseFloat(rectangleArea(inputLengthValue, inputWidthValue).toFixed(decimalsNumber));
        const writePerimeter = document.getElementById("perimeter-text");
        const writeArea = document.getElementById("area-text");
        let unitSelected = document.getElementById("rectangle-unit-selected").value;
        writePerimeter.textContent = perimeter + " " + unitSelected;
        writeArea.textContent = area + " " + unitSelected;
    }
}

function calculateIsosceles(){
    let validation1 = document.getElementById("isosceles-sidea").reportValidity();
    let validation2 = document.getElementById("isosceles-sideb").reportValidity();
    let validation3 = document.getElementById("isosceles-base").reportValidity();
    let validation4 = document.getElementById("isosceles-decimals").reportValidity();

    if(validation1 === true && validation2 === true && validation3 === true && validation4 === true){
        let inputSideA = document.getElementById("isosceles-sidea").value;
        let inputSideB = document.getElementById("isosceles-sideb").value;
        let inputBase = document.getElementById("isosceles-base").value;
        let decimalsNumber = document.getElementById("isosceles-decimals").value;
        // write
        let perimeter = parseFloat(isoscelesPerimeter(inputSideA, inputSideB, inputBase).toFixed(decimalsNumber));
        let area = parseFloat(isoscelesArea(inputSideA, inputSideB, inputBase).toFixed(decimalsNumber));
        const writePerimeter = document.getElementById("perimeter-text");
        const writeArea = document.getElementById("area-text");
        let unitSelected = document.getElementById("isosceles-unit-selected").value;
        writePerimeter.textContent = perimeter + " " + unitSelected;
        writeArea.textContent = area + " " + unitSelected + "^2";
    }
}

function calculateEquilateral(){
    let validation1 = document.getElementById("equilateral-side").reportValidity();
    let validation2 = document.getElementById("equilateral-decimals").reportValidity();
    if(validation1 === true && validation2 === true){
        let inputSide = document.getElementById("equilateral-side").value;
        let decimalsNumber = document.getElementById("equilateral-decimals").value;
        // write
        let perimeter = parseFloat(equilateralPerimeter(inputSide).toFixed(decimalsNumber));
        let area = parseFloat(equilateralArea(inputSide).toFixed(decimalsNumber));
        const writePerimeter = document.getElementById("perimeter-text");
        const writeArea = document.getElementById("area-text");
        let unitSelected = document.getElementById("isosceles-unit-selected").value;
        writePerimeter.textContent = perimeter + " " + unitSelected;
        writeArea.textContent = area + " " + unitSelected + "^2";
    }
}

function calculateCircle(){
    // requirements
    let validation1 = document.getElementById("circle-decimals").reportValidity(); 
    let validation2 = document.getElementById("circle-radio").reportValidity();
    // esto permite revisar si el elemento tiene todo lo necesario para ser pasado
    if(validation1 === true && validation2 === true){
        const inputRadioValue = document.getElementById("circle-radio").value
        let decimalsNumber = document.getElementById("circle-decimals").value;
        const diameter = parseFloat(circleDiameter(inputRadioValue).toFixed(decimalsNumber));
        const perimeter = parseFloat(circlePerimeter(inputRadioValue).toFixed(decimalsNumber));
        const area = parseFloat(circleArea(inputRadioValue).toFixed(decimalsNumber));
        // write
        const writeDiameter = document.getElementById("diameter-text");
        const writePerimeter = document.getElementById("perimeter-text");
        const writeArea = document.getElementById("area-text");
        const unitSelected = document.getElementById("square-unit-selected").value;
        writeDiameter.textContent = diameter + " " + unitSelected;
        writePerimeter.textContent = perimeter + " " + unitSelected;
        writeArea.textContent = area + " " + unitSelected + "^2";
    } 
}

function selectHypothenuse(){
    // logic
    angleDegreesInput.value = "";
    valueKnownSide.value = "";
    sideToDiscover = "hypothenuse";
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
    secondaryOpp.classList.remove("not-show");
    secondaryOpp.classList.add("show-figure-inline-block");
    secondaryAdj.classList.remove("not-show");
    secondaryAdj.classList.add("show-figure-inline-block");
    // hide
    knownSide.classList.remove("show-figure-block");
    knownSide.classList.add("not-shown");
    secondaryHyp.classList.remove("show-figure-inline-block");
    secondaryHyp.classList.add("not-shown");
}

function selectOpposite(){
    // logic
    angleDegreesInput.value = "";
    valueKnownSide.value = "";
    sideToDiscover = "opposite side";
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
    secondaryHyp.classList.remove("not-show");
    secondaryHyp.classList.add("show-figure-inline-block");
    secondaryAdj.classList.remove("not-show");
    secondaryAdj.classList.add("show-figure-inline-block");
    // hide
    knownSide.classList.remove("show-figure-block");
    knownSide.classList.add("not-shown");
    secondaryOpp.classList.remove("show-figure-inline-block");
    secondaryOpp.classList.add("not-shown");
}

function selectAdjacent(){
    // logic
    angleDegreesInput.value = "";
    valueKnownSide.value = "";
    sideToDiscover = "adjacent side";
    // show
    divAngleDegrees.classList.remove("not-shown");
    divAngleDegrees.classList.add("shown-figure-block");
    showKnownSide.classList.remove("not-shown");
    showKnownSide.classList.remove("show-figure-inline-block");
    secondaryHyp.classList.remove("not-show");
    secondaryHyp.classList.add("show-figure-inline-block");
    secondaryOpp.classList.remove("not-show");
    secondaryOpp.classList.add("show-figure-inline-block");
    // hide
    knownSide.classList.remove("show-figure-block");
    knownSide.classList.add("not-shown");
    secondaryAdj.classList.remove("show-figure-inline-block");
    secondaryAdj.classList.add("not-shown");
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
    sideUserKnows = "hypothenuse";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Hypothenuse value:";
    solverButton.classList.remove("not-shown");
    solverButton.classList.add("show-figure-inline-block");
}

function selectSecondOpp(){
    valueKnownSide.value = "";
    sideUserKnows = "opposite side";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Opposite side value:";
    solverButton.classList.remove("not-shown");
    solverButton.classList.add("show-figure-inline-block");
}

function selectSecondAdj(){
    valueKnownSide.value = "";
    sideUserKnows = "adjacent side";
    showKnownSideValueDiv.classList.remove("not-shown");
    showKnownSideValueDiv.classList.add("show-figure-block");
    labelKnownSide.textContent = "Adjacent side value:";
    solverButton.classList.remove("not-shown");
    solverButton.classList.add("show-figure-inline-block");
}

function calcHypOppAdj(){
    let validation1 = document.getElementById("hyp-opp-adj-side-value").reportValidity();
    let validation2 = document.getElementById("right-triangle-decimals").reportValidity();
    if(validation1 === true && validation2 === true){
        let decimalsNumber = document.getElementById("right-triangle-decimals").value;
        switch(sideToDiscover){
            case "hypothenuse":
                const writeHyp = document.getElementById("hyp-text");
                switch(sideUserKnows){
                    case "opposite side":
                        //console.log("The known side value is: " + valueKnownSide.value);
                        //console.log("The angle degrees value is: " + angleDegreesInput.value);
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeHyp.textContent = parseFloat((valueKnownSide.value / Math.sin(toRAD)).toFixed(decimalsNumber));;
                        break;
                    case "adjacent side":
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeHyp.textContent = parseFloat((valueKnownSide.value / Math.cos(toRAD)).toFixed(decimalsNumber));;
                        break;
                    default:
                        console.log("You did something wrong");
                }
                break;
            case "opposite side":
                const writeOpp = document.getElementById("opp-text");
                switch(sideUserKnows){
                    case "hypothenuse":
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeOpp.textContent = parseFloat((valueKnownSide.value * Math.sin(toRAD)).toFixed(decimalsNumber));
                        break;
                    case "adjacent side":
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeOpp.textContent = parseFloat((valueKnownSide.value * Math.tan(toRAD)).toFixed(decimalsNumber));;
                        break;
                    default:
                        console.log("You did something wrong");
                }
                break;
            case "adjacent side":
                const writeAdj = document.getElementById("adj-text");
                switch(sideUserKnows){
                    case "hypothenuse":
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeAdj.textContent = parseFloat((valueKnownSide.value * Math.cos(toRAD)).toFixed(decimalsNumber));
                        break;
                    case "opposite side":
                        toRAD = angleDegreesInput.value / (180 / Math.PI);
                        writeAdj.textContent = parseFloat((valueKnownSide.value / Math.tan(toRAD)).toFixed(decimalsNumber));
                        break;
                    default:
                        console.log("You did something wrong");
                }
                break;
        }
    }
}