export class Circle {
    readonly radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    get area() {
      return Math.PI * this.radius ** 2;
    }
  }