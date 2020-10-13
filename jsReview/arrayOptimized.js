//OPTIMIZE THIS

function arrayManipulation(n, queries) {
    let array = Array(n + 1);
    console.log(array)
    let max = 0,
    current = 0;
    queries.forEach(([startRange, endRange, value]) => {
         array[startRange] = array[startRange] || { start: 0, end: 0 };
         array[endRange] = array[endRange] || { start: 0, end: 0 };
         array[startRange].start += value;
         array[endRange].end += value;
     });
    
    array.forEach((cell) => {
       if (cell) {
           console.log
         current += cell.start;
         if (current > max) {
            max = current;
         }
         current -= cell.end;
     }
   });
 return max;
}
let a = 5;
let b = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]]

arrayManipulation(a, b)