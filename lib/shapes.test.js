const { Triangle, Circle, Square, setColor, render } = require('./shapes.js');

describe('Triangle', () => {
    it("should do SMTHN idk", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});