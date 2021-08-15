var prompt = require('prompt-sync')();
var num = prompt('Enter the value of n: ');
let factors = new Array();
//check the number is prime or not
function PrimeFactors(num)
{
    for (let i = 1; i <= num; i++) {
        //if number is divisible by number then print
        if (num % i == 0) {
            //pushing the factors in array
            factors.push(i);
        }
    }
}
//calling the primeFactor function
PrimeFactors(num);
//printing the array
console.log('The prime factors of '+num+' are :\n'+factors.join('\n'));