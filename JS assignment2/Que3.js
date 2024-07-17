function findTax(salary) {
    let tax;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            tax = salary * 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            tax = salary * 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            tax = salary * 0.2;
            break;
        default:
            tax = salary * 0.3;
            break;
        
    }

    return tax;
}

// Test cases
console.log(findTax(450000)); // Output: 0
console.log(findTax(650000)); // Output: 65000
console.log(findTax(1250000)); // Output: 250000
console.log(findTax(1650000)); // Output: 495000
