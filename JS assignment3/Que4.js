let string = "India is my country and all Indians are my brothers and sisters";

let totalvowel = 0;
let totalconsonant = 0;

string = string.toLowerCase();

for (let i = 0; i < string.length; i++) {
    if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        totalvowel++;
    } 
    else {
        totalconsonant++;
    }
}

console.log('Total Vowels are',totalvowel);
console.log('Total Consonant are',totalconsonant);