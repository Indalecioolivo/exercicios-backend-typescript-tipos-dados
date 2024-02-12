const newProduct = {
  produto: "CPU Dual Core 3.0GHZ",
  lote: 321,
  ano: 2022,
  qtd: 5,
};

const geracaoEtiqueta = (product: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  let result: string[] = [];
  for (let i = 0; i <= product.qtd; i++) {
    result.push(`${product.lote}-${product.ano}-00${i}`);
  }
  return result;
};

console.log(geracaoEtiqueta(newProduct));
