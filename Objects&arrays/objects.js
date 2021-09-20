// Вся работа данного урока проводится в консоли браузера Google Chrome
// ## Работа с массивами данных

// Наши данные

const presidents = [
    {first: 'George', last: 'Washington', born: 1732, died: 1799},
    {first: 'John', last: 'Adams', born: 1735, died: 1826},
    {first: 'Ronald', last: 'Reagan', born: 1911, died: 2004},
    {first: 'Gerald', last: 'Ford', born: 1913, died: 2006},
    {first: 'Richard', last: 'Nixon', born: 1913, died: 1994},
    {first: 'John F.', last: 'Kennedy', born: 1917, died: 1963},
    {first: 'Harry S.', last: 'Truman', born: 1884, died: 1972},
    {first: 'Grover', last: 'Cleveland', born: 1837, died: 1908},
    {first: 'Chester A.', last: 'Arthur', born: 1829, died: 1886},
    {first: 'Abraham', last: 'Lincoln', born: 1809, died: 1865},
    {first: 'Franklin', last: 'Pierce', born: 1804, died: 1869},
    {first: 'Lyndon B.', last: 'Johnson', born: 1908, died: 1973},
    {first: 'Dwight D.', last: 'Eisenhower', born: 1890, died: 1969},
];


const writers = ['Василий, Жуковский', 'Александр, Грибоедов', 'Александр, Пушкин', 'Владимир, Даль',
    'Николай, Языков', 'Федор, Тютчев', 'Николай, Гоголь', 'Алексей, Кольцов', 'Александр, Герцен',
    'Иван, Гончаров', 'Михаил, Лермонтов', 'Пётр, Ершов', 'Алексей, Толстой', 'Даниил, Заточник',
    'Александр, Радищев', 'Евгений, Баратынский', 'Петр, Вяземский', 'Александр, Бестужев-Марлинский',
    'Михаил, Загоскин', 'Сергей, Аксаков', 'Владимир, Одоевский', 'Григорий, Данилевский',
    'Алексей, Писемский', 'Дмитрий, Григорович', 'Яков, Полонский', 'Леонид, Андреев',
    'Валерий, Брюсов', 'Саша, Черный', 'Юрий, Трифонов', 'Федор, Абрамов',
    'Дмитрий, Кедрин', 'Василий, Шукшин'];


// Array.prototype.filter()
// 1. Отфильтровать президентов которые родились в 1700-х годах.
const born1700 = presidents.filter(
    president => president.born >= 1700 && president.born <= 1800
);

console.table(born1700)

// Array.prototype.map()
// 2. Создать массив, который содержит только имя и фамилию каждого президента

// при использование map массив на выходе будет иметь такую же длинну,
// как и оригинальный, а при фильтре может отличаться
const FirstLastName = presidents.map(president =>
    `${president.first}, ${president.last}`
);

console.table(FirstLastName)

// Array.prototype.sort()
// 3. Отсортировать президентов по году рождения - от старшего к младшему

// копия массива не создаётся - массив сортируется
console.log('sorted >');
console.table(presidents.sort(
    (a, b) => a.born - b.born
))

// Array.prototype.reduce()
// 4. Подсчитать общее количество лет жизни всех президентов
const totalLivesYear = presidents.reduce(
    (total, president) => total + (president.died - president.born), 0);

console.log(totalLivesYear);

// 5. Отсортировать президентов в зависимости от количества прожитых лет (от большего к меньшему)
console.table(presidents.sort(
    (a, b) => (b.died - b.born) - (a.died - a.born)
))

// 6. Создать список названий городов (City) и областей (County) Калифорнии содержащих "San"
// https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_California

// переходим по ссылке и пишем в консоль
/**
 const table = document.querySelector('.plainrowheaders');
 const links = Array.from(table.querySelector('tbody').querySelectorAll('a'));
 const names = links
 .map(link => link.textContent)
 .filter(city => city.includes('San'));
 console.log(names);
 **/

// 7. Упражнение по сортировке
// Отсортировать массив "writers" по фамилии в алфавитном порядке
const writersName = writers.sort((a, b) =>
        a.split(', ')[1] > b.split(', ')[1] ? 1 : -1
    // ещё один метод с деструктором, но мой короче))
    // const [f1,l1] = a.splite(', ');
    // const [f2,l2] = a.splite(', ');
    // return `${l2 > l1 & 1 : -1}`;
)
console.table(writersName);

// 8. Упражнение по использованию метода Reduce
// Подсчитать - сколько раз встречается каждый элемент в массиве
const data = ['truck', 'car', 'car', 'truck', 'bike', 'walk', 'car', 'van', 'bike',
    'walk', 'car', 'van', 'car', 'truck'];

const dataCount = data.reduce((objCount, transport) => {
    if(!objCount[transport]) {
        objCount[transport] = 0;
    }
    objCount[transport]++;
    return objCount;
}, {});
console.log(dataCount);

// 9. Упражнение по использованию методов .foEach и Object.keys();
// Создать массив, который будет содержать только уникальные значения данного массива:
const fruits = ['apples', 'bananas', 'oranges', 'apples', 'grapes', 'bananas', 'peaches',
    'strawberries', 'oranges', 'apricots', 'bananas'];

const uniqueFruits = {};
fruits.forEach( (fruit) => {
    uniqueFruits[fruit] = true;
})
console.log(Object.keys(uniqueFruits));