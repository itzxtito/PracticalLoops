// Part 1: Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//     console.log('Fizz Buzz');
//     } else if (i % 3 === 0){
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

// Part 2: Prime Time

// let n = parseInt(prompt("Enter a starting number:")); // Input for the starting number ===== Declare an arbitrary number, n
// let nextPrime = n + 1; // Start checking from the next number

// while (true) {
//   let isPrime = true; // Assume the number is prime

//   // Check divisors from 2 up to one less than the current number
//   for (let i = 2; i < nextPrime; i++) {
//     if (nextPrime % i === 0) {
//       isPrime = false; // Not a prime number
//       break; // Exit the for loop early
//     }
// }
// if (isPrime) {
//     console.log("The next prime number after " + n + " is " +    nextPrime);
//     break; // Exit the while loop
//   }

//   nextPrime++; // Increment to check the next number
// }




// Part 3: Feeling Loopy

// let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// let cell = ""; // To store the current cell
// let row = ""; // To store the current row

// for (let i = 0; i < csv.length; i++) {
//   let char = csv[i];

//   if (char === ",") {
//     // A comma indicates the end of a cell
//     row += cell + " "; // Add the cell to the row
//     cell = ""; // Reset the cell
//   } else if (char === "\n") {
//     // A newline indicates the end of a row
//     row += cell; // Add the last cell of the row
//     console.log(row); // Log the entire row
//     row = ""; // Reset the row
//     cell = ""; // Reset the cell
//   } else {
//     // Add the character to the current cell
//     cell += char;
//   }
// }

// // Log the last row if there's no trailing newline
// if (cell) {
//   row += cell;
//   console.log(row);
// }

// part 3 example with colton
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "", cell2 = "", cell3 = "", cell4 = ""; // Variables for data
let currentCell = 1; // Track which cell is being filled

for (let i = 0; i < csv.length; i++) {
  let char = csv[i]; // reference to the current character

  if (char === ",") {
    // Move to the next cell
    currentCell++;
  } else if (char === "\n") {
    // Log the current row and reset all cells
    console.log(cell1, cell2, cell3, cell4);
    cell1 = cell2 = cell3 = cell4 = ""; // Clear all cells
    currentCell = 1; // Reset to the first cell
  } else {
    // Add character to the appropriate cell
    if (currentCell === 1) {
      cell1 += char;
    } else if (currentCell === 2) {
      cell2 += char;
    } else if (currentCell === 3) {
      cell3 += char;
    } else if (currentCell === 4) {
      cell4 += char;
    }
  }
}

// Log the last row if there's no trailing newline
if (cell1 || cell2 || cell3 || cell4) {
  console.log(cell1, cell2, cell3, cell4);
}
