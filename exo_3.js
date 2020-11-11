console.log(process.argv);

const fs = require('fs');

const fileName = process.argv[2];

const exo_3 = (data, k) => {
  let i = 0;
  let j = 1;
  let isKTrue = false;
  while (i < data.length) {
    console.log('i = ', i, 'j = ', j);
    if (data[i] + data[j] === k) {
      isKTrue = true;
      break;
    } else if (j >= data.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  };
  console.log(isKTrue);
  };

try {
  const data = fs.readFileSync(fileName, 'utf8');
    exo_3(data.split(' ').map(value => parseInt(value)), 48);
} catch (error) {
    console.error(error.message);
};
