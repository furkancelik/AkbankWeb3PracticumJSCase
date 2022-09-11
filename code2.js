function oddishOrEvenish(number) {
  let numberToBeDivided = 0;
  for (let digit = number.toString().length - 1; digit >= 0; digit--) {
    const figure = Math.floor(number / Math.pow(10, digit));
    numberToBeDivided += figure;
    number -= figure * Math.pow(10, digit);
  }

  if (numberToBeDivided % 2 == 1) {
    console.log("Odd");
    return "Odd";
  }
  console.log("Even");
  return "Even";
}

oddishOrEvenish(4433);
