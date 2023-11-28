function fatorial(numero) {
  if (numero <= 1) {
    return numero;
  }

  return numero * fatorial(numero - 1);
}

console.log(fatorial(8));
