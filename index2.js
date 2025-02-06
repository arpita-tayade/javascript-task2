1. Square Numbers

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared);

2. Convert Strings to Uppercase

const words = ["apple", "banana", "cherry"];
const upperCaseWords = words.map(word => word.toUpperCase());
console.log(upperCaseWords);

3. Extract Property from Object Array

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
const names = users.map(user => user.name);
console.log(names);


4. Convert Celsius to Fahrenheit

const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);
console.log(fahrenheit);

5. Add Prefix to Strings

const items = ["pen", "book", "table"];
const newItems = items.map(item => `My ${item}`);
console.log(newItems); 

6. Calculate Discounts

const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);


7. Format Phone Numbers

const phoneNumbers = ["1234567890", "9876543210"];
const formattedNumbers = phoneNumbers.map(num => `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`);
console.log(formattedNumbers);

8. Reverse Strings

const strings = ["hello", "world", "javascript"];
const reversedStrings = strings.map(str => str.split("").reverse().join(""));
console.log(reversedStrings); 



9. Double Elements in Array
const numbersArr = [2, 4, 6, 8];
const doubledNumbers = numbersArr.map(num => num * 2);
console.log(doubledNumbers);


10. Extract Domain from Emails

const emails = ["john@example.com", "alice@test.com", "bob@company.org"];
const domains = emails.map(email => email.split("@")[1]);
console.log(domains);


1. Square Numbers

const numbers = [3, 7, 9, 12];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);


 2. Convert Strings to Uppercase
const lowercaseStrings = ["cat", "dog", "fish"];
const uppercaseStrings = lowercaseStrings.map(str => str.toUpperCase());
console.log(uppercaseStrings); 


3. Extract Property from Object Array
const users = [
    { name: "Emma", age: 21 },
    { name: "Liam", age: 28 },
    { name: "Olivia", age: 25 }
];
const names = users.map(user => user.name);
console.log(names); 

4. Convert Celsius to Fahrenheit
const celsiusTemperatures = [5, 15, 25, 35];
const fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);
console.log(fahrenheitTemperatures); 


5. Add Prefix to Strings
const words = ["home", "car", "laptop"];
const prefixedWords = words.map(word => "My " + word);
console.log(prefixedWords); 


6. Calculate Discounts
const prices = [150, 250, 350];
const discountedPrices = prices.map(price => price * 0.8); // 20% discount
console.log(discountedPrices);


7. Format Phone Numbers
const phoneNumbers = ["5551234567", "6669876543", "7773456789"];
const formattedPhoneNumbers = phoneNumbers.map(number => {
    const areaCode = number.slice(0, 3);
    const prefix = number.slice(3, 6);
    const lineNumber = number.slice(6, 10);
    return `(${areaCode}) ${prefix}-${lineNumber}`;
});
console.log(formattedPhoneNumbers); 


8. Reverse Strings
const strings = ["apple", "banana", "cherry"];
const reversedStrings = strings.map(str => str.split("").reverse().join(""));
console.log(reversedStrings); 


9. Double Elements in Array
const numbers = [1, 5, 10, 20];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);


10. Extract Domain from Emails
const emails = ["mike@hello.com", "sara@work.org", "jane@site.net"];
const domains = emails.map(email => {
  const parts = email.split("@");
  return parts[1]; // The domain is the second part after the "@"
});
console.log(domains); 
1. Filter Even Numbers
 
const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 


2. Filter Words Longer Than 5 Characters
 
const words = ["apple", "banana", "cat", "elephant", "dog"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);


3. Filter Adults from an Array of Objects
 
const users = [
    { name: "Emma", age: 17 },
    { name: "Liam", age: 22 },
    { name: "Olivia", age: 29 },
    { name: "Noah", age: 15 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);

---


4. Filter Out Negative Numbers
 
const numbersArr = [5, -3, 10, -8, 0, 12];
const positiveNumbers = numbersArr.filter(num => num >= 0);
console.log(positiveNumbers);


5. Filter Words Starting with "A"
 
const wordsArray = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
const wordsStartingWithA = wordsArray.filter(word => word.startsWith("A"));
console.log(wordsStartingWithA); 
---


6. Filter Prices Above 100
 
const prices = [50, 120, 80, 200, 300, 90];
const highPrices = prices.filter(price => price > 100);
console.log(highPrices);


7. Filter Strings That Contain the Letter "e"
 
const wordsWithE = ["apple", "grape", "melon", "kiwi", "pear"];
const containsE = wordsWithE.filter(word => word.includes("e"));
console.log(containsE);


8. Filter Non-Empty Strings

const strings = ["hello", "", "world", "", "JavaScript"];
const nonEmptyStrings = strings.filter(str => str !== "");
console.log(nonEmptyStrings);


9. Filter Employees Who Have a Salary Above 5000
 
const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 },
    { name: "David", salary: 4500 }
];
const highSalaryEmployees = employees.filter(emp => emp.salary > 5000);
console.log(highSalaryEmployees);


10. Filter Phone Numbers Starting with "9"
 
const phoneNumbers = ["9876543210", "1234567890", "9123456789", "8765432109"];
const numbersStartingWith9 = phoneNumbers.filter(num => num.startsWith("9"));
console.log(numbersStartingWith9);













1. Filter Even Numbers

const numbers = [10, 15, 20, 25, 30];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 


2. Filter Words Longer Than 5 Characters

const words = ["apple", "banana", "cat", "elephant", "dog"];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);


3. Filter Adults from an Array of Objects

const users = [
    { name: "Emma", age: 17 },
    { name: "Liam", age: 22 },
    { name: "Olivia", age: 29 },
    { name: "Noah", age: 15 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults); 


4. Filter Out Negative Numbers

const nums = [5, -3, 10, -8, 0, 12];
const positiveNumbers = nums.filter(num => num >= 0);
console.log(positiveNumbers);


5. Filter Words Starting with "A"

const wordsA = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
const startingWithA = wordsA.filter(word => word.startsWith("A"));
console.log(startingWithA); 


6. Filter Prices Above 100

const prices = [50, 120, 80, 200, 300, 90];
const above100 = prices.filter(price => price > 100);
console.log(above100); 

7. Filter Strings That Contain the Letter "e"

const wordsE = ["apple", "grape", "melon", "kiwi", "pear"];
const containsE = wordsE.filter(word => word.includes("e"));
console.log(containsE); 

8. Filter Non-Empty Strings

const strings = ["hello", "", "world", "", "JavaScript"];
const nonEmpty = strings.filter(str => str !== ""); // Or str.length > 0
console.log(nonEmpty); 

9. Filter Employees Who Have a Salary Above 5000

const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 },
    { name: "David", salary: 4500 }
];
const highEarners = employees.filter(employee => employee.salary > 5000);
console.log(highEarners); 

10. Filter Phone Numbers Starting with "9

const phoneNumbers = ["9876543210", "1234567890", "9123456789", "8765432109"];
const startingWith9 = phoneNumbers.filter(number => number.startsWith("9"));
console.log(startingWith9); 




 1. Find the Sum of an Array
const numbersSum = [5, 10, 15, 20];
const sum = numbersSum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 

2. Multiply All Numbers in an Array
const numbersProduct = [2, 4, 6, 8];
const product = numbersProduct.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product); 

3. Find the Maximum Number
const numbersMax = [12, 45, 2, 89, 33];
const max = numbersMax.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
console.log(max); 

4. Find the Minimum Number
const numbersMin = [99, 32, 1, 18, 55];
const min = numbersMin.reduce((accumulator, currentValue) => Math.min(accumulator, currentValue));
console.log(min);


 5. Count Occurrences of Words in an Array
const words = ["apple", "banana", "apple", "cherry", "banana", "banana"];
const wordCounts = words.reduce((counts, word) => {
  counts[word] = (counts[word] || 0) + 1;
  return counts;
}, {});
console.log(wordCounts); 


6. Flatten a Deeply Nested Array
const nestedArray = [[[1, 2]], [[3, 4]], [[5, 6]]];
const flatArray = nestedArray.flat(2); // 2 for deep flattening
console.log(flatArray); 

7. Calculate Total Salary of Employees
const employees = [
    { name: "Alice", salary: 4000 },
    { name: "Bob", salary: 6000 },
    { name: "Charlie", salary: 7000 }
];
const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log(totalSalary);

8. Concatenate Strings in an Array
const stringsConcat = ["Coding", "is", "awesome"];
const concatenatedString = stringsConcat.reduce((result, word) => result + " " + word);
console.log(concatenatedString.trim());


9. Remove Duplicates from an Array
const numbersDuplicates = [9, 2, 8, 2, 9, 7, 5];
const uniqueNumbers = numbersDuplicates.reduce((unique, num) => {
    if (!unique.includes(num)) {
        unique.push(num);
    }
    return unique;
}, []);
console.log(uniqueNumbers); // Output: [9, 2, 8, 7, 5]

10. Group People by Their Age
const people = [
    { name: "Tom", age: 22 },
    { name: "Jerry", age: 25 },
    { name: "Lucy", age: 22 },
    { name: "Mark", age: 30 }
];
const groupedByAge = people.reduce((grouped, person) => {
    grouped[person.age] = grouped[person.age] || [];
    grouped[person.age].push(person);
    return grouped;
}, {});
console.log(groupedByAge); 

