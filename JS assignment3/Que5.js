function correctfn(string, wrong, correct) {
    let correctString = string.replace(wrong, correct);
    return correctString;
}

let string = 'I want to eat piza';
let wrong = 'piza';
let correct = 'pizza';
let result = correctfn(string, wrong, correct);
console.log(result);