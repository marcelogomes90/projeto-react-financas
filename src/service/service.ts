export var arrayEntrada: any = [];

export var totalEntradas: any = "R$ 0,00";
export var totalSaidas: any = "R$ 0,00";
export var total: any = "R$ 0,00";

export function somaEntradas() {

    var entradaFiltrada = arrayEntrada.filter(function(item: { tipo: any; }) { return item.tipo == "Entrada"; });
    const soma = entradaFiltrada.map((item: { valor: any; }) => parseFloat(item.valor)).reduce((prev: any, curr: any) => prev + curr, 0);
    totalEntradas = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    totalEntradas = totalEntradas.toLocaleString('pt-br', {minimumFractionDigits: 2})

    var saidaFiltrada = arrayEntrada.filter(function(item: { tipo: any; }) { return item.tipo == "Saida"; });
    const saida = saidaFiltrada.map((item: { valor: any; }) => parseFloat(item.valor)).reduce((prev: any, curr: any) => prev + curr, 0);
    totalSaidas = saida.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    totalSaidas = totalSaidas.toLocaleString('pt-br', {minimumFractionDigits: 2})

    var somaTotal = soma - saida;
    total = somaTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    total = total.toLocaleString('pt-br', {minimumFractionDigits: 2})

}

export function removeObjArray(idObjeto: any) {
    var arrayFiltrado = arrayEntrada.filter((element: any) => element.id != idObjeto);
    arrayEntrada = arrayFiltrado;
    somaEntradas();
}