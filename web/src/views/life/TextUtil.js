// import meal3 from "../../assets/image/life_meal3.jpg"
// import meal2 from "../../assets/image/life_meat.jpg"
// import meal1 from "../../assets/image/life_vegatable.jpg"

export function SleepProposal(total_sleep_score) {
    let s
    if (total_sleep_score == 6) { // good sleep

        s = "Good Sleep"
    } else if ((total_sleep_score == 2) || (total_sleep_score == 4)) { // Normal work and rest
        //       
        s = "Take care to rest"
    } else { // Staying up late
        s = " Avoid staying up late"
    }

    return s
}
export function SleepProposal2(total_sleep_score) {
    let s
    if (total_sleep_score == 6) { // good sleep

        s = "Your sleep habits are excellent. Maintaining a good quality of sleep helps you to study and keep your metabolism up. Please keep it up!"
    } else if ((total_sleep_score == 2) || (total_sleep_score == 4)) { // Normal work and rest
        //       
        s = "Your sleeping habits are average. Please take care to adjust your routine to avoid late nights and to ensure that you get a good night's sleep to help you regain your energy and carry out your study work."
    } else { // Staying up late
        s = " Your sleeping habits are very bad. Not only do you often stay up late, but you also don't get enough sleep. This affects your normal development and brain thinking. In severe cases, this can cause irreversible damage to your heart, so correct your routine as soon as possible."
    }

    return s
}

export function SportProposal(total_sport_score) {
    let s
    if (total_sport_score == 6) {
        s = "Good work balance"
    } else if ((total_sport_score == 2) || (total_sport_score == 4)) {
        s = "Need for proper exercise"
    } else {
        s = "Need more exercise"
    }
    return s
}

export function MealProposal(total_meal_score) {
    let s
    if ((total_meal_score - 3) == 6) {

        s = "Three meals a day"
    } else if (((total_meal_score - 3) > 0) && ((total_meal_score - 3) < 6)) {

        s = "Remember to eat"
    } else if ((total_meal_score - 3) < 0) {

        s = "Eating is important"
    }
    return s
}

export function MealProposal2(total_meal_score) {
    let s
    if ((total_meal_score - 3) == 6) {

        s = "Congratulations, you have a very healthy routine and diet. I hope you will continue to do so, as maintaining good health is also the cornerstone of your social life."
    } else if (((total_meal_score - 3) > 0) && ((total_meal_score - 3) < 6)) {

        s = "You need to consume more meat to maintain your protein and vitamin intake. These micronutrients are essential for boosting your body's immune system. A combination of meat and vegetables is an important part of ensuring that your body grows in a healthy way."
    } else if ((total_meal_score - 3) < 0) {

        s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
    }
    return s
}


export function MealSpeciesProposal(meal_score) {
    let s
    if (meal_score == 3) {

        s = "Congratulations, you have a very healthy routine and diet. I hope you will continue to do so, as maintaining good health is also the cornerstone of your social life."

    } else if (meal_score = 1) {
        s = "You need to consume more meat to maintain your protein and vitamin intake. These micronutrients are essential for boosting your body's immune system. A combination of meat and vegetables is an important part of ensuring that your body grows in a healthy way."

    } else {
        s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
    }
    return s
}

// export function MealSpeciesProposal3(meal_score, meal1, meal2, meal3) {
//     let s
//     if (meal_score == 3) {

//         s = meal3
//     } else if (meal_score = 1) {

//         s = meal2
//     } else {
//         s = meal1
//     }
//     return s
// }
// export function MealSpeciesProposal3(meal_score) {
//     let s
//     if (meal_score == 3) {

//         s = "Congratulations, you have a very healthy routine and diet. I hope you will continue to do so, as maintaining good health is also the cornerstone of your social life."

//     } else if (meal_score = 1) {
//         s = "You need to consume more meat to maintain your protein and vitamin intake. These micronutrients are essential for boosting your body's immune system. A combination of meat and vegetables is an important part of ensuring that your body grows in a healthy way."

//     } else {
//         s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
//     }
//     return s
// }


//total function
export function TotalProposal(total_sleep_score, total_sport_score, total_meal_score, meal_score) {
    let s
    if ((total_sleep_score == 6) && (total_sport_score == 6) && (total_meal_score == 9) && meal_score == 3) {
        s = "Congratulations, you have a very healthy routine and diet. I hope you will continue to do so, as maintaining good health is also the cornerstone of your social life."
        return s
    }
    else if ((total_sleep_score == -2) && (total_sport_score == -2) && (total_meal_score == -3) && meal_score == -1) {
        s = "There is something very wrong with your lifestyle. You need to pay attention to the quality of your sleep. Too little sleep can affect your thinking. Nutritional intake is key to ensuring you can grow up healthy and you need to change your eating habits. Finally, exercise is key to boosting your body's metabolism and long periods of inactivity can lead to various diseases."
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "There are some minor problems with your lifestyle. Please focus on daily exercise and make sure you have a balanced diet."

        } else if (total_sleep_score == 2) {
            s = "You need to spend more time focusing on your rest and diet. Staying up late can drain your energy, while a poor diet can hinder your body's metabolism."

        } else if (total_sleep_score == 0) {
            s = "You are living a very problematic lifestyle. It is recommended that you organise your life in a sensible way, with early to bed, early to rise, three meals a day and adequate activity levels being your priority now."

        }
        return s
    }
    //three-equal less than one
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "You have some minor problems with your lifestyle habits. Staying up late or not exercising regularly can drain your energy and make you less effective in your studies. Irregular eating habits can leave your body in sub-optimal health."

        } else if (total_sleep_score == 2) {
            s = "Your habits need to be improved. You need to get enough sleep so that you have the energy to study, overuse of the eyes can cause vision problems and a good diet to give your body the nutrients it needs."

        } else if (total_sleep_score == 0) {
            s = "Your habits are a mess. You need to review your life, go to bed early, get up early, eat three meals a day and get enough activity every day as a basis for healthy student development."

        }
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "You will need to make some adjustments to your lifestyle and it is important to get enough sleep as well as a balanced diet. It is also important to give your body a break by focusing on exercise outside of your studies."

        } else if (total_sleep_score == 2) {
            s = "You need to improve your lifestyle. Eat more vegetables and meat to ensure your nutritional intake. Also take care to combine work and rest by ensuring you get quality sleep and the amount of study you do during the day."

        } else if (total_sleep_score == 0) {
            s = "You have many life issues that need to be improved. Paying attention to your sleep and ensuring it is of good quality is a guarantee that you can live a healthy life. Nutritional intake, with a good mix of meat and vegetables, is the basis for a healthy life. A combination of work and rest and relaxation is the only way to ensure that you can study effectively."

        }
        return s
    }
    else if ((total_sleep_score < total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "You can make adjustments in your diet and sleep. Ensure that you get a good night's sleep and provide your body with vitality. At the same time, making sure you eat three meals a day and have a balanced diet will make your body stronger."

        } else if (total_sleep_score == 2) {
            s = "You have some problems with your routine and eating habits. Staying up late can affect your ability to think and study, so please improve the quality of your sleep. Skipping meals because you are too busy studying can affect your physical development. Not eating on the side is a prerequisite to ensure you get a balanced diet."

        } else if (total_sleep_score == 0) {
            s = "There is something very wrong with your lifestyle habits. Staying up late and eating too much can affect your body shape, deplete your energy and cause chronic illnesses. Irregular eating can affect your physical development, so make changes to your lifestyle."

        }
        return s
    }

    else if ((total_sleep_score > total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "You can focus on your daily diet and exercise. Do eat three meals a day and do not eat in a partial manner. A good balance between study and rest and more exercise will also help you to study."

        } else if (total_sleep_score == 2) {
            s = "You need to pay more attention to your daily rest and the way you eat. A combination of work and rest is an effective way to enhance your studies, and the right amount of exercise will help you develop both physically and mentally. You also need to take care to ensure that your nutritional intake is balanced. Don't let the stresses of life make you neglect your nutritional intake."

        } else if (total_sleep_score == 0) {
            s = "There is something very wrong with your lifestyle, please pay attention to your eating habits and the way you study. Know that ensuring your nutritional intake is the foundation of your healthy life. It is important that you eat three meals a day and have a balanced diet, and then organise your work schedule in a way that allows you to relax."

        }
        return s
    }
    //two-equal less than two
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "You can improve on the way you sleep and study. Ensuring that you get enough sleep will provide you with plenty of energy to complete your studies, and it is also important to have a good balance between study and rest. Increase your daily exercise to improve your quality of life."

        } else if (total_sleep_score == 2) {
            s = "You need to pay more attention to your sleep and exercise. Good sleep habits will promote proper physical development. A combination of work and rest will enable you to perform efficiently in life."

        } else if (total_sleep_score == 0) {
            s = "There is a big problem with your lifestyle. Too little sleep can affect your ability to think and study effectively, while triggering chronic illness. Excessive screen viewing can cause vision problems. Daily exercise ensures your body's normal metabolism, so please adjust your lifestyle."

        }
        return s
    }
    else if ((total_sleep_score == (total_meal_score - 3)) && ((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Your eating habits and sleep patterns can be improved. Having three meals a day and ensuring a regular nutritional intake will help your body develop. A good night's sleep will provide you with a productive learning style."

        } else if (total_sleep_score == 2) {
            s = "You need to pay more attention to your sleep and your three meals a day. Sleep is an important way to renew your metabolism and the three meals a day provide you with the necessary nutritional intake, both of which are fundamental to a healthy life."

        } else if (total_sleep_score == 0) {
            s = "You need to change your lifestyle as soon as possible. Not sleeping can seriously affect your physical development and brain thinking, and can lead to various chronic diseases. Not eating has the greatest impact on your body, preventing you from getting the nutrients your body needs to develop."

        }
        return s
    }
    else if ((total_sleep_score == meal_score * 2) && (meal_score * 2 < (total_meal_score - 3)) && (meal_score * 2 < total_sport_score)) {
        if (total_sleep_score == 4) {
            s = "You have some minor problems with your diet structure and sleeping habits. Please take care to have a balanced diet, as partial eating can interfere with normal nutritional intake leading to some illnesses. Sleep is the foundation of a healthy academic life, so please ensure that you have a good quality sleep."

        } else if (total_sleep_score == 2) {
            s = "Please adjust your diet and sleep patterns. Being a picky eater can affect your normal physical development and can lead to chronic diseases. Staying up late can have a serious impact on your daily life and a good sleep routine is the cornerstone of your academic life."

        } else if (total_sleep_score == 0) {
            s = "There is a big problem with the way you sleep and eat. Staying up late can seriously affect your thinking and memory, as well as potentially triggering chronic illnesses. Severe picky eating can lead to changes in your body shape, as well as stomach problems and various complications. Please adjust your lifestyle as soon as possible."

        }
        return s
    }
    else if ((total_sport_score == (total_meal_score - 3)) && (total_sport_score < meal_score * 2) && (total_sport_score < total_sleep_score)) {
        if (total_sport_score == 4) {
            s = "You need to make some adjustments to your lifestyle. Combining work and play is an effective way to improve your learning and by increasing your daily exercise, you will also boost your diet, improve your nutritional intake and promote your physical development."

        } else if (total_sport_score == 2) {
            s = "You have a problem with your eating habits and study style. You need to first ensure that you have three meals a day to provide you with a regular source of nutrition, and then combine work and rest with an appropriate increase in exercise to improve your study efficiency. Take breaks at regular intervals to reduce eye strain."

        } else if (total_sport_score == 0) {
            s = "There is a big problem with your study and eating habits. Studying for long periods of time without breaks can make you less effective. Make sure you have proper exercise to relieve your body of fatigue. Three meals a day are essential for getting the necessary nutrients your body needs. Please do not neglect your nutritional intake for other things that are essential to ensure your healthy growth."

        }
        return s
    }
    else if ((total_sport_score == meal_score * 2) && (total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3))) {
        if (total_sport_score == 4) {
            s = "You will need to make some adjustments to your studies and diet. Combining work and rest is a way to improve your study efficiency. Please exercise properly to relieve your body of strain after excessive eye use. A balanced diet provides the necessary nutrients your body needs."

        } else if (total_sport_score == 2) {
            s = "You have some problems with the way you study and the structure of your diet. You need to avoid excessive eye use and ensure that you get your daily exercise to boost your metabolism. Food choices are important and a balanced diet will provide the necessary nutrients and prevent the development of chronic diseases."

        } else if (total_sport_score == 0) {
            s = "There is a big problem with your study and diet structure. Eating only meat may lead to changes in your body shape as well as to various chronic diseases. Excessive use of your eyes is not only damaging to your body but also affects your thinking, and lack of necessary exercise can lead to a lack of proper metabolism, which can lead to various chronic diseases."

        }
        return s
    }
    else if (((total_meal_score - 3) == meal_score * 2) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < total_sport_score)) {
        if ((total_meal_score - 3) == 4) {
            s = "You need to pay attention to your eating habits. Three meals a day and balanced nutrition are essential for good health. You should not forget to eat because of the stresses of life."

        } else if ((total_meal_score - 3) == 2) {
            s = "You have a problem with your eating habits. Regularly skipping meals can affect your body's ability to absorb nutrients properly and can lead to chronic diseases. Being a picky eater can affect your body's development and deny your body the necessary nutrients, while excessive meat consumption can increase your body's burden and lead to cardiovascular disease."

        } else if ((total_meal_score - 3) == 0) {
            s = "There is a major problem with your eating habits. Skipping meals can lead to stomach problems, and the lack of nutrition can hinder your development. Severe picky eating can lead to chronic illnesses, so for a healthy life you need to change your eating habits as soon as possible."

        }
        return s
    }
    //one less than three
    else if ((total_sleep_score < total_sport_score) && (total_sleep_score < (total_meal_score - 3)) && (total_sleep_score < meal_score * 2)) {
        // if (total_sleep_score == 6) {

        //     s = "Your sleep habits are excellent. Maintaining a good quality of sleep helps you to study and keep your metabolism up. Please keep it up!"
        // } else 
        if ((total_sleep_score == 2) || (total_sleep_score == 4)) {

            s = "Your sleeping habits are average. Please take care to adjust your routine to avoid late nights and to ensure that you get a good night's sleep to help you regain your energy and carry out your study work."
        } else {

            s = "Your sleeping habits are very bad. Not only do you often stay up late, but you also don't get enough sleep. This affects your normal development and brain thinking. In severe cases, this can cause irreversible damage to your heart, so correct your routine as soon as possible."
        }
        return s
    }
    else if ((meal_score * 2 < total_sport_score) && (meal_score * 2 < total_sleep_score) && (meal_score * 2 < (total_meal_score - 3))) {
        // if (meal_score == 3) {

        //     s = "You have a very healthy diet. Three meals a day will provide you with the nutrients you need to live."
        // } else 
        if ((meal_score * 2 == 2)) {
            s = "You need to consume more meat to maintain your protein and vitamin intake. These micronutrients are essential for boosting your body's immune system. A combination of meat and vegetables is an important part of ensuring that your body grows in a healthy way."

        } else {
            s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."

        }
        return s
    }
    else if ((total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < (meal_score * 2))) {
        // if (total_sport_score == 6) {
        //     s = "Your daily activity level and eye time are healthy. Hope you will continue to do so and remember to take a five-minute break to relieve fatigue after an hour of screen viewing."
        // } else 
        if ((total_sport_score == 2) || (total_sport_score == 4)) {
            s = "You need to be careful to balance daily exercise with work and study. Long working hours can aggravate your body and lead to chronic diseases, so please also take care of your mindset."
        } else {
            s = "You will need to schedule appropriate exercise. Long periods of non-exercise can affect your body shape and significantly reduce the functioning of your organs, which can lead to serious chronic diseases. It is advisable to adjust your daily exercise schedule as soon as possible, for the sake of your body and mind."
        }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) != -2) && ((total_meal_score - 3) != -4) && ((total_meal_score - 3) != -6)) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {
            s = "You may choose to skip a meal in order to lose weight or for other reasons, but this may have long-term consequences for your health. Skipping breakfast or dinner can have an impact on your gut and lead to chronic diseases."

        }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) == -2)) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        // if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {
        s = "There is a huge problem with your daily diet and routine. Not eating for a long time can lead to stunted growth and reduced resistance, which in turn can lead to various diseases. Please adjust your daily routine as soon as possible to ensure that you have the necessary food intake to ensure your body's development."

        // }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && (((total_meal_score - 3) == -4) || ((total_meal_score - 3) == -6))) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        // if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {
        s = "There is a huge problem with your daily diet and routine. Not eating for a long time can lead to stunted growth and reduced resistance, which in turn can lead to various diseases. Please adjust your daily routine as soon as possible to ensure that you have the necessary food intake to ensure your body's development."

        // }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s
    }
}


// total function header
export function TotalHeaderProposal(total_sleep_score, total_sport_score, total_meal_score, meal_score) {
    let s
    if ((total_sleep_score == 6) && (total_sport_score == 6) && (total_meal_score == 9) && meal_score == 3) {
        s = "You have a good lifestyle"
        return s
    }
    else if ((total_sleep_score == -2) && (total_sport_score == -2) && (total_meal_score == -3) && meal_score == -1) {
        s = "Your lifestyle has big problem"
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Maintain a good lifestyle"

        } else if (total_sleep_score == 2) {
            s = "Eat more and stay up less"

        } else if (total_sleep_score == 0) {
            s = "Improve your lifestyle"

        }
        return s
    }
    //three-equal less than one
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Take care to exercise and rest properly"

        } else if (total_sleep_score == 2) {
            s = "Maintain a regular lifestyle and diet"

        } else if (total_sleep_score == 0) {
            s = "Change your lifestyle to a healthier one"

        }
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Pay attention to nutritional balance"

        } else if (total_sleep_score == 2) {
            s = "Get more exercise and sleep better"

        } else if (total_sleep_score == 0) {
            s = "Do more exercise and eat more vegetables"

        }
        return s
    }
    else if ((total_sleep_score < total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Good diet and sleep to help you relax"

        } else if (total_sleep_score == 2) {
            s = "Improve sleep and focus on eating regularity"

        } else if (total_sleep_score == 0) {
            s = "Three meals a day"

        }
        return s
    }

    else if ((total_sleep_score > total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Try to set three meals a day"

        } else if (total_sleep_score == 2) {
            s = "Get a good nutritional balance and exercise"

        } else if (total_sleep_score == 0) {
            s = "Need to change the style of your diet and work"

        }
        return s
    }
    //two-equal less than two
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Get more sleep and less phone time"

        } else if (total_sleep_score == 2) {
            s = "Sleep is a source of vitality"

        } else if (total_sleep_score == 0) {
            s = "Improve your sleep quality and daily exercise"

        }
        return s
    }
    else if ((total_sleep_score == (total_meal_score - 3)) && ((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = "Change the habit of staying up late and skipping meals"

        } else if (total_sleep_score == 2) {
            s = "Improve your sleeping and eating habits"

        } else if (total_sleep_score == 0) {
            s = "Sleep and three meals are important"

        }
        return s
    }
    else if ((total_sleep_score == meal_score * 2) && (meal_score * 2 < (total_meal_score - 3)) && (meal_score * 2 < total_sport_score)) {
        if (total_sleep_score == 4) {
            s = "Change the habit of staying up late and being partial to food"

        } else if (total_sleep_score == 2) {
            s = "Balanced nutrition and less late nights"

        } else if (total_sleep_score == 0) {
            s = "Change your lifestyle and dietary intake as soon as possible"

        }
        return s
    }
    else if ((total_sport_score == (total_meal_score - 3)) && (total_sport_score < meal_score * 2) && (total_sport_score < total_sleep_score)) {
        if (total_sport_score == 4) {
            s = "Exercise and three meals are indispensable"

        } else if (total_sport_score == 2) {
            s = "Balancing work, exercise and diet"

        } else if (total_sport_score == 0) {
            s = "Life can be exhausting but you have to eat"

        }
        return s
    }
    else if ((total_sport_score == meal_score * 2) && (total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3))) {
        if (total_sport_score == 4) {
            s = "Eat more vegetables to protect your eyes"

        } else if (total_sport_score == 2) {
            s = "Eat more meat, exercise more and grow taller"

        } else if (total_sport_score == 0) {
            s = "Vegetables are important, so is exercise"

        }
        return s
    }
    else if (((total_meal_score - 3) == meal_score * 2) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < total_sport_score)) {
        if ((total_meal_score - 3) == 4) {
            s = "Don't overlook the importance of food"

        } else if ((total_meal_score - 3) == 2) {
            s = "Have a balanced diet and eat regularly"

        } else if ((total_meal_score - 3) == 0) {
            s = "Eat more to grow up healthy"

        }
        return s
    }
    //one less than three
    else if ((total_sleep_score < total_sport_score) && (total_sleep_score < (total_meal_score - 3)) && (total_sleep_score < meal_score * 2)) {
        // if (total_sleep_score == 6) {

        //     s = "Your sleep habits are excellent. Maintaining a good quality of sleep helps you to study and keep your metabolism up. Please keep it up!"
        // } else 
        if ((total_sleep_score == 2) || (total_sleep_score == 4)) {

            s = "Maintain early bedtime and length of sleep"
        } else {

            s = "Get more sleep and watch out for sudden death"
        }
        return s
    }
    else if ((meal_score * 2 < total_sport_score) && (meal_score * 2 < total_sleep_score) && (meal_score * 2 < (total_meal_score - 3))) {
        // if (meal_score == 3) {

        //     s = "You have a very healthy diet. Three meals a day will provide you with the nutrients you need to live."
        // } else 
        if ((meal_score * 2 == 2)) {
            s = "Eat some meat, get stronger"
        } else {
            s = "Eating only meat can lead to disease"
        }
        return s
    }
    else if ((total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < (meal_score * 2))) {
        // if (total_sport_score == 6) {
        //     s = "Your daily activity level and eye time are healthy. Hope you will continue to do so and remember to take a five-minute break to relieve fatigue after an hour of screen viewing."
        // } else 
        if ((total_sport_score == 2) || (total_sport_score == 4)) {
            s = "Less screen time and more exercise"
        } else {
            s = "Take a break from the screen"
        }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) != -2) && ((total_meal_score - 3) != -4) && ((total_meal_score - 3) != -6)) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {

            s = "Every meal is important"
        }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) == -2)) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        // if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {

        s = "Not eating can give you stomach problems"        // }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && (((total_meal_score - 3) == -4) || ((total_meal_score - 3) == -6))) {
        // if ((total_meal_score - 3) == 6) {

        //     s = "You have a very healthy diet. You have a good mix of meat and vegetables and are getting the necessary elements for growth. Please continue to do so."
        // } else 
        // if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {

        s = "Eat more to have energy"        // }
        // else if ((total_meal_score - 3) < -2) {

        //     s = "You need to eat more vegetables and fruits. There is a big problem with your diet. Eating only meat can easily make you fat and seriously damage your body's nutritional balance. It is recommended that you change your diet slowly and you will notice a change in your body."
        // }
        return s

    }
}


//total pic fuction 
export function TotalPicProposal(total_sleep_score, total_sport_score, total_meal_score, meal_score, meal1, meal2, meal3, food1, food2, food3, sport1, sport2, sport3, sleep1, sleep2) {
    let s
    if ((total_sleep_score == 6) && (total_sport_score == 6) && (total_meal_score == 9) && meal_score == 3) {
        s = meal3
        return s
    }
    else if ((total_sleep_score == -2) && (total_sport_score == -2) && (total_meal_score == -3) && meal_score == -1) {
        s = sleep1
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = meal1

        } else if (total_sleep_score == 2) {
            s = sleep1

        } else if (total_sleep_score == 0) {
            s = sport2

        }
        return s
    }
    //three-equal less than one
    else if ((total_sleep_score == total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = sleep2

        } else if (total_sleep_score == 2) {
            s = meal1

        } else if (total_sleep_score == 0) {
            s = sport1

        }
        return s
    }
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = sport2

        } else if (total_sleep_score == 2) {
            s = food1

        } else if (total_sleep_score == 0) {
            s = sleep1

        }
        return s
    }
    else if ((total_sleep_score < total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = meal2

        } else if (total_sleep_score == 2) {
            s = sleep2

        } else if (total_sleep_score == 0) {
            s = sleep1

        }
        return s
    }

    else if ((total_sleep_score > total_sport_score) && (total_sport_score == (total_meal_score - 3)) && ((total_meal_score - 3) == meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = meal1

        } else if (total_sleep_score == 2) {
            s = sport1

        } else if (total_sleep_score == 0) {
            s = meal3

        }
        return s
    }
    //two-equal less than two
    else if ((total_sleep_score == total_sport_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = sport2

        } else if (total_sleep_score == 2) {
            s = sleep1

        } else if (total_sleep_score == 0) {
            s = sport1

        }
        return s
    }
    else if ((total_sleep_score == (total_meal_score - 3)) && ((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < meal_score * 2)) {
        if (total_sleep_score == 4) {
            s = meal2

        } else if (total_sleep_score == 2) {
            s = meal1

        } else if (total_sleep_score == 0) {
            s = sleep1

        }
        return s
    }
    else if ((total_sleep_score == meal_score * 2) && (meal_score * 2 < (total_meal_score - 3)) && (meal_score * 2 < total_sport_score)) {
        if (total_sleep_score == 4) {
            s = meal1

        } else if (total_sleep_score == 2) {
            s = food1

        } else if (total_sleep_score == 0) {
            s = food2

        }
        return s
    }
    else if ((total_sport_score == (total_meal_score - 3)) && (total_sport_score < meal_score * 2) && (total_sport_score < total_sleep_score)) {
        if (total_sport_score == 4) {
            s = sport2

        } else if (total_sport_score == 2) {
            s = meal2

        } else if (total_sport_score == 0) {
            s = sport2

        }
        return s
    }
    else if ((total_sport_score == meal_score * 2) && (total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3))) {
        if (total_sport_score == 4) {
            s = sport2

        } else if (total_sport_score == 2) {
            s = sport1

        } else if (total_sport_score == 0) {
            s = sport2

        }
        return s
    }
    else if (((total_meal_score - 3) == meal_score * 2) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < total_sport_score)) {
        if ((total_meal_score - 3) == 4) {
            s = meal1

        } else if ((total_meal_score - 3) == 2) {
            s = sport3

        } else if ((total_meal_score - 3) == 0) {
            s = meal2

        }
        return s
    }
    //one less than three
    else if ((total_sleep_score < total_sport_score) && (total_sleep_score < (total_meal_score - 3)) && (total_sleep_score < meal_score * 2)) {

        if ((total_sleep_score == 2) || (total_sleep_score == 4)) {

            s = sleep2
        } else {

            s = sleep1
        }
        return s
    }
    else if ((meal_score * 2 < total_sport_score) && (meal_score * 2 < total_sleep_score) && (meal_score * 2 < (total_meal_score - 3))) {

        if ((meal_score * 2 == 2)) {
            s = food3
        } else {
            s = food2
        }
        return s
    }
    else if ((total_sport_score < total_sleep_score) && (total_sport_score < (total_meal_score - 3)) && (total_sport_score < (meal_score * 2))) {

        if ((total_sport_score == 2) || (total_sport_score == 4)) {
            s = sport1
        } else {
            s = sport2
        }
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) != -2) && ((total_meal_score - 3) != -4) && ((total_meal_score - 3) != -6)) {

        if ((total_meal_score - 3) >= 0 && (total_meal_score - 3) < 6) {
            s = meal2
        }

        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && ((total_meal_score - 3) == -2)) {

        s = meal3
 
        return s
    }
    else if (((total_meal_score - 3) < total_sport_score) && ((total_meal_score - 3) < total_sleep_score) && ((total_meal_score - 3) < meal_score * 2) && (((total_meal_score - 3) == -4) || ((total_meal_score - 3) == -6))) {

        s = food1
  
        return s
    }
}