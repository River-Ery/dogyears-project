var myAge = 23; // This is my current age
var earlyYears = 2; //The value saved to this variable will change in the next line
earlyYears *= 10.5; // The first two years of a dogs life are equal to 10.5 human years. By using *= 10.5 we can account for these early years
var laterYears = myAge - 2; // This line is setting the variable for later years, since early years is a seperate variable with a value of 2 we will be subtracting two years from our age here
laterYears *= 4; //this line is taking all years after 2 and multiplying them by 4, after the first two years 1 human year is = to 4 dog years
var myAgeInDogYears = earlyYears + laterYears; // to get our age in dog years we add the early years and later years together assinging it to a new variable 
//console.log(myAgeInDogYears);
var myName = 'River'.toLowerCase(); // This line assings my name to a variable and uses the toLowerCase method to make all letters lowercase
//console.log(myName);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// The code on line 12 will display a short sentance stating my name, human age, and dog age. I used string interpolation to insert all my variables into this code. This is the end of my code :^)
