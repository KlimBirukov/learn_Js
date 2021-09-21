const auto = {
    brand: 'Tesla',
    drive() {
        console.log(this)
        return `Let's start our ${this.brand}`;
    }
}


/**
const autoDrive1 = auto.drive();
**/
//результат работы метода, просто в переменной
/**
const autoDrive2 = auto.drive;
**/
//определение функции, можем использовать результат работы метода за пределами обьекта auto
// в примере выше присвоение метода в переменную не привязывало метод к обьекту =>
// this будет undefined

const aDrive = auto.drive.bind(auto);// такая запись значит что новый метод aDrive
// будет связан с обьектом auto и this будет ссылаться на auto

const motoBike = {
    brand: 'Suzuki'
}

const motorDrive = auto.drive.bind(motoBike)
console.log(motorDrive())

const $ = document.querySelector.bind(document);
console.log($('h2'))




const bill = {
    tip: 0.1,
    calculate(total){
        return total + total * this.tip;
    }
}

const pay = bill.calculate(1000)
console.log(pay)

const payCount = bill.calculate.bind( {tip: 0.2}, 1000);
console.log(payCount())

// compare to Call & Aplly

const payBind = bill.calculate.bind(bill)
const payCall = bill.calculate.call(bill, 1000) //(bill, ...[1000])
const payApply = bill.calculate.apply(bill, [1000])

console.log(`payBind = ${payBind(1000)}, payCall = ${payCall}, payApply = ${payApply}`);