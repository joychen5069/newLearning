//recursive digit sum hackerrank

function digitSum(n,k){

    //turn n into string first
    let numArray = n.toString().split("").map(Number);
    console.log(numArray)
    //i want to take each digit in n and add them together
    let sum = numArray.reduce((a,b)=> {return a+b}, 0)
    //i then want to multiply them by k to get the total sum
    let newSum = sum*k;
   console.log("actual total sum: ", newSum)
    //then i take that number, and take the sum of the digits
   if(newSum.toString().split("").map(Number).length == 1){
       return newSum
   }
    //if it's more than one digit, i then take the sum of the digits again until i reach a length of one
    else{
        let newArray = newSum.toString().split("").map(Number)
        for (let i = 0; i < newArray.length; i++) {
            let newSum = newArray.reduce((a,b)=>{return a+b},0)
            if(newSum.toString().split("").map(Number).length == 1){
                return newSum
            }
        }
    }
}

let result = digitSum(148,3);
console.log(result)
//example case
//input n=148 k=3
// super_digit(P) = super_digit(148148148) 
//                = super_digit(1+4+8+1+4+8+1+4+8)
//                = super_digit(39)
//                = super_digit(3+9)
//                = super_digit(12)
//                = super_digit(1+2)
//                = super_digit(3)
//                = 3.