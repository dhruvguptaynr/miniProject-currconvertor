const loggedInUser = localStorage.getItem("loggedInUser");

if (!loggedInUser) {
    window.location.href = "index.html";
}

const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

let rates = {};

async function loadCurrencies() {
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();

        rates = data.rates;

        const currencies = Object.keys(rates);

        currencies.forEach(currency => {
            const option1 = document.createElement("option");
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

    } catch (error) {
        console.log(error);
    }
}

loadCurrencies();
const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");

convertBtn.addEventListener("click", () => {

    const amount = Number(amountInput.value);

    const from = fromCurrency.value;
    const to = toCurrency.value;

    const converted = (amount / rates[from]) * rates[to];

    result.textContent =
        `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});
const saveBtn = document.getElementById("saveFavorite");
const favoritesList = document.getElementById("favorites");

saveBtn.addEventListener("click", () => {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.push({
        from: fromCurrency.value,
        to: toCurrency.value
    });

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();
});
document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
});
function displayFavorites() {
    favoritesList.innerHTML = "";

    const favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    favorites.forEach(pair => {
        const li = document.createElement("li");
        li.textContent = `${pair.from} → ${pair.to}`;
        favoritesList.appendChild(li);
    });
}

displayFavorites();