class FoodItem {
    constructor(name, price, category, imgUrl) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.imgUrl = imgUrl || "./default-food.jpg";
    }
    
    getDetails() {
        return `Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
}

class Restaurant {
    constructor(RestaurantName) {
        this.RestaurantName = RestaurantName;
        this.menu = []; 
    }

    addFoodItem(foodItem) {
        this.menu.push(foodItem);
        console.log(`Added: ${foodItem.name} with image URL: ${foodItem.imgUrl}`);
    }

    updateFoodItem(name, updateData) {
        const item = this.menu.find(f => f.name === name);
        if (item) {
            Object.assign(item, updateData);
            console.log(`Food item ${name} has been updated.`);
        } else {
            console.log(`Item ${name} not found.`);
        }
    }

    deleteFoodItem(itemName) {
        this.menu = this.menu.filter(f => f.name !== itemName);
        console.log(`Food item ${itemName} has been deleted.`);
    } 
   searchFoodItem(itemName) {
        const results = this.menu.filter(f => 
            f.name.toLowerCase().includes(itemName.toLowerCase())
        );

    renderMenu() {
        return this.menu.map(item => item.getDetails()).join('\n');

    }
}
const myRestaurant = new Restaurant('Sajids Diner');


myRestaurant.addFoodItem(new FoodItem('Burger', 5.99, 'Fast Food', './burger.jpg'));


console.log('Current Menu:\n' + myRestaurant.renderMenu());


console.log('Testing updatefoodItem:');
myRestaurant.updateFoodItem('Burger', { price: 6.49, imgUrl: './new-burger.jpg' });


console.log('Updated Menu:\n' + myRestaurant.renderMenu());
