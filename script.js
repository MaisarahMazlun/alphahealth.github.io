function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100; // convert height to meters
    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("bmiResult").innerText = `Your BMI is ${bmi} (${category}).`;
}

// Example of additional JavaScript functionality
function dynamicGreeting() {
    const hours = new Date().getHours();
    let greeting = "Hello";

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    alert(greeting);
}

// Call the dynamicGreeting function when the homepage loads
window.onload = function() {
    if (window.location.pathname === '/index.html') {
        dynamicGreeting();
    }
};
