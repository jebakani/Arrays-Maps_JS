var prompt = require('prompt-sync')();
var num = prompt('Enter the number of elements in array: ');
let valueArray=new Array();
let sumArray=new Array();
//Add element to value array from the user
for(let i=0;i<num;i++)
{
    let value=prompt();
    valueArray.push(parseInt(value));
}
//function to find the three integer value add to zero 
function FindTriplet()
{
    for(let i=0;i<num-2;i++)
    {
        for(let j=i+1;j<num-1;j++)
        {
            for(let k=j+1;k<num;k++)
            {
                if(valueArray[i]+valueArray[j]+valueArray[k]==0)
                {
                    //create the temp array and store the value in the array
                    let tempArray=new Array();
                    tempArray.push(valueArray[i],valueArray[j],valueArray[k])
                    //push the stored temp array in the sum array to get separate array
                    sumArray.push(tempArray);
               }
            }
        }
    }
}
FindTriplet();
//print the sum
console.log(sumArray);

