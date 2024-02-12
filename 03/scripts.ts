const tabuada = (numeros: number[]): string => {
  let resultado: string = "";
  numeros.forEach((numero) => {
    let count: number = 0;
    while (count <= 10) {
      resultado += `${numero} x ${count} = ${numero * count}\n`;
      count++;
    }
  });

  return (resultado += "-----------\n");
};

console.log(tabuada([1, 2]));

// const tabuadas = (numeros: number): string => {
//   let resultado: string = "";
//   let n = 1;
//   for (let i = 0; i <= 10; i++) {
//     resultado += `${n} x ${i} = ${n * i} \n`;
//   }
//   return (resultado += "-----------\n");
// };

// console.log(tabuadas(1));
