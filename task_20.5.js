function passwardValidity(pass) {
  if (pass.length <= 6 || pass.length >= 16) {
    console.log("Invalid");
    return;
  }
  let counter = 0;
  let j = 1;
  let k = 1;
  let n = 1;
  let m = 1;
  for (i = 0; i < pass.length; i++) {
    if (+pass[i] * 1 === +pass[i]) {
      counter += j;
      j = 0;
      continue;
    }
    if (pass[i] === "@" || pass[i] === "#" || pass[i] === "$") {
      counter += k;
      k = 0;
      continue;
    }
    if (97 <= pass.charCodeAt(i) && pass.charCodeAt(i) <= 122) {
      counter += n;
      n = 0;
      continue;
    }
    if (65 <= pass.charCodeAt(i) && pass.charCodeAt(i) <= 90) {
      counter += m;
      m = 0;
    }
  }
  if (counter === 4) {
    console.log("valid");
  } else {
    console.log("invalid");
  }
}
passwardValidity("585Daaaaa$");
