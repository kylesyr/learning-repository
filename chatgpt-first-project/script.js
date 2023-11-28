// Write a JavaScript program that performs temperature conversions between Celsius and Fahrenheit

// Declare variables
let fahrenheit;
let celsius;
let temperature = 30;

// Define functions for temperature conversion
function celsiusToFarenheit(celsius) {
    return (celsius * 9 / 5) + 32;
};

function farenheitToCelsius(farenheit) {
    return (farenheit - 32) * 5 / 9;
};

// Prompt the user to select the conversion type
const question = prompt("Enter 1 to convert celsius to farenheith or 2 to convert farenheit to celsius.");

// Use if/else statements to perform the conversion based on user input
if (question === '1') {
    let result = celsiusToFarenheit(temperature);
    console.log(`${temperature}°C is equal to ${result}°F`);
} else if (question === '2') {
    let result = farenheitToCelsius(temperature);
    console.log(`${temperature}°F is equal to ${result}°C`);
} else {
    console.log("Invalid input. Please enter '1' or '2' for a conversion.");
};