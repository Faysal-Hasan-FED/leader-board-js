const books = ['A Smarter Way to Learn JavaScript', 'The Da Vinci Code By Dan Brown', 'Eloquent JavaScript', 'Learn JavaScript VISUALLY', 'The Harry Potter Series by J.K Rowling'];
const search = 'javascript';
const matchedBook = [];

for (const book of books) {
    if (book.toLowerCase().includes(search.toLowerCase())) {
        matchedBook.push(book);
    }
}
console.log(matchedBook);

const numbers = [15, 56, 98, 45, 12, 3, 98, 78, 456, 987, 658, 159, 7899, 49, 6219, 498, 659, 658];
const sortedNumbers = numbers.sort(function (a, b) { // sorting function sort er mddhei dite hbe ta na hole kaj korbe na vaiaaaaaaaa....
    return a - b;
})
console.log(sortedNumbers);

