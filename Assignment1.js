
//Add Product to Cart Function
const cart = [];

function addToCart(name, price, quantity) {
    if (!name) {
        throw new Error("Product name is required.");
    }
    if (typeof price !== 'number' || price <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    const product = { name, price, quantity };
    cart.push(product);
    console.log(`Added ${quantity} of ${name} to the cart.`);
}

//Checkout Function
function checkout() {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(`Checkout successful! Total amount: $${total}`);
}

//Login Function
function login(username, password) {
    const validCredentials = {
        user1: "password1",
        user2: "password2"
    };

    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }
    if (!validCredentials[username] || validCredentials[username] !== password) {
        throw new Error("Invalid username or password.");
    }

    console.log("Login successful!");
}
//Example Usage
// Now, you can use the try and catch blocks to test the functions and handle any errors that may occur.

try {
    // Test addToCart function
    addToCart("laptop", 1200, 2);
    addToCart("", 30, 3); // should throw an error: "Product name is required."
    addToCart("Mouse", -15, 3); // should throw an error: "Invalid product price."
    addToCart("keyboard", 50, "abc"); // should throw an error: "Invalid quantity"
    
    // Test checkout function
    checkout(); // should throw an error: "Cart is empty. Add items before checkout."
} catch (error) {
    console.error(error.message);
}

try {
    // Test login function
    login("user1", "password1"); // Should log: "Login successful!"
    login("", "password1"); // should throw an error: "Username is required."
    login("user1", ""); // should throw an error: "Password is required."
    login("user1", "wrongPassword"); // should throw an error: "Invalid username or password."
} catch (error) {
    console.error(error.message);
}
