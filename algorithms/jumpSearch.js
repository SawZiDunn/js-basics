function jumpSearch(arr,tofind,len){

    let step=Math.floor(Math.sqrt(len));
    let prestep=0;

    while(step<=len){

        if(arr[step-1]===tofind){
            return 1;

        }else if(arr[step-1]>tofind || step>=len){
            let flag=0;
            for(let i=prestep;i<step;i++){
                if(arr[i]===tofind){
                    flag=1;
                    return 1;
                }
            }
            if(flag===0){
                return -1;
            }

        }else{
            prestep=step;
            step=step+Math.floor(Math.sqrt(len));
        }
    }
}

let sortedArr=[12,25,36,45,58,69,78,89,98,100,1001,1005];

let len=0;
for(let i in sortedArr){
    len++;
}

tofind=1006;
result=jumpSearch(sortedArr,tofind,len)

if(result===1){
    console.log("We found data.")
}else{
    console.log("We haven't found data");
}