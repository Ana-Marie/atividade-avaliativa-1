function filtrar(arrFaturas) {
    return arrFaturas.filter(fatura => fatura.valor >= 2000);

}

module.exports = filtrar;