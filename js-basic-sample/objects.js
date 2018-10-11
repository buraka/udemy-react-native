const obj = {
  name: 'ali',
  age: 12,
  isStudent: true
}

console.log({ ...obj, age: 2 });
console.log(obj);

const obj2 = { ...obj, surname: 'alp'};

console.log(obj2);

const key = 'age';
const value = 18;
console.log({ ...obj, [key]: value})

const updateObj = (o, k, v) => {
  return { ...o, [k]: v}
}

let temp = updateObj(obj, 'age', 22);
console.log(temp);

temp = updateObj(obj, 'name', 'burak');
console.log(temp);

temp = updateObj(obj, 'isStudent', false);
console.log(temp);

console.log({ ...obj, name: 'burak', age: 22, isStudent: false, key: 'abc'});
