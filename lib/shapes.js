const sillymode = "testingggg";

function myFunct() {
    console.log("sillymode?");
}

myFunct();



function Shape(textinput, textcolor, shapecolor) {
    this.textinput = textinput;
    this.textcolor = textcolor;
    this.shapecolor = shapecolor;
    this.svg1 = "<svg width=\"300\" height=\"200\"> \n <style> \n .cirsq { \n font: bold 75px sans-serif; \n } .tri { \n font: bold 70px sans-serif; \n } \n </style> \n "
    this.svg2 = " \n </svg>"
};

function Triangle() {
    Shape.call(textinput, textcolor, shapecolor, svg1, svg2);
};

function Square() {
    Shape.call(textinput, textcolor, shapecolor, svg1, svg2);
};

function Circle() {
    Shape.call(textinput, textcolor, shapecolor, svg1, svg2);
    this.circleString = "<circle cx=\"150\" cy=\"100\" r=\"90\" fill=\"" + shapecolor + "\" /> \n <text x = \"150\" y = \"125\" fill = \"" + textcolor + "\" text - anchor=\"middle\" class=\"cirsq\" >" + textinput + "</text>"
};



// const newTriangle = new Triangle("EXA", "#123123", "#789789");





































