let items = [
    { id: "1", name: "bananes", price: 25, qty: 150, category: "fruits" },
    { id: "2", name: "apples", price: 18, qty: 450, category: "fruits" },
    { id: "3", name: "potato", price: 10, qty: 850, category: "vegetables" },
    { id: "4", name: "tomatoes", price: 35, qty: 378, category: "vegetables" },
];

let shop = {
    title: "ATB",
    items,

    // showItems() {
    //     // console.log(this.items);
    //     for (const item of this.items) {
    //         // console.log(item);
    //         console.log(
    //             `id: ${item.id}, name: ${item.name}, price: ${item.price}, qty: ${item.qty}`
    //         );
    //     }
    // },

    showItems() {
        // console.log(this.items);
        for (const { id, name, price, qty } of this.items) {
            // console.log(item);
            console.log(
                `id: ${id}, name: ${name}, price: ${price}, qty: ${qty}`
            );
        }
    },

    addItem({ name, price, qty, category }) {
        // const { id, name, price, qty, category } = newItem;
        // console.log(id, price, name);
        // this.items.push(newItem);

        // this.items.push({ name, price, qty, category });

        // let newItem = { name, price, qty, category };
        // newItem.id = "1000";

        let newItem = { name, price, qty, category };
        this.items = [...this.items, { ...newItem, id: Date.now() }];
    },

    updateItem(productName, newName) {
        for (const item of this.items) {
            if (item.name === productName) {
                item.name = newName;
            }
        }
    },

    removeItem(productName) {
        for (const item of this.items) {
            if (item.name === productName) {
                // console.log("Found");
                let idx = this.items.indexOf(item);
                // console.log(item);
                // console.log(idx);
                this.items.splice(idx, 1);
            }
        }
    },
};

shop.addItem({
    name: "pear",
    price: 50,
    qty: 754,
    category: "fruits",
});

// shop.updateItem("apples", "apples++");
// shop.removeItem("apples");
shop.showItems();
