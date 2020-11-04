//- створити функцію яка виводить масив
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function print(arr)
// {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//     }
// }
//
// function randomInitializeAndPrint(arr, min, max)
// {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = min + Math.round(Math.random() * max);
//     }
//     print(arr);
// }
// let arr = new Array(10);
// randomInitializeAndPrint(arr, 0, 10);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function getMin(x, y, z)
// {
//     if (x <= y && x <= z) {
//         return x;

//     }
//     if (y <= x && y <= z) {
//         return y;
//     }
//
//     return z;
// }
// function getMax(x, y, z)
// {
//     if (x >= y && x >= z) {
//         return x;
//     }
//     if (y >= x && y >= z) {
//         return y;
//     }
//
//     return z;
// }
// console.log(getMin(4, 3, 5));
// console.log(getMax(4, 3, 5));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function getMinPrintMax()
// {
//     if(!arguments.length) {
//         console.log('No arguments were provided');
//         return;
//     }
//
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const argument of arguments) {
//         if (argument > max) {
//             max = argument;
//         }
//         else if (argument < min) {
//             min = argument;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(getMinPrintMax(9,8,7,3,2,1,0,6,5,4));
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// function getMin(arr)
// {
//     if(!arr.length) {
//         console.log('Empty array passed in');
//         return
//     }
//
//     let min = arr[0];
//     for (const element of arr) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// function getMax(arr)
// {
//     if(!arr.length) {
//         console.log('Empty or no array passed in');
//         return
//     }
//
//     let max = arr[0];
//     for (const element of arr) {
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }
//
// console.log(getMin([9,8,7,3,2,1,0,6,5,4]));
// console.log(getMax([9,8,7,3,2,1,0,6,5,4]));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function sumOf(arr)
// {
//     if(!arr.length) {
//         console.log('Empty or no array passed in');
//         return;
//     }
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// function averageOf(arr)
// {
//     if(!arr.length) {
//         console.log('Empty or no array passed in');
//         return;
//     }
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum / arr.length;
// }
//
// console.log(sumOf([1,2,3,4,5,6,7,8,9,]));
// console.log(averageOf([1,2,3,4,5,6,7,8,9,0]));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function getFieldsCount(arr)
// {
//     if(!arr.length) {
//     console.log('Empty or no array passed in');
//     return;
//     }
//     let count = 0;
//     for (let object of arr) {
//         for (let objectKey in object) {
//             count++;
//         }
//     }
//
//     return count;
// }
// let a = {
//     dksdf: 'dmld',
//     jdsl:'dsfkfd',
//     dkdf: 'dmld',
//     jdl:'dsfkfd',
//     dsdf: 'dmld',
//     dsl:'dsfkfd',
// };
// let b = {
//     dksdf: 'dmld',
//     dkdf: 'dmld',
//     jdl:'dsfkfd',
//     dsdf: 'dmld',
//     dsl:'dsfkfd',
// };
// let c = {
//     dksdf: 'dmld',
//     jdsl:'dsfkfd',
//     dkdf: 'dmld',
//     jdl:'dsfkfd',
//     dsdf: 'dmld',
// };
//
// console.log(getFieldsCount([a, b, c]));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function vectorsSum (vector1, vector2)
// {
//     if (!vector1.length || !vector2.length) {
//         console.log('Bad input');
//         return;
//     }
//
//     let lesserLength = (vector1.length < vector2.length) ? vector1.length : vector2.length;
//     let sum = new Array(lesserLength);
//     for (let i = 0; i < lesserLength; i++) {
//         sum[i] = vector1[i] + vector2[i];
//     }
//
//     return sum;
// }
//
// let arr1 = [1,2,3,4];
// let arr2 = [2,3,4,5];
// console.log(vectorsSum(arr1, arr2));

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function allZeros(arr, pos)
// {
//     for (let i = pos; i < arr.length; i++) {
//         if (arr[i] !== 0)
//             return false;
//     }
//
//     return true;
// }
//
// function moveZerosToEnd (arr)
// {
//     let i = 0;
//     while(i < arr.length) {
//         if (arr[i] === 0) {
//             for (let j = i; j < arr.length - 1; j++)
//             {
//                 arr[j] = arr[j + 1];
//             }
//             arr[arr.length - 1] = 0;
//         }
//
//         if (allZeros(arr, i))
//         {
//             break;
//         }
//
//         if (arr[i] !== 0) {
//             i++;
//         }
//     }
//
//     return arr;
// }
// console.log(moveZerosToEnd([0,0,1,0]));

// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// function isPowerOf(number, power)
// {
//     let log = Math.log10(number) / Math.log10(power);
//     return (Math.abs(log - Math.floor(log)) === 0)
// }
//
// let number = +prompt("Enter a number");
// if (isPowerOf(number, 2))
// {
//     alert('Exact power of 2!');
// }
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

// function containsArrays (arr)
// {
//     for (let arrElement of arr) {
//         if (Array.isArray(arrElement))
//             return true
//     }
//
//     return false;
// }
//
// function flatten(arr)
// {
//     if (!Array.isArray(arr)) return false;
//
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i]))
//         {
//             if (containsArrays(arr[i])) {
//                 flatten(arr[i]);
//             }
//
//             let j = i;
//             for (let arrElement of arr[i]) {
//                 arr.splice(j, 0, arrElement);
//                 j++
//             }
//             arr.splice(j, 1);
//             i = j - 1;
//         }
//     }
//
//     return arr;
// }
//
// let arr = [1,3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];
// console.log(flatten(arr));

// Створити функцію яка:
//- Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addBlock(element, text) {
//     let block = document.createElement(element);
//     block.innerText = text;
//     document.body.appendChild(block);
// }
// addBlock('div','Hello owu');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
//
// function createUsersAndCitiesArr (usersArr, CitiesArr) {
//     let usersAndCitiesArr = [];
//     for (let user of usersArr) {
//         for (let city of CitiesArr) {
//             if (city.user_id === user.id) {
//
//                 let newUser = JSON.stringify(user);
//                 newUser = newUser.replace('}', ',');
//                 let newCity = JSON.stringify(city);
//                 newUser += newCity.substr(1, newCity.length); //дописуєм місто, забравши { з початку
//                 newUser = JSON.parse(newUser);
//                 usersAndCitiesArr.push(newUser);
//             }
//         }
//     }
//
//     return usersAndCitiesArr;
// }
//
// console.log(createUsersAndCitiesArr(usersWithId, citiesWithId));
// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.

// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
//
// 			];
// "
// let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},
// 			];
// function writeRules(rulesArr) {
//     let newBlock = document.getElementById('wrap');
//     let currentBlock;
//     let ruleNumber = 1;
//     for (let rule of rulesArr) {
//         currentBlock = document.createElement('div');
//         currentBlock.innerHTML = `<div> <h1>${ruleNumber++}</h1> </div>`;
//         currentBlock.innerHTML += `<div> <h3>${rule.title}</h3> ${rule.body}`;
//         newBlock.appendChild(currentBlock);
//     }
// }
// writeRules(rules);
// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
// function deepCopy (arr) {
//     let newObj = {};
//     for (let sourceKey in source) {
//         destination[sourceKey] = source[sourceKey];
//     }
// }
//

// function deepCopy (obj)
// {
//     let emptyObj = {};
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             emptyObj[key] = deepCopy(obj[key]);
//         } else {
//             emptyObj[key] = obj[key];
//         }
//     }
//     return emptyObj;
// }
//
// let x = {
//     title: 'Первое правило Бойцовского клуба.',
//     body: 'Никому не рассказывать о Бойцовском клубе.'
// };
//
// let y = deepCopy(x);
// console.log(y);
// delete x.title;
// console.log(y);