//const { describe } = require("node-test");
const {Triangle, Square, Circle} = require("./shapes");

describe("Triangle ", ()=>{
    test("renders correctly", () => {
    const shape = new Triangle();


    shape.setColor("color");
    expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182""/>`
    );


    });
});


describe("Circle ", () =>{
    test("renders correctly", () => {
        const shape = new Circle();


        shape.setColor("color");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="#ca6f00"/>`
        );
    });
});

describe("Square ", ()=> {
    test("render correctly", () => {
        const shape = new Square();


        shape.setColor("color");
        expect(shape.render()).toEqual(
            `<rect x = \"73\" y = \"40\" width =\"160\" height=\"150\" fill=\"color\"/>`
        );
    });
});