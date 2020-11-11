console.log(process.argv);

const fs = require('fs');

const fileName = process.argv[2];

const exo_2 = (data) => {
  let counter = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = i; j < data.length; j++) {
      if (data[i] < data[j]) {
        break;
      } else if (j === data.length - 1) {
        counter++;
      }
    }
  }
  console.log(counter + ' immeuble(s) ont une vue à l\'ouest.');
};

try {
  const data = fs.readFileSync(fileName, 'utf8');
    exo_2(data.split(' ').map(value => parseInt(value)));
} catch (error) {
    console.error(error.message);
};
