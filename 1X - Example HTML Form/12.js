document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const weight = document.getElementById('weight').value;
        const heightCm = parseFloat(document.getElementById('height').value);
        const heightM = heightCm / 100;

        // Calculate BMI
        const bmi = weight / (heightM ** 2);

        // Display the results
        const bmiSpan = document.getElementById('bmi');
        // Determine BMI category
        let category;
        if (bmi < 18.5) {
            category = "underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "overweight";
        } else {
            category = "obese";
        }
        bmiSpan.textContent = bmi.toFixed(2);
        const bmiCategory = document.getElementById('bmiCategory');
        bmiCategory.textContent = category;
    });
});