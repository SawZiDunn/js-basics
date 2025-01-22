function bubbleSort(Array){

    len=length(Array);
    for(i=0;i<len-1;i++){
        for(j=0;j<len-i-1;j++){
            if(Array[j]>Array[j+1]){
                var temp=Array[j];
                Array[j]=Array[j+1];
                Array[j+1]=temp;
            }
        }
    }
    console.log(Array);
}

function length(l){
    let length=0;
    for(let i in l){
        length++;
}
    return length;
}


myArray=[9,6,7,2,15,89,45,62,87,78,56,45,12,0,3,54,69,0,0];
myArray1=["apple","orange","aaa","aa","b","hello"];
bubbleSort(myArray);