class Shape {
    constructor() {
        this.color = "";
    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182"" </>`;
    }
}

class Square extends Shape {
    render( ) {
        return `<rect x = "73" y = "40" width ="160" height="150" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="#ca6f00"/>`
    }
}

module.exports = {Triangle, Square, Circle} ;