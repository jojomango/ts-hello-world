
// readonly property
interface MousePoint {
  readonly x: number;
  readonly y: number;
}

/* eslint-disable */

const pointM1: MousePoint = {
  x: 100,
  y: 200
};

console.log(pointM1);

//readonly array
let a: number[] = [1, 2, 3];
const b:ReadonlyArray<number> = a;
//a = b; // cannot assign readonly array to general array
a = b as number[]; // can assign readonly array with assertion (I know it's a mutable array)

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  const { color, width } = config;
  return {
    color: color,
    area: width * width
  }
}

const mySquare = createSquare({ colour: "red", width: 100 } as SquareConfig);

// function interface
interface myFunction {
  (search: string, sub: string): boolean;
}

let searchFunc: myFunction;
searchFunc = function(ser, sub) {
  return ser.indexOf(sub) > -1;
}

// string Array
interface album {
  [index: number]: string;
}

let myList: album;
myList = ['a', 'bbb', 'John'];
const myName:string = myList[2];