function calculatePremium(carValue, driverRating) {
  if (
    typeof carValue !== "number" ||
    carValue <= 0 ||
    typeof driverRating !== "number" ||
    driverRating < 1 ||
    driverRating > 5
  ) {
    throw new Error("Invalid input values");
  }
  const yearlyPremium = (carValue * driverRating) / 100;
  const monthlyPremium = yearlyPremium / 12;
  return {
    yearlyPremium: yearlyPremium.toFixed(2),
    monthlyPremium: monthlyPremium.toFixed(2),
  };
}


module.exports = calculatePremium;