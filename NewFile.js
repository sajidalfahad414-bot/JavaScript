class category{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
}
class product{
    constructor(id,name,price,category,quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
    
    }
}
class store{
    constructor(name){
        this.name = name;
    }
    products = [];
    categories = [];
    cart = [];
    addCategory(id,name){
        const newCat = new category(id,name);
        this.categories.push(newCat);
        console.log(`Category "${name}" added.`); 
    }
    removeCategory(id) {
    
    const index = this.categories.findIndex(cat => cat.id === id);

    
    if (index !== -1) {
        
        const removed = this.categories.splice(index, 1);
        console.log(`Category "${removed[0].name}" has been removed.`);
    } else {

        console.log(`ID ${id} not found.`);
    }
}
    updateCategory(id, newName) {
    const category = this.categories.find(cat => cat.id === id);
    if (category) {
        const oldName = category.name; 
        category.name = newName;
        console.log(`Category "${oldName}" updated to "${newName}".`);
    } else {
        console.log(`Error: Category with ID ${id} not found.`);
    }
}
    addProduct(id, name, price, categoryId, qty) { 
    
    const foundCategory = this.categories.find(c => c.id === categoryId);
        
    if (!foundCategory) { 
        console.log(`Error: Cannot add "${name}". Category ID ${categoryId} not found.`);
        return; 
    }

    
    const newProd = new product(id, name, price, foundCategory, qty);
    this.products.push(newProd);
    console.log(`Product "${name}" added to category "${foundCategory.name}".`);
}
    
    removeProduct(id) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {

        const removed = this.products.splice(index, 1);
        console.log(`Product "${removed[0].name}" (ID: ${id}) has been removed from stock.`);
    } else {
        
        console.log(`Error: Product with ID ${id} not found.`);
    }
}
  updateProduct(id, updateData) {
    
    const product = this.products.find(p => p.id === id);

    if (product) {
        Object.assign(product, updateData);
        console.log(`Product ID ${id} ("${product.name}") has been updated.`);
    } else {
        console.log(`Error: Product with ID ${id} not found.`);
    }
}   

showAll() {
    console.log(`\n--- CURRENT INVENTORY FOR: ${this.name.toUpperCase()} ---`);
    
    
    const displayData = this.products.map(p => {
        return {
            ID: p.id,
            Name: p.name,
            Price: `$${p.price}`,
            Category: p.category.name, 
            Stock: p.quantity
        };
    });

    if (displayData.length === 0) {
        console.log("The inventory is currently empty.");
    } else {
        console.table(displayData);
    }
}
}

class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(product, qty) {
        if (product && product.quantity >= qty) {
            product.quantity -= qty; 
            this.items.push({
                name: product.name,
                price: product.price,
                qty: qty,
                subtotal: product.price * qty
            });
            console.log(`Added ${qty}x ${product.name} to cart.`);
        } else {
            console.log(`Failed: Not enough stock for ${product?.name}.`);
        }
    }

    showReceipt() {
        console.log("\n--- YOUR RECEIPT ---");
        if (this.items.length === 0) return console.log("Cart is empty.");
        
        console.table(this.items);
        const total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
        console.log(`TOTAL AMOUNT: $${total}\n--------------------`);
    }
}


const myStore = new store("Sajid's Shop"); 
const myCart = new Cart();


myStore.addCategory(1, "Groceries");
myStore.addCategory(2, "Food");
myStore.addCategory(4, "IT");

myStore.addProduct(1, "Tab", 1200, 4, 10);
myStore.addProduct(2, "Orange", 2, 2, 100);
myStore.addProduct(6, "Piza", 5, 2, 50);


const Orange = myStore.products.find(p => p.id === 2);
const Tab = myStore.products.find(p => p.id === 1);
const Piza = myStore.products.find(p => p.id === 6);


myCart.addToCart(Orange, 10);
myCart.addToCart(Tab, 2);
myCart.addToCart(Piza, 10);


myCart.showReceipt(); 
 