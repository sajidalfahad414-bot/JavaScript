function Animal(name, speed, food) {
    this.name = name;
    this.speed = speed;
    
    
    this.food = food ? food : "Not specified";
}

const tiger = new Animal("Tiger", 300, "Meat");
const deer = new Animal("Deer", 600); 

console.log(tiger.food); 
console.log(deer.food);