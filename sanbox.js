const convertToNegativeKey = (key) => {
  const keyArray = key.split("");
  const negativeKeyArray = keyArray.map((char) => {
    const numericValue = parseInt(char);
    if (!isNaN(numericValue)) {
      return -numericValue;
    }
    return char;
  });
  return negativeKeyArray.join("");
};


console.log(convertToNegativeKey(1234));