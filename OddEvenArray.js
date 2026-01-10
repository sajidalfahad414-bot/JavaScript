let Arr= [1,2,3,10,15];
let even = [];
let odd = [];
Arr.forEach((ele) =>{
    if(ele%2 == 0){
        even.push(ele);
    }
    else{
        odd.push(ele);
    }
});
console.log("Even Array",even);
console.log("Odd Array",odd);
Arr.splice(2,2);
console.log("NEW ARRAY IS",Arr);