function oddishOrEvenish(number) {
  let dividedNumber = 0;
  for (let digit = number.toString().length - 1; digit >= 0; digit--) {
    const numeral = Math.floor(number / Math.pow(10, digit));
    dividedNumber += numeral;
    number -= numeral * Math.pow(10, digit);
  }

  if (dividedNumber % 2 == 1) {
    console.log("Odd");
    return "Odd";
  }
  console.log("Even");
  return "Even";
}

oddishOrEvenish(4433);
