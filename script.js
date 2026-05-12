function calculateArea() {
    let radiusInput = document.getElementById("inputRadius").value;
    let piInput = document.getElementById("inputPi").value;


    let radiusSquared = radiusInput * radiusInput;
    
    let area = piInput * radiusSquared;

    let result = document.getElementById("outputArea");
    result.innerHTML = "Area of Circle: <strong>" + area.toFixed(2) + "</strong> square units";
}



function calculateSquare() {
    let squareInput = document.getElementById("inputSquare").value;

    let squareArea = squareInput * squareInput;

    document.getElementById("outPut").innerHTML = "Area Of Square: " + squareArea;
}


function calculateTriangle() {

    let baseInput = document.getElementById("inputBase").value;
    let heightInput = document.getElementById("heightTriangle").value;

    let triangleArea = (1 / 2 * baseInput * heightInput);

    document.getElementById("triangleOutput").innerHTML = "Area Of Triangle: " + triangleArea;
}


function calculateQuadrilateral() {
    let diagonalInput = document.getElementById("diagonalInput").value;
    let height1Input = document.getElementById("heightInput").value;

    let quadrilateralArea = (1 / 2 * diagonalInput * (height1Input + height1Input));

    document.getElementById("quadrilateralOutput").innerHTML = "Area Of Quadrilateral: " + quadrilateralArea;
}


function calculateRhombus() {
let firstDiagonal = document.getElementById("inputDiagonal1").value;
let secondDiagonal = document.getElementById("inputDiagonal2").value;

let rhombusArea = ( (firstDiagonal * secondDiagonal) / 2);

document.getElementById("rhombusOutput").innerHTML = "Area Of Rhombus: " + rhombusArea;

}

function calculateTrapezium() {
let paraLlel1 = document.getElementById("parallelSide1").value;
let paraLlel2 = document.getElementById("parallelSide2").value;
let traHeight = document.getElementById("trapeziumHeight").value;

let parallelBoth = (paraLlel1 + paraLlel2);
let trapeziumArea = ( ( parallelBoth / 2) * traHeight);

document.getElementById("trapeziumOutput").innerHTML = "Area Of Trapezium: " + trapeziumArea;

}


function calculateParallelogram() {

    let gramBase = document.getElementById("paraBase").value;
    let gramHeight = document.getElementById("paraHeight").value;

    let parallelogramArea = (gramBase * gramHeight);

    document.getElementById("parallelogramOutput").innerHTML = "Area Of Parallelogram: " + parallelogramArea;
}

function calculateBody() {
let bmiWeight = document.getElementById("weightBmi").value;
let bmiHeight = document.getElementById("heightBmi").value;

let bodyHeight = (bmiHeight * bmiHeight);
let bodyOutput = bmiWeight / bodyHeight;

document.getElementById("bmiOutput").innerHTML = "Body Mass Index: " + bodyOutput;

}


