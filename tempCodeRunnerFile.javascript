let product = [
    { name: "pen", price: 230, category: "Stationery" },
    { name: "Note", price: 200, category: "Stationery" },
    { name: "book", price: 250, category: "Education" }
];

const productSort = [...product].sort((a, b) => a.price - b.price);


const productSort1 = [...product].sort((a, b) => b.price - a.price);

console.log("Ascending:", productSort);
console.log("Descending:", productSort1);