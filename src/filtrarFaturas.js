function filtrar(arrFaturas) {
    const newArrFaturas = arrFaturas.filter(fatura => fatura.valor >= 2000);
    return newArrFaturas;
}

module.exports = filtrar;