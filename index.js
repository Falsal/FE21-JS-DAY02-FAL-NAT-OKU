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
