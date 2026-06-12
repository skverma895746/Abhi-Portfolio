const welcomeScreen = document.getElementById("welcomeScreen");
const greeting = document.getElementById("timeGreeting");
const hour = new Date().getHours();

if (greeting) {
    if (hour < 12) {
        greeting.textContent = "Good Morning";
    } else if (hour < 17) {
        greeting.textContent = "Good Afternoon";
    } else {
        greeting.textContent = "Good Evening";
    }
}

document.getElementById("viewPortfolioButton")?.addEventListener("click", () => {
    welcomeScreen?.classList.add("hidden");
});

document.getElementById("goBackButton")?.addEventListener("click", () => {
    history.back();
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = "mailto:abhialokpal2143@gmail.com";
});
