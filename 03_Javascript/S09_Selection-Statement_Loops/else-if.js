//WAF to find designation of a employee based on experience

function findDesignation(exp) {
  if (exp > 0 && exp <= 2) {
    console.log("Junior Dev");
  } else if (exp > 2 && exp <= 5) {
    console.log("senior Dev");
  } else if (exp > 5 && exp <= 7) {
    console.log("Team Lead");
  } else if (exp > 7) {
    console.log("Manager");
  } else {
    console.log("Add valid input");
  }
}

findDesignation("ckdjbcfjkebf");
