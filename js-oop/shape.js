function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}
const calcPerimeter=(a, b)=>a*b;
Shape.prototype.calcPerimeter = function () {
    return calcPerimeter(this.sides*this.sideLength);
}

const square = new Shape('square', 4, 5);

console.log(square.calcPerimeter());
// const shapeTriangleFunc = Shape.bind('square');// таким способом можем любой this сделать
// shapeTriangleFunc('triangle', 3, 10);
const triangle = new Shape('triangle', 4, 5);
const circle = new Shape('circle', 1);
console.log(circle.calcPerimeter());

circle.radius = 5;
//Overriding of calcPerimeter function in Shape. prototype
circle.calcPerimeter=function (){
    return 2*Math.PI*this.radius;
}
console.log(circle.calcPerimeter());

circle.toString=function(){
    return this.name+'with radius of '+this.radius;
}
Shape.prototype.toString=function (){
    return this.name+'with number of sides '+this.sides+'and side length of '+this.sideLength;
}
circle.hasOwnProperty('radius'); //true
Shape.prototype.color='green';
circle.hasOwnProperty('color');//false hasOwnProperty - наследуется от объекта
for (let field of circle) {
    if (circle.hasOwnProperty(field)) {
        console.log(field);
    }
}
