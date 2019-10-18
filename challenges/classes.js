console.log("Classes Section: ");
// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    }

    volume() {
        const calculation = this.length * this.length * this.height;
        console.log(`Volume of cuboid of ${this.width} x ${this.length} x ${this.height} = ${calculation}`);
        return calculation;
    }

    surfaceArea() {
        const calculation = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        console.log(`Surface area of cuboid of ${this.width} x ${this.length} x ${this.height} = ${calculation}`);
        return calculation;
    }
}   

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5,
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called 
//CubeMaker.  Find out the formulas for volume and surface area for cubes 
//and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2 {
    constructor(cubeAttrs) {
        super(cubeAttrs);
    }
    volume() {
        const calculation = Math.pow(this.width, 3);
        console.log(`Volume of cube with edges of ${this.width} = ${calculation}`);
        return calculation;
    }
    surfaceArea() {
        const calculation = 6 * this.width * this.width;
        console.log(`Surface area of cube with edges of ${this.width} = ${calculation}`);
        return calculation;
    }
}

const cube = new CubeMaker({
    width: 5,
    length: 5,
    height: 5
})

console.log(cube.volume());
console.log(cube.surfaceArea());