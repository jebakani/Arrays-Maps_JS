//a.Generate the random dice number
//b,c repeate and store the result in dictionary
//check whether the count is 10
function CheckCount(num)
{
    if(num==10)
    {
        return false;
    }
    return true;
}
let diceMap=new Map();
let count=1;
while(CheckCount(count))
{
    //generate the random number
    let dice=Math.floor(Math.random()*6)+1;
    //if the key is already present
    if(diceMap.has(dice))
    {
        //get the value of the key and add count
       count= diceMap.get(dice)+1;
       //set the dice
       diceMap.set(dice,count);
    }
    else
    {
        //else create the new key with initial count as 1;
        count=1;
        diceMap.set(dice,count);
        
    }
}
let valueArray=Array.from(diceMap.values());
let keyArray=Array.from(diceMap.keys());
//printing the dice number that occure min and max num of time
console.log('The number with max time :'+keyArray[valueArray.indexOf(Math.max(...valueArray))]);
console.log('The number with min time :'+keyArray[valueArray.indexOf(Math.min(...valueArray))]);
console.log(diceMap);