function arrayManipulation(n, queries) {

    //take n and fill an array with n number of zeros
    let array = new Array(n).fill(0);
    console.log("array", array)
    //then i would find the length of the queries and start from 0, and work my way up
    //KEEP IN MIND, ITS A 1-INDEX ARRAY SO IT STARTS AT 1 NOT 0
    for (let i = 0; i < queries.length; i++) {
        //start of query
        let start = queries[i][0];
        console.log("start", start)
        //end of query (ALL INCLUSIVE)
        let end = queries[i][1];
        
        let numberToAdd = queries[i][2];

        for (let j = 0; j < n; j++) {
            
            let index = j+1;
            if(index >= start && index <=end){
                array[j]+= numberToAdd
            }
        }
        console.log(array)
    }

    //then after i finish all the queries, i would find the greatest value in the array and return it
    console.log("MAX : ",Math.max(...array))
}
let a=5;
let b = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]]

arrayManipulation(a, b)

//sample input=
//5 3
// 1 2 100
// 2 5 100
// 3 4 100

//n = 5 starting point would be [0, 0, 0, 0, 0]
//queries = {[1, 2, 100], [2, 5, 100], [3, 4, 100]}

//would be 
//[0 0 0 0 0] is zero update
//[100 100 0 0 0] is first update
//[100 200 100 100 100] is second update
//[100 200 200 200 100] is third update

//output would be 200 since 200 is the max