function bmi(){
    //get feet and inches value
    let feet= document.querySelector(".feet").value;
    let inch= document.querySelector(".inch").value;

    let metre = feet + "." + inch;

    let height = metre / 3.2808;
    let weight = document.querySelector(".weight").value;

    let bmi = weight / Math.pow(height, 2);
    if(bmi < 18.5){
        document.querySelector("p").innerHTML = "Your body Mass Index (BMI) is-: " + (Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is Under Weight";
    }
    else if(bmi > 18.5 && bmi <= 24.9){
        document.querySelector("p").innerHTML = "Your body Mass Index (BMI) is-: " + (Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in Normal";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        document.querySelector("p").innerHTML = "Your body Mass Index (BMI) is-: " + (Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in over Weight";
    }
    else if(bmi > 30){
        document.querySelector("p").innerHTML = "Your body Mass Index (BMI) is-: " + (Math.round(bmi*100)/100).toFixed(2)+"<br>"+"Index Value is in Obesity";
    }
    
}
document.querySelector(".btn").addEventListener("click", bmi);