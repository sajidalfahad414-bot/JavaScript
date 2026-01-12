function Product(name, price, brand) {
    this.name = name;
    
    this.price = Number(price); 
    this.brand = brand;
}

const product1 = new Product("Laptop", 4000, "Hp");
const product2 = new Product("Desktop", 5000, "Intel");
const product3 = new Product("Mouse", 1000, "Samsung");
const product4 = new Product("Keyboard", 20000000, "Xiaomi");

const products = [product1, product2, product3, product4];

export default products;