function minRoofLenght(arr, k) {

    //sort array in numerical order
    let sorted = arr.sort((a,b) =>{return a-b} );
    console.log("sorted", sorted)
    //start at index 0  and find difference between index k and 0
    let minDistance = 0;
    let newDistance = 0;
    for (let i = 1; i < sorted.length; i++) {
        //you want to find a chunk that is the least difference size
        //make sure that (sorted[i]+k) is never greater than the array length
        //you would have i-k+1 number of chunks
        minDistance = sorted[k-1]-sorted[0];
        console.log("initial distance: ", minDistance+1)

        // while(sorted[k+i] <= sorted[arr.lenght-1])
        newDistance = sorted[k+i-1]-sorted[i]
        //if i=1 sorted[3]-sorted[1]==7-4==3
        console.log("NewDstance", newDistance)
        if(newDistance < minDistance){
            console.log("new", newDistance)
            return newDistance+1
        }
        else{
            return minDistance+1
        }        
    }
    //next start at index of 1 and find difference between index k+1 and 1 and see if its greater than k

    //loop and find shortest length that would include k number of cars

    //dont forget about edge cases

    //dont forget to add one at the end since you're finding the difference

}
let arr = [1,5,7,12,13,4]
let test = minRoofLenght(arr, 4)
console.log(test)
//example array of [1,5,7,12,13,4] and let k=5
//sorted to be [1,,4,5,7,12,13]
//find difference between each chunk

//chunk 1 would be [1, 4, 5,7] =7
//chunk 2 would be [4, 5, 7,12] =9
//chunk 3 would be [5, 7, 12,13] =9




//chunk 4 would be [7, 12, 13]=7



