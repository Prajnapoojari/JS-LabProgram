function MergeSort(arr)
{
    if(arr.length<=1)
    {
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=MergeSort(arr.slice(0,mid));
    let right=MergeSort(arr.slice(mid));
    return Merge(left, right);

    function Merge(left, right)
    {
        let result=[];
        while(left.length && right.length)
        {
            if(left[0]<right[0])
            {
                result.push(left.shift());
            }
            else{
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    
}
let arr=[38,25,18,58,60];
console.log("Original Array:", arr);
let sorted=MergeSort(arr);
console.log("Soreted Array", sorted);