let array = [4, 16, 28, 40];
function PerfectNum(array) {
    let number, perfect = [];
    for (let i = 0; i < array.length; i++) {
        number = array[i];
        let sum = 0;
        for (let j = 0; j < number; j++) {
            if (number % j == 0) {
                sum += j;
            }

        }
        if (sum == number) {
            perfect.push(number);
        }

    }
    return perfect;
}
console.log(PerfectNum(array));
document.write("Perfect Number:" + (PerfectNum(array)));

