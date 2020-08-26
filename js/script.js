// Imposto un ciclo for che va da 1 a 100
for (var i = 0; i < 101; i++) {
  // Se è divisibile per 3 e 5 stampo fizzbuzz
  // 3 * 5 = 15 ergo i numeri sono dove devo stampare fizzbuzz sono tutti i numeri divisibili anche per 15
  if (i % 15 == 0) {
    console.log("fizzbuzz")
  }
  // Se sono divisibili per 3 stampo fizz
  else if (i % 3 == 0) {
    console.log("fizz");
  }
  // Se sono divisibili per 5 stampo buzz
  else if (i % 5 ==0) {
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}
