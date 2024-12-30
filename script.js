console.log('Hello!');
// 1. Write an arrow function that takes an array of numbers and returns the sum and the difference of the first two elements in the array.

const sumAndDifference = (arr, arr2) => {
  let [n1, n2] = arr;
  let sum = n1 + n2;
  let diff = n1 - n2;
  console.log(`Sum:${sum},Difference:${diff}`);
};
console.log(sumAndDifference([5, 3])); // Output: Sum: 8, Difference: 2
const sumAndDifference2 = (arr) => {
  let [m1, m2] = arr;
  console.log(`Sum  ${m1 + m2},Difference:${m1 - m2}`);
};
console.log(sumAndDifference2([10, 7])); // Output: Sum: 17, Difference: 3

// 2. Write an arrow function that extracts the first and last characters from a string.
const extractFirstAndLast = (arr) => {
  const [firstChar, ...rest] = arr;
  const lastChar = rest[rest.length - 1];

  console.log(`First character:${firstChar},Last character:${lastChar}`);
};
console.log(extractFirstAndLast('hello')); // Output: First character: h, Last character: o

console.log(extractFirstAndLast('world')); // Output: First character: w, Last character: d

// 3. Write an arrow function that extracts the length and width from a rectangle object and calculates its area.

const calculateRectangleArea = (obj) => {
  const { length, width } = obj;
  return `The area of the rectangle is:${length * width}`;
};
console.log(calculateRectangleArea({ length: 5, width: 3 })); // Output: The area of the rectangle is: 15
const calculateRectangleArea2 = (obj) => {
  const { length, width } = obj;
  return `The area of the rectangle is:${length * width}`;
};
console.log(calculateRectangleArea2({ length: 8, width: 4 })); // Output: The area of the rectangle is: 32

// 4. Write an arrow function that takes an array of colors and extracts the first two colors using destructuring.

const getFirstTwoColors = (arr) => {
  const [first, second] = arr;
  // console.log(first, second);
  return `The first two colors are:${first} and ${second}`;
};
console.log(getFirstTwoColors(['red', 'blue', 'green', 'yellow'])); // Output: The first two colors are: red and blue

console.log(getFirstTwoColors(['orange', 'purple', 'pink'])); // Output: The first two colors are: orange and purple

// 5. Write an arrow function that takes an object with a nested object and extracts information from it.
const extractNestedInfo = (obj) => {
  const {
    data: { name, age, country },
  } = obj;
  return `${name} is ${age} years old and lives in ${country}`;
};
console.log(
  extractNestedInfo({ data: { name: 'John', age: 35, country: 'USA' } })
);
// Output: John is 35 years old and lives in USA.

console.log(
  extractNestedInfo({ data: { name: 'Emma', age: 28, country: 'Canada' } })
);
// Output: Emma is 28 years old and lives in Canada.

// 6. Write an arrow function that takes an array of numbers and returns the product of first two numbers and then subtract the third number from it.
const productAndDifference = (arr) => {
  const [n1, n2, n3] = arr;
  return `Product ${n1 * n2} and Difference: ${n1 * n2 - n3}`;
};
console.log(productAndDifference([5, 3, 5, 6])); // Output: Product and Difference: 10

console.log(productAndDifference([10, 7, 35, 30])); // Output: Product and Difference: 35

// 7. Write an arrow function that takes an object and extracts information from it.

const extractData = (obj) => {
  const {
    product: { itemName, description, manufacturingCountry },
  } = obj;
  return `Item name: ${itemName}, Description: ${description}, Manufacturing Country: ${manufacturingCountry}`;
};
console.log(
  extractData({
    id: 1,
    product: {
      itemName: 'Pencil',
      description: 'Extra Dark Pencil',
      manufacturingCountry: 'USA',
    },
  })
);
// Output: Item name: Pencil, Description: Extra Dark Pencil, Manufacturing Country: USA

console.log(
  extractData({
    id: 2,
    product: {
      itemName: 'Sharpener',
      description: 'Faber Castell Premium',
      manufacturingCountry: 'Germany',
    },
  })
);
// Output: Item name: Sharpener, Description: Faber Castell Premium, Manufacturing Country: Germany
