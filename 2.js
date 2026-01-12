import product from "./Products.js";


let lowToHigh = [...product].sort((a, b) => a.price - b.price);


let highToLow = [...lowToHigh].reverse();

console.log("Low to High:", lowToHigh);
console.log("High to Low:", highToLow);