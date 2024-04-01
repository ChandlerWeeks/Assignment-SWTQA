window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = window.calculateBMI(weight, height);
    const category = window.getBMICategory(bmi);
    const result = window.outputResults(bmi, category);
    document.getElementById('result').innerHTML = result;
  });
});