const numbers = [1, 2, 3, 4, 5];
const mixedData = [4, 5, "3.0 birds", true, "birds2"];

function addNumbers(numbers) {
    
    //return numbers.reduce;
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function findMaxNumber() {
   let greatest = Number.NEGATIVE_INFINITY;
   for (let number of arguments) {
    if (number > greatest) {
        greatest = number;
    }
   }
   return greatest;
}

function addOnlyNumbers(mixedData) {
    let sum = 0;
    for (let data of mixedData) {
        if (parseFloat(data)) {
            sum += parseFloat(data);
        }
    }
    return sum;
}

// function getDigits(in) {
//     let out = "";
//     for (let letter of )
// }

function reverseString(stringIn) {
    let stringOut = "";
    for (let letter of stringIn) {
        stringOut = letter + stringOut;
    }
    return stringOut;
}

function getCurrentDate() {
    return Date.getDate;
}



