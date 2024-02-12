const soletrando = (nome: string): string => {
  let result = "";
  for (let index = 0; index < nome.length; index++) {
    result += `${nome[index]}-`;
  }
  return result;
};

console.log(soletrando("programador"));
