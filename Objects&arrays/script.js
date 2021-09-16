const mass1 = [1, 2, 3, 4];
const mass2 = mass1;
mass2[0] = 0;

//простое присвоение не копирует, а создает новую ссылку на массив
console.log('origin mass > ', mass1);
console.log('with \'=\' > ', mass2);
//Копировать массив можно следующими способами:

// --- 1) метод Slice
// 1st arg - начальный элемент
// 2nd arg - сколько копируем элементов
const mass3 = mass1.slice(0, 4)
mass3[0] = 1;
console.log('.slice > ', mass3)

// --- 2) метод Concat
// применяеться для обьеденения несольких массивов
// в данном случае путого и mass1
const mass4 = [].concat(mass1);
mass4[0] = 1;
console.log('.concat > ', mass4);

// --- 3) оператор Spreed
const mass5 = [...mass1]
mass5[0] = 1;
console.log(' ... > ', mass5);

// --- 4) метод Array.from()
const mass6 = Array.from(mass1)
mass6[0] = 1;
console.log('Array.from() > ', mass6);

//Копирование обьектов
const obj1 = {
    name: 'Peter',
    age: 30,
}

const obg2 = obj1;
obg2.age = 33;

console.log('origin obj > ', obj1);
console.log('with \'=\' > ', obg2);

const obj3 = Object.assign({}, obj1, {age: 30});
console.log('Object.assign() > ', obj3);

const obj4 = {...obj1};
obj4.age = 30;
console.log(' ... > ', obj4)

const max = {
    name: 'Max',
    age: 20,
    social: {
        twitter: '@max',
        facebook: 'maxim',
    },
}

const max2 = Object.assign({}, max, {age: 50, name: 'Maxim'});
max2.social.facebook = 'maxxx';
console.log('Obj in obj origin > ', max);
console.log('copy with Obj.assign > ', max2);

const max3 = JSON.parse(JSON.stringify(max));
max3.social.facebook = 'maxxx'.toUpperCase();
console.log('JSON.parse > ', max3)


