//WAF to guess number is positive or negative

function isPositive(num) {
  if (num > 0) {
    console.log(num, "is a positive number");
  } else {
    console.log(num, "is a negative number");
  }
}
isPositive(-10);
