export function bmiProposal(bmi) {
  let s
  if (bmi >= 24 && bmi <= 27.9) { //过重
//       体重过重不仅影响人的外观，对身体还会产生严重的危害。其中比较严重的危害是高血压，因为当体内存在过多脂肪时，会存在大量的钠。这些钠会促使高血压的产生。除此之外，超标的体重还会导致糖尿病和胆结石等并发症。
    s =  "Being overweight not only affects a person's appearance, it can also have serious harmful effects on the body. One of the more serious dangers is high blood pressure, because when there is too much fat in the body, there is a lot of sodium present. This sodium can contribute to the development of high blood pressure. In addition to this, excess weight can lead to complications such as diabetes and gallstones."
  } else if (bmi >= 28) { // 肥胖
//       肥胖对人的影响十分巨大。肥胖会导致显著增加冠心病和心血管疾病的发病概率。肥胖还会导致青少年的生长发育异常，智力障碍，内分泌紊乱。同时，由于肥胖而产生的心理问题也导致了许多社会问题的发生。
    s = "The effects of obesity on people are enormous. Obesity leads to a significant increase in the probability of developing coronary heart disease and cardiovascular disease. Obesity also leads to abnormal growth and development, mental retardation and endocrine disorders in adolescents. At the same time, the psychological problems that arise from obesity lead to many social problems"
  } else if(bmi <= 18.4){ // 偏瘦
    //这意味着身体没有获得所需的卡路里，而且可能错过了身体所需的关键维生素和营养素。体重过轻会导致生长发育问题（尤其是青少年）、骨骼脆弱、免疫系统功能减退、贫血、生育问题及许多其他并发症
    s = "This means that the body is not getting the calories it needs and may be missing out on key vitamins and nutrients that the body needs. Being underweight can lead to growth problems (especially in teenagers), weak bones, a weakened immune system, anaemia, fertility problems and many other complications"
  }else { //正常
    // 恭喜您您的体重处于健康范围。达到从饮食中摄取的卡路里量和通过肢体活动消耗的卡路里量之间的平衡是至关重要的，也是您健康生活的保障
    s = "Congratulate yourself on being in a healthy weight range. Achieving a balance between the amount of calories you consume from your diet and the amount of calories you burn through physical activity is essential and guarantees you a healthy life"
  }

  return s
}

export function heartDiseaseProposal(score) {
  return "Coronary heart disease was the number one cause of death worldwide in 2013. With advances in medical technology, the probability of developing the disease is now significantly lower, but prevention of coronary heart disease is an integral part of our healthy lives"
}

export function bloodPressureProposal(pressure) {
  return "Hypertension is very common in young people and is thought to pose a risk of developing other diseases in the long term, so preventing it is of great importance"
}
