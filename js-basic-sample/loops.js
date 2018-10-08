const a = [12, 13, 15];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

for (i in a) {
  // console.log(i);
  console.log(a[i]);
}

a.forEach(x => {
  console.log(x);
});

let y = 10;

while (y > 0) {
  console.log(y * 2);
  y--;
}
