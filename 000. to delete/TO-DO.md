# TO-DO

## INQUIRER
6. takes inputs as instructions for the svg file

## SVG INSTRUCTIONS
1. create `Triangle`, `Square`, and `Circle` classes.
2. create a parent `Shape` class for `Triangle`, `Square`, and `Circle` to inherit from. (DRY)

## TESTS
write tests for shapes.js. (if you make additional js files, you don't have to build tests for those!)
1. (MANDATORY) *each* class - Triangle, Square, and Circle.
    - Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color. (Example below)
2. sorts of things i think i should try to test for...?
    a. shape sizing?
    b. shape coloring?
    c. text coloring?
    d. function calls working?
    e. inquirer consistently working?
    f. number of characters in text submission? (we already kinda did that in class?)
    g. text color submissions? (same?)

```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

## SUBMISSION
1. record walkthrough video demonstrating functionality and tests
2. add video to readme of project and submission 
3. readme
4. sample SVG file submission

## OTHER
1. from "setup", not sure if i need to do something for this?:
    "Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository."

