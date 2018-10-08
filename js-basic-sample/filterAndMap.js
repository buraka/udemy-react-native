const a = [2, 3, 4, 5];

const b = a.filter(x => x%2 === 1);

console.log(b);

const c = a.map(x => x * 5);

console.log(c);

const d = a.filter(x => x % 2 === 0).map(x => x * 5);

console.log(d);

const e = a.map(x => {
  if (x % 2 === 0) {
    return x * 10
  } else {
    return x * 5;
  }
})

console.log(e);
