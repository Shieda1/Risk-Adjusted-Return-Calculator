// https://calculator.swiftutors.com/risk-adjusted-return-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const riskAdjustedReturnRadio = document.getElementById('riskAdjustedReturnRadio');
const portfolioReturnRadio = document.getElementById('portfolioReturnRadio');
const riskFreeReturnRadio = document.getElementById('riskFreeReturnRadio');
const standardDeviationofPortfolioReturnRadio = document.getElementById('standardDeviationofPortfolioReturnRadio');

let riskAdjustedReturn;
let portfolioReturn = v1;
let riskFreeReturn = v2;
let standardDeviationofPortfolioReturn = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

riskAdjustedReturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Portfolio Return';
  variable2.textContent = 'Risk Free Return';
  variable3.textContent = 'Standard Deviation of Portfolio Return';
  portfolioReturn = v1;
  riskFreeReturn = v2;
  standardDeviationofPortfolioReturn = v3;
  result.textContent = '';
});

portfolioReturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk-Adjusted Return';
  variable2.textContent = 'Risk Free Return';
  variable3.textContent = 'Standard Deviation of Portfolio Return';
  riskAdjustedReturn = v1;
  riskFreeReturn = v2;
  standardDeviationofPortfolioReturn = v3;
  result.textContent = '';
});

riskFreeReturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk-Adjusted Return';
  variable2.textContent = 'Portfolio Return';
  variable3.textContent = 'Standard Deviation of Portfolio Return';
  riskAdjustedReturn = v1;
  portfolioReturn = v2;
  standardDeviationofPortfolioReturn = v3;
  result.textContent = '';
});

standardDeviationofPortfolioReturnRadio.addEventListener('click', function() {
  variable1.textContent = 'Risk-Adjusted Return';
  variable2.textContent = 'Portfolio Return';
  variable3.textContent = 'Risk Free Return';
  riskAdjustedReturn = v1;
  portfolioReturn = v2;
  riskFreeReturn = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(riskAdjustedReturnRadio.checked)
    result.textContent = `Risk-Adjusted Return = ${computeRiskAdjustedReturn().toFixed(2)} %`;

  else if(portfolioReturnRadio.checked)
    result.textContent = `Portfolio Return = ${computePortfolioReturn().toFixed(2)} %`;

  else if(riskFreeReturnRadio.checked)
    result.textContent = `Risk Free Return = ${computeRiskFreeReturn().toFixed(2)} %`;

  else if(standardDeviationofPortfolioReturnRadio.checked)
    result.textContent = `Standard Deviation of Portfolio Return = ${computeStandardDeviationofPortfolioReturn().toFixed(2)}`;
})

// calculation

function computeRiskAdjustedReturn() {
  return (((Number(portfolioReturn.value) / 100) - (Number(riskFreeReturn.value) / 100)) / Number(standardDeviationofPortfolioReturn.value)) * 100;
}

function computePortfolioReturn() {
  return (((Number(riskAdjustedReturn.value) / 100) * Number(standardDeviationofPortfolioReturn.value)) + (Number(riskFreeReturn.value) / 100)) * 100;
}

function computeRiskFreeReturn() {
  return ((Number(portfolioReturn.value) / 100) - ((Number(riskAdjustedReturn.value) / 100) * Number(standardDeviationofPortfolioReturn.value))) * 100;
}

function computeStandardDeviationofPortfolioReturn() {
  return ((Number(portfolioReturn.value) / 100) - (Number(riskFreeReturn.value)) / 100) / (Number(riskAdjustedReturn.value) / 100);
}