class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class Product {
    constructor(id, name, price, category, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category; 
        this.quantity = quantity;
    }
}

class Store {
    constructor() {
        this.products = [];
        this.categories = [];
    }

    addCategory(id, name) {
        const newCat = new Category(id, name);
        this.categories.push(newCat);
        console.log(`Category "${name}" added.`); 
    }

    removeCategory(id) {
        const index = this.categories.findIndex(c => c.id === id);
        if (index !== -1) {
            const removed = this.categories.splice(index, 1);
            console.log(`Category "${removed[0].name}" removed.`);
        }
    }

    updateCategory(id, newName) {
        const category = this.categories.find(c => c.id === id);
        if (category) {
            category.name = newName;
            console.log(`Category ID ${id} updated to "${newName}".`);
        }
    }

    addProduct(id, name, price, categoryId, qty) {
        const category = this.categories.find(c => c.id === categoryId);
        if (!category) {
            console.log(`Cannot add "${name}": Category ID ${categoryId} not found.`);
            return;
        }
        const newProd = new Product(id, name, price, category, qty);
        this.products.push(newProd);
        console.log(`Product "${name}" added to inventory.`);
    }

    removeProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log(`Product ID ${id} removed.`);
        }
    }

    updateProduct(id, updateData) {
        const product = this.products.find(p => p.id === id);
        if (product) Object.assign(product, updateData);
    }

    showAll() {
        console.log("\n--- CURRENT STORE INVENTORY ---");
        console.table(this.products.map(p => ({
            ID: p.id,
            Name: p.name,
            Price: p.price,
            Category: p.category.name,
            Stock: p.quantity
        })));
    }
}

class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(product, qty) {
        if (product && product.quantity >= qty) {
            product.quantity -= qty; 
            this.items.push({ name: product.name, price: product.price, qty: qty });
            console.log(`Added ${qty}x ${product.name} to cart.`);
        } else {
            console.log(`Not enough stock for ${product?.name || 'Unknown'}.`);
        }
    }

    showCart() {
        console.log("\n--- YOUR SHOPPING CART ---");
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }
        this.items.forEach(item => {
            console.log(`• ${item.name} | Qty: ${item.qty} | Subtotal: $${item.price * item.qty}`);
        });
    }

    showTotal() {
        const total = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        console.log(`--------------------------\n TOTAL RECEIPT: $${total}`);
        return total;
    }
}



const myStore = new Store();
const myCart = new Cart();


myStore.addCategory(1, "Groceries"); 
myStore.addCategory(2, "Food"); 
myStore.addCategory(3, "Sports");
myStore.addCategory(4, "IT"); 
myStore.addCategory(5, "Medical"); 
myStore.addCategory(6, "Cosmetics");


myStore.addProduct(1, "Tab", 1200, 4, 10);
myStore.addProduct(2, "Orange", 2, 2, 100);    
myStore.addProduct(3, "Fry fish", 3, 2, 70);
myStore.addProduct(4, "Antena", 200, 4, 5);
myStore.addProduct(5, "Mango", 3, 2, 80);    
myStore.addProduct(6, "Piza", 5, 2, 50);

myStore.showAll();


const Orange = myStore.products.find(p => p.id === 2);
const Tab = myStore.products.find(p => p.id === 1);
const Piza = myStore.products.find(p => p.id === 6);

myCart.addToCart(Orange, 10); 
myCart.addToCart(Tab, 2);
myCart.addToCart(Piza, 10);

myCart.showCart();
myStore.showAll();
myCart.showTotal();