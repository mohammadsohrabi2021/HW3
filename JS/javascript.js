// //سوال اول
// let a =prompt("لطفا یک عدد رو وارد کنید....");
// let b = Math.sqrt(a);
// let out = Math.round(b);
// console.log(out+1);

// //سوال دوم
// let add =prompt("لطفا یک عدد رو وارد کنید....");
// let sum =0;
// for (let i = 1; i < add; i++) {
//     if (add % i ==0 ) {
//         sum +=i
//     }
// }
// if (Number(add) === sum) {
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// //سوال سوم

// let a =prompt("لطفا عدد اول رو وارد کنید...!");
// let b =prompt("لطفا عدد دوم رو وارد کنید...!");
// let c =prompt("لطفا عدد سوم رو وارد کنید...!");

// if ( a ** 2 + b ** 2 === c ** 2) {
//     console.log("yes");
// }
// else{
//     console.log("No");
// }

// // سوال چهارم
// function PersonalInformation(name ,family , Age , phone , email) {
//     const Person ={
//         firstName: name,
//         lastName: family,
//         age: Age,
//         phoneNumber: phone,
//         email:email,
//     };
//     return Person
// }
// console.log(PersonalInformation('mohammad','sohrabi','20','09186333667','mohammadsohrabi141@gmail.com'));

// //سوال پنجم
// let weight = parseFloat(prompt("لطفا وزن خود را وارد کنید.."));
// let stature = parseFloat(prompt("لطفا قد خود را وارد کنید.."));
// const BMI = (weight / 10000) / (stature / 100) ** 2 ;//1.71قد به صورت اعشاری وارد شود
// // const BMI = weight / ((stature / 100) ** 2 );//قد به صورت عدد صحیح وارد شود 171

// if (BMI < 18.5) {
//   console.log(`Underweight ${BMI}`);
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log(`Normal ${BMI}`);
// } else if (BMI >= 25 && BMI < 30) {
//   console.log(`Overweight ${BMI}`);
// } else if (BMI >= 30) {
//   console.log(`Obese ${BMI}`);
// } else {
//   console.log("Error");
// }

// //سوال ششم

// let Score =parseInt(prompt("نمره اولیه رو وارد کنید."));
// let travelDay =parseInt(prompt("لطفا تعداد روز هایی که نوروز سفر بوده را وارد کنید."));
// const auxiliaryScore = 6;
// if (Score-travelDay < 0) {
//     console.log(0);   
// }
// else if (travelDay === 0 && Score === 14) {
//     console.log(auxiliaryScore + Score);
// }
// else if(travelDay === 7){
//     console.log(Score);
// }
// else if (travelDay > 7 ) {
//     console.log(Score-travelDay);   
// }
