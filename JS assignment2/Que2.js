function calculate(N1,N2,oper) {
    let result;
    switch (oper) {
        case '+':
            result = N1 + N2;
            break;
        case '-':
            result = N1 - N2;
            break;
        case '*':
            result = N1 * N2;
            break;
        case '/':
            if (N2 === 0) {
                result = "Number is not divided by zero";
            } else {
                result = N1 / N2;
            }
            break;
        default:
            result = "Invalid operation!";
    }
    return result;
}
console.log(calculate(15, 15, '+'));
console.log(calculate(15, 15, '-'));
console.log(calculate(15, 15, '*'));
console.log(calculate(15, 15, '/'));