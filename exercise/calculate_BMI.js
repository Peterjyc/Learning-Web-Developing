function bmi(weight, height) {
  const BMI = weight / height**2
  return (BMI<= 18.5) ? "Underweight" :
         (BMI<= 25.0)? "Normal" :
         (BMI<= 30.0) ? "Overweight": "Obese" 
}
