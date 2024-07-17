function countWords(paragraph) {
     return paragraph.split(/s+/).length;
}
const paragraph =('This is a sample paragraph. It contains several words, and it also includes punctuation!')
console.log(countWords(paragraph));