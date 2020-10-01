//who's the closest

function closest(string, n) {
    //turn the string to an array 
    let stringArray = string.split("");

    //i need to find the length of n and find each value of n's array
    // let nLength = n.length;
    let indices = []
    //for each index of n, i need to find each occurance of that letter in the string array
    for (let i = 0; i < n.length; i++) {
        let queryIndex = n[i];
        let queryChar = string[queryIndex];
        let minDist = -1;
        let closetIndex = -1;
        // indices.push(queryIndex)
        // console.log(queryChar, "new loop")
        //find stringArray[n[0]] to match stringArray[i]
        for (let j = 0; j < stringArray.length; j++) {
            let current = string[j];
            // console.log(current, "Current")
            if (queryIndex !== j && queryChar == current) {


                // console.log("query then j", queryIndex, j)
                //calculate distance from queryIndex

                let distance = Math.abs(queryIndex-j)
                if(minDist == -1 || distance<minDist){
                    minDist = distance
                    closetIndex = j
                    // console.log("minDist ", minDist, "closest index", closetIndex)
                }
              

            }
           
        }
indices.push(closetIndex)
    }
console.log(indices)
    //find the distance between the next occurance and the original occurance

    //if there are two that are the same distance, take the smaller one

    //otherwise if no occurance appears, return -1

}
let string = "volumenometer"
let n = [3, 4, 5, 7, 9]
closest(string, n)


// example case
// let string = "volumenometer"
// let n = [3, 4, 5, 7, 8]
//output should
//3: -1
//4: 8
//5: 9
//7: 1
//9: 11