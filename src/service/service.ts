export var arrayEntrada: any = [];

export var totalEntradas: any = 0;
export var totalSaidas: any = 0;
export var total: any = 0;

export function somaEntradas() {

    var entradaFiltrada = arrayEntrada.filter(function(item: { tipo: any; }) { return item.tipo == "Entrada"; });
    const soma = entradaFiltrada.map((item: { valor: any; }) => parseFloat(item.valor)).reduce((prev: any, curr: any) => prev + curr, 0);
    totalEntradas = parseFloat(soma.toFixed(2));

    var saidaFiltrada = arrayEntrada.filter(function(item: { tipo: any; }) { return item.tipo == "Saida"; });
    const saida = saidaFiltrada.map((item: { valor: any; }) => parseFloat(item.valor)).reduce((prev: any, curr: any) => prev + curr, 0);
    totalSaidas = parseFloat(saida.toFixed(2));

    var somaTotal = totalEntradas - totalSaidas;
    total = parseFloat(somaTotal.toFixed(2));

}

