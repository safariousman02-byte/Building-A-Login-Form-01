const output = document.getElementById("output");
const form = document.querySelector("form");

const validUsername = "admin";
const validPassword = "pass123";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        output.textContent = `Welcome back, ${username}!`;
        alert("Login successful");
    } else {
        output.textContent = "Login failed. Try again.";
        alert("Invalid username or password.");
    }

    
});