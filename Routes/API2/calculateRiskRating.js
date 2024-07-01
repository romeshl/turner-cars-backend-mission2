// Function to calculate risk rating
function calculateRiskRating(inputText) {
  if (typeof inputText !== "string") {
    throw new Error("Input must be a string");
  }
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  let rating = 0;
  keywords.forEach((keyword) => {
    const matches = inputText.match(new RegExp(keyword, "gi")) || [];
    rating += matches.length;
  });
  if (rating > 5) rating = 5;
  return rating;
}


module.exports = calculateRiskRating; 