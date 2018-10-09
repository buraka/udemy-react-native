const sum = (a, b) => {
  return a + b;
}

const divide = (a, b) => {
  return a / b;
}

const compare = (x, y) => {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return 0;
  }
}

const x = sum(2, 3);
console.log(x);
console.log(divide(4, 2))
console.log(compare(4,4))

// function sum(a, b) {
//   return a + b;
// }
