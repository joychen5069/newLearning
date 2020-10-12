//OPTIMIZE THIS

function arrayManipulation(n, queries) {
    let array = new Array(n).fill(0);
    for (let i = 0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        let numberToAdd = queries[i][2];
        for (let j = 0; j < n; j++) {
            let index = j + 1;
            if (index >= start && index <= end) {
                array[j] += numberToAdd
            }
        }
    }
    console.log("MAX : ", Math.max(...array))
}
let a = 5;
let b = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]]

arrayManipulation(a, b)