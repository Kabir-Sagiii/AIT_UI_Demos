//WAF to guess number is positive or negative

function isPositive(num) {
  if (num > 0) {
    console.log(num, "is a positive number");
  }
  if (num < 0) {
    console.log(num, " is a negavtive number");
  }
}
isPositive(-10);
