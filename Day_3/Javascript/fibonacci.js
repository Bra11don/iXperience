
function Fibonaccidigits(n){
    let f1 = 0;
    let f2 = 1;
    let i;

    if (n < 1){
        return;
    }
    console.log(f1+ " ")

    for (i = 1; i < n; i++) {
        console.log(f2 + " ");
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}

//invoke the function to call the first n digits
// for this assignment let's use 10 so that it prints the first 10 numbers
Fibonaccidigits(10)
