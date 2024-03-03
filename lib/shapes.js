const sillymode = "testingggg";

function myFunct() {
    console.log("sillymode?");
}

myFunct();



const circle = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + SHAPECOLOR + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + TEXTCOLOR + "\" text - anchor=\"middle\" class=\"cirsq\" >" + TEXTINPUT + "</text>"
    
    <circle cx="150" cy="100" r="90" fill="red" />
    <text x="150" y="125" fill="black" text-anchor="middle" class="cirsq">CIR</text>


function Shape(text, textcolor, shapecolor) {
    this.text = text;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
    // the following is a string that will build the svg file, except for things specifically needed for the shape, which is left
    // with the word "SHAPE"
    this.svg = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n " + SHAPE + " \n </svg>"
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





































