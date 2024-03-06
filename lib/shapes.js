// shape classes!
function Shape(baseTextInput, baseTextColor, baseShapeColor) {
    // setting up values to be inherited by its children
    this.baseTextInput = baseTextInput;
    this.baseTextColor = baseTextColor;
    this.baseShapeColor = baseShapeColor;
    this.setColor = function(newColor){
        // sets the color to the given string
        this.baseShapeColor = newColor; 
    };
};

function Triangle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.triangleString = "<polygon points=\"40 10, 260 10, 150 185\" style=\"fill: " + this.baseShapeColor + "\" /> \n <text x = \"145\" y = \"90\" fill = \"" + this.baseTextColor + "\" text-anchor=\"middle\" class=\"tri\" > " + this.baseTextInput + "</text>";
    // render function for testing.
    this.render = function (){
        // returns the following string plus the inputted color.
        return "<polygon points=\"40 10, 260 10, 150 185\" style=\"fill: " + this.baseShapeColor + "\" />";
    };
};

function Circle(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + this.baseShapeColor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + this.baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\" >" + this.baseTextInput + "</text>";
    this.render = function () {
        return "<circle cx=\"150\" cy=\"100this.\" r=\"90\" fill=\"" + this.baseShapeColor + "\" />";
    };
};

function Square(baseTextInput, baseTextColor, baseShapeColor) {
    // calling from Shape class parent
    Shape.call(this, baseTextInput, baseTextColor, baseShapeColor);
    // string for the shape specific input into the svg file.
    this.squareString = "<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"" + this.baseShapeColor + "\" /> \n <text x=\"150\" y=\"125\" fill= \"" + this.baseTextColor + "\" text-anchor=\"middle\" class=\"cirsq\">" + this.baseTextInput + "</text>";
    this.render = function () {
        return "<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"" + this.baseShapeColor + "\" />";
    };
};


// exporting classes
module.exports = { Triangle, Circle, Square };