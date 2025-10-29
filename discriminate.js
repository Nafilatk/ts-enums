// function area(shape: Shape): number {
//   if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
//   else return shape.side ** 2;
// }
// console.log(area({ kind: "circle", radius: 5 })); 
function perameter(Shape) {
    if (Shape.kind === "square")
        return Shape.side * 4;
}
console.log(perameter({ kind: "square", side: 5 }));
