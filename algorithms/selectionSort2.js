function selectionsort(arr, len){

    for(let i = 0; i<len-1;i++){
        let lowPoint=i;

        for(let j=i+1;j<len;j++){

            if(arr[j]<arr[lowPoint]){
                lowPoint=j;    //finding the index of the lowest number

            }
        }

        if(lowPoint!=i){    //just to reduce some looping times...
            let temp=arr[lowPoint];
            arr[lowPoint]=arr[i];
            arr[i]=temp;
        }

    }
    return arr;
}

let myArray=[56,12,45,1,78,99,62,2,41,41,65,69,62,64,1];


let length=0;
for(let i in myArray){
    length++;
}

console.log("Before being sorted...");
console.log(myArray);

selectionsort(myArray,length);

console.log("After being sorted...");
console.log(myArray);