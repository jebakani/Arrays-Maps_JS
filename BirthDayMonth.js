//generating the birthday month for 50 individuals
const NO_OF_INDIVIDUALS=50
let monthMap=new Map();
for(let i=0;i<NO_OF_INDIVIDUALS;i++)
{
    let month=Math.floor(Math.random()*12)+1;
    //if month already present in dictionary increment the value of the key
    if(monthMap.has(month))
    {
        monthMap.set(month,monthMap.get(month)+1);
    }
    //else create new key
    else
    {
        monthMap.set(month,1);
    }
}
//printing the result
for(let [key,value] of monthMap)
{
    console.log('Number of individual in month  '+key+' is '+value);
}

