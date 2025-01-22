function factorial(num){
    let facto=1;
    if(num==0){
        return 1;
    }else{
        for(let i=2;i<=num;i++){
            facto*=i;
        }
        return facto;
    }
}

console.log(factorial(7));