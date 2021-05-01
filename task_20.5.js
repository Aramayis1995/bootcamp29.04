function passwardValidity(pass) {
  if (pass.length <= 6 || pass.length >= 16) {
    console.log("Invalid");
    return;
  }
  let counter = 1;
  for (i = 0; i < pass.length; i++) {
    if (+pass[i] * 1 === +pass[i]) {
      counter *= 3;
      continue;
    }
    if (pass[i] === "@" || pass[i] === "#" || pass[i] === "$") {
      counter *= 5;
      continue;
    }
    if (97 <= pass.charCodeAt(i) && pass.charCodeAt(i) <= 122) {
      counter *= 7;
    }
    if (65 <= pass.charCodeAt(i) && pass.charCodeAt(i) <= 90) {
      counter *= 11;
    }
  }
  if (counter % (3 * 5 * 7 * 11) === 0) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
}
passwardValidity("#Aa1234");
