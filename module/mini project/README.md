💱 Currency Converter Dashboard

A finance-focused web application built using HTML, CSS, and Vanilla JavaScript. The project demonstrates user authentication, API integration, DOM manipulation, and local storage as part of a Web Development Mini Project.

📌 Project Overview

This application allows users to:

Log in using credentials stored in a local users.json file.
View a currency converter dashboard.
Convert currencies using live exchange rates from an Open API.
Save favorite currency pairs using localStorage.
Log out securely.
🚀 Features
🔐 User Authentication
Login form with username and password.
Credentials are fetched dynamically from users.json using the JavaScript fetch() API.
Error handling for invalid login credentials.
Redirects to the dashboard after successful authentication.
💱 Currency Converter
Fetches real-time exchange rates from the ExchangeRate API.
Convert between multiple international currencies.
Displays conversion results instantly.
⭐ Favorite Currency Pairs
Save frequently used currency pairs.
Favorites are stored using localStorage.
Favorites remain available even after refreshing the page.
🚪 Logout
Clears the login session.
Redirects the user back to the login page.
🛠️ Technologies Used
HTML5
CSS3
JavaScript (ES6)
Fetch API
Local Storage
Git & GitHub
ExchangeRate API
▶️ How to Run the Project
Clone the repository.
git clone https://github.com/your-username/miniProject-currconvertor.git
Open the project in Visual Studio Code.
Install the Live Server extension.
Right-click on index.html.
Select Open with Live Server.

Note: Opening the HTML file directly from your file system (file://) will prevent fetch() from loading users.json.