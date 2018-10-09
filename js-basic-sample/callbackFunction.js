sum = (a, b, callback) => {
  return callback(a + b);
}

sum(3, 3, s => console.log(s * 2))

// 'a,s' => ['a', 's']
split = (str, callback) => {
  return callback(str.split(','));
}

split('a,s', arr => {
  console.log(arr);
})
