class CuboidMakerOne {
    constructor(attr){
        this.length = attr.length,
        this.width = attr.width,
        this.height = attr.height;
    }

    //methods

    volume(){
        return `${this.length}` * `${this.width}` * `${this.height}`
    }

    surfaceArea(){
        return `2` * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this. height}`)
    }
}
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid = new CuboidMakerOne ({
    width: 5,
    height: 5,
    length: 4
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerOne{
    constructor(attr){
    super(attr),
    this.length = attr.length,
    this.height = attr.height,
    this.width = attr.width;
    }
}

const cube = new CubeMaker({
    width: 5,
    height: 5,
    length: 5
})

console.log(cube.volume());
console.log(cube.surfaceArea());