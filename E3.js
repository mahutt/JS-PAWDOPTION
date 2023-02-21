const numbers = [1, 2, 3, 4, 5];

function addNumbers(numbers) {
    
    //return numbers.reduce;
    let sum = 0;
    for (let number in numbers) {
        sum += numbers[number];
    }
    return sum;
}