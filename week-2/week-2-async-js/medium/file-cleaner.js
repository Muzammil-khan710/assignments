const fs = require('fs');

const fileCleaner = (file) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) {
      console.log('error in reading file', err)
      return;
    }

    const cleanedData = data.replace(/\s+/g, ' ').trim();

    fs.writeFile(file, cleanedData, (err) => {
      if (err) {
        console.log('error in writing contents of file', err);
        return;
      } else {
        console.log('file contents updated successfully');
      }
    })
  })
}

fileCleaner('file.txt')