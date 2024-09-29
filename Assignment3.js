function processPayment(amount, cardNumber, expirationDate) {
    // Check if the payment amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    // Validate the card number (simple regex for demonstration purposes)
    const cardNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
        throw new Error("Invalid card number.");
    }

    // Check if the expiration date is provided and not in the past
    if (!expirationDate) {
        throw new Error("Invalid expiration date.");
    }

    const currentDate = new Date();
    const [month, year] = expirationDate.split('/').map(Number);
    const expiration = new Date(year + 2000, month ); // Assuming year is in 'YY' format
    console.log(currentDate)
    console.log(expiration)

    if (expiration < currentDate) {
        throw new Error("Invalid expiration date.");
    }

    // If all validations pass, process the payment
    return "Payment processed successfully!";
}

try {
    console.log(processPayment(50.25, "1234-5678-9012-3456", "12/25")); // Should succeed
    console.log(processPayment(-10, "invalidcardNumber", "05/22")); // Should throw: "Invalid payment amount."
    console.log(processPayment(100.75, "9876-5432-1098-7654", "01/20")); // Should throw: "Invalid expiration date."
} catch (error) {
    console.log(error.message);
}
