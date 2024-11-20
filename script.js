// 1. Dynamic Greeting Based on Time of Day
function displayGreeting() {
    const greetingElement = document.querySelector('header h1');
    const currentHour = new Date().getHours();
    let greeting = 'Welcome to Our Team';

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good Morning! Welcome to Our Team';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon! Welcome to Our Team';
    } else {
        greeting = 'Good Evening! Welcome to Our Team';
    }

    greetingElement.textContent = greeting;
}

// 2. Toggle Navigation Menu for Mobile
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show'); // Toggle the "show" class
}

// Initialize JavaScript Features
document.addEventListener('DOMContentLoaded', () => {
    displayGreeting();

    const toggleMenuButton = document.getElementById('toggle-menu');
    if (toggleMenuButton) {
        toggleMenuButton.addEventListener('click', toggleMenu);
    }
});
