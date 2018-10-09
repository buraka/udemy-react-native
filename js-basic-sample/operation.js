let x = 4;

//x++; => x = x + 1;
//++x; => x = x + 1;
console.log(++x);
console.log(x);

let y = 4.5;

console.log(y > x);

console.log(x > y);

console.log(x >= y);
console.log(x <= y);

console.log(x == y);
console.log(x != y);

const a = 2;
const b = '2';

console.log(a == b);
console.log(a === b); // tip kontrolu (type)
console.log(a !== b); // tip kontrolu (type)

//and - ve - &&
//or - veya - ||

x = 24;
y=24;

if (x > y) {
  console.log('x y\'den buyuktur')
} else if (y > x) {
  console.log('y x\'den buyuktur.')
} else {
  console.log('x ve y esittir.')
}

//switch

const day = 2;

if (day === 1) {
  console.log('Pazartesi');
} else if (day === 2) {
  console.log('Sali')
} else if (day === 3) {
  console.log('Carsamba')
} else if (day === 4) {
  console.log('Persembe')
} else if (day === 5) {
  console.log('Cuma')
} else if (day === 6) {
  console.log('Cumartesi')
} else if (day === 7) {
  console.log('Pazar')
} else {
  console.log('hata');
}

switch (day) {
  case 1:
    console.log('Pazartesi');
    break;
  case 2:
    console.log('Sali');
  case 3:
    console.log('Carsamba');
    break;
  case 4:
    console.log('Persembe');
    break;
  case 5:
    console.log('Cuma');
    break;
  case 6:
    console.log('Cumartes');
    break;
  case 7:
    console.log('Pazar');
    break;
  default:
    console.log('hata');
}

const t = 32;

// condition ? true : false;

t > 30 ? console.log('t 30\'dan buyuktur.')
       : console.log('t 30\'dan kucuktur.');
