function jumpSearch(arr,tofind,len){
    let step=Math.floor(Math.sqrt(len));
    let lower_bound=0;

    while(arr[Math.min(step,len)-1] < tofind){
        lower_bound=step;
        step+=Math.floor(Math.sqrt(len));
        if(lower_bound>=len){
            return -1;
        }
    }

    let upper_bound=Math.min(step,len);

    for(let i=lower_bound;i<upper_bound;i++){
        if(arr[i]===tofind){
            return 1;
        }
    }

    return -1;
}




let sortedArr=[1,2,3,4,5,6,7,8,9,10,12,25,36,45,58,69,70,71,72,78,89,98,100,1001,1005];

let len=0;
for(let i in sortedArr){
    len++;
}

tofind=1001;
result=jumpSearch(sortedArr,tofind,len)

if(result===1){
    console.log("We found data.")
}else{
    console.log("We haven't found data");
}