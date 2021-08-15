console.log("Implementing the array");
//p1-A-Generating 10 random number
//p1-B Storing in array
let randomArray=new Array();
for(let i=0;i<10;i++)
{
    let num=Math.floor(Math.random()*900)+100;
    randomArray.push(num);
}

//function to get second maximum value 
function GetSecondMax(num)
{
  if(num>max)
  {
      secondMax=max;
      max=num;
      
  }   
  else if(num>secondMax)
  {
      secondMax=num;
  }
}
//function to get second minimum value 
function GetSecondMin(num)
{
  if(num<min)
  {
      secondMin=min;
      min=num;
      
  }   
  else if(num<secondMin)
  {
      secondMin=num;
  }
}
//assign the value of first and second element of array as min and max and second min and second max
let max=randomArray[0];
let secondMax=randomArray[1];
let min=randomArray[0];
let secondMin=randomArray[1];
console.log(randomArray);
randomArray.forEach(GetSecondMax);
randomArray.forEach(GetSecondMin);
console.log('Second maximum is :'+secondMax);
console.log('Second minimum is :'+secondMin);

//refactor the code
//Arr2-Finding the min and max after sorting
//sorting array in decending order
randomArray.sort(function(a,b){return b-a});
console.log('Second maximum is :'+randomArray[1]);
//sorting the array in ascending order
randomArray.sort(function(a,b){return a-b});
console.log('Second minimum is :'+randomArray[1]);

