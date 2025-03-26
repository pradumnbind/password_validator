// Function to validate the password
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}

// Example usage
const password = "Bind@123";
const confirmPassword = "Bind@223";

// Call the function with the entered password and confirmed password
validatePassword(password, confirmPassword);
