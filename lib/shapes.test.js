const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
    it("should set the triangle color", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="40 10, 260 10, 150 185" style=\"fill: blue\" />');
    });
});