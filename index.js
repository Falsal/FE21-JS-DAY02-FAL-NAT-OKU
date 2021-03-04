//Basic 1 | Crystal Gazer

function crystalGazer(numberChildren, partnerName, geographicLocation, jobTitle) {
  console.log(`You will be a ${jobTitle} in location ${geographicLocation} and married to ${partnerName} with ${numberChildren} children.`);
}
crystalGazer(5, 'Thomas', 'Vienna', 'Baker');


//Basic 2 | Age Calculator
function ageCalculator(birthYear, currentYear) {
  let ageDifference = currentYear - birthYear;
  console.log(`You are ${ageDifference} or ${ageDifference +1}`);
}
ageCalculator(1985, 2021);


//Basic 3 | Age Calculator-improved
function ageCalculatorNew(birthYear) {
  let d = new Date();

  let ageDifference = d.getFullYear() - birthYear;
  console.log(`You are ${ageDifference} or ${ageDifference +1}`);
}
ageCalculatorNew(1985);


//Basic 4 | Degree-Radian Conversion
// convert degrees to radians
function degreesToRadians(degrees) {
  let radians = degrees * (3.14159265359/180);
  console.log(radians);
}
degreesToRadians(90);


//Basic 5 | Area and Volume of a box
//Create a function that calculates the area and volume of a box.

function calculationAreaVolume(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;
  let solution = new Array();
  solution[0] = area;
  solution[1] = volume;
  return (solution);
}
let area = calculationAreaVolume(2,7,1)[0];
let volume = calculationAreaVolume(10,7,1)[1];

console.log(`The area of the box is: ${area}, The volume of the box is: ${volume}`);

//Intermediary 1 | CAPITALIZE
((precapit)=> console.log(`${precapit[0].toUpperCase() + precapit.substring(1)}`))('i am a web developer')

//Intermediary 2 | AVERAGE GRADE
function sumAverage(a,b,c){
let sumOf=a+b+c;
let averageOf=sumOf/3;
document.write(`Sum of grades is ${sumOf} and Average is ${averageOf}`)
}

sumAverage(3,4,5)


//1 Advanced | Time Convert
function timeConvert(minutes) {
  let hours = Math.floor(minutes / 60); // gives the smaller number after komma
  let remainder = minutes % 60;
  
  document.write(`${minutes} minutes = ${hours} hour(s) and ${remainder} minutes`);
}
document.write('<br>');
timeConvert(200);

/* 
console.log(Math.ceil(1.7)); // gives the higher number after komma
console.log(Math.ceil(1.3));
console.log(Math.floor(1.7));*/


// Challenge ()
// input number (calling the function with a param)
function atm(amount){
  let R100= Math.floor(amount/100);
  console.log(` R100: ${R100}`)
  let remaining100 = amount % 100;
  let R50= Math.floor(remaining100/50);
  let remaining50 = remaining100 % 50;
  console.log(` R50: ${R50}`)
  let R20= Math.floor(remaining50/20);
  let remaining20 = remaining50 % 20;
  console.log(` R20: ${R20}`)
  let R10= Math.floor(remaining20/10);
  console.log(` R10: ${R10}`)
  
  console.log(`Hundred : ${R100}, Fifty: ${R50} , Twenty: ${R20}, Ten: ${R10}`)
}
atm(280)