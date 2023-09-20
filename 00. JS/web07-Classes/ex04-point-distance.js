class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(pointA, pointB) {
        const distanceX = pointA.x - pointB.x;
        const distanceY = pointA.y - pointB.y;
        return Math.hypot(distanceX, distanceY);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
