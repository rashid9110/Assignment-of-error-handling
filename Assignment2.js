function login(username, password) {
    // Simulate valid credentials for demonstration purposes
    const validCredentials = {
        "user123": "password123",
        "user456": "password456"
    };

    // Check if username is provided
    if (!username) {
        throw new Error("Username is required.");
    }

    // Check if password is provided
    if (!password) {
        throw new Error("Password is required.");
    }

    // Check if the username and password match valid credentials
    if (!validCredentials[username] || validCredentials[username] !== password) {
        throw new Error("Invalid username or password.");
    }

    // If everything is fine, return success message
    return "Login successful!";
}

try {
    console.log(login("user123", "password123")); // Should succeed
    console.log(login("", "password456")); // Should throw an error: "Username is required."
    console.log(login("user456", "")); // Should throw an error: "Password is required."
    console.log(login("invalidUser", "invalidPassword")); // Should throw an error: "Invalid username or password."
} catch (error) {
    console.log(error.message);
}
