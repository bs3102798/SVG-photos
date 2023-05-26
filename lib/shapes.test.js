const { describe } = require("node:test");
const {Triangle, Square, Circle} = require("./shapes");

describe("Triangle test", ()=>{
    test("test Triangle with yellow background", () => {
    const shape = new Triangle();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="yellow" />`
    );


    });
});


describe("Circle Test", () =>{
    test("test Circle with orange background", () => {
        const shape = new Circle();
        shape.setColor("orange");
        expect(shape.render()).toEqual(
            `circle cx="150" cy="115" r="80" fill="#ca6f00" />`
        );
    });
});

describe("Square test", ()=> {
    test("test Square with red background", () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            ``
        );
    });
});