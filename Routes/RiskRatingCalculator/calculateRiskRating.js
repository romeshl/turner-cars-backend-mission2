// Function to calculate risk rating based on input text
function calculateRiskRating(inputText) {
  // Validate input to ensure it's a non-empty string
  if (typeof inputText !== "string" || !inputText.trim()) {
    throw new Error("Invalid input");
  }

  // Define keywords that increase the risk rating
  const keywords = ["collide", "crash", "scratch", "bump", "smash", "accident"];

  // Calculate the rating by counting occurrences of each keyword in the input text
  let rating = keywords.reduce((acc, keyword) => {
    // Count occurrences of the current keyword (case-insensitive)
    const matchCount = (inputText.match(new RegExp(keyword, "gi")) || [])
      .length;
    // Accumulate the counts to form the total rating
    return acc + matchCount;
  }, 0);

  // If no keywords are found, throw an error indicating invalid input
  if (rating < 1) {
    throw new Error("Invalid input");
  }

  // Cap the rating at 5 to ensure it does not exceed the maximum allowed value
  return Math.min(rating, 5);
}

// Export the function for use in other modules
module.exports = calculateRiskRating;
