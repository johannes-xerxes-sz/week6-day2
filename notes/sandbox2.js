const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push (nextToLast + last);
        num -= 1;
        }
    return array;
}
console.log(fibonacci(12));

// With Recursion:
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
}
console.log(fib(12));


// With Recursion:
/* const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos (pos - 1) + fibPos (pos - 2);
} */


const fibPos = pos => pos < 2 ? pos: fibPos (pos -1) + fibPos
(pos - 2);

console.log(fibPos (8));



