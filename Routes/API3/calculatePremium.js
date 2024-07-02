// Define a function to calculate insurance premiums based on car value and driver rating
function calculatePremium(carValue, driverRating) {
  // Validate input: carValue must be a positive number, driverRating must be a number between 1 and 5
  if (
    typeof carValue !== "number" ||
    carValue <= 0 ||
    typeof driverRating !== "number" ||
    driverRating < 1 ||
    driverRating > 5
  ) {
    // If validation fails, throw an error
    throw new Error("Invalid input values");
  }
  // Calculate yearly premium as car value times driver rating, divided by 100
  const yearlyPremium = (carValue * driverRating) / 100;
  // Calculate monthly premium by dividing the yearly premium by 12
  const monthlyPremium = yearlyPremium / 12;
  // Return the premiums as an object, formatted to two decimal places
  return {
    monthly_premium: Math.round(monthlyPremium * 100)/100,
    yearly_premium: Math.round(yearlyPremium * 100)/100
  };
}
// Duplicate function definition here is likely an error or oversight; ensure to remove or differentiate if intentional

// Export the calculatePremium function to be used in other parts of the application
module.exports = calculatePremium;