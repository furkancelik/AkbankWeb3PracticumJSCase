function oddishOrEvenish(number) {
  const result =
    number
      .toString()
      .split("")
      .reduce((prev, current) => parseInt(prev) + parseInt(current)) % 2;
  if (result === 0) return "Even";
  else return "Odd";
}

console.log(oddishOrEvenish(4433));
