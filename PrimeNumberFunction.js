isPrime=0;
function PrimeChecker(num){
    for(let i =2;i<num;i++)
    {
        if(num%i==0){
           isPrime=1;
        }
        
    }
}
PrimeChecker(20);

if(isPrime==0){
    console.log("Prime");
}
else{
    console.log("Not Prime")
}