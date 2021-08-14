console.log("Implementing the array");
//p1-A-Generating 10 random number
//p1-B Storing in array
let randomArray=new Array();
for(let i=0;i<10;i++)
{
    let num=Math.floor(Math.random()*900)+100;
    randomArray.push(num);
}
console.log(randomArray);