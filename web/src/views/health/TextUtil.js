export function bmiProposal(bmi) {
  let s
  if (bmi >= 24 && bmi <= 27.9) { 
         
    s = "Being overweight not only affects a person's appearance, it can also have serious harmful effects on the body. One of the more serious dangers is high blood pressure, because when there is too much fat in the body, there is a lot of sodium present. This sodium can contribute to the development of high blood pressure. In addition to this, excess weight can lead to complications such as diabetes and gallstones."
  } else if (bmi >= 28) { 
      
    s = "The effects of obesity on people are enormous. Obesity leads to a significant increase in the probability of developing coronary heart disease and cardiovascular disease. Obesity also leads to abnormal growth and development, mental retardation and endocrine disorders in adolescents. At the same time, the psychological problems that arise from obesity lead to many social problems."
  } else if (bmi <= 18.4) { 

    s = "This means that the body is not getting the calories it needs and may be missing out on key vitamins and nutrients that the body needs. Being underweight can lead to growth problems (especially in teenagers), weak bones, a weakened immune system, anaemia, fertility problems and many other complications."
  } else { 
 
    s = "Congratulate yourself on being in a healthy weight range. Achieving a balance between the amount of calories you consume from your diet and the amount of calories you burn through physical activity is essential and guarantees you a healthy life."
  }

  return s
}

export function heartDiseaseProposal(heart_disease_score) {
  let s
  if (heart_disease_score < 0) {
    s = "This means your chances of developing coronary heart disease are relatively low, so keep it up. Coronary heart disease was once the number one cause of death worldwide, but with advances in technology, there is an emphasis on coronary heart disease prevention."
  } else if (heart_disease_score >= 17) {
    s = "You have a high probability of developing coronary heart disease. You will need to adjust your diet and keep warm in your daily life. It is advisable to go to the hospital for a check-up so that a specialist can advise you. In the meantime, you can also consult a specialist through our online chat system."
  } else {
    s = " Your probability of developing coronary heart disease is at a normal value. Please take care to avoid overexertion and avoid smoking, which are the main triggers for coronary heart disease."
  }
  return s
}

export function bloodPressureProposal(high_blood_pressure, low_blood_pressure) {
  let s
  if (high_blood_pressure > 139 || low_blood_pressure > 89) { //high pressure
    //       
    s = "You are already in the category of hypertension. In this range you need to maintain your medication and keep your salt intake under strict control. In the meantime, please keep your mind at ease in your daily life."
  } else if (high_blood_pressure < 90) { // low pressure
    //       
    s = "You are in the low blood pressure range. You may experience dizziness in general. Please maintain proper exercise and eat a healthy diet. If the condition becomes apparent, seek medical attention."
  } else {
    s = "Your blood pressure is at normal values. In your daily life, please avoid smoking and control your alcohol intake. Modifying your diet and routine is the secret to maintaining good health."
  }
  return s
}

export function warn(high_blood_pressure, low_blood_pressure) {
  if (high_blood_pressure > 150 || low_blood_pressure < 40)
    return "WARNING : You need to contact your doctor!! "
}
