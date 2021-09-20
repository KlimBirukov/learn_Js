const people = [
    {name: 'Станислав', year: 2000},
    {name: 'Василий', year: 1986},
    {name: 'Александр', year: 1990},
    {name: 'Владимир', year: 2004},
];

const comments = [
    {text: 'Отличный пост!', id: 523423},
    {text: 'Мне нравится', id: 823423},
    {text: 'Продолжай в том же духе', id: 2039842},
    {text: 'Все аццццтой !!!!!', id: 123523},
    {text: 'Нормально', id: 542328}
];

//## Методы Some и Every

// Array.prototype.some() -> Проверить, что по крайней мере одному из людей исполнилось 18 лет.
const currentYear = new Date().getFullYear();

const isEighteen = people.some(person =>
    currentYear - person.year >= 18)

console.log(isEighteen)

// Array.prototype.every() -> Проверить, что каждому из людей исполнилось 16 лет.
const allEighteen = people.every(person =>
    currentYear - person.year >= 18)

console.log(allEighteen)

// ## Array.prototype.find() -> Возвращает первый элемент массива, который удовлетворяет нашим требованиям

// Задача: найти комментарий, c номером ID - 823423
const commentId = comments.find(comment =>
    comment.id === 823423)

console.log(commentId)

// ## Array.prototype.findIndex() -> Возвращает индекс первого элемента, который удовлетворяет нашим требованиям

// Задача: удалить из массива комментарий с номером ID 123523
// 1. Находим индекс нужного нам комментария
const commentIndex = comments.findIndex(comment =>
    comment.id === 123523)
console.log(commentIndex)

// 2. Удаляем комментарий из массива (используем метод splice())
//comments.splice(commentIndex, 1);
//console.log(comments)

// 2.1 Удаляем комментарий из массива (используем метод slice() и оператор spread)
const commentsOne = comments.slice(0, commentIndex);
const commentsTwo = comments.slice(commentIndex+1);

// slice() создает новый массив, куда копирует елементы начиная с индекса старт и до end (не включая end)
// используем оператор spread для копирования всех элементов первого и воторого массива в новый массив newComments:
const newComments = [...commentsOne, ...commentsTwo]
console.log(newComments)

