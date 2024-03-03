

function myFunct() {
    console.log("sillymode?");
}

myFunct();


function Shape(text, textcolor, shapecolor) {
    this.text = text;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
};

function Triangle() {
    Shape.call(text, textcolor, shapecolor);
};

function Square() {
    Shape.call(text, textcolor, shapecolor);
};

function Circle() {
    Shape.call(text, textcolor, shapecolor);
};

// const newTriangle = new Triangle("EXA", "#123123", "#789789");

