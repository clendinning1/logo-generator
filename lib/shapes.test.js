const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
    it("should set the triangle color", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="40 10, 260 10, 150 185" style=\"fill: blue\" />');
    });
});

describe('Circle', () => {
    it("should set the circle color", () => {
        const shape = new Circle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<circle cx=\"150\" cy=\"100this.\" r=\"90\" fill=\"yellow\" />');
    });
});

describe('Square', () => {
    it("should set the square color", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x=\"65\" y=\"15\" width=\"170\" height=\"170\" fill=\"red\" />');
    });
});