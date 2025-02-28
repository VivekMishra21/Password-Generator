function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumber = document.getElementById("number").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let allowChars = "";

    if (includeLowerCase) allowChars += lowerCaseChar;
    if (includeUpperCase) allowChars += upperCaseChar;
    if (includeNumber) allowChars += numberChars;
    if (includeSymbols) allowChars += symbolsChars;

    if (allowChars === "") {
        alert("Please select at least one option.");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowChars.length);
        password += allowChars[randomIndex]; // Corrected this line
    }

    document.getElementById("password").value = password;
}

// Event Listener for button click
document.getElementById("generate").addEventListener("click", generatePassword);
