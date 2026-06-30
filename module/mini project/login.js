const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("users.json");
        const users = await response.json();

        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (user) {
            // Save login status
            localStorage.setItem("loggedInUser", username);

            // Go to dashboard
            window.location.href = "dashboard.html";
        } else {
            error.textContent = "Invalid username or password!";
        }

    } catch (err) {
        error.textContent = "Unable to load user data.";
    }
});