/* //max value in an array
const arr=[5,10,89,40,3];
let max=arr[0];
arr.forEach((num)=>{
    if(max<num){
        max=num;
        }
});
console.log(max);
console.log(Math.max(...arr)); //using spread operator */

// const stringArr=process.argv[2];
// const arr=JSON.parse(stringArr);
// console.log(Math.max(...arr))