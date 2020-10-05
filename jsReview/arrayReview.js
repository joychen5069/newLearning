function arrayManipulation(n, queries) {


}

//sample input=
//5 3
// 1 2 100
// 2 5 100
// 3 4 100

//n = 3
//queries = {[1, 2, 100], [2, 5, 100], [3, 4, 100]}

//would be 
//[0 0 0 0 0] is zero update
//[100 100 0 0 0] is first update
//[100 200 100 100 100] is second update
//[100 200 200 200 100] is third update

//output would be 200 since 200 is the max