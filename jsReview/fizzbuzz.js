//if the number is divisible by 3, print "fizz"
//if the number is divisible by 5, print "buzz"
//if the number is divisibly by both, print "fizzbuzz"
//if the number is not divisibly by either, print the number

for (let i = 0; i <100; i++) {
    if(i%3 === 0 && i%5===0){
        console.log("fizzbuzz")
    }
    else if(i%3 === 0 && i%5 !== 0){
        console.log("fizz")
    }
    else if(i%5 === 0 && i%3 !== 0){
        console.log("buzz")
    }
    else{
        console.log(i)
    }
    
}