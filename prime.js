let flag = true;
let num = 13 
for(let i =i ;i<=Math.sqrt(num);i++){
    if(num%i==0){
        flag = false;
    }
}

if(flag == true){
    console.log("Prime Number");
}else{
    console.log("Not a Prime number");
}