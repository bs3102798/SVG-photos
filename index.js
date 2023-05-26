const inquirer = require ("inquirer")

const fs = require("fs")

const {Triangle, Square, Circle } = require("./lib/shapes");
const { type } = require("os");

function writeToFile(fileName,answers) {
    
    let svgString = "";
    
    svgString =
    '<svg version ="1.1" width="300" height ="200" xmlns="http://www.w3.org/200/svg">';
    
    svgString += "<g>";

    svgString += '${answers.shape}';


    let shapeChoice;

    if(answers.chape === "Triangle") {

        shapeChoice = new Triangle();

        svgString += `polygon points="150,18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}/>`;

    } else if (answers.shape === "Square" ) {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="45" width= "160" fill="${answers.shapeBackgroundColor}"/>`;

    } else {
        shapeChoice = new Circle();
        svgString += `<react x="40" y="60" width = "150" fill="${answers.shapeBackgroundColor}"/>`;

    }

    svgString += `<text x = "150" y = "130" text-anchor = "middle" font-size="60" fill ="${answers.textColor}">${answers.text}</text>`;

    svgString += "</g>";

    svgString += "</svg>" ;

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Gernerating the logo.svg");

    });
}   

    function promptUser() {
        inquirer.prompt ([
           {

               type:"input",
               message: "What is the text you would like your logo to have? (Choose no more than 3 characters)",
               name : "text",
            },
            {
                type : "input",
                message : "Choose a text color. (ENTER color keyword OR a hextdecimal number)",
                name: "shape",
            },
            {
                type: "list",
                message:"What shape would you like to have for the logo?",
                choices: ["Triangle","Square","Circle"],
                name:"shape",

            },
            {
                type: "input",
                message: "Pick a shape color. (Enter color keyword OR a hexadecimal number)",
                name: "shaeBackgroundColor",

            }
        ])
        
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Must enter a value of no more than 3 characters");
                promptUser();
            } else {
                writeToFile("logo.svg", answers);
            }
        });
        
    }
        
promptUser();