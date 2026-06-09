let arr=[20,30,50,10,5,3];
console.log("original Array:", arr);
for(let i=0; i<arr.length-1; i++)
{
    for(let j=0; j<arr.length-1-i; j++)
    {
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
}
console.log("sotred array:", arr);