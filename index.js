const username = document.getElementById("username").value;
const password = document.getElementById("password").value;
const submit = document.getElementById("submit");
const output = document.getElementById("output");



submit.addEventListener( "click", () => {

    const name = prompt("Enter your user name", "Guest");

    alert("Welcome back " + name);

    output.textContent = "Welcome back " + name;

    
});