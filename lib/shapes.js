// shape classes!
function Shape(baseTextInput, baseTextColor, baseShapeColor) {
    // setting up values to be inherited by its children
    this.baseTextInput = baseTextInput;
    this.baseTextColor = baseTextColor;
    this.baseShapeColor = baseShapeColor;
};

function Triangle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.triangleString = "<polygon points=\"40 10, 260 10, 150 185\" style=\"fill: " + baseShapeColor + "\" /> \n <text x = \"145\" y = \"90\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"tri\" > " + baseTextInput + "</text>";
};

function Circle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + baseShapeColor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + baseTextInput + "</text>";
};

function Square(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.squareString = "<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"" + baseShapeColor + "\" /> \n <text x=\"150\" y=\"125\" fill= \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\">" + baseTextInput + "</text>";
};

// exporting classes
module.exports = { Triangle, Circle, Square };