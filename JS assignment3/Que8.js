// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedsum(nr) {
    while (nr >= 10) {
        str = nr.toString()
        let int = str.split('')
        let sum = 0;
        int.forEach(nr => {
            sum += Number(nr)
        })
        console.log(sum)
        nr = sum
    }
}

let result = repeatedsum(456)
console.log(result)
console.log("\n");