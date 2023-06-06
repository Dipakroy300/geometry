let count = 0;
// triangle
document.getElementById('btn-triangle-calculation').addEventListener('click', function(){
    count += 1;
    const baseOfTriangle = inputFunctionWithCheckValidation('triangle-base');
    const heightOfTriangle = inputFunctionWithCheckValidation('triangle-height');

    const number = 0.5;
    const areaOfTriangle = number * baseOfTriangle * heightOfTriangle;
    const areaOfTriangleString = areaOfTriangle.toFixed(2);
    const areaOfTriangleValue = parseFloat(areaOfTriangleString);
    // console.log(areaOfTriangleValue);
    const triangleTitle = document.getElementById('triangle-title').innerText;
    // console.log(triangleTitle);

    displayData(count, triangleTitle, areaOfTriangleValue);
});

// rectangle
document.getElementById('btn-rectangle-calculation').addEventListener('click', function(){
    count += 1;
    const widthOfRectangle = inputFunctionWithCheckValidation('rectangle-width');
    const lengthOfRectangle = inputFunctionWithCheckValidation('rectangle-length');

    const areaOfRectangle = calculateFunction(widthOfRectangle, lengthOfRectangle);
    // console.log(areaOfRectangle);
    const rectangleTitle = document.getElementById('rectangle-title').innerText;
    // console.log(rectangleTitle);

    displayData(count, rectangleTitle, areaOfRectangle);
});

// Parallelogram
document.getElementById('btn-parallelogram-calculation').addEventListener('click', function(){
    count += 1;
    const baseOfParallelogram = inputFunctionWithCheckValidation('parallelogram-base');
    const heightOfParallelogram = inputFunctionWithCheckValidation('parallelogram-height');

    const areaOfParallelogram = calculateFunction(baseOfParallelogram, heightOfParallelogram);
    // console.log(areaOfParallelogram);
    const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
    // console.log(parallelogramTitle);

    displayData(count, parallelogramTitle, areaOfParallelogram);
});

// Rhombus
document.getElementById('btn-rhombus-calculation').addEventListener('click', function(){
    count += 1;
    const firstDiagonalOfRhombus = inputFunctionWithCheckValidation('rhombus-first-diagonal');
    const secondDiagonalOfRhombus = inputFunctionWithCheckValidation('rhombus-second-diagonal');
    const number = 0.5;
    const areaOfRhombus = number * firstDiagonalOfRhombus * secondDiagonalOfRhombus;
    const areaOfRhombusString = areaOfRhombus.toFixed(2);
    const areaOfRhombusValue = parseFloat(areaOfRhombusString);
    // console.log(areaOfRhombusValue);
    const rhombusTitle = document.getElementById('rhombus-title').innerText;
    // console.log(rhombusTitle);

    displayData(count, rhombusTitle, areaOfRhombusValue);
});

// Pentagon
document.getElementById('btn-pentagon-calculation').addEventListener('click', function(){
    count += 1;
    const sideOfPentagon = inputFunctionWithCheckValidation('pentagon-side');
    const lengthOfPentagon = inputFunctionWithCheckValidation('pentagon-length');
    const number = 0.5;
    const areaOfPentagon = number * sideOfPentagon * lengthOfPentagon;
    const areaOfPentagonString = areaOfPentagon.toFixed(2);
    const areaOfPentagonValue = parseFloat(areaOfPentagonString);
    // console.log(areaOfPentagonValue);
    const pentagonTitle = document.getElementById('pentagon-title').innerText;
    // console.log(pentagonTitle);

    displayData(count, pentagonTitle, areaOfPentagonValue);
});

// Ellipse
document.getElementById('btn-ellipse-calculation').addEventListener('click', function(){
    count += 1;
    const xAxisValueOfEllipse = inputFunctionWithCheckValidation('ellipse-x-axis');
    const yAxisValueOfEllipse = inputFunctionWithCheckValidation('ellipse-y-axis');
    const pi = 3.14;
    const areaOfEllipse = pi * xAxisValueOfEllipse * yAxisValueOfEllipse;
    const areaOfEllipseString = areaOfEllipse.toFixed(2);
    const areaOfEllipseValue = parseFloat(areaOfEllipseString);
    // console.log(areaOfEllipseValue);
    const ellipseTitle = document.getElementById('ellipse-title').innerText;
    // console.log(ellipseTitle);

    displayData(count, ellipseTitle, areaOfEllipseValue);
});