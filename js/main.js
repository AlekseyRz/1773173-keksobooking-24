const randomInt = (min, max) => {
  if (min < 0 || max < 0 || min > max) {
    return('Use correct values!');
  } else {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
};

const randomFloat = (min, max, decimalPlaces) => {
  if (min < 0 || max < 0 || min > max) {
    return('Use correct values!');
  } else {
    const assistantNumber = Math.pow(10, decimalPlaces);
    const rand = min + Math.random() * (max - min);
    return Math.ceil(rand*assistantNumber-1)/assistantNumber;
  }
};

randomInt(3, 7);
randomFloat(1.3, 2.81, 3);


