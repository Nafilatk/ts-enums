type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

type Shape = Circle | Square;

// function area(shape: Shape): number {
//   if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
//   else return shape.side ** 2;
// }

// console.log(area({ kind: "circle", radius: 5 })); 



function perameter(Shape:Shape): number{
if (Shape.kind === "square")
return Shape.side *4
}
console.log(perameter({kind : "square" , side :5}));
