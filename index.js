// returns a user's BMI category based on their calculated BMI
function getBMICategory(BMI) {
  if (BMI < 18.5) {
    return "underweight"
  } else if (BMI < 24.9) {
    return "healthy"
  } else if (BMI < 30) {
    return 'overweight'
  } else {
    return 'obese'
  }
}

// Calculate's a user's BMI based on their height in inches and weight in lbs
function calculateBMI(height, weight) {
  if ((height >= 24 && weight >= 40) && (height <= 96 && weight <= 600 )) {
    return ((weight * 0.45) / ((height * 0.025) * (height * 0.025)))
  } else return -1
}

function outputResults(BMI) {
  if (BMI < 0) {
    return("invalid height or weight, please insert valid heights and weights")
  }
  else {
    const category = getBMICategory(BMI)
    return(`your bmi of ${BMI.toFixed(1)} puts you in the ${category} category`)
  }
}

function updateBMI() {
  window.addEventListener('load', function() {
    document.getElementById('bmiForm').addEventListener('submit', function(event) {
      console.log("made it here")
      event.preventDefault()
    
      const weight = document.getElementById('weight').value
      const height = document.getElementById('height').value
    
      const bmi = calculateBMI(weight, height)
      const category = getBMICategory(bmi)
      document.getElementById('results').innerHTML = outputResults(bmi, category)
    });
  });
  
}

// get user's height and weight
/*
const args = process.argv.slice(2)
const height = args[0]
const weight = args[1]

// calculate the results based on the two inputs height and weight, output results
const BMI = calculateBMI(height, weight)
console.log(outputResults(BMI))
*/

// Add exports to the functions
module.exports = { getBMICategory, calculateBMI, outputResults };

window.calculateBMI = calculateBMI;
window.getBMICategory = getBMICategory;
window.outputResults = outputResults;