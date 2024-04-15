// Category score function
function scoreCategory(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 80 && score <= 89) {
        return "Very Good";
    } else if (score >= 70 && score <= 79) {
        return "Pass";
    } else {
        return "Fail";
    }
}

// Sample Test
console.log(scoreCategory(95)); // Output: "Excellent"
console.log(scoreCategory(85)); // Output: "Very Good"
console.log(scoreCategory(75)); // Output: "Pass"
console.log(scoreCategory(60)); // Output: "Fail"
