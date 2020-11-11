console.log(process.argv);

const fs = require('fs');

const fileName = process.argv[2];

const exo_1 = (data, k) => {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length -1; j++) {
      if (data[i] + data[j] === k) {
        console.log(true);
        return true
      }
    }
  }
  console.log('false');
  return false
};

try {
  const data = fs.readFileSync(fileName, 'utf8');
    exo_1(data.split(' ').map(value => parseInt(value)), 49);
} catch (error) {
    console.error(error.message);
};
