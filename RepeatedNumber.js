//function to find the repeateddigit
function FindRepeatedDigit(num)
{
    //if number is >11
    if(num>=11)
    {
        //if first and last digit is equal store it in array
        if(num%10==Math.floor(num/10))
        {
            digitArray.push(num);
        }
    }
}
let digitArray =new Array();
for(let i=11;i<100;i++)
{
    FindRepeatedDigit(i);
}
console.log(digitArray.join('\n'));