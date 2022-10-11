exports.generatePassword = (req, res) => {
  let array = [];
  let passToReturn;
  let isNumberAndIsInteger = Number.isInteger(Number(req.headers.value));

  if (!isNumberAndIsInteger) {
    res.json({ message: "This is not a number." });
  } else if (isNumberAndIsInteger && Number(req.headers.value) <= 3) {
    res.json({ message: "Password length must be > 3" });
  } else {
    let stringLength = Number(req.headers.value);
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nums = "1234567890";
    let symbols = "!@#$%&{}[]()?`´~^- .:,;";

    while (array.length <= stringLength) {
      let l = lowercase[Math.floor(Math.random() * 26)];
      let u = uppercase[Math.floor(Math.random() * 26)];
      let n = nums[Math.floor(Math.random() * 10)];
      let s = symbols[Math.floor(Math.random() * 23)];
      array.push(l, u, n, s);
    }

    passToReturn = array
      .concat()
      .toString()
      .replace(/,/g, "")
      .substring(0, stringLength);

    res.json({ passToReturn: passToReturn });
  }
};
