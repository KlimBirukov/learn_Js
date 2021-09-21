function Auto(brand, prise, gas) {
    this.brand = brand
    this.prise = prise
    this.gas = gas
    this.discount = '60%' //свойство экземпляра, оно в приоретете
}
Auto.prototype.discount = '70%' //свойство прототипа

Auto.prototype.drive = function () {
    if (this.gas > 0) {
        this.gas = this.gas - 20;
        return this.gas
    } else {
        console.log('Gas is over')
    }
}

Auto.prototype.priceInfo = function () {
    return `The cost of ${this.brand} = ${this.prise}$.`
}



const bmw = new Auto(...['Bmv', 100000, 100])
const nissan = new Auto('Nissan', 120000, 120)
