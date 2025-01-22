function selectionSort(arr,lowIndex){
    //written by myself...
    let index=0;
    while(lowIndex!==length-2){
        let temp=arr[lowIndex];
        
        for(let i=lowIndex;i<length;i++){
            if(temp>arr[i+1]){
                temp=arr[i+1];
                index=i+1;
            }
        }

        let atemp=arr[index];
        arr[index]=arr[lowIndex];
        arr[lowIndex]=atemp;
        lowIndex++;

    }
    return arr;
}

let myArray=[56,12,45,1,78,62,2,41,65,69,62,64,1];


let length=0;
for(let i in myArray){
    length++;
}

console.log("Before being sorted...");
console.log(myArray);

let sortedArray=selectionSort(myArray,0);

console.log("After being sorted...");
console.log(sortedArray);