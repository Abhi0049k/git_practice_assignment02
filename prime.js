let flag = true;
let num = 13 

for(let i = 2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        flag = false;
    }
}

if(flag == true){
    console.log("Prime Number");
}else{
    console.log("Not a Prime number");
}