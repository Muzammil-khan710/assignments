const fs = require('fs');

const content = 'here is some more content';

fs.writeFile('file-2.txt', content, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('file written successfull')
  }
});