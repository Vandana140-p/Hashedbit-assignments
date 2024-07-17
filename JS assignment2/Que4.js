let num1 =54;
let num2 =23;

function calculate (num1,num2) {
    /* let answer; */
    let answer1 = ((num1%10) * (num2%10)) 
    let answer2 = (parseInt(num1/10) * (parseInt(num2/10)));
    let answer3 = answer1 + answer2;
    console.log(answer3)
}

calculate(num1,num2)

//output: 22