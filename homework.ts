console.log('testing')

// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A:  number

let b = 'Thieves';
// b: string

let c = [true, false, false];
// c:  boolean []

let d = {age: number};
// d: {
  age: number;
}


let e = [3]
// e: number []

let f;
// f: any 

let g = []
// g: unspecified type, could be any



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: i dont think theres an error besides maybe missing the release year in the assigned object. We have the song object that has a title and release year property and specifies the types of those properties

let prices = [100, 200, 300];
prices[0] = '$100';
// A: the prices are inferred as an array of numbers, but then it is trying to assign itself as a string. We can correct this by "let prices : (number | string) []" to assign both types (numbers and strings)

function myFunc(a: number, b: number): number {}
// A: this funtion takes 2 parameters and defines the type for both of them. when declaring the function it reutns a value of the type 'number' i dont see an error w this TypeScript




// CODEWARS


// 8 kyu
// Add Length
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
function addLength(str) {
    const words = str.split(" ");
  
    const result = words.map(word => `${word} ${word.length}`);
  
    return result;
  }


//8 Kyu
// Convert boolean to string
function booleanToString(b){
    return b.toString();
  }