function number(n) {
  if (n % 3 === 0 && n % 5 === 0 && n % 7 === 0) {
    console.log(n, " is a multiple of 3, 5 and 7.");
  } else if (n % 5 === 0 && n % 3 === 0) {
    console.log(n, " is a multiple of 5 and 3.");
  } else if (n % 5 === 0 && n % 7 === 0) {
    console.log(n, " is a multiple of 5 and 7.");
  } else if (n % 3 === 0 && n % 7 === 0) {
    console.log(n, " is a multiple of 3 and 7");
  } else if (n % 3 === 0) {
    console.log(n, " is a multiple of 3.");
  } else if (n % 5 === 0) {
    console.log(n, " is a multiple of 5.");
  } else if (n % 7 === 0) {
    console.log(n, " is a multiple of 7.");
  } else if (n % 3 !== 0 && n % 5 !== 0 && n % 7 !== 0) {
    console.log(n, " is not a multiple of 3, 5 or 7.");
  }
}
number(7);
