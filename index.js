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
