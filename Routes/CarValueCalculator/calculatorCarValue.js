function calculateCarValue(model, year) {
    // Validate the inputs
    const currentYear = new Date().getFullYear();
    if (
      !model.trim() || // Check if model is not just whitespace
      typeof model !== "string" || // Ensure model is a string
      typeof year !== "number" || // Ensure year is a number
      year < 1950 || // Year must be no earlier than 1950
      year > currentYear // Year cannot be in the future
    ) {
      throw new Error("Invalid input"); // Throw error for invalid inputs
    }
    // Convert model to uppercase to simplify position calculation
    model = model.toUpperCase();
  
    let alphabetSum = 0;
  
    // Calculate the sum of positions of alphabets in the model name
    for (let char of model) {
      if (char >= "A" && char <= "Z") { // Ensure character is an alphabet
        alphabetSum += char.charCodeAt(0) - "A".charCodeAt(0) + 1; // Calculate position in the alphabet (1-26)
      }
    }
  
    // Calculate the car value
    let carValue = alphabetSum * 100 + year; // Formula to calculate car value
    return { car_value: carValue }; // Return the calculated value
  }
  
  // Export the carValue function to be used in other parts of the application
  module.exports = calculateCarValue;