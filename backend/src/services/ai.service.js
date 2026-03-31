export const analyzeCode = (code) => {
  let timeComplexity = "O(1)";
  let spaceComplexity = "O(1)";
  let suggestions = [];

  // simple pattern checks
  if (code.includes("for") && code.includes("for")) {
    timeComplexity = "O(n^2)";
    suggestions.push("Nested loops detected, try optimizing.");
  } else if (code.includes("for") || code.includes("while")) {
    timeComplexity = "O(n)";
  }

  if (code.includes("map") || code.includes("filter")) {
    suggestions.push("Consider combining array operations.");
  }

  if (code.includes("recursion")) {
    suggestions.push("Check recursion depth and stack usage.");
  }

  return {
    timeComplexity,
    spaceComplexity,
    suggestions
  };
};