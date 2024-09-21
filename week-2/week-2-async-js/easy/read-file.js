const fs = require('fs')

console.log('first');

fs.readFile('file-1.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err) 
  } else {
    console.log(data)
  }
});

function expensiveOperation() {
  let sum = 0
  for(let i=0; i<1e8; i++) {
    sum+=i
  }
  console.log('done')
}

expensiveOperation()