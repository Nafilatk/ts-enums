function area(shape) {
    if (shape.kind === "circle")
        return Math.PI * Math.pow(shape.radius, 2);
}
console.log(area({ kind: "circle", radius: 5 }));
