const numbers = [1, 2, 3, 4, 5];
const mixedData = [4, 5, "3.0 birds", true, "birds2"];
let str = "sdg1sf23hgasd4df5vs6re7hre8hsv9ngf";

function addNumbers(numbers) {
    return numbers.reduce((total, number) => {
        return total + number;
    });
}

function findMaxNumber() {
    return Math.max(...arguments);
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

function getDigits(str) {
    let digits = str.match(/\d/g);
    return digits.join("");
}

function reverseString(stringIn) {
    let stringOut = "";
    for (let letter of stringIn) {
        stringOut = letter + stringOut;
    }
    return stringOut;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function getCurrentDate() {
    let date = new Date();
    return days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}