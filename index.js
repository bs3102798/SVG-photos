
const inquirer = require("inquirer");
const fs = require("fs");

const { Triangle, Square, Circle } = require("./libs/shapes");

function writeToFile(fileName, svgString, 
 // callback
  ) {
  fs.writeFile(fileName, svgString, (err) => {
    if (err) {
      console.log('Error:', err);
    } else {
      console.log('Generated logo.svg.');
    }
  });
}

function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the text you would like your logo to have? (Choose no more than 3 characters)",
      name: "text",
    },
    {
      type: "input",
      message: "Choose a text color. (Enter color keyword OR a hexadecimal number)",
      name: "textColor",
    },
    {
      type: "list",
      message: "What shape would you like to have for the logo?",
      choices: ["Triangle", "Square", "Circle"],
      name: "shape",
    },
    {
      type: "input",
      message: "Pick a shape color. (Enter color keyword OR a hexadecimal number)",
      name: "shapeBackgroundColor",
    },
  ])
  .then((answers) =>
   {
    if (answers.text.length > 3) {
      console.log("Must enter a value of no more than 3 characters");
      promptUser();
    } 
    else {
      let svgString = "";
      svgString = '<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/">';
      svgString += "<g>";

      svgString += answers.shape;

        let shapeChoice
    
      if (answers.shape === "Triangle") {
        shapeChoice =  new Triangle();
        svgString += `polygon points="150,18 244,182 56,182" fill="${answers.shapeBackgroundColor}"/>`;
      }
       else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="45" width="160" fill="${answers.shapeBackgroundColor}"/>`;
      } 
      else {
        shapeChoice =  new Circle();
        svgString += `<rect x="40" y="60" width="150" fill="${answers.shapeBackgroundColor}"/>`;
      }


      writeToFile("logo.svg", svgString);
 



    }})}

    ;

    promptUser();
