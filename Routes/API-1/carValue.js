//carValue.js

// Define a function to calculate the value of a car based on its model and year
function carValue(model, year) {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Validate input types: model must be a string, and year must be a number and not NaN
    if (typeof model !== 'string' || typeof year !== 'number' || isNaN(year)) {
        return { error: 'Invalid input. Please provide a valid model (string) and year (number).' };
    }

    // Ensure the provided year is not in the future
    if (year > currentYear) {
        return { error: 'Year cannot be in the future. Please provide a valid past year.' };
    }

    // Standardize the model string for consistent processing
    const cleanedModel = model.toUpperCase().replace(/\s+/g, '');

    // Initialize a variable to hold the sum of the positions of each letter in the alphabet
    let alphabetSum = 0;
    for (const char of cleanedModel) {
        // Only process uppercase letters
        if (char >= 'A' && char <= 'Z') {
            // Calculate the position of the letter in the alphabet and add it to the sum
            alphabetSum += char.charCodeAt(0) - 64; // 'A' is 1, 'B' is 2, ...
        }
    }

    // Set the base value of the car
    const baseValue = 5000;
    // Calculate the age of the car
    const age = currentYear - year;
    // Calculate the initial quote based on the base value, alphabet sum, and year
    let quote = baseValue + alphabetSum * 100 + year;

    // Adjust the quote based on the age of the car
    if (age < 5) {
        quote += 1000; // Newer models get a higher quote
    } else if (age > 10) {
        quote -= 500; // Older models get a discount
    }

    // Return the calculated car value
    return { car_value: quote };
}

// Export the carValue function to be used in other parts of the application
module.exports = carValue;