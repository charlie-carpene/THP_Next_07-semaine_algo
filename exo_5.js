console.log(process.argv);

const fs = require('fs');

const fileName = process.argv[2];

const exo_5 = (data, k) => {
  const even = (element) => element === k - data[i]);

  if (k - data[i] === data[j]) {
    return true;
  } else {
    return
  }


  if (data.find(e => e === k - data[i])) {
    console.log(true);
    return true;
  } else {
    console.log(false);
  }
};

try {
  const data = fs.readFileSync(fileName, 'utf8');
    exo_5(data.split(' ').map(value => parseInt(value)), 49);
} catch (error) {
    console.error(error.message);
};
