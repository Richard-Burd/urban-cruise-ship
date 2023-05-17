// as of May 16th, 2023, this function is used to
// format the numbers in the dynamic bar charts in the History Site
// Theoretically, this function could be used elsewhere so it is in './lib'

// This function accomplishes the following with numbers:

// 1. Gets rid of decimal places for three digit numbers 
//    (e.g. 342.6 becomes 342)

// 2. Rounds to two decimal places unless those two places both have zeros
//    ...in which case it keeps displaying zeros right of the decimal
//    ...until it reaches two non-zero numbers
//    (e.g. 45.839726 becomes 45.84, but 45.000348 becomes 45.00035)

// 3. Adds the thousands separator 
//    (e.g. 1000 becomes 1,000)

// 4. Removes the decimal point if the number ends with it
//    (e.g. 34. becomes 34)

// 5. Ensures that a value of "0" or "0.00" or "0.000...etc" does not occur

// 4. Returns a string for processing by other functions in the
//    ...dynamicBarCharts folder

export function numberFormater(num) {
  let formattedNumber = num;

  if (formattedNumber >= 100) {
    // if ≥ 100, no decimal places
    formattedNumber = Math.round(formattedNumber);
  } else if (formattedNumber < 1 && formattedNumber > 0) {
    // if smaller than 0.01, use toFixed to avoid scientific notation
    formattedNumber = formattedNumber.toFixed(8);
  } else {
    formattedNumber = Number(formattedNumber).toFixed(2); // For numbers between 1 and 100, use 2 decimal places
  }

  // Convert to string for further processing
  formattedNumber = formattedNumber.toString();

  // Remove insignificant trailing zeros
  while (formattedNumber.includes(".") && formattedNumber.slice(-1) === "0") {
    formattedNumber = formattedNumber.slice(0, -1);
  }

  // Remove dot if number ends with it
  if (formattedNumber.slice(-1) === ".") {
    formattedNumber = formattedNumber.slice(0, -1);
  }

  // Add thousands separator for numbers ≥ 1000
  if (Number(formattedNumber) >= 1000) {
    formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // If more than two non-zero digits after decimal, round to the position of the second non-zero digit
  if (formattedNumber.includes(".") && formattedNumber.split('.')[1].replace(/0/g, '').length > 2) {
    const digitsAfterDecimal = formattedNumber.split('.')[1];
    let nonZeroDigitsCount = 0;
    let digitPosition = 0;

    // Find position of the second non-zero digit
    for (let i = 0; i < digitsAfterDecimal.length; i++) {
      if (digitsAfterDecimal[i] !== '0') {
        nonZeroDigitsCount++;
        if (nonZeroDigitsCount === 2) {
          digitPosition = i + 1;
          break;
        }
      }
    }

    formattedNumber = Number(formattedNumber).toFixed(digitPosition);
  }

  return formattedNumber;
}

// This is an older version that was displaying three numbers 
// (e.g. 0.00346 when it should've been 0.0035)
// This can eventually be deleted, it is for debugging purposes only

// export function numberFormater(num) {
//   let formattedNumber = num;

//   if (formattedNumber >= 100) {
//     // if ≥ 100, no decimal places
//     formattedNumber = Math.round(formattedNumber);
//   } else if (formattedNumber < 1 && formattedNumber > 0) {
//     // for numbers less than 1 and greater than 0, use precision of 2 significant digits
//     // If the number is smaller than 0.01, use toFixed to avoid scientific notation
//     formattedNumber =
//       formattedNumber < 0.01
//         ? formattedNumber.toFixed(8)
//         : Number(formattedNumber).toPrecision(2);
//   } else {
//     formattedNumber = Number(formattedNumber).toFixed(2); // For numbers between 1 and 100, use 2 decimal places
//   }

//   // Convert to string for further processing
//   formattedNumber = formattedNumber.toString();

//   // Remove insignificant trailing zeros
//   while (formattedNumber.includes(".") && formattedNumber.slice(-1) === "0") {
//     formattedNumber = formattedNumber.slice(0, -1);
//   }

//   // Remove dot if number ends with it
//   if (formattedNumber.slice(-1) === ".") {
//     formattedNumber = formattedNumber.slice(0, -1);
//   }

//   // Add thousands separator for numbers ≥ 1000
//   if (Number(formattedNumber) >= 1000) {
//     formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }

//   return formattedNumber;
// }




















