function calculateConfidenceInterval(
  mean,
  standardDeviation,
  sampleSize,
  confidenceLevel
) {
  // Z-score for the given confidence level (e.g., 1.96 for 95% confidence)
  const zScore = 1.96;

  // Standard error of the mean
  const standardError = standardDeviation / Math.sqrt(sampleSize);

  // Margin of error
  const marginOfError = zScore * standardError;

  // Confidence interval
  const lowerBound = mean - marginOfError;
  const upperBound = mean + marginOfError;

  return { lowerBound, upperBound };
}

function rankEmployees(employees) {
  // Sample data for each employee
  const employeeData = [
    { mean: 90, standardDeviation: 0, sampleSize: 1 },
    { mean: 40, standardDeviation: 0, sampleSize: 2 },
    { mean: 50, standardDeviation: 0, sampleSize: 3 },
  ];

  // Calculate confidence intervals for each employee
  const confidenceIntervals = employeeData.map((data) => {
    const { mean, standardDeviation, sampleSize } = data;
    return calculateConfidenceInterval(
      mean,
      standardDeviation,
      sampleSize,
      0.95
    );
  });

  // Rank employees based on lower bound of the confidence interval
  const rankedEmployees = confidenceIntervals
    .map((interval, index) => ({ ...employeeData[index], ...interval }))
    .sort((a, b) => b.lowerBound - a.lowerBound)
    .map((employee, index) => ({ ...employee, rank: index + 1 }));

  return rankedEmployees;
}

// Example usage
const rankedEmployees = rankEmployees();
console.log(rankedEmployees);
