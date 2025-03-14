"use strict"
function solveEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  }

  if (discriminant === 0) {
    return [-b / (2 * a)];
  }

  const sqrtD = Math.sqrt(discriminant);
  return [
    (-b + sqrtD) / (2 * a),
    (-b - sqrtD) / (2 * a)
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = (percent / 100) / 12;
  const principalAmount = amount - contribution;
  const monthlyPayment = principalAmount * monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, countMonths) /
      (Math.pow(1 + monthlyInterestRate, countMonths) - 1);
      
  return Number((monthlyPayment * countMonths).toFixed(2));
}