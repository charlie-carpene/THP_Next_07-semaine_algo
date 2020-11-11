console.log(process.argv);

const fs = require('fs');

const fileName = process.argv[2];

const exo_4 = (data) => {
  let i = 0;
  let j = 1;
  let counter = 0;
  while (i < data.length) {
    if (data[i] <= data[j]) {
      i++;
      j = i + 1;
    } else if (data[i] > data[j]) {
      j++;
      if (j >= data.length - 1) {
        counter++;
        i++;
        j = i + 1;
      };
    } else if (i === data.length - 1 && j >= data.length - 1) {
      if (data[i] > 0) counter++;
      i++;
    };
  };
  console.log(counter + ' immeuble(s) ont une vue à l\'ouest.');
};

try {
  const data = fs.readFileSync(fileName, 'utf8');
    exo_4(data.split(' ').map(value => parseInt(value)));
} catch (error) {
    console.error(error.message);
};
