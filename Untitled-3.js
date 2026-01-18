/**
 * ECO-SYSTEM: Modern Inventory & Transaction Management
 * Refactored for high-readability and modularity.
 */

class InventoryManager {
  #products = [];
  #categories = new Map();

  // Unified initialization
  defineCategory(id, label) {
    this.#categories.set(id, { id, label });
    console.info(`[SYSTEM] Category Registered: ${label}`);
  }

  registerProduct({ id, title, cost, catId, stock }) {
    const category = this.#categories.get(catId);
    
    if (!category) {
      return console.error(`[ERROR] Missing Category Reference: ${catId}`);
    }

    this.#products.push({ id, title, cost, category, stock });
    console.info(`[STOCK] Provisioned: ${title} (${stock} units)`);
  }

  get inventory() {
    return this.#products;
  }

  // Functional search helper
  locate(id) {
    return this.#products.find(p => p.id === id);
  }

  renderStatus() {
    console.log("\n--- REAL-TIME INVENTORY METRICS ---");
    const displayData = this.#products.map(({ id, title, cost, category, stock }) => ({
      SKU: id,
      Item: title,
      Price: `$${cost.toFixed(2)}`,
      Dept: category.label,
      Availability: stock > 0 ? `${stock} units` : "OUT OF STOCK"
    }));
    console.table(displayData);
  }
}

class TerminalCart {
  #basket = [];

  processTransaction(product, volume) {
    if (product?.stock >= volume) {
      product.stock -= volume;
      this.#basket.push({ 
        title: product.title, 
        unitPrice: product.cost, 
        volume,
        subtotal: product.cost * volume 
      });
      console.log(`[BASKET] Verified: ${volume}x ${product.title}`);
    } else {
      console.warn(`[DENIED] Insufficient stock for: ${product?.title || 'Unknown SKU'}`);
    }
  }

  generateReceipt() {
    console.log("\n--- SECURE CHECKOUT SUMMARY ---");
    if (!this.#basket.length) return console.log("Empty Basket.");

    this.#basket.forEach(item => {
      console.log(`› ${item.title.padEnd(12)} | Qty: ${item.volume} | Net: $${item.subtotal}`);
    });

    const total = this.#basket.reduce((acc, item) => acc + item.subtotal, 0);
    console.log(`\nTOTAL PAYABLE: $${total.toLocaleString()}`);
    console.log("-------------------------------\n");
  }
}

// --- INITIALIZATION ---

const Hub = new InventoryManager();
const Session = new TerminalCart();

// Seed Categories
[[1, "Groceries"], [2, "Food"], [3, "Sports"], [4, "IT"], [5, "Medical"]].forEach(
  ([id, name]) => Hub.defineCategory(id, name)
);

// Seed Products via Object Configuration
const stockItems = [
  { id: 1, title: "Tab", cost: 1200, catId: 4, stock: 10 },
  { id: 2, title: "Orange", cost: 2, catId: 2, stock: 100 },
  { id: 6, title: "Pizza", cost: 5, catId: 2, stock: 50 }
];

stockItems.forEach(item => Hub.registerProduct(item));

Hub.renderStatus();

// Execute Transactions
Session.processTransaction(Hub.locate(2), 10); // Orange
Session.processTransaction(Hub.locate(1), 2);  // Tab
Session.processTransaction(Hub.locate(6), 10); // Pizza

Session.generateReceipt();
Hub.renderStatus();