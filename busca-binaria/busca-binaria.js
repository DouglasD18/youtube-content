function buscaBinaria(array, comeco, fim, value) {
  if (comeco > fim) {
    return -1;
  }

  const meio = Math.floor((comeco + fim) / 2);

  if (array[meio] === value) {
    return meio;
  }

  if (array[meio] > value) {
    return buscaBinaria(array, comeco, meio - 1, value);
  } else {
    return buscaBinaria(array, meio + 1, fim, value);
  }
}

console.log(buscaBinaria([3, 18, 29, 43, 58, 101], 0, 5, 29));
