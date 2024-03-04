const svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
const svg2 = " \n </svg>"


function Shape(baseTextInput, baseTextColor, baseShapeColor) {
    this.baseTextInput = baseTextInput;
    this.baseTextColor = baseTextColor;
    this.baseShapeColor = baseShapeColor;
};

// function Triangle(baseTextInput, baseTextColor, baseShapeColor) {
//     Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
// };

function Square(baseTextInput, baseTextColor, baseShapeColor) {
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    this.squareString = "<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"" + baseShapeColor + "\" /> \n <text x=\"150\" y=\"125\" fill= \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\">" + baseTextInput + "</text>"
};

function Circle(baseTextInput, baseTextColor, baseShapeColor) {
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + baseShapeColor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + baseTextInput + "</text>";
};