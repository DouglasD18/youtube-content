function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivo = array[0];
  const menor = [];
  const igual = [];
  const maior = [];

  for (const value of array) {
    if (value < pivo) {
      menor.push(value);
    } else if (value > pivo) {
      maior.push(value);
    } else {
      igual.push(value);
    }
  }

  return quickSort(menor).concat(igual.concat(quickSort(maior)));
}

const array = [5, 8, 5, 3, 19, 28];

console.log(quickSort(array));
