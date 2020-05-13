/* eslint-disable */
const arr:Array<number> = [1,2,3];

const arr2: number[] = [ 1 ,2, 3 ];

let x: [string, number];
x = ['boo', 123];

enum Colors { Green, Red, Blue };

const color1 = Colors[1];

function error(msg: string) {
  throw new Error(msg);
}

//assertion
let mystr: string | undefined;
mystr = 'abcde';
const strlength: number = (mystr as string).length;