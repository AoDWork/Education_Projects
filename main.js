"use strict";
{//Методы от Snieda 
    "use strict";

    //++++++++++++++++++++++++ СТРОКИ ++++++++++++++++++++
    
    let str = 'Hello , World !';
    
    str.length // 15 Длина строки ( 15 элементов) последний элемент под индексом 14
    
    str.charAt(0); // 'H' - Возвращает букву под индексом 0
    str[0]; // 'H'
    
    str.charCodeAt(0); // 72 - код буквы
    
    str.concat (33); // 'Hello , World !33' - присоединяет к строке
    str.concat ([1,2,4]); // 'Hello , World !1,2,4'
    str.concat ({a:1, b:2}); //'Hello , World ![object Object]'
    
    str.startsWith('Hello') //true  Проверяет содержит ли строка это выражение в начале
    str.startsWith('ello'); //false
    str.startsWith('hello') //false регистр влияет
    str.startsWith('Hello', 1) //false Можхно задать начальный индекс поиска
    
    str.endsWith("!"); // true, Проверяет с конца строки, можно задать индекс
    str.endsWith("!", 10); //false
    
    str.includes('Hello') //true Проверяет содержится ли где то в строке такая подстрока
    str.includes('o') // true  Ищет по всей строке, а не только сначала
    str.includes('o', 13) //false можно указать индек с какого начинать искать
    
    str.indexOf('o') //4 Возвращает индекс первого совпадения
    str.indexOf('o', 5) //9 Можно задать начальный индекс, тогда вернет индекс следующего совпадения
    str.indexOf('y') // -1  При отсутствии совпадений возвращает минус 1
    
    str.slice() //'Hello , World !' - Обрезает строку и возвращает обрезанную. Если не указать индексы вернет всю строку
    str.slice(0, 5) //'Hello' Обрезает с 0 до 5го индекса НЕ включая 5й индекс
    str.slice(-7, -3) //'Worl' Принимает отрицательные числа
    str.slice(7) //' World !' указывая первый индекс, строку будет резаться до конца
    
    str.split() // ['Hello , World !'] - возвращает массив, разделенный заданным разделителем. Тут нету разделителя. 1 элем
    str.split('') //['H', 'e', 'l', 'l', 'o', ' ', ',', ' ', 'W', 'o', 'r', 'l', 'd', ' ', '!'] Разделитель - пустая строка. 15 элем
    str.split(' ') // ['Hello', ',', 'World', '!'] Разделитель - пробел. 4 элемента
    str.split(',') // ['Hello ', ' World !'] Разделитель - запятая.  2 элемента
    str.split('o') // ['Hell', ' , W', 'rld !'] 3 элемента
    
    str.substr(1, 8); //'ello , W' Обрезает строку и возвращает обрезанную. 
    //Первый аргумент - начальный индекс, второй - количество символов которые нужно вернуть
    
    str.toLowerCase()  // 'hello , world !'  Возвращает новую строку в нижнем регистре      НЕ ИЗМЕНЯЕТ исходную строку.
    str.toUpperCase()  // 'HELLO , WORLD !'  В верхнем  регистре.                           НЕ ИЗМЕНЯЕТ исходную строку.
    
    
    let str2 = '     Hello , World !     ';
    
    str2.trim() //'Hello , World !'  Убирает пробелы в начале и в конце текста
    str2.trimStart() //'Hello , World !     ' - Только в начале
    str2.trimEnd() // '     Hello , World ! ' - Только в конце
    
    
    
    //++++++++++++++++++++++ МАССИВЫ ++++++++++++++++++++
    
    let arr = ["one", 'two', 'three', 'four', 'five'];
    
    arr.push(100) // 6 - Добавляет переданные элементы в КОНЕЦ массива, прадварительно превращая его в строку
    // ['one', 'Two', 'Three', 'Four', 'Five', 100] -                                    ***ИЗМЕНЯЕТ исходный массив
    //console.log(arr.push(['7'])); // 7 Возвращает количество эллементов
    //['one', 'two', 'three', 'four', 'five', 100, Array(1)]
    arr.push({a:1}) //8 ['one', 'two', 'three', 'four', 'five', 100, Array(1), {…}]     ***ИЗМЕНЯЕТ исходный массив
    
    arr.pop() //{a: 1} - Удаляет один последний элемент и возвращает его значение       ***ИЗМЕНЯЕТ исходный массив
    
    arr.unshift(1, 2) //9 - Добавляет элементы в начало массива, возвращает колличество элем.  
    //[1, 2, 'one', 'two', 'three', 'four', 'five', 100, Array(1)]                       ***ИЗМЕНЯЕТ исходный массив
    
    arr.shift(); //1   Удаляет первый элемент и возвращает его
    //[ 2, 'one', 'two', 'three', 'four', 'five', 100, Array(1)]                          ***ИЗМЕНЯЕТ исходный массив
    
    arr.concat([1, 2]); // Добавляет эл. в конец массива как push, но если добавим массив то он добавляет его элементы, а не сам массив 
    //(10) [2, 'one', 'two', 'three', 'four', 'five', 100, Array(1), 1, 2] НЕ ИЗМЕНЯЕТ исходный массив, а возвращает НОВЫЙ
    
    
    
    // ++++++++ Методы ПЕРЕБОРА массива forEach, map, some, every, find, findIndex, filter, reduce +++++++++++++++
    //Каждый из этих методов проходится по массиву от начал и до конца и принимает коллбэк функцию в качестве параметра(аргумента)
    arr = [1, 2, 3, 4, 5];
    
    // 1) forEach - перебирает эл. массива.  Аргументы el - элемент, ind - индекс, arr - массив. 
    //              ind и arr - указываем если хотим использовать, имена произвольны.
    // arr.forEach((el, ind, arr) => {
    //     console.log(`Element ${el}, Index: ${ind}, Massive: ${arr}`);
    // })
    
    // arr.forEach((elem, index) => {
    //     console.log(`Element ${elem}, Index: ${index} in this massive`);
    // })
    // Element 1, Index: 0 in this massive
    // Element 2, Index: 1 in this massive
    // Element 3, Index: 2 in this massive
    // Element 4, Index: 3 in this massive
    // Element 5, Index: 4 in this massive
    
    
    // 2) map - обязан вернуть значение поэтому прописываем return. возвращает НОВЫЙ массив, для хранения присваиваем переменной
    const mapArr = arr.map((el, ind, arr) => {
        return el * 2 + ind
    });
    //mapArr (5) [2, 5, 8, 11, 14]      при этом       arr  (5) [1, 2, 3, 4, 5];
    
    
    // 3) some Проверяет есть ли в массиве заданное условие, если хоть одно истинно возвращает true, если нет false
    const checkSome = arr.some ((el, ind, arr) => {
        return el > 1
    }) // true
    
    
    // 4) every Проверяет истину условия для каждого елем. если хоть один элем. не подходит, прекращает выполнение и возвращает false
    const checkEvery = arr.every ((el, ind, arr) => {
        return el > 1
    }) // false
    
    
    // 5) find - позволяет найти эл. в массиве и возвращает его (проверка останавливается на нем), если элемента нет - undefined
    const foundElem = arr.find((el, ind, arr) => {
        return el === 1
    }) // 1
    
    
    
    // 6) findIndex - возвращает индекс первого найденого элемента, если элемента нет - undefined
    const foundIndex = arr.findIndex ((el, ind, arr) => {
        return el === 1
    }) // 0
    
    
    // 7) filter - проверяет эл. на соответствие условию и возвращает НОВЫЙ массив с подходящими по условию элементами 
    const filterArr = arr.filter((el, ind, arr) => {
        return el > 3
    }) //(2) [4, 5]
    
    
    // 8) reduce - возвращает сумму всех элементов массива в НОВЫЙ. sum - переменная в которую ложится сумма(название произвольное)
    //             init - можно задать значение по умолчанию для sum (0, 10, функцию, объект)
    
    // const arrReduce = arr.reduce((sum, el, ind, arr) => {
    //     return sum + el
    // }, init);
    
    const arrReduce = arr.reduce((total, el) => {
        return total + el
    }, 0);  // 15
    
    //++++++++ ++++++++ ++++++++ ++++++++
    
    // flat - возвращает НОВЫЙ массив в котором раскрывает 1 степень вложенности массива   НЕ ИЗМЕНЯЕТ исходный массив
    const arr2 = [0, [1, 2], [3, [4, 5], [6, 7] ] ];  //  [0, Array(2), Array(3)]
    const arrFlat = arr2.flat(); // (6) [0, 1, 2, 3, Array(2), Array(2)]
    arrFlat.flat(); // (8) [0, 1, 2, 3, 4, 5, 6, 7]    Можно записать как arr.flat().flat()
    
    // indexOf Возвращает индекс элемента. первый аргумент - искомый элемент, второй - с какого индекса начинать искать
    arr.indexOf(1); // 0
    arr.indexOf("six"); // -1  - если не найдено совпадений
    arr.indexOf(1, 1); // -1
    
    // lastIndexOf - Начинает искать с конца массива. первый аргумент 
    arr.lastIndexOf(1); // 0
    arr.push(1);
    arr.lastIndexOf(1); //5
    arr.lastIndexOf(1, 1); //0
    arr.lastIndexOf("six"); // -1
    
    // slice - обрезает часть массива и возвращает обрезанный кусок в виде массива. 1 аргум - с какого обрезать, 2й - до какого
    //                                                                               НЕ ИЗМЕНЯЕТ исходный массив
    arr.slice(1, 5); // (4) [2, 3, 4, 5]
    arr.slice();     //(6) [1, 2, 3, 4, 5, 1]
    
    //fill - заполняет массив заданным аргументом - 1й, 2й - с какого по какой 3й аргумент заполнить  ***ИЗМЕНЯЕТ исходный массив
    arr.fill(0) // (6) [0, 0, 0, 0, 0, 0]
    arr.fill(1, 0, 3) // (6) [1, 1, 1, 0, 0, 0]
    
    // join - преобразует массив в строку и разлеит разделителем который принимает. Возвращает строку. НЕ ИЗМЕНЯЕТ исходный массив
    arr.join() // '1,1,1,0,0,0'
    arr.join('') //'111000' - пустая строка
    arr.join(' ') //'1 1 1 0 0 0'   пробел
    
    // reverse - изменяет порядок эл. массива на обратный. ***ИЗМЕНЯЕТ исходный массив
    arr.reverse()  //(6) [0, 0, 0, 1, 1, 1]
    
    // sort - сортирует эл. массива. 2 аргумента а и b. Сортировка от меньшего к большему a - b, b - a - от большего к меньшему
    let arr3 = [10, 5, 2, 15, 11];                  //   Имена произвольные         ***ИЗМЕНЯЕТ исходный массив
    arr3.sort((a, z) => {
        return a - z
    })
    
    // splice - заменяет определенные эл. массива задаными, возвращает удаленные элем.   ***ИЗМЕНЯЕТ исходный массив
    // 1й аргумент - начальный индекс, 2й - сколько эл. удалить, следующие аргум - добавляемые элем.(может быть больше чем удаляемых)
    arr.splice(3, 2, 'two', 'three', 'four') // (2) [1, 1]  
    arr //(7) [0, 0, 0, 'two', 'three', 'four', 1]
    arr.splice(3, 3, 'new') //(3) ['two', 'three', 'four']
    arr //(5) [0, 0, 0, 'new', 1]
    arr.splice(1, 0, 2) //[]            - не удаляли эл. , а только вставили в индекс 1
    arr //(6) [0, 2, 0, 0, 'new', 1]
    
    // includes Проверяет содержится ли где то в массиве такая подстрока. Возвращает - true / false
    arr.includes('new') //true
    arr.includes('new', 5) //false - второй параметр - начальный индекс поиска
    
    
    
    //++++++++++++++++++++++ ОБЪЕКТЫ ++++++++++++++++++++
    
    const obj1 = {
        name: 'Maks',
        age: 33,
        hi: function() {console.log(this.name);}
    };
    const obj2 = {
        country: 'Ua',
        skills: ['html', 'css', 'js'],
        obj: {name2: 'Vladimir'}
    };
    const targetObj = {};
    
    
    // Object.assign()  - Копирует свойства, методы и ОБЪЕКТЫ объектов в другой объект. Обращаемся к глобальному классу Object
    // Object.assign(target, source); - 1й объект куда копируем, 2й из которого копируем
    
    Object.assign(targetObj, obj1, obj2);  // копируемых объектов может быть несколько
    targetObj //{name: 'Maks', age: 33, country: 'Ua', skills: Array(3), hi: ƒ}
    const person = Object.assign({}, obj1, obj2); // присваиваем константе, аргумент - пустой объект
    person    //{name: 'Maks', age: 33, country: 'Ua', skills: Array(3), hi: ƒ}
    Object.assign(obj1, obj2);//                                           ***ИЗМЕНЯЕТ исходный массив obj1
    obj1      //{name: 'Maks', age: 33, country: 'Ua', skills: Array(3), hi: ƒ}
    
    
    //Object.entries(obj) - принимает объект и возвращает массив с вложенными массивами
    Object.entries(obj2); //(3) [Array(2), Array(2), Array(2)]
    // 0: (2) ['country', 'Ua'] 1: (2) ['skills', Array(3)] 2: (2) ['obj', {…}]
    //Вложенные массивы и объекты обекта - сохраняют свою структуру
    
    
    //Object.fromEntries([]) - принимает массив с лож. массивами и вернет объект
    const obj3 = Object.fromEntries([['name', 'John'],['age', 44]]); // {name: 'John', age: 44}
    obj3 // {name: 'John', age: 44}
    
    
    //Object.is(el1, el2) - определяет являются ли оданиковыми эти два значения, возвращает true / false
    Object.is(1, 2) //false
    Object.is(1, 1) //true
    Object.is(1, '1') //false
    Object.is(NaN, NaN) //true  - только при этой проверке NaN равняется NaN
    
    
    //Object.keys(obj) - возвращает массив из ключей (название свойств, методов, объектов объекта)
    Object.keys(obj3) //(2) ['name', 'age']
    Object.keys(obj2) //(3) ['country', 'skills', 'obj']
    
    
    //Object.values(obj) - возвращает массив из значений (сохраняет структуру вложенных ассивов и объектов)
    Object.values(obj3) //(2) ['John', 44]
    Object.values(obj2)  // (3) ['Ua', Array(3), {…}]
    
    
    // ++++++++  ПРИСВОЕНИЕ в ОБЪЕКТАХ    bind, call, apply - позволяют изменить контекст вызова (изменить this)
    
    const person1 = {
        name: 'Maks',
        age: 33,
        getInfo: function(country, standart) {
            if(standart){
            return `Hi, my name is ${this.name}, i'm from ${standart}`
            }else{
            return `Hi, my name is ${this.name}, i'm from ${country}`};}
    };
    const person2 = {
        name: 'Oleg',
        age: 18,
    };
    
    
    // 1) bind - возвращает метод присвоенного объекта(присоединяет метод одного объекта к контексту второго)
    //obj1.method.bind(obj2)() -  obj2 - объект контекст которого используем для метода obj1
    
    //console.log(person1.getInfo('Ua')); // Hi, my name is Maks, i'm from Ua
    //console.log(person2.getInfo('Ua')); // Получаем ошибку
    
    //console.log(person1.getInfo.bind(person2)); // ƒ (country) {return `Hi, my name is ${this.name}, i'm from ${country}`}
    // console.log(person1.getInfo.bind(person2)('Ukr')); // Hi, my name is Oleg, i'm from Ukr - вызываем функцию
    
    // //Может принимать несколько параметров
    // console.log(person1.getInfo.bind(person2)('Ukr', 'Ukraine')); //// Hi, my name is Oleg, i'm from Ukraine
    // //или
    // console.log(person1.getInfo.bind(person2, 'Ukr', 'Ukraine')()); //// Hi, my name is Oleg, i'm from Ukraine
    
    // const getInfoPerson2 = person1.getInfo.bind(person2); // присваиваем метод переменной для сокращения вызова
    // console.log(getInfoPerson2("Ru")) // "Hi, my name is Oleg, i'm from Ru"
    
    
    // 2) call - НЕ ВОЗВРАЩАЕТ функцию, изменяет контекст передавая параметры, поэтому скобки вызова отсутствуют
    // console.log(person1.getInfo.call(person2, 'Ukr', 'Ukraine'));
    
    // //Так как метод не привязывается к функции то невозможно позже через вызов переменной задавать новые параметры, их нужно
    // //присвоить переменной сразу
    // const getInfoCall = person1.getInfo.call(person2, 'Ukr');
    // console.log(getInfoCall);
    
    
    // 3) apply - не привязывает метод. Работает как и call но синтаксис другой(запись)
    // console.log(person1.getInfo.call(person2, ['Ukr'], ['Ukraine'] ));
    
    
    
    //++++++++++++++++++++++ ЧИСЛА ++++++++++++++++++++
    
    //Обращаемся через глобальный объект Number
    
    //isInteger - проверяет целое число или нет. Возвращает true / false
    Number.isInteger(10) // true
    Number.isInteger(10.5) // false
    
    //isFinite() - определяет передаваемый параметр число или нет true / false
    Number.isFinite(1) //true
    Number.isFinite('1') //false
    // но если обращатся без Number то происходит преобразование к числу и сравнение
    isFinite(1) //true
    isFinite('1') //true
    isFinite('') //true
    isFinite([1]) //true
    isFinite('o') //false
    isFinite({}) //false
    
    //parseInt - преобразует содержимое в целое число (обрезая остальное если числа в начале) и возвращает его
    parseInt('1.6 bb') //1
    parseInt('bb') //NaN
    
    //parseFloat - преобразует содержимое в дробное число
    parseFloat('1.6'); // 1.6
    
    //toFixed - вызывается у числа обернутого в скобки для округления к целому числу, возвращает число в СТРОКЕ
    (5.4).toFixed(); // 5
    (5.555555).toFixed(2) // '5.55'   (2) - Параметр определяет знаки после запятой
    +(5.556666).toFixed(2) // 5.56 - через + получаем число
    
    
    //++++++++++++++++++++++ MATH ++++++++++++++++++++
    
    // ceil - округляет к ближнему большему целому числу
    Math.ceil(25.1) // 26
    
    // floor - округляет к ближнему меньшему целому числу
    Math.floor(25.9999) // 25
    
    // round - округляет к  целому числу
    Math.round(25.1) // 25
    Math.round(25.9999) // 26
    
    // min - из принимаемых элементов возвращает наименьший
    Math.min( 20, 10, 5, 15) //5
    
    // max - из принимаемых элементов возвращает наибольшее
    Math.max( 20, 10, 5, 15) //20
    
    // trunc - удаляет дробную часть
    Math.trunc(25.55) // 25
    
    // random - возвращает случайное число от 0 до 1
    Math.random() // 0.43748290973274084
    
}

{//002 Переменные и строгий режим
//= - знак присваивания. Название переменной не должно начинаться с цифры и не дожны совпадать с зарезервированными названиями
// и может содержать буквы, цифры и знак доллара и нижнего подчеркиния. Записываем кемэл кейсом. Num и num - переменные

//let -(используется только после того как объявлены) изменяемая переменная с ограниченной областью 
//видимости(в пределах фигурных скобок {})

//const - (используется только после того как объявлены)(константа), ограниченная областью видимости
//не изменяется на прямую, но если задать объект, то его можно изменять. Прямых констант в JS нету
const obj = {
    a: 50
}
obj.a = 10;
console.log(obj);// {a:10}

//var (старый метод задания переменной), существует еще до того как была объявлена поэтому будет undefined  вместо ошибки 
console.log(name);
var name = "Ivan";
// это затрудняет debugging. проблемы: глобальная область видимости из любого места, поднятие кода(всплытие переменной, hoisting)

//Новый стандарт let и const не поддерживается в старых версиях браузеров, тогда нужно программой переводить код в старый режим
//для того что бы использовать новый режим существует директива "use strict"; прописывается на первой строке кода
//при этом также не работает такое выражение a = 15; будет выдавать ошибку
}

{//003 Типы данных
//Тип данных можно проверить typeof.  console.log(typeof(5));
//Простые типы (примитивы): 
//1) Числа (1, 2, 3.2) , infinity - получается при делании на 0(может быть отрицательной если делить отрицательное число на 0)
//NaN (not a number)- получается при операции с не математической логикой ("string" * 9)

//2) Строки ("string", 'name', `you are ${years}`, "5")

//3)Логический тип(boolean) (true, false) 

//4) null - чего то не существует. null в консоль получаем редко, чаще будет ошибка ReferenceError: something is not defined
//ошибка ссылочного типа, которая говорит что мы ссылаемся на не существующий объект

//5) undefined - существует но значение не определено

//6) Symbol 

//7) BigInt - тип данных для больших чисел больше чем 2 в 53 степени


//Комплексные (объекты)
//обычные объекты - коллекция данных, может содержать разные типы данных (свойства) и действия(методы) 
const obj = {
    age: 10, 
    name: "John",
        say: function() {
        console.log("Hello");
    },
    isMarried: false
}
console.log(obj.age); //10       console.log( obj.say() ); // Hello
console.log(obj["age"]);//10


//Спец. объекты: 
//1) Массивы ["text", 6, {}, [], true] - частный случай объектов, конструкция для хранения данных строго по порядку. 
//Первый элемент под номером 0. let arr = [6, true]; console.log(arr[1]); //true
//Для записи эл. в массив используем arr[0] = "9";

//2) Функции
//3) Объекты даты
//4) Регулярные выражения 
//5) Ошибки
}

{//004 alert, confirm, prompt, document.write
//alert, confirm, prompt Эти события не могут быть стилизированы и их вид зависит от браузера. они блокируют построение страницы.

//alert - окно предупреждения имеет 1 кнопку -  ок
alert("hello"); 

//confirm - 2 кнопки ок и отмена.
const result = confirm("are u here?"); // Результат нажатия этих клавиш будет записан в result
console.log(result); //При нажатии ок - true, false - при нажатии кнопки отмена

//prompt - 2 кнопки ок и отмена и поле ввода.
const answer = prompt("Вам есть 18", "");//первый аргумент вопрос, второй аргумент пустые кавычки, 
//для получения ответа пользователя в них можно указать значение по умолчанию prompt("Вам есть 18", "18")
//ответ пользователя приходит в виде строки, что бы перевести в число ставим плюс впереди +prompt;
console.log(answer);
console.log( typeof(answer) );
//если просто promt - при закрытии окна Esc или Отмена - получим null (объект)
//если +prompt - 0 (number), если введут что то кроме числа - NaN (number)

//Помещаем ответы в массив
const answers = [];

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша Фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

//Если записать в консоле на сайте то заменяет все содержимое страницы
document.write(answers);
}

{//Sort massive (сортировка по порядку)
    // const arr = [1, 14, 4, 30, 54];
    // let sorted = arr.sort(CompareNum);
    // console.log(sorted); // [1, 4, 14, 30, 54]

    // function CompareNum(a, b){
    //     return a-b;
    // };
}

{//Интерполяция (ES6)

}

{let personalMovieDB = {
    count:  0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
            
                while(personalMovieDB.count == ""||personalMovieDB.count ==null || isNaN(personalMovieDB.count ) ){
                    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
                }
            },
    rememberMyFilms: function (){
                        for (let i = 0; i < 2; i++) {
                            let a = prompt("Последний просмотренный фильм?", "");
                            let b = prompt("Оцените этот фильм.", "");
                        
                            if(a != null && b != null && a != "" && b != "" && a.length < 50){
                                personalMovieDB.movies[a] = b;
                                console.log("Job's Done");
                            }else{
                                console.log("Error");
                                i--;
                            }
                        }
                    },
    detectPersonalLevel: function (){
        if(personalMovieDB.count < 10){
            document.write("Просмотрено мало фильмов");
        }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            document.write("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            document.write("Вы киноман");
        }else{
            document.write("Произошла ошибка");
        }
    },
    showMyDB: function (hidden){
                    if(!hidden){
                        console.log(personalMovieDB);
                    }
                },
    writeYourGenres: function () {
                        //Method cycling
                        // for (let i = 1; i <= 3; i++) {
                        //     let a = prompt(`Ваш любимый жанр под номером ${i}`, "");
                            
                        //     if(a != null && a != ""){
                        //         personalMovieDB.genres[i-1] = a;
                        //         console.log("Job's Done");
                        //     }else{
                        //         console.log("Error");
                        //         i--;
                        //     }
                        // }
                        //Method for all values in massive
                        for (let i = 1; i < 2; i++) {  //decrease i that cycle has 1 itteration
                            let all = prompt(`Введите ваши любимые жанры через запятую.`, "").toLowerCase();
                            
                            if(all != null && all != ""){
                                personalMovieDB.genres = all.split(", ");
                                personalMovieDB.genres.sort();
                                console.log("Job's Done");
                            }else{
                                console.log("Error");
                                i--; //Decrease increament for back in one itteration back
                            }
                        }

                        personalMovieDB.genres.forEach( (value, index ) => {
                                                            console.log(`Любимый жанр #${index+1} - это ${value}`);
                                                        }
                        );
                    },
    toggleVisibleMyDB: function(){
                           if (personalMovieDB.privat){
                            personalMovieDB.privat = false;
                           } else{
                            personalMovieDB.privat = true;  
                           }
                        }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// console.log(personalMovieDB);
}

{ //025 Get elements from page
// let box = document.getElementById("box");
// console.log(box);
// let btns = document.getElementsByTagName("button");
// console.log(btns[1]);
// let circles = document.getElementsByClassName("circle");
// console.log(circles[1]);

// let hearts = document.querySelectorAll('.heart'); 
// //в середину круглых скобок можно помещать любой сss селектор или их вложенность
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// });

// let oneHeart = document.querySelector('.heart'); 
// //Позволяет получить только первый подходящий элемент
// console.log(oneHeart);
}

{//}026 ={ interaction with elements 
    // let box = document.getElementById("box"),
    //     btns = document.getElementsByTagName("button"),
    //     circles = document.getElementsByClassName("circle"),
    //     wrapper = document.querySelector(".wrapper"),
    //     hearts = document.querySelectorAll('.heart'),
    //     oneHeart = document.querySelector('.heart'); 
//также можно получить эти переменный внутри wrapper обращаясь сразу к нему
    //hearts = wrapper.querySelectorAll('.heart'),
   // oneHeart = wrapper.querySelector('.heart'); 
    // квери селектор будет искать .heart внутри wrapper,  wrapper должен быть получен перед этими запросами

//Свойства записываются в инлайн строку, прямо в хтмл, поэтому по приоритету 
//они будут главнее чем сss свойства
    // box.style.backgroundColor = "green";
    // box.style.width = "500px";
//Задаем множество свойств одной командой
    // let num = 400;
    // box.style.cssText = `background-color: blue; width: ${num}px`;

    // btns[1].style.borderRadius = "100%";
    // circles[0].style.backgroundColor = "red";

    // for (let i = 0; i < hearts.length; i++){
    //     hearts[i].style.backgroundColor = "blue";
    // }

//Вместо циклов в основном используем перебирающие методы
    // hearts.forEach(item=>{
    //     item.style.backgroundColor = "blue";
    // });
//Методы для создания элементов на лету
    // let div = document.createElement("div"); //елементы
    // let text = document.createTextNode("Новый текст");  // текст(ноды)
//Обычно объекту назначают класс что бы применить сразу много аттрибутов
    // div.classList.add("black");  
    // document.body.append(div); // Современный способ Прикрепляем созданный див в КОНЕЦ тега body что бы он появился на странице

// //Для присоединения к диву с классом wrapper
//     document.querySelector(".wrapper").append(div);  // можно не создавать переменную если обращаться 1 раз  
    //wrapper.append(div); // С переменной
//wrapper.appendChild(div); // УСТАРЕВШИЙ метод (разницы нету)
// // Для присоединения нужно сначала получить элемент к которому присоединять
//     //     wrapper.prepend(div); //Прикрепляем в НАЧАЛО тега
// //ПЕРЕД и ПОСЛЕ
//     hearts[1].before(div);
//     hearts[1].after(div);

    //wrapper.insertBefore(div,  hearts[1]); //СТАРЫЙ метод для бефор


// //Удаление со страницы
//     circles[1].remove();
       // wrapper.removeChild(circles[1]); //СТАРЫЙ метод
// //Замена одного элемента другим
//     hearts[2].replaceWith(circles[0]); // Сердце заменяем кругом
   //  wrapper.replaceChild(circles[0], hearts[2] ); //Старый метод

//Первый Метод Для вставки ТЕКСТА или ХМТЛ структуры
    //div.innerHTML = "<h1>Hello World</h1>";
//Второй Метод но только для текста(безопасность при вводе пользователем данных)
   // div.textContent = "Hello";
//Для вставки куска ХТМЛ кода перед или после определенных тегов
    //div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>"); // вставляем второй аргумент бефорбегин(перед) див
    // afterbegim - в начало(первый в середине) элемента. beforeend - в конец в середину, afterend - после элемента
}

{//027 Practise with elements
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1 Удалить все рекламные блоки со страницы (правая часть сайта)
// let reklama =  document.querySelectorAll('.promo__adv img');
//        reklama.forEach(item=>{
//            item.remove();
//          });
// //2 Изменить жанр фильма, поменять "комедия" на "драма"
// let genre = document.querySelector(".promo__genre");
// genre.textContent = "Драма";
// //3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// //Реализовать только при помощи JS
// let bg = document.querySelector(".promo__bg");
// bg.style.backgroundImage =  "url('img/bg.jpg')";//Прописываем внутры другие кавычки что бы избежать конфликта
// //4  Список фильмов на странице сформировать на основании данных из этого JS файла.
// //Отсортировать их по алфавиту 
// let movieList =  document.querySelector(".promo__interactive-list"); // Селктор один что бы получить доступ к родителю списка и его методу
// movieList.innerHTML = ""; //Очистили список на странице
// movieDB.movies.sort(); // сортируем по алфавиту
// movieDB.movies.forEach((film, i) =>{    //a=a+1 или a+=1;
//         movieList.innerHTML += ` 
//                 <li class="promo__interactive-item">№${i+1} ${film}
//                     <div class="delete"></div>
//                 </li>
//         `; // 5 Добавить нумерацию выведенных фильмов ${i+1} 
//})
}

{//028 Event listener
// //1 способ записать прямо в хтмл свойстве, комбинируем кавычки
// //<button onclick = "alert('Click')" id="btn">Нажми меня</button>

// //2 способ при этом способе мы не сможем удалить этот обработчик событий и следующий онклик заменит предыдущий
// // let btn = document.querySelector("button"); // button - тег - выбирает только первый элемент с этим тегом
// // btn.onclick = function(){
// //     alert("Knock");
// // btn.onclick = function(){
// //     alert("Second cilck");
// // };

// //3 Способ первый аргумент click - вариант события, второй аргумент коллбек функция
// let btn = document.querySelector("button");
// // btn.addEventListener("click", ()=>{
// //     alert("click");
// // });

// // btn.addEventListener("mouseenter", ()=>{ // при наведении
// //     console.log("Hover");
// // });

// // //Для получения данных об элементе с которым взаимодействуем (координаты, событие)
// // // он передается первым аргументом в коллбек функцию (название е или event или другое?)
// // btn.addEventListener("mouseenter", (e)=>{ 
// //     console.log(e);// при наведении получаем объект в консоль
// // });

// // btn.addEventListener("mouseenter", (e)=>{ 
// //     console.log(e.target);// при наведении получаем на каком объекте сработало
// //     e.target.remove(); // получаем элемент и удаляем его после наведения
// // });

// //Для удаления обработчика его нужно присвоить переменной или мы не сможем к нему обратится
// let overlay = document.querySelector(".overlay");
// // let i = 0;
// // const targetElement = (e)=>{ 
// //     console.log(e.target);
// //     i++;
// //     if(i==2){
// //         btn.removeEventListener("click", targetElement);
// //     }
// // };
// // btn.addEventListener("click", targetElement);
// //     //Удаление btn.removeEventListener("click", targetElement);

// //Всплытие событий - когда событие срабатывает сначала на вложенном элементе, а потом на родителе
// const targetOverlay = (e)=>{ 
//     console.log(e.currentTarget); // Показывает на каком елементе произошло событие СЕЙЧАС
//     console.log(e.type);
// };
// // btn.addEventListener("click", targetOverlay);
// // overlay.addEventListener("click", targetOverlay);

// //Отмена стандартного поведения
// const link = document.querySelector("a"); // получение елемента ссылки <a href="https://www.youtube.com/">https://www.youtube.com/</a>
// link.addEventListener("click", function(event){
//     event.preventDefault();     // отмена перехода по ссылке, всегда прописываем вначале 
//     console.log(event.target);  // потом то что нужно сделать
// });

// // //Применение обработчика события к множеству элементов
// const btns = document.querySelectorAll("button");
// // btns.forEach(btn =>{
// //     btn.addEventListener("click", targetOverlay);
// // });

// //Опции события (третий аргумент EventListener (capture / once/ passive/ mozSystemGroup))
// btns.forEach(btn =>{
//     btn.addEventListener("click", targetOverlay, {once:true});
// });
}

{//029 Navigation in DOM, Data attributes, forof преимущества
//console.log(document.body); //- получаем боди
//console.log(document.documentElement); //- получаем ХТМЛ
//console.log(document.body.childNodes); //- псевдомассив узлов(нод) боди - 
//аналога с Элементами нету иногда его создают вручную перебором фороф потому что в нем есть брейк и континье
// for(let node of document.body.childNodes){
//     if(node.nodeName == "#text"){ // пропускаем узлы содержащие в названии #text
//         continue;              
//     }
//     console.log(node);
// }

// console.log(document.body.firstChild); //первая Нода
//console.log(document.body.firstElementChild); // первый Элемент
// console.log(document.body.lastChild);// последняя Нода
// console.log(document.querySelector("#current").parentNode); // получаем ноду по классу и обращаемя к его родителю
// console.log(document.querySelector("#current").parentNode);// получаем ноду родителя еще на уровень выше
//console.log(document.querySelector("#current").parentElement); // получаем ЭЛЕМЕНТ

//!!! НОДА - узел, отличается от получения элемента тем что может быть просто перенос на новыю строку, а не элемент
//data элементы <li data-current="3">3</li> используем вместо id
// console.log(document.querySelector("[data-current='3']"));//получить элем по дата аттрибуту !комбинация кавычек
// console.log(document.querySelector("[data-current='3']").nextSibling); //Следующая нода 
// console.log(document.querySelector("[data-current='3']").previousSibling); //Предыдущая нода
// console.log(document.querySelector("[data-current='3']").nextElementSibling); // Следующий элемент
// console.log(document.querySelector("[data-current='3']").nextSibling);
}

{//30 Practice use eventListeners
    'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // - скрипт начнет работу при полной загрузке ДОМ дерева

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    //1 Удалить все рекламные блоки со страницы (правая часть сайта)
    let reklama =  document.querySelectorAll('.promo__adv img');
        //    reklama.forEach(item=>{
        //        item.remove();
        //      });
    //2 Изменить жанр фильма, поменять "комедия" на "драма"
    let genre = document.querySelector(".promo__genre");
    // genre.textContent = "Драма";
    //3 Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
    //Реализовать только при помощи JS
    let bg = document.querySelector(".promo__bg");
    // bg.style.backgroundImage =  "url('img/bg.jpg')";//Прописываем внутры другие кавычки что бы избежать конфликта
    //4  Список фильмов на странице сформировать на основании данных из этого JS файла.
    //Отсортировать их по алфавиту 
    let movieList =  document.querySelector(".promo__interactive-list"); // Селктор один что бы получить доступ к родителю списка и его методу
    // movieList.innerHTML = ""; //Очистили список на странице
    // movieDB.movies.sort(); // сортируем по алфавиту
    // movieDB.movies.forEach((film, i) =>{    //a=a+1 или a+=1;
    //         movieList.innerHTML += ` 
    //                 <li class="promo__interactive-item">№${i+1} ${film}
    //                     <div class="delete"></div>
    //                 </li>
    //         `; // 5 Добавить нумерацию выведенных фильмов ${i+1} 
    // });

//30 Practice
// После введения текста в форму и нажатия кнопки 'Подтвердить'- добавляется новый фильм в список 
//без перезагрузки страницы. Новый фильм должен добавиться в movieDB.movies. Для получения значения из
// инпут  обращаемся  input.value.
let addForm = document.querySelector("form.add"); //<form class="add">
let addInput = addForm.querySelector(".adding__input"); // в теге form с классом add ищем класс <input class="adding__input"
let checkbox = addForm.querySelector("[type=checkbox]");  // ищем по аттрибуту <input type="checkbox">

addForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    let newMovie = addInput.value;
    let favorite = checkbox.checked; // обращаемся к чекбоксу что б он вернул тру или фолсе галочка отмечена или нет
    
    if(newMovie) {  // Проверка на пустую строку
       if(newMovie.length > 21){
        newMovie = `${newMovie.substring(0, 22)}...`; //проверяем на длинну символом и больше 21 знака добавляем троеточие
       }
       if(favorite){
           console.log("Добавляем любимый фильм");
       }
        movieDB.movies.push(newMovie);
        sortArr(movieDB.movies); //заново сортируем список
        
        createMovieList(movieDB.movies, movieList);
    }
  
    event.target.reset(); // удаляем текст из формы (addForm заменили на event.target разницы нету)
});

//создаем функцию для вывода списка и добавляем аргументы что бы она вызывалась только при нажатии
function createMovieList(films, parent){
    parent.innerHTML = ""; //Очистили список на странице
    sortArr(films);

    films.forEach((film, i) =>{    //a=a+1 или a+=1;
        parent.innerHTML += ` 
                    <li class="promo__interactive-item">№${i+1} ${film}
                        <div class="delete"></div>
                    </li>
            `; 
    });
    //3 Удаляем фильм при нажатии на кнопку корзинки которые создаются вместе с элементом фильма 
    document.querySelectorAll(".delete").forEach((btn, i)=>{ //находим кнопки удаления через класс <div  class="delete"
        btn.addEventListener("click", ()=> {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1); //удаляем 1 элемент из массива под номером i
            createMovieList(films, parent); //заново перестраиваем список вызывая функцию внутри себя (Рекурсия)
        });
    });
}  

let deleteAdv = (arr)=>{
arr.forEach(item=>{
    item.remove();
  });
};

let makeChanges = () =>{
    genre.textContent = "Драма";
    bg.style.backgroundImage =  "url('img/bg.jpg')";
};

let sortArr = (arr) =>{
    arr.sort();
};

createMovieList(movieDB.movies, movieList); //вызываем первый раз для построения списка
makeChanges();
deleteAdv(reklama);

});
}

{//032 Async, defer, dynamic scripts

//<script defer src="js/main.js"></script>
//defer - этот аттрибут сообщает браузеру что он должен продолжать обрабатывать страницу
// и загружать скрипт в фоновом режиме, а затем запустить скрипт когда загрузка DOM будет выполнена
//скрипты с defer никогда не блокируют загрузку страници. Скрипты с defer выполняются последовательно
//поэтому есть недостаток если впереди маленького скрипта стоит большой, маленький будет ждать выполнения большого

//<script async src="js/main.js"></script>
// async - запускается как только он будет загружен не ждет полного построения DOM модели
//используется для подвязки скриптов которые не зависят от DOM или другого функционала сайта(Метрики и счетчики)

//Динамически загружаемый скрипт ведет себя как async(выролняется сразу), пример формирования скрипта в другом скрипте
// const script = document.createElement("script"); //создаем елемент
// script.src = "js/test.js";                       //задаем атриббут сорс
// document.body.append(script);             //присоединяем к боди(помещается в конец) (замасчиваем на страницу) и тут же он выполняется

// // можно отменить асинхронное поведение скрипта
// function loadScript(src){
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = false;
//     document.body.append(script);
// }
// loadScript("js/test.js"); //будут выполнятся последовательно
// loadScript("js/some.js");
}

//================================================ В РАБОТЕ =====================================================================

{//002 Classlist м делегирование событий
    const btns = document.querySelectorAll("button");
//console.log(btns[0].classList.length); // консоль показала 2 класса <button class="blue some"></button>
// console.log(btns[0].classList.item(0));   // обращаемся к первому классу 'blue', () - скобки нужны
// console.log(btns[0].classList.item(1));     // "some" - второй класс
// console.log(btns[0].classList.add("red", "green")); //<button class="blue some red"></button> добавление
// console.log(btns[0].classList.remove("blue")); //удаление класса, можно добалять и удалять несколько сразу
// console.log(btns[0].classList.toggle("blue")); // если класс есть на элем. его удалит, если нету добавит

// //для использования класса в условии применяется
// if (btns[0].classList.contains('red')){ //проверяем содержит ли элемент класс red 
//     console.log("red");
// }

//
// btns[0].addEventListener("click", ()=>{
//     // if(!btns[1].classList.contains("red")){ //проверяем отсутствие у второй кнопки класса red
//     //     btns[1].classList.add("red");       // добавим класс
//     // } else{
//     //     btns[1].classList.remove("red");    //если класс есть то удалим
//     // }
// //можно использовать toggle, но иногда нужно вручную проверить на класс
// btns[1].classList.toggle("red");
// });

//устаревший метод className выводит классы одной строкой и потом нужно с этой строкой
//взаимодействовать, classList выводит псевдомассивом
//console.log(btns[0].className);

// Делегирование событий - используется для назначения одного события на несколько элементов
//даже если они созданы без нас(динамически). Назначаем обр. события на родителя элементов а потом
//проверяем на что был клик и сравниваем с заданными параметрами
const wrapper = document.querySelector(".btn-block"); //родитель кнопок <div id="first" class="btn-block">

wrapper.addEventListener('click', function(event){
    if(event.target && event.target.tagName == "BUTTON"){//проверяем на существование тега и на равенство его свойства строке "BUTTON"
      //сравнивать можно с nodeName и classList        if(event.target && event.target.classList.contains("blue"))   
      //продвинутое сравнение   if(event.target && event.target.matches("button.red"))     совпадение тега баттон у которого есть класс ред                               
         console.log("Hello!");
    }
  });

  const btn = document.createElement('button'); //создаем элемент
  btn.classList.add('red'); // добавляем ей класс ред
  wrapper.append(btn);      //прикрепляем в элемент wrapper
}

{//003 Создание Табов (вкладок)
    "use strict";
    //Задание - при нажатии на определенную кнопку выводить изображение и описание для нее
    window.addEventListener("DOMContentLoaded", ()=>{
        //получаем переменные
        const tabs = document.querySelectorAll(".tabheader__item"), //<div class="tabheader__item">Премиум</div> кнопки
                    tabsContent = document.querySelectorAll(".tabcontent"),// <div class="tabcontent">
                                                                            // <img src="img/tabs/vegy.jpg" alt="vegy">
                                                                            // <div class="tabcontent__descr">
                                                                                    //Меню "Фитнес" - ...
                                                                            // </div>
            // родительский эл. для назначение обр. событий кнопкам динамически
                     tabsParent = document.querySelector(".tabheader__items");//<div class="tabheader__item tabheader__item_active">Фитнес</div>
    
        //Скрываем ненужные табы
        function hideTabContent (){
            tabsContent.forEach(item =>{    //перебираем элементы и назначаем всем стиль
                //item.style.display = "none";
                item.classList.add("hide");     // Делаем через классы в css теперь две строчки
                item.classList.remove("show", "fade");
            });
            tabs.forEach(item =>{
                item.classList.remove("tabheader__item_active");//удаляем подсветку активности кнопок
            });
        }
         
        function showTabContent(i = 0){     // i = 0 - если вызвать функцию без аргумента то 0 юудет подставлятся по дефолту
            //tabsContent[i].style.display ="block";
            tabsContent[i].classList.add("show", "fade");   // Делаем через классы в css теперь две строчки
            tabsContent[i].classList.remove("hide");
            tabs[i].classList.add("tabheader__item_active");
        }
    
        hideTabContent(); //скрываем все табы
        showTabContent(); //показываем 1 таб по дефолту обычно первый под номером 0
    
        //Присваиваем обработчик события для кнопок
        tabsParent.addEventListener("click", (event)=>{
            const target = event.target; //переменная для уменьшения писанины если нужно часто обращатся к евент
    
            if(target&&target.classList.contains("tabheader__item")){
                tabs.forEach((item, i)=>{
                    if(target == item){
                        hideTabContent(); 
                        showTabContent(i);
                    }
                });
            }
        });
        //Добавили в css такой код .show{display:block}.hide{display:none}
        //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}
    
    });
}

{//004 Время выполнения скриптов, setTimeout & setInterval
    "use strict";
    // const timerId = setTimeout(function(){
    //     console.log("Hello");
    // }, 1000);
    
    // const timerId2 = setTimeout(function(text){
    //     console.log(text);
    // }, 2000, "Hello2");
    
    // const timerId3 = setTimeout(logger, 3000);
    // function logger(){
    //     console.log("text");
    // }
    
    // const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>
    // let timerId4;
    // let i = 0;
    
    // btn.addEventListener("click", ()=>{
    //     //clearInterval()
    //     timerId4 = setInterval(logger, 500); //Присваиваем значение сетинтервала таймеру через 0,5 секунды
    // });
    // //clearInterval(timerId4) не сработает потому что значение ему присвоится через 0,5 секунды. А текущее undefined
    // //изменяем logger
    // function logger(){
    //         if (i === 3){
    //             clearInterval(timerId4);
    //         }
    //         console.log("text");
    //         i++;
    //     }
    // //Рекурсия (когда функция сама себя внутри вызывает) 
    // //setInterval(logger, 500) нарушается если функция logger будет выполнятся например 3 секунды, то следующие повторения
    // //будут запускаться сразу же без задержки, считая что 500 прошли во время выполнения функции
    // //решение - рекурсивный setTimeout - работает как setInterval но всегда ждет отведенное ему время
    // // let id = setTimeout(function log(){
    // //     console.log("text");
    // //     id = setTimeout(log, 500);
    // // }, 500);
    
    const btn = document.querySelector(".btn"); //<button class="btn">Animation</button>
    let timerId4;
    let i = 0;
    
    function myAnimation(){
        const elem = document.querySelector(".box"); //получаем элемент - квадрат <div class="box"></div>
        let pos = 0; //переменная позиции
    
        const id = setInterval(frame, 10);
        function frame() {
            if (pos == 300){ // .box { position: absolute; width: 100px; height: 100px; размер 100 на 100, размер обертки
                //wrapper { position: relative; width: 400px; height: 400px; 400 на 400 чистой площади получается 300px
                clearInterval(id);
            } else{
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    
    }
    
    btn.addEventListener("click", myAnimation);
}

{//005 Date
    "use strict";

    //const now = new Date();
    //const now = new Date("2020.1.8");
    //new Date.parse("2020.1.8"); //работает идентично const now = new Date("2020.1.8");
    //const now = new Date(2020, 1, 8, 18); //18 часов, месяц и день указываем без 0. 
    //Часы могут показывать по гринвичу, а месяцы считаются с 0, 0-январь
    //const now = new Date(0);//Дата (Тайм стемп) хранится в милисекундах. отсчет с начала 1970 года
    
    const now = new Date();
    // console.log(now.getFullYear()); //2022 год
    // console.log(now.getMonth()); // месяц считаются с 0, 0-январь
    // console.log(now.getDate()); //число
    // console.log(now.getHours());//часы
    // console.log(now.getMinutes());
    // console.log(now.getDay()); // номер дня в неделе, воскресение - 0, понедельник - 1
    // //Все значения по местному часовому поясу
    // console.log(now.getUTCHours()); // часовой пояс +0
    
    // console.log(now.getTimezoneOffset()); //разница в минутах между основным час.пояс. и местным
    // console.log(now.getTime()); //количество милисекунд с начала 1970 года
    
    //Для установки даты используем теже методы но с set
    //console.log(now.setHours(18)); // устанавливаем это время для переменной
    //console.log(now.setHours(40));//автоисправление
    //console.log(now);
    
    //Для измерения промежутков времени используем бенчмарк
    let start = new Date();
    
    for (let i = 0; i < 100000; i++){
        let some = i ** 3; // i возводим в степень 3
    }
    
    let end = new Date();
    alert(`Цикл выполнился за ${end - start} миллисекунд`);
}

{//006 Timer обратного отсчета
    "use strict";
    const deadLine = "2022-01-20"; //Строкой задаем время окончания, такие строки получают еще из инпута на сайтах
    
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()), //Превращает строку в количество милисекунд для математических расчетов
        //Отнимаем текущую дату и получим число в милисекундах
              days = Math.floor(t / (1000*60*60*24)),//Переводим в дни, милисек делим на 1 сек*60 в минуте*60 в часе*24 часов в дне
              //и Math.floor округляет это число
              hours = Math.floor((t / (1000*60*60) % 24)),//Переводим в часы, и получаем остаток от деления на 24 часа, что бы не было
              //например 150 часов
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
              //Для возврата этих локальных переменных из фунции используем ретурн и выводим объект
              return{
                "total": t,
                "days": days,
                "hours": hours,
                "minutes": minutes,
                "seconds": seconds
              };
    }
    
    //Функция помощник для подставления 0 если число часов/минут меньше 10
    function getZero(num) {
        if (num >=0 && num <10){
            return `0${num}`;
        }else{
            return num;
        }
    }
    
    //функция Устанавливает время на страницу
    function setClock(selector, endtime){
        //получаем элементы со страницы
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"), //<span id="days">12</span>
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000); //запускаем функцию каждую секунду
        
        updateClock(); //Запускаем вручную что бы пофиксить второй баг
        //функция обновления таймера
        function updateClock () {
            const t = getTimeRemaining(endtime); //в переменную получаем объект из функции
    
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
    
            //Останавливаем таймер если время вышло
            if(t.total <=0){
                clearInterval(timeInterval);
            }
        }
    }
    //Запускаем таймер в селектор подставляем класс элемента в ендтайм дату которую задаем или откуда то получаем
    setClock(".timer", deadLine);
    
                /* <div class="timer">
                        <div class="timer__block">
                            <span id="days">12</span>
                            дней
                        </div>
                        <div class="timer__block">
                            <span id="hours">20</span>
                            часов
                        </div>
                        <div class="timer__block">
                            <span id="minutes">56</span>
                            минут
                        </div>
                        <div class="timer__block">
                            <span id="seconds">20</span> */
    
    //Два бага нужно исправить 1) - если часов и минут меньше 10 то нужно подставлять 0 (09), 2) - при обновлении страницы таймер
    //запускается только через секунду и мы видим таймер из верстки
}

{//007 Параметры документа, окна (document/window/screen)
    'use strict';
    const box = document.querySelector(".box");
    
    // clientWidth - включает в себя width + padding без бордеров
    const width = box.clientWidth; //в css width: 400px + 2 шт padding: 10px с боков - 15px скролл = 405
    let height = box.clientHeight; // height: 350px;
    
    //console.log(width, height); //405, 355 
    
    //Если в css используется box-sizing: border-box; включает padding в середину box
    console.log(width, height); //385, 335 
    
    const owidth = box.offsetWidth; //свойство из css width: 400px 
    let oheight = box.offsetHeight;
    console.log(owidth, oheight); //400, 350
    
    const swidth = box.scrollWidth; // размер - скролл
    let sheight = box.scrollHeight; // размер всего текста(который можно скролить в этом окне)
    console.log(swidth, sheight); //384, 1430 
    
    let btn = document.querySelector("button");
    btn.addEventListener("click", ()=>{
        //box.style.height = sheight + "px"; //показываем весь текст
        //box.style.width = 800 + "px";
        console.log(box.scrollTop); //показывает сколько проскроллил пользователь текста вверху(над скролом) в пикселях
    });
    
    //Метод получающий все координаты элемента 
    console.log(box.getBoundingClientRect()); // bottom: 400 height: 350 left: 440 right: 840 top: 50 width: 400 x: 440 y: 50
    //При этом в JS расчет идет от левого верхнего угла а в css от границы, например: css right отсчитывался бы от правой границы окна
    //до правой границы элем., а в JS right отсчитывается от левой границы окна до правой границы элемента
    //bottom css - от низа окна до элем, а в JS от верхней окна до нижней элемента bottom: 400 = высота 350 + margin-top: 50px;
    console.log(box.getBoundingClientRect().top); //значение top - 50
    
    //Метод опеределяет какие стили css были применены(расчитаны/computed) на элем. изначально до применения скрипта. Например display.
    //Можно только получить это значени но не изменить его в css, изменяем стили только инлайн которые в верстке, перебивая css
    const style = window.getComputedStyle(box); // определяем по классу 
    console.log(style.display); //block
    
    //Для обращения к свойствам document нужно обращатся к его елементу
    console.log(document.documentElement.scrollTop);
    //scrollTop/csrollLeft можно изменять ВРУЧНУЮ в консоли а другие нельзя, таким образом можно сделать стрелочку для быстрого
    //перехода, есть еще методы window.scrollBy(0, 400) - скролит на 400 относительно текущего положения и 
    //window.scrollTo(0, 400) - скролит на 400 относительно всей страницы. 0 - положение по горизонтали
}

{//008 Создание модального окна
    "use strict";

    //По нажатии двух разных кнопок будет выскакивать пока еще скрытое модальное окно <div class="modal">
    //Кнопки с разными аттрибутами и поэтому мы их бъеденим одним дата аттрибутом data-modal, допишем в верстку этот селектор
    //<button data-modal class="btn btn_dark">Связаться с нами</button> для закрытия этого окна прописываем 
    //в закрывающем элементе data-close  <div data-close class="modal__close">&times;</div>  - это крестик
    const modal = document.querySelector(".modal"),
          modalTrigger = document.querySelectorAll("[data-modal]"), //квадратные скобки что бы обратится к аттрибуту
          modalCloseBtn = document.querySelector("[data-close]");
    //Проверяем функционал выбирая только первую кнопку modalTrigger = document.querySelector("[data-modal]"),
    //добавляем и убираем стили которые раньше прописали в css .show{display:block}.hide{display:none}
    //.fade{animation-name: fade;animation-duration: 1.5s;}@keyframes fade{from{opacity: 0.1;}to{opacity: 1;}}     
    
    // modalTrigger.addEventListener("click", ()=>{
    //     modal.classList.add("show");
    //     modal.classList.remove("hide");
    //     document.body.style.overflow = "hidden";
    // });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    //     document.body.style.overflow = ""; //оставляем пустые скобки и браузер сам возвращает дефолт для прокрутки страницы
    // });
    
    //Страницу можно пролистывать не закрывая окно, многим заказчикам это не нужно. Нужно зафиксировать страницу скрывая скролл
    // document.body.style.overflow = "hidden";
    
    //Делаем через toggle контролируя свойство display через стиль show
    // modalTrigger.addEventListener("click", ()=>{
    //     modal.classList.toggle("show"); //если класса нет - добавит, если есть уберет
    //     document.body.style.overflow = "hidden";
    // });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.toggle("show");
    //     document.body.style.overflow = ""; //оставляем пустые скобки и браузер сам возвращает дефолт для прокрутки страницы
    // });
    
    //Создаем функцию для перебора кнопок при querySelectorAll
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", ()=>{
            modal.classList.add("show");
            modal.classList.remove("hide");
            document.body.style.overflow = "hidden";
        });
    });
    
    // modalCloseBtn.addEventListener("click", ()=>{
    //     modal.classList.add("hide");
    //     modal.classList.remove("show");
    //     document.body.style.overflow = ""; 
    // });
    
    //реализуем закрытие окна по клику на подложку(темную часть) и по кнопке Esc клавиатуры
    //<div class="modal"> - подложка (обертка) (темная)
    //   <div class="modal__dialog"> - область окна (светлая) - вложена в подложку(обертку)
    //єл. подложки в переменной modal
    // modal.addEventListener("click", (e)=>{
    //     if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
    //         modal.classList.add("hide");
    //         modal.classList.remove("show");
    //         document.body.style.overflow = ""; 
    //     }
    // });
    
    //Можно встретить такой код, но это НЕ везде будет работать, строго привязываемся к названию event, нарушаем логику кода
    //нужно четко говорить что (e) мы используем
    // modal.addEventListener("click", ()=>{
    //     if(event.target === modal){
    
    //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = ""; 
    }
    
    modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию
    
    modal.addEventListener("click", (e)=>{
        if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
            closeModal();          // тут вызываем функцию
        }
    });
    
    //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
            closeModal();           // вызываем функцию
        }
    });
    //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")
}

{//009 Модификация модального окна
    "use strict";

    //По нажатии двух разных кнопок будет выскакивать пока еще скрытое модальное окно <div class="modal">
    //Кнопки с разными аттрибутами и поэтому мы их бъеденим одним дата аттрибутом data-modal, допишем в верстку этот селектор
    //<button data-modal class="btn btn_dark">Связаться с нами</button> для закрытия этого окна прописываем 
    //в закрывающем элементе data-close  <div data-close class="modal__close">&times;</div>  - это крестик
    const modal = document.querySelector(".modal"),
          modalTrigger = document.querySelectorAll("[data-modal]"), //квадратные скобки что бы обратится к аттрибуту
          modalCloseBtn = document.querySelector("[data-close]");
    
    
    //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = ""; 
    }
    
    modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию
    
    modal.addEventListener("click", (e)=>{
        if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
            closeModal();          // тут вызываем функцию
        }
    });
    
    //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
            closeModal();           // вызываем функцию
        }
    });
    //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")
    
    //<<<<<<<009 Модальное окно должно появится через определенное время или когда пользователь долистал страницу до конца >>>>>
    // const modalTimerId = setTimeout();
    
    //Создаем функцию для открытия окна преобразуя modalTrigger.forEach(btn =>{
    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        //Дорабатываем openModal что бы если пользователь сам открыл окно, таймер отменялся
        clearInterval(modalTimerId); //Timeout отменяет также как и интервал
    }
    
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", openModal);
    });
    
    const modalTimerId = setTimeout(openModal, 5000);
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        } 
    }
    
    //Делаем что бы окно показывалось при долистывании страницы до конца
    // window.addEventListener("scroll", ()=>{
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
    //         openModal();
    //     }   //pageYOffset - проскролленая часть + clientHeight - видимая часть на мониторе будут больше или равны
    //         // или больше scrollHeight все области скролла, минус 1 пиксель из-за особенности некоторых браузеров и мониторов
    // }//,{once: true});
    
    //что бы не запускалось много раз окно при доскроле до конца страницы можно использовать настройки обработчика событий
    //после функции можно добавить {once: true}, но оно в данном случае не сработает потому что обработчик повешен на скролл
    //тоесть оно срабатывает при скроле, но условия не выполняются и окно не появляется, а внизу страницы не запускается
    //потому что уже как бы сработало 
    //ВТОРОЙ способ будем удалять обработчик события с виндовся после 1 разового выполнения removeEventListener для этого
    //создаем функцию showModalByScroll и там прописываем ремув, и модифицируем window.addEventListener
    window.addEventListener("scroll", showModalByScroll);
    
}

{//010 Функции конструкторы
    "use strict";
    //Функция - объект и по идее в нее можно записать какие то методы и свойства
    
    //длинный УСТАРЕВШИЙ синтаксис для создания типов данных начинается с ключевого слово new
    const num = new Number(3);
    //console.log(num);
    //получили Number  [[Prototype]]: Number  [[PrimitiveValue]]: 3 , намбер с велью 3
    //тоже можно сделать и с функцией
    const func = new Function(3);
    //console.log(func);
    //ƒ anonymous() {3}
    //Если такая функция будет содержать методы и свойства то она создаст нам новый объект
    
    //<<<<<< НОВЫЙ синтаксис >>>>>>>
    function User(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
        this.hello = function() {
            console.log(`Hello ${this.name}`);
        };
    }
    //Наша функция стала КОНСТРУКТОРОМ с помощью нее можно создавать новые (ОБЪЕКТЫ) пользователей
    const ivan = new User ("Ivan", 28);
    const alex = new User ("Alex", 20);
    console.log(ivan); // User {name: 'Ivan', id: 28, human: true}
    console.log(alex);
    alex.hello();
    
    //с помощью prototype можно добавлять свойства и методы в конструктор и они наследуются потомками
    //используется когда нету доступа к конструктору или его нельзя менять но нужно немного модифицировать
    User.prototype.exit = function(){
        console.log(`Пользователь ${this.name} ушел`);
    };
    //Этот метод появится у всех потомков которые созданы ПОСЛЕ его объявления
    alex.exit();
    
    //Это был ЕС5, в ЕС6 появились классы - синтаксический сахар(красивая обертка) их удобнее использовать
    class User {
        constructor(name, id){
            this.name = name;
            this.id = id;
            this.human = true;
        }
        hello() {
            console.log(`Hello ${this.name}`)
        }
        exit() {
            console.log(`Пользователь ${this.name} ушел`)
        }
    }
}

{//011 Контекст вызова функции this.
    "use strict";
    //контекст - то что окружает функцию и в каких условиях она вызывается
    //Функция может вызыватся 4мя способами и в каждом контекст вызова отличается
    
    //============ 1 =============
    // function showThis() {
    //     console.log(this);
    // }
    // showThis(); //без "use strict" this = window (глобальный обект), с "use strict" будет undefined
    
    //практическая задача - что выведет функция и как исправить если не работает
    // function showThis2(a, b) {
    //     console.log(this);
    //     function sum(){
    //         console.log(this);
    //         return this.a + this.b;
    //     }
    //     console.log(sum());
    // }
    // showThis2(4, 5);
    //Будет ошибка в "use strict", а без него выдаст NaN, потому что sum сслается на window или undefined, и у них нету а или b 
    //Исправляется код удалением this из a и b, тогда sum не найдя их в себе ищет в функции выще благодаря замыканию функций
    
    //============ 2 ============= Метод объекта
    // const obj = {
    //     a: 20,
    //     b: 15,
    //     sum: function() {
    //         console.log(this);
    //     }
    // };
    // obj.sum();
    //Контекст у методов объекта - сам объект
    
    // const obj = {
    //     a: 20,
    //     b: 15,
    //     sum: function() {
    //         function shout() {
    //             console.log(this);
    //         }
    //         shout();
    //     }
    // };
    // obj.sum();
    //при таком методе будет возвращено с "use strict" будет undefined без - window, 
    //потому что это уже не метод объекта а функция внутри метода
    
    //============ 3 ============= Функции конструкторы
    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    
    //     this.hello = function() {
    //         console.log(`Hello ${this.name}`);
    //     };
    // }
    
    // let ivan = new User("Ivan", 23);
    // ivan.hello();
    //this в конструкторах и классах - это новый экземпляр объекта, в данном случае ссылается на ivan
    
    //============ 4 ============= ручное присвоение this любой функции: call, apply, bind
    // function sayName() {
    //     console.log(this);
    //     console.log(this.name);
    // }
    
    // const user = {
    //     name: "John"
    // };
    
    // sayName.call(user);// получаем объект и второй строчкой John
    // sayName.apply(user);//работает также как call, разница в синтаксисе при передаче аргументов
    
    // function sayName(surname) {
    //     console.log(this);
    //     console.log(this.name + surname);
    // }
    
    // const user = {
    //     name: "John"
    // };
    
    // sayName.call(user, "Smith");    //разница в синтаксисе при передаче аргументов - передем строкй
    // sayName.apply(user, ["Smith"]); //разница в синтаксисе при передаче аргументов - передем массивом
    
    // //третий метод bind - создает НОВУЮ функцию и под нее подвязывает контекст
    // function count(num) {
    //     return this*num;
    // }
    // //создаем переменную и назначаем ей функцию count через метод bind
    // const double = count.bind(2);
    // //При этом (2) - переходит в this, а num будет передаваться в функцию double
    // console.log(double(3)); // 6
    // console.log(double(13)); // 26
    
    //=================== ПРАКТИКА ================= 
    //В ХТМЛ есть <button></button> которая ничего не содержит
    const btn = document.querySelector("button");
    
    btn.addEventListener("click", function() { //смотрим чему равен this применимо к нашему элементу при клике
        console.log(this);  // в консоль получаем сам объект <button></button> тоесть тоже самое что event.target
        this.style.backgroundColor = "red"; //работает, но чаще пользуются event.target
    });
    
    // //Но если функция будет СТРЕЛОЧНОЙ (у стрелочной нету своего контекста вызова, она берет его от родителя) то 
    // btn.addEventListener("click", ()=> { //стрелочная пытается всзять контекст у undefined или window в зависимости от "use strict";
    //     console.log(this);  // в консоль получаем сам ОШИБКУ потому что теряется контекст
    // }); 
    
    // тогда нужно прописывать обращение не через this а через event.target для работоспособности
    // btn.addEventListener("click", (e)=> { 
    //      e.target.style.backgroundColor = "red";
    // });
    
    
    const obj = {
        num:5,
        sayNumber: function() {
            const say = () => {
                console.log(this);
            };
            say();
        }
    };
    obj.sayNumber();
    //Если бы say была обычно функц. то было бы undefined, но у стрелочной нету своего контекста и она берет контекст у родителя
    //у метода sayNumber, а метод объект всегда выдает сам объект, поэтому получаем сам объект в консоль
    //Стрелочные ф. обычно используются для модификации элементов прямо тут на месте и имеет свой синтаксис
    
    //запись с классической функцией
    // const double = function() {
    //     return a * 2;
    // }
    
    //Запись стрелочной ф. можно сократить если тело функции помещается в одну строку, убираем скобки 
    const double = (a) => a * 2; // и return(c return будет ошибка) которое подставляется автоматически
    //а если аргумент один то скобки у него тоже можно сократить  const double = a => a * 2;
    
    
}

{//012 Classes (ES6)
    "use strict";
    //Классы - красиваяобертка ф. конструкторов (синтаксический сахар)
    //название класса ВСЕГДА с БОЛЬШОЙ буквы
    //=== Принципы ООП ====
    //1)=== АБСТРАКЦИЯ ==== когда отделяем концепцию от ее экземпляра. Rectangle - концепция(шаблон), square и long - экземпляры
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    
        calcArea(){
            return this.height * this.width;
        }
    } 
    
    // const square = new Rectangle(10, 10);
    // const long = new Rectangle(20, 100);
    
    // console.log(square.calcArea());
    // console.log(long.calcArea());
    
    
    //2) === НАСЛЕДОВАНИЕ === способность объекта или класса базироваться на другом объекте или классе (extends - наследуется)
    class ColoredRectangleWithText extends Rectangle {
        constructor(height, width, text, bgColor) {
            super(height, width); //метод вызывает суперконструктор родителя, тот код который был у родителя в конструкторе и методы 
                     // super() - должен быть в конструкторе ВСЕГДА на ПЕРВОМ месте
            this.text = text;
            this.bgColor = bgColor;
        }
    
        showMyProps() {
            console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
        }
    }
    
    const div = new ColoredRectangleWithText(25, 10, "Hello", "red");
    div.showMyProps(); // Текст: Hello, цвет red
    console.log(div.calcArea()); //250
}

{//013 Use Classes in real work (шаблонизация, создание єлементов на странице через классы)
    "use strict";

    //По нажатии двух разных кнопок будет выскакивать пока еще скрытое модальное окно <div class="modal">
    //Кнопки с разными аттрибутами и поэтому мы их бъеденим одним дата аттрибутом data-modal, допишем в верстку этот селектор
    //<button data-modal class="btn btn_dark">Связаться с нами</button> для закрытия этого окна прописываем 
    //в закрывающем элементе data-close  <div data-close class="modal__close">&times;</div>  - это крестик
    const modal = document.querySelector(".modal"),
          modalTrigger = document.querySelectorAll("[data-modal]"), //квадратные скобки что бы обратится к аттрибуту
          modalCloseBtn = document.querySelector("[data-close]"),
          btnCall = document.querySelector(".btn_min");
    
    
    //Правило Don't Repeat yourself (DRY) если код повторяется нужно его вынести в одну функцию
    function closeModal(){
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.overflow = ""; 
    }
    
    modalCloseBtn.addEventListener("click", closeModal); // тут просто передаем функцию
    
    modal.addEventListener("click", (e)=>{
        if(e.target === modal){    //проверяем строгое равенство объекта по которому кликнули объекту modal
            closeModal();          // тут вызываем функцию
        }
    });
    
    //Реализуем закрытие по кнопке Esc клавиатуры (Коды кнопок  keycode.info или learn.javascript.ru/keyboard-events)
    document.addEventListener("keydown", (e)=>{
        if(e.code === "Escape" && modal.classList.contains("show")){//если код события строго равен Escape(обозначение кнопки Esc)
            closeModal();           // вызываем функцию
        }
    });
    //что бы closeModal(); по Esc срабатывал только когда открыто окно modal.classList.contains("show")
    
    //<<<<<<<009 Модальное окно должно появится через определенное время или когда пользователь долистал страницу до конца >>>>>
    // const modalTimerId = setTimeout();
    
    //Создаем функцию для открытия окна преобразуя modalTrigger.forEach(btn =>{
    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        //Дорабатываем openModal что бы если пользователь сам открыл окно, таймер отменялся
        clearInterval(modalTimerId); //Timeout отменяет также как и интервал
    }
    
    modalTrigger.forEach(btn =>{
        btn.addEventListener("click", openModal);
    });
    
    //const modalTimerId = setTimeout(openModal, 5000);
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
            openModal();
            window.removeEventListener("scroll", showModalByScroll);
        } 
    }
    
    //Делаем что бы окно показывалось при долистывании страницы до конца
    // window.addEventListener("scroll", ()=>{
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
    //         openModal();
    //     }   //pageYOffset - проскролленая часть + clientHeight - видимая часть на мониторе будут больше или равны
    //         // или больше scrollHeight все области скролла, минус 1 пиксель из-за особенности некоторых браузеров и мониторов
    // }//,{once: true});
    
    //что бы не запускалось много раз окно при доскроле до конца страницы можно использовать настройки обработчика событий
    //после функции можно добавить {once: true}, но оно в данном случае не сработает потому что обработчик повешен на скролл
    //тоесть оно срабатывает при скроле, но условия не выполняются и окно не появляется, а внизу страницы не запускается
    //потому что уже как бы сработало 
    //ВТОРОЙ способ будем удалять обработчик события с виндовся после 1 разового выполнения removeEventListener для этого
    //создаем функцию showModalByScroll и там прописываем ремув, и модифицируем window.addEventListener
    window.addEventListener("scroll", showModalByScroll);
    
    //013
    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector){ //alt - будет показываться если картинки нету
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 28; //пока записываем статически курс валют
            this.changeToUAH(); // вызываем метод для конвертирования, он выполниться перед методом создания верстки
        }
    
        changeToUAH() { // Метод для конвертирования цены из долларов в гривну когда эта информация будет приходить с сервера
            this.price = this.price * this.transfer;
        }
    
        render() { //метод для формирования верстки. 
            const element = document.createElement("div"); //создаем элемент div
            //Вставлем верстку из хтмл в innerHTML созданного div
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                </div>
            `;
            //Для размещения этой структуры нужно знать родителя, добавляем в принимаемые аргументы parentSelector, 
            //он может быть разный в зависимости от создаваемой карты MenuCard, сразу получаем его элемент
            this.parent.append(element);
        }
    }
    //Можно использовать вызов объекта на месте, без присвоения его к переменной, но тогда в будущем не сможем к нему обратиться
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"”',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container"
    ).render();
    //заменяем карточки которые были в верстке и удаляем их оттуда
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        9,
        ".menu .container"
    ).render();
    
    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        9,
        ".menu .container"
    ).render();
    
    
    // const testCard = new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'меню “Премиум”',
    //     'В меню “Премиум” мы ...',
    //     100,
    //     ".menu .container");
    // testCard.render();
    //btnCall.addEventListener("click", testCard.render); //- через кнопку почему то не работает
    
    //Структура HTML верстки. Обращаемся к самому верхнему элементу .menu а потом к его div .container
    /* <div class="menu">
            <h2 class="title">Наше меню на день</h2>
    
            <div class="menu__field">
                <div class="container">
                    <div class="menu__item"></div> */
}

{//014 Rest оператор и параметры по умолчанию (ES6)
    "use strict";
    //Spread - оператор разворота, берет сущность и раскладывает на отдельные элементы
    //Rest - объединяет отдельные элементы в один массив, обратен spread синтаксис такой же но в других условиях.
    // записывается как ...name(name-любой) всегда последним аргументом, используется для аргументов (опциональных), 
    //если мы не знаем сколько еще будет агрументов 
    const log = function(a, b, ...rest) {
        console.log(a, b, ...rest);
    };
    
    log("basic", "else", "operator", "usage"); // basic else [operator usage]
    
    //Метод использовался до (ES6). Задание параметра по умолчанию, если он будет отсутсвовать
    // function calcOrDouble(number, basis) {
    //     basis = basis || 2;
    //     console.log(number * basis);
    // }
    // calcOrDouble(3, ); // но если второго аргумента не будет то будет ошибка, и что бы этого избежать раньше делали basis = basis || 2;
    // в некоторых случаях такая проверка приводила к ошибкам, и поэтому в ES6 можно присвоить 2 сразу в объявлении
    function calcOrDouble(number, basis = 2) {
        console.log(number * basis);
    }
    calcOrDouble(3, );
    
    //Переходим в файл со скриптом о карточках
    //=========  014 используем rest оператор =============
//В методе render мы создаем лишний div, что бы от этого избавится нужно класс "menu__item" присвоить этому div 
//но что бы нам присвоить еще классы этому div которые могут появится в будущем, можно их задать через rest
class MenuCard{
    constructor(src, alt, title, descr, price, parentSelector, ...classes){ //alt - будет показываться если картинки нету
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 28; 
        this.changeToUAH(); 
    }

    changeToUAH() { 
        this.price = this.price * this.transfer;
    }

    render() { //метод для формирования верстки. 
        const element = document.createElement("div"); 
        //Задаем параметр класса по умолчанию, в случае если его не будет.Проверку выполняе на количество элементов, так как rest
        //все равно сформирует пустой массив который в условии будет интерпретироваться как true. Также ведут себя qeurySelectorAll,
        //getElementsByClassName и т.д. когда мы пытаемся получить эл. со страницы и их не находит, формируется пустой массив
        if(this.classes.length === 0) {
            this.element = "menu__item"; //присваиваем класс в пустой массив для возможной дальнейшей работы с ним
            element.classList.add("menu__item");
        } else {
             //перебираем массив выдергиваем каждое название класса и присваи ваем его как класс класслисту элемента
            this.classes.forEach(className => element.classList.add(className)); 
        }
       
        //убираем <div class="menu__item">, и присваивам его при задании новой карточки последним аргументом
        //Записываем без точки потому что присвоние через classList
        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"”',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
).render();
//заменяем карточки которые были в верстке и удаляем их оттуда
new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    ".menu .container",
    "menu__item"
).render();

new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    12,
    ".menu .container",
    "menu__item"
).render();
}

//=============================================== ПРОДВИНУТЫЙ ==================================================================

{//001 Local servers
//Разновидности серверов: Простые - выполняют одну задачу или несколько простых(LiveServer в VSCode, http server, JSON server),
// Комплексные - выполняют всё
//Самые популярные HTTP запросы  Get и Post. Простые сервера принимают только Get запросы.
//AJAX серверная технелогоия позволяет отправлять Гет и Пост запросы без перезагрузки страницы
}

{//002 JSON, глубокое клонирование объектов
    "use strict";
    //JSON текстовый формат обмена данных. В файлах с расширениями JSON можно хранить данные в формате ключ - значение.
    //Главное правило - все строки должны быть в двойных кавычках
    
    // const persone = {
    //     name: "Alex",
    //     tel: "+7777744444"
    // };
    
    //Что бы передать этот объект на сервер нужно его преобразовать в один из вариантов который можно транспортировать.
    //Посмотреть основы протокола http. 
    //В уроках будем разбирать стандартный URL encoded  - форма просто отправляется с сайта с перезагрузко страницы(даже без скрипта)
    //Передача объекта form - data  и формат данных JSON
    
    //Все современные браузеры имеют встроенные инструменты для работы с данными JSON это свойства и методы
    //методов два 
    
    //1) stringify - превращает объекты в нужный формат 
    // console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+7777744444"}
    
    // //2)parse превращает информацию с сервера JSON в привычный формат данных
    // console.log(JSON.parse(JSON.stringify(persone))); // получаем объект {name: 'Alex', tel: '+7777744444'} с которым можно работать
    
    //данные в JSON занимают мало места и легко читаются, до него был XML там не было таких преимуществ
    
    //============================ Клонирование объектов. ГЛУБОКИЕ КОПИИ ===================================
    const persone = {
        name: "Alex",
        tel: "+7777744444",
        parents: {
            mom: "Olga",
            dad: "Mike"
        }
    };
    //такая структура превращает объект в формат JSON потом парсит обратно и отвязывает от исходного объекта, присваивая НОВЫЙ переменной
    const clone = JSON.parse(JSON.stringify(persone)); 
    clone.parents.mom = "Ann" ;
    console.log(persone);
    console.log(clone);
}

{//003 AJAX и общение с сервером CALC (Converter)
    "use strict";
    //AJAX (Asynchronous Javascript and XML) позволяет обновлять часть контента страницы, без полной перезагрузки, экономя траффик
    //Создадим конвертер валю где курс будет приходить от сервера по требованию
    //разбираем самый первый вариант AJAX который реализуется при помощи объекта XML hhtp request(не актуален, но встречается)
    //который встроен в браузер
    
    //в папке JS файл current.json с внутренним текстом (путь js/current.json) 
    // {
    //     "current": {     //свойство объекта содержит объект usd со свойством 74 - курс доллара
    //         "usd": 74    // это значение будет доставать через usd
    //     }
    // }
    
    //получаем элементы инпутов со страницы. В один rub будет пользователь вводить значение, а во второй usd будем выводить 
    //сконвертированное значение на основании запроса от сервера и обработки
    const inputRub = document.querySelector("#rub"),
          inputUsd = document.querySelector("#usd");
    
    //назначаем обработчик события для получения данных от пользователя. Выбор между input и change
    //change - происходит когда пользователь напечатала что то в поле и увел фокус(табом или клацнул в другое место на странице)
    //input - происходит каждый раз когда что то вводится или удаляется в поле
    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest(); //создаем запрос на сервер
    
        // этот метод собирает настройки которые позволят в будущем сделать запрос request.open(method, url, async, login, pass); 
        //method - метод для запроса (GET,POST)  пишутся в верхнем регистре, url - путь к серверу(файлу) относительно index.html , 
        //async - по умолчанию true, чтобы остальной код не ждал ответа от сервера,
        // потому что неизвестно как долго это будет, можно поставить в false при надобности
        //login и pass используются для некоторых запросов требующих авторизации
        request.open('GET', 'js/current.json'); // запрос, остальные аргументы для нас сейчас необязательны
        //для уточнения серверу что мы хотим получить используются заголовки Header
        //'Content-type' - тип контента, 'application/json' указываем что хотим json файл с кодировкой utf-8
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(); // отправляем запрос на сервер
        //если метод post или подобный то send(body) - принимает аргументы для отправки
    
        //СВОЙСТВА запроса: status - код с которым вернется запрос(200 OK - успешные, 400 - ошибка клиента(404 Not Found) ... и тд)
        //посмотреть состояния можно по запросу  << Список кодов состояния HTTP >>
        //statusText - текстовое описание ответа сервера (ок, Not found, ... и тд)
        //response - ответ от сервера (то что задл бэк енд разработчик), используем его в клиенте
        //readyState - содержит текущее состояние запроса(цыфра). Цыфра 0 значение UNSENT, 1 OPENED, 2 HEADERS_RECEIVED,
        //3	LOADING, 4	DONE (выполнена)
    
        //СОБЫТИЯ loadstart, progress, abort, timeout, loadend, но чаще всего используются cледующие 2 события
        //рассмотрим реализацию каждого из них
    
        //readystatechange - отслеживает статус готовности запроса в текущий момент например с 0 на 1 - сработало, с 1-2 сработало
        // request.addEventListener('readystatechange', () => { //
        //     if(request.readyState === 4 && request.status === 200){
        //         console.log(request.response); // получаем объект из json файла который нужно трансформировать в объект JS
        //         const data = JSON.parse(request.response); //получаем объект JS
        //         //рассчитываем курс валют на основании ввода пользователя и ответа сервера и выводим в поле
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed(2) - округляем до 2х заков после точки
        //     } else { //дописываем елсе если сервер сломался что бы пользователь увидел ошибку
        //         inputUsd.value = 'Что то пошло не так';
        //     }
        // });
        //Используется редко потому что обычно промежуточные стадии 0, 1, 2, 3 не нужны, а нужна сразу 4 DONE (выполнена)
    
        //load - срабатывает когда запрос полностью загрузился и получен результат. 4 DONE (выполнена) - не значит что выполнен
        //успешно, данные могут потерятся или еще что то
        request.addEventListener('load', () => { // оставляем проверку на успешное выполнение status
            if(request.status === 200){
                const data = JSON.parse(request.response); //получаем объект JS
                //рассчитываем курс валют на основании ввода пользователя и ответа сервера и выводим в поле
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed(2) - округляем до 2х заков после точки
            } else { //дописываем елсе если сервер сломался что бы пользователь увидел ошибку
                inputUsd.value = 'Что то пошло не так';
            }
        });
    });
}

{//004 Реализация скрипта ОТПРАВКИ данных на сервер (POST) XML http request
//Переходим в файл со скриптом о карточках Food. Запускаем его на сервере для работы POST
//Задача собрать данные из форм  Имя и Телефон в двух местах(на сайте и в модальном окне) и отправить на сервер при нажатии кнопки
//Для контроля правильной отработки бэкенда создаем в корне проэкта файл server.php и запишем <?php echo var_dump($_POST);
//Эта комманда берет данные которые пришли из клиента ( массив _POST ) превращает в строку и показывает обратно на клиенте(ответ сервера, responce)

//формы две (имя, телефон) поэтому функция отправки будет повторятся, что бы не дублировать два обработчика, обернем
//в функцию для последующего вызова. Тут еще используем XML hhtp request, в следующих уроках будет более современный метод

//получаем все формы по тегу
const forms = document.querySelectorAll('form');

//Создаем объект для вывода текстовых сообщений пользователю о ходе запроса
const message = {
    loading: 'Загрузка',
    success: 'Спасибо! До связи',
    failure: ' Что-то пошло не так...'
};

//берем все form и для каждой подвязываем функцию postData
form.forEach(item => {
    postData(item);
});


//Функция для постинга данных
function postData(form) { //принимаем аргумент form для удобства навешивания на него обработчика события submit
    form.addEventListener('submit', (e) => {  // submit срабатывает по Enter или button с type submit. если в верстке кнопка задана
                                            //тегом <button - у нее автоматически установлен type submit
        e.preventDefault(); // принимаем аргумент е - события, что бы отменить стандартное повередение - перезагрузку страницы
        
        //Создаем переменную для вывода пользователю сообщений
        const statusMessage = document.createElement('div');
        statusMessage.classList.add('status'); //добавляем класс status
        statusMessage.textContent = message.loading;
        form.append(statusMessage); // Прикрепляем этот див с сообщением к form для отображения на странице

        const req = new XMLHttpRequest(); //создаем объект запроса
        req.open('POST', 'server.php'); // вызываем метод open для настройки запроса

        //как получить все данные введенные пользователем и отправить на сервер. Можно вручную. взять форму, взять все инпуты
        //которые есть внутри, взять их value, перебрать, сформировать объект, но это очень нерационально потому что есть готовые
        //механизмы, и самый простой способ подготовить данные для отправки из формы использовать объект - formData
        //не всегда нужно передавать в формате JSON, зависит от поддержки сервера или программиста бэкенда
        //рассмотрим formData и второй формат JSON

        // Если работаем с JSON, FormData спецыфический объект который просто превратить в JSON не получится, есть спецю прием
        req.setRequestHeader('Content-type', 'application/json');
        //Для этого создаем пустой объект и через переюор FormData через forEach запушим в новый объект значения
        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        //Теперь используем конвертацию в json и помещаем его в  req.send(json);
        const json = JSON.stringify(object);

        //если передаем через XMLHttpRequest
        //req.setRequestHeader('Content-type', 'multipart/form-data'); // multipart/form-data - используем что бы работал FormData
                                                                    //согласно описанию FormData, но есть ***ньюанс - смотр ниже!!!

        const formData = new FormData(form); // формирует объект ключ-значение из полей input/option/textarea, но только если 
                                            // у них прописан тег name, иначе не найдет эти значения.(name="name", name="phone")
        req.send(formData); // так как мы отправляем данные то есть body - formData

        //Если работаем с JSON то 
        //req.send(json);

        req.addEventListener('load', () => {
            if (req.status === 200) {
                console.log(req.response);
                statusMessage.textContent = message.success;
                form.reset(); // очищаем форму
                setTimeout(() =>{
                    statusMessage.remove()   // удаляем блок со страницы
                }, 2000);
            }else{
                statusMessage.textContent = message.failure;
                }
        });
    });
}
//Что бы изменения сохраненные в коде применились при работе с сервером, нужно каждый раз сбрасывать кеш. shift+f5
// После заполнения полей и нажатия кнопки отправить, данные ушли - смотрим по вкладке Network, статус сервера -200 ОК
// нам написало 'Спасибо! До связи' но в консоль получили пустой массив, это случилось из-за заголовка  multipart/form-data
// Когда используем связку XMLHttpRequest(), Объекта и FormData - заголовок устанавливать не нужно, он устанавливается
//автоматически, поэтому весь заголовок req.setRequestHeader('Content-type', 'multipart/form-data'); нам не нужно прописывать
//поэтому закомментируем его и все будет отрабатывать хорошо. 
//Если нужно отправлять данные в JSON тогда прописываем req.setRequestHeader('Content-type', 'application/json');
//*** Ньюанс PHP нативно не умеет работать с данными JSON, чаще всего такие данные отправляют на сервера Node.JS
//Но можно вручную прописать совместимость с PHP в файле допишем строку 
//<?php echo 
//$_POST = json_decode(file_get_contents("php://input), true);
//var_dump($_POST);
}

{//005 Красивое оповещение пользователя
//Переходим в файл со скриптом о карточках Food. Запускаем его на сервере для работы POST
//============================ 005 Красивое оповещение пользователя
//Прикручиваем спиннер в течении отправки запроса на сервер, а после успешного выполнения появление нового модального окна с текстом
//Если запрос неудачный то будет другое сообщение. Модальное окно можно сделать новое, а можно использовать существующее.
//Используем существующее и в нем заменим <div class="modal__dialog"> для изменения контента окна. Стили действуют прежние
{/* <div class="modal">
        <div class="modal__dialog">
            <div class="modal__content">
                <form action="#">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
                    <input required placeholder="Ваше имя" name="name" type="text" class="modal__input">
                    <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
                    <button class="btn btn_dark btn_min">Перезвонить мне</button>
                </form>
            </div>
        </div>
    </div> */}

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
    
        //скрываем, а не удаляем предыдущее модальное окно что бы пользователь повторно его мог использовать
        prevModalDialog.classList.add('hide');
        openModal(); // открывается модальное окно
    
        const thanksModal = document.createElement('div'); //Создаем обвертку для нового модального окна
        thanksModal.classList.add('modal__dialog'); // добавляем стили для модального окна
        //Создаем новый тайтл и крестик х - закрытия, но он динамически создается и на него обработчик события ранее созданный closemodal
        // которая вешалась на modalCloseBtn получаемому по аттрибуту [data-close] действовать не будут, поэтому мы их подправим
        // modalCloseBtn = document.querySelector("[data-close]") и modalCloseBtn.addEventListener("click", closeModal); - этот удалим
        //
        //Этот подправим    modal.addEventListener("click", (e)=>{
        //                      if(e.target === modal){    
        //                      closeModal();          
                                //}
                            //});
        //теперь выглядит так 
        //005 Усовершенствованное для динамически создаваемых окон
        // modal.addEventListener("click", (e)=>{
        //     // Проверяем равенство объекту modal или объект содержащий аттрибут data-close равен пустой строке, мы туда ничего не помещаем
        //     if(e.target === modal || e.target.getAttribute('data-close') == '') {  
        //         closeModal();          // тут вызываем функцию
        //     }
        // });
    
        //***Крестик x  - специальный ХТМЛ символ (✖	&#10006;	Жирный символ закрыть (крестик))
        //Сообщение для пользователя в modal__title будем перелаваит как аргумент message в showThanksModal который будем брать из
        //объекта message
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>x</div> 
            <div class="modal__title">${message}</div> 
        </div>
        `;
    
        //Получаем модальное окно и сразу аппендим наш блок для замены старого окна новым
        document.querySelector('.modal').append(thanksModal);
    
        //Реализуем появление старого окна если пользователь снова его вызовет
        setTimeout(() => { // удаляем наш новый блок
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal(); // закрываем окно что бы не мешало пользователю
        } , 4000);
    }
    
    // Теперь в функции отправки проведем изменения
    // function postData(form) { 
    //     form.addEventListener('submit', (e) => {  
          
    //         e.preventDefault(); 
            
    //          const statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status'); 
    //         statusMessage.textContent = message.loading;
    //         form.append(statusMessage); 
    
    //         const req = new XMLHttpRequest(); 
    //         req.open('POST', 'server.php'); 
    
    //         req.setRequestHeader('Content-type', 'application/json');
    //         const object = {};
    //         formData.forEach(function(value, key){
    //             object[key] = value;
    //         });
           
    //         const json = JSON.stringify(object);
    
    //         const formData = new FormData(form); 
    //         req.send(formData); 
    
    //         req.addEventListener('load', () => {
    //             if (req.status === 200) {
    //                 console.log(req.response);
    //                 showThanksModal(message.success); // запускаем нашу нункцию с аргументом сообщением
    //                 form.reset(); //Удалили таймаут потому что она будет использоваться только для спинера
    //                 statusMessage.remove(); // удаляется спиннер   
    //             }else{
    //                 showThanksModal(message.failure);
    //             }
    //         });
    //     });
    // }
    
    //Раскоментируем const modalTimerId = setTimeout(openModal, 50000); потому что она давала ошибку в консоле и если так и оставить
    //то вызов  openModal() в функции showThanksModal завершится ошибкой и дальше код не пойдет
    
    //Добавляем вместо loading: 'Загрузка' в объекте message - картинку спиннер "spinner.svg". В папке img создаем папку form
    //и туда помещаем спиннер, как относящийся к этому элементу
    // const message = {
    //     loading: 'img/form/spinner.svg',
    //     success: 'Спасибо! До связи',
    //     failure: ' Что-то пошло не так...'
    // };
    
    //Также изменяем
    // form.addEventListener('submit', (e) => {  
    //     e.preventDefault(); 
    //     //005 изменяем для показа картинки и класс
    //     const statusMessage = document.createElement('img');
    //     statusMessage.src = message.loading;
    //     //записываем инлайн стили что бы картинка была по центру
    //     statusMessage.style.cssText = `
    //         display: block;
    //         margin: 0 auto;
    //     `;
    //     form.append(statusMessage); 
    
    //При первой эмуляции медленного интернета slow 3G(вместо online) на вкладке Network в консоли изображение мелькнуло и пропало,
    //так как эмулируется медленный интерней картинка не успела подгрузится до выполнения запроса, нужно повторить отправку формы
    //для нормального отображения.
    //При сбросе кеша параметр slow 3G нужно менять снова на online, а то будет долго перекешироваться страница
    
    //При проверке второй формы без модального окна, спиннер сдвигает форму влево, потому что верстка на флексах(фликсах) этого
    //можно избежать если вместо аппенда  form.append(statusMessage) присоединять спиннер после формы
            //form.append(statusMessage);  - удалена в 005 что бы не сдвигалась форма используем insertAdjacentElement послеформы
            // form.insertAdjacentElement('afterend', statusMessage);
}

{//006 Promise
"use strict";
//Позволяет удобно работать с асинхронными операциями(timeOut или запросы на сервер). При выполнении клика хотим что бы только
// в этом случае выполнялся заданный код, тогда мы используем коллбек фунции. ПРИМЕР :Когда делаем запрос на сервер получаем
//данные, выполняем с ними какие то действия и снова отправляем на сервер что бы получить следующие данные и снова с ними произвести
//какие то операции. Цепочка действий зависит от предыдущих результатов (выполняем действие только после успешного выполнения 
// предыдущих действий). Для такого кода можно написать много функций обратного вызова что превратится в большой нечитабельный код,
// его также иногда называются call back hell.  Promise заменяет большой код с функциями обратного вызова.

// Promise после reject/resolve – неизменны. после вызова resolve/reject промис уже не может «передумать».
// Когда промис переходит в состояние «выполнен» – с результатом (resolve) или ошибкой (reject) – это навсегда.
// Последующие вызовы resolve/reject будут просто проигнорированы.



// НЕБОЛЬШОЙ ПРИМЕР (вместо setTimeot  будут запросы к серверу)
// console.log('Запрос данных...');

// setTimeout(() => {
//     console.log('Подготовка данных...');

//     const product = {
//         name: 'TV',
//         price: 2000
//     };

//     setTimeout(() => {
//         product.status = 'Ordered';
//         console.log(product);
//     }, 2000);
// }, 2000);


    console.log('Запрос данных...');

//создаем новый промис с коллбек функцией внутри обычно принимает 2 аргумента function(resolve, reject). resolve, reject - функции
//которые мы сами сможем передавать. resolve - означает что то выполнилось правильно, reject - что то пошло не так, 
//обещание не выполнилось. Сеттаймут с  product.status - заменяем на resolve, потому что он выполнится только в случае выполнения
//предыдущего кода
        const req = new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log('Подготовка данных...');
            
                const product = {
                    name: 'TV',
                    price: 2000
                };
            
                resolve(product);
            }, 2000);
        }); 

//vscode подсказывает что есть методы req (catch, then, finally). then - запускает функцию в случае положительного выполнения
//предыдущего кода, будет вызыватся из места где resolve впредыдущем коде. В этом коде product не существует, поэтому его
//нужно вернуть из предыдущей функции, вписав аргументом в resolve(product) и req.then((product)
// req.then((product) => {
//     setTimeout(() => {
//         product.status = 'Ordered';
//         console.log(product);
//     }, 2000);
// });
    
    
//Для дальнейших действий с кодом req.then оборачиваем его в промис как и предыдущий(исходный код) 
// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'Ordered';
//             resolve(product);
//         }, 2000);
//     });
//
//     req2.then(data => {
//         console.log(data);
//     });
// });
//

//***Если код не обернуть в новый промис то второе обращение then будет обращаться к первому промису и будет выполнятся не 
//после второго, а совместно с первым tnen ***  МОЙ ПРИМЕР
// const prom = new Promise((resolve, reject) => {
//     let x = 5*2;
//     setTimeout(() => {
//        
//         console.log(x);
//         resolve(x);
//     }, 2_000);
//    
// });
// prom.then((x) => {
//      setTimeout(() => {
//       x = x + 2;
//         console.log(x);
//         return x;
//     }, 2_000);
// });
// prom.then((x2) => {
//     setTimeout(() => {
//     x2 = x2 + 4;
//         console.log(x2);
//         return x2;
//     }, 2_000);
// });
//Тут я ожидал увидеть  в консоли 10 12 16 через каждые 2 секунды, но по факту 10 12 14 - 12 и 14 выполняются одновременно и
//используют данные которые отдает resolve. Для того что бы отдать данные дальше и нужно создавать новый промис.
// const prom = new Promise((resolve, reject) => {
//     let x = 5*2;
//     setTimeout(() => {
//       
//         console.log(x);
//         resolve(x);
//     }, 2_000);
//  
// });
//
// prom.then((x) => {
//     const prom2 = new Promise((resolve) =>{
//         setTimeout(() => {
//             let  x2 = x + 2;
//               console.log(x2);
//               resolve(x2);
//           }, 2_000);
//     });
//
//     prom2.then((x2) => {
//    
//         setTimeout(() => {
//         let    x3 = x2 + 4;
//             console.log(x3);
//         }, 2_000);
//     });
// }); 
//*** Но второй then обращается к prom2.then внутри предыдущего then потому что глобально нового промиса не существует
//он существует в prom.then - первом then. И для дальнейшего вызова снова нужно создавать новый рпомис prom3, это
//неудобно и накладывает ограничения, поэтому в коде ниже мы будет ВОЗВРАЩАТЬ новый промис для последующего взаимодействия
//с then  и для того что бы не создавать каждый раз новый промис и называть его. После первого resolve, дальнейшая 
//передача данных осуществляется через return
//*** На завершённых промисах обработчики запускаются сразу
//Если промис в состоянии ожидания, обработчики в .then/catch/finally будут ждать его. Однако, если промис уже завершён, 
//то обработчики выполнятся сразу. Что бы таймауты работали правильно нужно каждый раз вызывать новый промис
// const prom = new Promise((resolve, reject) => {
//     let x = 5*2;
//     setTimeout(() => {
//         console.log(x);
//         resolve(x);
//     }, 1_000);
//    
// });
//
// prom.then(x => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             x = x + 2;
//             console.log(x);
//             resolve(x);
//           }, 1_000);
//     });
// }).then(x => {
//     return new Promise((resolve, reject) =>{
//     x = x + 4;
//     setTimeout(() => {console.log(x); resolve(x);}, 1_000);
//     //return x;
//     });
// }).then(x => {
//     return new Promise((resolve, reject) =>{
//      x = x + 5; 
//      setTimeout(() => {console.log(x); resolve(x);}, 1_000);
//      //return x;
//      });
// }).then(x => {
//     return new Promise((resolve, reject) =>{
//     x = x + 5;
//     setTimeout(() => {console.log(x); resolve(x);}, 1_000);
//     //return x;
//     });
// }).catch(() =>{
//     new Error("…");
// }).finally(() => {console.log(`Job's done`)});


//По сравнению с обычными колбеками преимуществом промисов является то что мы можем возвращать промис из then по цепочке.
//Когда одна операция выполнится, выполним следующую, и т.д. сокращая написание функции вот так
// req.then(product => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'Ordered';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((prevData) => {
//     console.log(prevData);
// });

//***МОЙ ПРИМЕР*** setTimeout работает нормально только в паре с resolve. Если в then уже идет return, из тайм аута он не вернет 
//значение, его нужно использовать вне таймаута, наверное из-за этого все итерации с then и  return после первого выполняются
//мгновенно. В консоль получаем 10 12 16 21 26. 10 12 - с интервалом 2 скунды и еще через 2 секунды  сразу 3 числа 16 21 26
// const prom = new Promise((resolve, reject) => {
//     let x = 5*2;
//     setTimeout(() => {
//        
//         console.log(x);
//         resolve(x);
//     }, 2_000);
//    
// });
//
// prom.then(x => {
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             x = x + 2;
//             console.log(x);
//             resolve(x);
//           }, 2_000);
//     });
// }).then(x => {
//     x = x + 4;
//     setTimeout(() => {console.log(x);}, 3_000);
//     return x;
// }).then(x => {
//      x = x + 5; 
//     setTimeout(() => {console.log(x);}, 3_000);
//     return x;
// }).then(x => {
//     x = x + 5;
//     setTimeout(() => {console.log(x);}, 3_000);
// });
    


//При помощи reject обрабатывается невыполнение кода из-за ссылки на несуществующий файл при его запросе, не существующий сервер,
// падение сервера и его ответ - ошибка. Метод catch обычно идет в конце. При ошибке все then пропускаются и выполнение кода
//переходит на catch. (При возникновении ошибки – она отправляется в ближайший обработчик onRejected.)
        req.then(product => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    product.status = 'Ordered';
                    resolve(product);
                }, 2000);
            });
        }).then(data => {
            data.modify = true;
            return data;
        }).then((prevData) => {
            console.log(prevData);
        }).catch(() => {
            console.error('Произошла ошибка');
        }).finally(() => {
            console.log('Finally');
        });
// Блок finally всегда в конце - позволяет выполнить действия не зависимо от успеха выполнения кода. Используется например для
//очистки формы от старых данных по завершении работы кода

//Пример с learn.javascript.ru/promise
// 'use strict';
// httpGet('/article/promise/userNoGithub.json')
// .then(JSON.parse)
// .then(user => httpGet(`https://api.github.com/users/${user.name}`))
// .then(
//     JSON.parse,
//     function githubError(error) {
//     if (error.code == 404) {
//         return {name: "NoGithub", avatar_url: '/article/promise/anon.png'};
//     } else {
//         throw error;
//     }
//     }
// )
// .then(function showAvatar(githubUser) {
//     let img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.appendChild(img);
//     setTimeout(() => img.remove(), 3000);
// })
// .catch(function genericError(error) {
//     alert(error); // Error: Not Found
// });

    
// Промисификация – это когда берут асинхронную функциональность и делают для неё обёртку, возвращающую промис.
// После промисификации использование функциональности зачастую становится гораздо удобнее.
// В качестве примера сделаем такую обёртку для запросов при помощи XMLHttpRequest.
// Функция httpGet(url) будет возвращать промис, который при успешной загрузке данных с url будет переходить в
// fulfilled с этими данными, а при ошибке – в rejected с информацией об ошибке:      

//Пример с learn.javascript.ru/promise    
// function httpGet(url) {
//     return new Promise(function(resolve, reject) {
    
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', url, true);
    
//       xhr.onload = function() {
//         if (this.status == 200) {
//           resolve(this.response);
//         } else {
//           var error = new Error(this.statusText);
//           error.code = this.status;
//           reject(error);
//         }
//       };
    
//       xhr.onerror = function() {
//         reject(new Error("Network Error"));
//       };
    
//       xhr.send();
//     });
//   }   

//Использование:
//     httpGet("/article/promise/user.json")
//   .then(
//     response => alert(`Fulfilled: ${response}`),
//     error => alert(`Rejected: ${error}`)
//   );


//Рассмотрим методы all и race - принимают аргументом массив с промисами

// Эта функция запускается принимает аргумент time(колю времени) возвращает Promise который зарезолвится через время time
//Эту функцию используют для запуска одинаковых операций через разные промежутки времени
const test = time => {
    return new Promise(resolve => { // ***Очень редко бывает второй аргумент reject не нужен, тогда мы его не передаем
        setTimeout(() => resolve(), time); //resolve выполнится через time
    });
};

test(1000).then(() => console.log('1000 ms')); // - console.log - через then для того что бы увидеть результат
test(2000).then(() => console.log('2000 ms'));
test(3000).then(() => console.log('3000 ms'));

// all получает массив (или другой итерируемый объект) промисов и возвращает промис, который ждёт, 
//пока все переданные промисы завершатся, и переходит в состояние «выполнено» с массивом их результатов.
//Промисы вернут результат который можем обработать через then. Этот метод служит для того что бы точно убедится что все
//промисы выполнились. Например запрашиваем 4 картинки из разных серверов, и что бы одновременно их показать ждем пока 
//все промисы выполнятся. Ориентируемся на промис который выполнится последним. Если какой-то из промисов завершился с ошибкой,
// то результатом Promise.all будет эта ошибка. При этом остальные промисы игнорируются.
Promise.all([test(1000), test(2000), test(3000)]).then(() => {
    console.log('All');
});
//Можно дописать catch для обработки ошибки

// Пример с learn.javascript.ru/promise
// Promise.all([
//     httpGet('/article/promise/user.json'),
//     httpGet('/article/promise/guest.json'),
//     httpGet('/article/promise/no-such-page.json') // (нет такой страницы)
//   ]).then(
//     result => alert("не сработает"),
//     error => alert("Ошибка: " + error.message) // Ошибка: Not Found
//   )

    
// race  - в отличие от all, результатом будет только первый успешно выполнившийся промис из списка. Остальные игнорируются.
//этот метод начнет выполнятся как только выполнится самый первый промис из массива
Promise.race([test(1000), test(2000), test(3000)]).then(() => {
    console.log('Race');
});
// 1000 ms
// Race
// 2000 ms
// 3000 ms
// All

//     Пример с learn.javascript.ru/promise
//     Promise.race([
//         httpGet('/article/promise/user.json'),
//         httpGet('/article/promise/guest.json')
//       ]).then(firstResult => {
//         firstResult = JSON.parse(firstResult);
//         alert( firstResult.name ); // iliakan или guest, смотря что загрузится раньше
//       });


// ИТОГО
// Промис – это специальный объект, который хранит своё состояние, текущий результат (если есть) и колбэки.

// При создании new Promise((resolve, reject) => ...) автоматически запускается функция-аргумент, 
//которая должна вызвать resolve(result) при успешном выполнении и reject(error) – при ошибке.

// Аргумент resolve/reject (только первый, остальные игнорируются) передаётся обработчикам на этом промисе.

// Обработчики назначаются вызовом .then/catch.

// Для передачи результата от одного обработчика к другому используется чейнинг.

// У промисов есть некоторые ограничения. В частности, стандарт не предусматривает какой-то метод для «отмены» промиса, 
//хотя в ряде ситуаций (http-запросы) это было бы довольно удобно. Возможно, он появится в следующей версии стандарта JavaScript.

// В современной JavaScript-разработке сложные цепочки с промисами используются редко, так как они куда проще 
//описываются при помощи генераторов с библиотекой co, которые рассмотрены в соответствующей главе. Можно сказать, 
//что промисы лежат в основе более продвинутых способов асинхронной разработки.

//***Функция для выполнения действия через заданное количество времени на промисе
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
//   delay(1000).then(() => console.log('выполнилось через 1 секунду'));
//   delay(2000).then(() => console.log('выполнилось через 2 секунду'));
//   delay(3000).then(() => console.log('выполнилось через 3 секунду'));
//Заметьте, что resolve вызывается без аргументов. Мы не возвращаем из delay ничего, просто гарантируем задержку.
}

{//Цепочка промисов https://learn.javascript.ru/promise-chaining
    
// Давайте вернёмся к ситуации из главы Введение: колбэки: у нас есть последовательность асинхронных задач, которые должны
// быть выполнены одна за другой. Например, речь может идти о загрузке скриптов. Как же грамотно реализовать это в коде?

// Промисы предоставляют несколько способов решения подобной задачи.

// В этой главе мы разберём цепочку промисов.

// Она выглядит вот так:
    
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function(result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function(result) {

    alert(result); // 4
    return result * 2;

});
// Идея состоит в том, что результат первого промиса передаётся по цепочке обработчиков .then.

// Поток выполнения такой:

// Начальный промис успешно выполняется через 1 секунду (*),
// Затем вызывается обработчик в .then (**).
// Возвращаемое им значение передаётся дальше в следующий обработчик .then (***)
// …и так далее.
// В итоге результат передаётся по цепочке обработчиков, и мы видим несколько alert подряд, которые выводят: 1 → 2 → 4.


// Всё это работает, потому что вызов promise.then тоже возвращает промис, так что мы можем вызвать на нём следующий .then.

// Когда обработчик возвращает какое-то значение, то оно становится результатом выполнения соответствующего промиса и передаётся в 
//следующий .then.

// Классическая ошибка новичков: технически возможно добавить много обработчиков .then к единственному промису. Но это не цепочка.

// Например:

let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

// Мы добавили несколько обработчиков к одному промису. Они не передают друг другу результаты своего выполнения, а действуют 
//независимо.

// Все обработчики .then на одном и том же промисе получают одно и то же значение – результат выполнения того же самого промиса.
//Таким образом, в коде выше все alert показывают одно и то же: 1.

// На практике весьма редко требуется назначать несколько обработчиков одному промису. А вот цепочка промисов используется куда
// чаще.

// Возвращаем промисы
// Обработчик handler, переданный в .then(handler), может вернуть промис.

// В этом случае дальнейшие обработчики ожидают, пока он выполнится, и затем получают его результат.

// Например:
    
new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000);

}).then(function(result) {

    alert(result); // 1

    return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) { // (**)

    alert(result); // 2

    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function(result) {

    alert(result); // 4

});
// Здесь первый .then показывает 1 и возвращает новый промис new Promise(…) в строке (*). Через одну секунду этот промис успешно
//  выполняется, и его результат (аргумент в resolve, то есть result * 2) передаётся обработчику в следующем .then. Он находится
//   в строке (**), показывает2 и делает то же самое.

// Таким образом, как и в предыдущем примере, выводятся 1 → 2 → 4, но сейчас между вызовами alert существует пауза в 1 секунду.

// Возвращая промисы, мы можем строить цепочки из асинхронных действий.

// Пример: loadScript
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
      document.head.append(script);
    });
  }
// Давайте используем эту возможность вместе с промисифицированной функцией loadScript, созданной нами в предыдущей главе, чтобы
// загружать скрипты по очереди, последовательно:

loadScript("/article/promise-chaining/one.js")
    .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
    })
    .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
    })
    .then(function(script) {
    // вызовем функции, объявленные в загружаемых скриптах,
    // чтобы показать, что они действительно загрузились
    one();
    two();
    three();
    });
// Этот же код можно переписать немного компактнее, используя стрелочные функции:

loadScript("/article/promise-chaining/one.js")
    .then(script => loadScript("/article/promise-chaining/two.js"))
    .then(script => loadScript("/article/promise-chaining/three.js"))
    .then(script => {
    // скрипты загружены, мы можем использовать объявленные в них функции
    one();
    two();
    three();
    });
// Здесь каждый вызов loadScript возвращает промис, и следующий обработчик в .then срабатывает, только когда этот промис завершается.
//  Затем инициируется загрузка следующего скрипта и так далее. Таким образом, скрипты загружаются один за другим.

// Мы можем добавить и другие асинхронные действия в цепочку. Обратите внимание, что наш код всё ещё «плоский», он «растёт» вниз,
//  а не вправо. Нет никаких признаков «адской пирамиды вызовов».

// Технически мы бы могли добавлять .then напрямую к каждому вызову loadScript, вот так:

loadScript("/article/promise-chaining/one.js").then(script1 => {
    loadScript("/article/promise-chaining/two.js").then(script2 => {
    loadScript("/article/promise-chaining/three.js").then(script3 => {
        // эта функция имеет доступ к переменным script1, script2 и script3
        one();
        two();
        three();
    });
    });
});
// Этот код делает то же самое: последовательно загружает 3 скрипта. Но он «растёт вправо», так что возникает такая же проблема,
//  как и с колбэками.

// Разработчики, которые не так давно начали использовать промисы, иногда не знают про цепочки и пишут код именно так, как
//  показано выше. В целом, использование цепочек промисов предпочтительнее.

// Иногда всё же приемлемо добавлять .then напрямую, чтобы вложенная в него функция имела доступ к внешней области видимости.
//  В примере выше самая глубоко вложенная функция обратного вызова имеет доступ ко всем переменным script1, script2, script3.
//   Но это скорее исключение, чем правило.

// Thenable
// Если быть более точными, обработчик может возвращать не именно промис, а любой объект, содержащий метод .then, такие объекты
//  называют «thenable», и этот объект будет обработан как промис.

// Смысл в том, что сторонние библиотеки могут создавать свои собственные совместимые с промисами объекты. Они могут иметь свои
//  наборы методов и при этом быть совместимыми со встроенными промисами, так как реализуют метод .then.

// Вот пример такого объекта:

class Thenable {
    constructor(num) {
    this.num = num;
    }
    then(resolve, reject) {
    alert(resolve); // function() { native code }
    // будет успешно выполнено с аргументом this.num*2 через 1 секунду
    setTimeout(() => resolve(this.num * 2), 1000); // (**)
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
    return new Thenable(result); // (*)
    })
    .then(alert); // показывает 2 через 1000мс
// JavaScript проверяет объект, возвращаемый из обработчика .then в строке (*): если у него имеется метод then, который можно
//  вызвать, то этот метод вызывается, и в него передаются как аргументы встроенные функции resolve и reject, вызов одной из 
//  которых потом ожидается. В примере выше происходит вызов resolve(2) через 1 секунду (**). Затем результат передаётся дальше
//   по цепочке.

// Это позволяет добавлять в цепочки промисов пользовательские объекты, не заставляя их наследовать от Promise.

// Более сложный пример: fetch
// Во фронтенд-разработке промисы часто используются, чтобы делать запросы по сети. Давайте рассмотрим один такой пример.

// Мы будем использовать метод fetch, чтобы подгрузить информацию о пользователях с удалённого сервера. Этот метод имеет много
//  опциональных параметров, разобранных в соответствующих разделах, но базовый синтаксис весьма прост:

// let promise = fetch(url);
// Этот код запрашивает по сети url и возвращает промис. Промис успешно выполняется и в свою очередь возвращает объект response
//  после того, как удалённый сервер присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.

// Чтобы прочитать полный ответ, надо вызвать метод response.text(): он тоже возвращает промис, который выполняется, когда данные
//  полностью загружены с удалённого сервера, и возвращает эти данные.

// Код ниже запрашивает файл user.json и загружает его содержимое с сервера:

fetch('/article/promise-chaining/user.json')
    // .then в коде ниже выполняется, когда удалённый сервер отвечает
    .then(function(response) {
    // response.text() возвращает новый промис,
    // который выполняется и возвращает полный ответ сервера,
    // когда он загрузится
    return response.text();
    })
    .then(function(text) {
    // ...и здесь содержимое полученного файла
    alert(text); // {"name": "iliakan", isAdmin: true}
    });
// Есть также метод response.json(), который читает данные в формате JSON. Он больше подходит для нашего примера, так что
//  давайте использовать его.

// Мы также применим стрелочные функции для более компактной записи кода:

// то же самое, что и раньше, только теперь response.json() читает данные в формате JSON
fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => alert(user.name)); // iliakan, получили имя пользователя
// Теперь давайте что-нибудь сделаем с полученными данными о пользователе.

// Например, мы можем послать запрос на GitHub, чтобы загрузить данные из профиля пользователя и показать его аватар:

// Запрашиваем user.json
fetch('/article/promise-chaining/user.json')
    // Загружаем данные в формате json
    .then(response => response.json())
    // Делаем запрос к GitHub
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    // Загружаем ответ в формате json
    .then(response => response.json())
    // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
    .then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => img.remove(), 3000); // (*)
    });
// Код работает, детали реализации отражены в комментариях. Однако в нём есть одна потенциальная проблема, 
// с которой часто сталкиваются новички.

// Посмотрите на строку (*): как мы можем предпринять какие-то действия после того, как аватар был показан и удалён? 
// Например, мы бы хотели показывать форму редактирования пользователя или что-то ещё. Сейчас это невозможно.

// Чтобы сделать наш код расширяемым, нам нужно возвращать ещё один промис, который выполняется после того, как 
// завершается показ аватара.

// Примерно так:

fetch('/article/promise-chaining/user.json')
    .then(response => response.json())
    .then(user => fetch(`https://api.github.com/users/${user.name}`))
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject) { // (*)
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
        img.remove();
        resolve(githubUser); // (**)
    }, 3000);
    }))
    // срабатывает через 3 секунды
    .then(githubUser => alert(`Закончили показ ${githubUser.name}`));
// То есть, обработчик .then в строке (*) будет возвращать new Promise, который перейдёт в состояние «выполнен» только после того,
//  как в setTimeout (**) будет вызвана resolve(githubUser).

// Соответственно, следующий по цепочке .then будет ждать этого.

// Как правило, все асинхронные действия должны возвращать промис.

// Это позволяет планировать после него какие-то дополнительные действия. Даже если эта возможность не нужна прямо сейчас,
//  она может понадобиться в будущем.

// И, наконец, давайте разобьём написанный код на отдельные функции, пригодные для повторного использования:

function loadJson(url) {
    return fetch(url)
    .then(response => response.json());
}

function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function(resolve, reject) {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(() => {
        img.remove();
        resolve(githubUser);
    }, 3000);
    });
}

// Используем их:
loadJson('/article/promise-chaining/user.json')
    .then(user => loadGithubUser(user.name))
    .then(showAvatar)
    .then(githubUser => alert(`Показ аватара ${githubUser.name} завершён`));
    // ...
// Итого
// Если обработчик в .then (или в catch/finally, без разницы) возвращает промис, последующие элементы цепочки ждут,
//  пока этот промис выполнится. Когда это происходит, результат его выполнения (или ошибка) передаётся дальше.
}

{//007 Fetch API, promise + server
// API - Application Programming Interface (интерфейс программного приложения). Это набор данных и возможностей которые 
//предоставляет нам какое то готовое решение, мы уже пользуемся DOM API (document.qerySelector - используя методы doument)

// Fetch API - уже встроена в браузер, построена на промисах и позволяет общаться с сервером.
//Будем обращаться к jsonplaceholder.typicode.com - небольшая база данных в интернете к которой можно обращаться для тестирования

// Что на сервере хранится
// /posts	100 posts
// /comments	500 comments
// /albums	100 albums
// /photos	5000 photos
// /todos	200 todos
// /users   10 users

//Какие запросы можно отправлять
// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH	/posts/1
// DELETE	/posts/1

//На этом сайте есть пример как обращаться к базе, копируем его - обращаемся к todo
//Без указания дополнительных параметров - это будет класический GET запрос который получит данные
// response.json- встроенный метод fetch заменяет JSON.parse и возвращает promise(потому что не знаем сколько будет длится операция)
// fetch('https://jsonplaceholder.typicode.com/todos/1') // 1 - уникальній идентификатор по которому делаем запрос (id: 1)
//     .then(response => response.json()) 
//     .then(json => console.log(json));
// получили объект {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
//Также с сервера может прийти текст который нужно будет потом превратить в объект

//Для формирования POST запроса нужно добавить объект с настройками (обязательные 2 свойства - mehod и body, желательно указывать
// еще заголовки для указания что мы отправляем )
// fetch('https://jsonplaceholder.typicode.com/posts', { // обращаемся к POST	/posts 
//     method: "POST",
//     body: JSON.stringify({name:"Alex"}),
//     headers: {
//         'Content-type': 'application/json'
//     }
// }) 
// .then(response => response.json()) 
// .then(json => console.log(json));
// {name: 'Alex', id: 101} - запостили и получили назад ответ с фейковой id: 101, на самом деле мы ничего не записали на сервер
//просто получили такой ответ, который говорит нам что все работает 

// Метод запросов fetch намного проще XMLHttpRequest запросов. url задается одной строкой, а настройки идут одним объектом. Этот
//метод запросов сейчас используется почти везде, однако можно встретить и XMLHttpRequest запросы.

//======== Перписываем функционал сайта продуктов с использованием fetch
//============================ 007 Переписываем запросы с помощью fetch
// 1) отправим классическую формдейту 2) отправим JSON файл на наш сервер
function postData(form) { 
    form.addEventListener('submit', (e) => {  
        e.preventDefault(); 
        
        //005 изменяем для показа картинки и класс
        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        //записываем инлайн стили что бы картинка была по центру
        statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
        //form.append(statusMessage);  - удалена в 005 что бы не сдвигалась форма используем insertAdjacentElement послеформы
        form.insertAdjacentElement('afterend', statusMessage);

        //007 Убираем этот запрос, вместо него будет fetch - который перемещаем ниже под создание formData
        // const req = new XMLHttpRequest(); 
        // req.open('POST', 'server.php'); 
        
        //007 из req.setRequestHeader берем headers только через двоеточие и удаляем строку
        //req.setRequestHeader('Content-type', 'application/json');
     
        const formData = new FormData(form);

        //007- пока закоментируем потому что  отправляем только FormData и превращать в json не нужно
        // const object = {};
        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });
        // const json = JSON.stringify(object);

 
        // req.send(formData);  //007 убрано

                //007  Раньше обрабатывали результат запроса так, теперь с помощью промисов
        // req.addEventListener('load', () => {
        //     if (req.status === 200) {
        //         console.log(req.response);
        //         showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
        //         form.reset(); //Удалили таймаут потому что она будет использоваться только для спинера
        //         statusMessage.remove(); // удаляется спиннер   
        //     }else{
        //         showThanksModal(message.failure);
        //     }
        // });

        fetch('server.php', {
            method: 'POST',
            // headers: {                // заголовок раскоментируем когда будем отправлять json данные
            //     'Content-type': 'application/json'
            // },
            body: formData
        }).then(data => data.text()) //От сервера пришел отве Responce объект, но не данные которые мы отправляли, что бы их получить
        //что бы понимать какой ответ приходит нужно этот ответ модифицировать. В данном случае в текст, потому что мы знаем
        //что отправляли не json. ***Так же в Сервере .php  закоментируем строку для работы с json
        .then(data => { 
            console.log(data);
            showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
            statusMessage.remove(); // удаляется спиннер  
        }).catch(() => {
            showThanksModal(message.failure); // Показываем ошибку если есть
        }).finally(() => {
            form.reset(); //очищаем форму в любом случае в конце этого кода
        });
    });
}
// Что бы передать JSON изменяем

//007- пока закоментируем потому что  отправляем только FormData и превращать в json не нужно
        // const object = {};
        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });

        // const json = JSON.stringify(object); // - избавляемся от лишней переменной и подставляем вместо formData

        fetch('server.php', {
            method: 'POST',
            headers: {                // заголовок раскоментируем для отправки json данных 
                'Content-type': 'application/json' //***Так же в Сервере .php  раскомментируем строку для работы с json
            },
            body: JSON.stringify(object)
            //body: formData 
        }).then(data => data.text()) 
        .then(data => { 
            console.log(data);
            showThanksModal(message.success); // запускаем нашу функцию с аргументом сообщением
            statusMessage.remove(); // удаляется спиннер  
        }).catch(() => {
            showThanksModal(message.failure); // Показываем ошибку если есть
        }).finally(() => {
            form.reset(); //очищаем форму в любом случае в конце этого кода
        });

//**** Проверим вывод ошибки для пользователя. Допустим ошибку в пути сервера server1.php, при этом в консоль выкидывается ошибка
//но сообщение в модальном окне выводится как при положительном ответе. Это особенность fetch, промис который он запускает
// не перейдет в состояни отклонено(rejected) из-за ответа http который считается ошибкой (404, 500, 502, ...) он все равно
//выполнится нормально у него поменятся только status который будет false. (Еще раз простыми словами - если внутри фетча промис
//попадает на ошибку которая связана с http протоколом - он не выкинет reject, для него это не считается ошибкой, он нормально
//отработает resolve. Главное для фетча что он вообще смог сделать запрос, соответственно reject юудет только в случае сбоя сети
// или если что то помешало запросу выполнится)

}

{//008 Методы перебора массивов и объектов
// 1) filter - фильтрует массив согласно заданному правилу и ***возвращает в новом массиве. Поэтому присваиваем результат переменной
//в примере нужно получить все имена которые меньше 5 символов

const names = ['Ivan', 'Ann', ' Ksenia', 'Volandemort'];

const shortNames = names.filter(function(name) {
    return name.length < 5; // можно использовать запись через if if(name.length < 5) { return name.length;}
});


// 2) map - аналогичен forEach но ***возвращает новый массив
//Нам нужно все элементы привести к нижнему регистру для дальнейшоего использования

let answers = ['iVaN', 'AnnA', 'Hello'];

const result = answers.map(item => {  //  сокращаем запись  answers.map(item => item.toLowerCase());
    return item.toLowerCase(); 
});
console.log(result); // ['ivan', 'anna', 'hello']

// //Можно переприсвоить значение исходному массиву, объявляя его через let. 
// //***С точки зрения Иммутабельности лучше создавать новую переменную
answers = answers.map(item => item.toLocaleLowerCase()); // ['ivan', 'anna', 'hello']


// 3) every/some
// some - если хотя бы один эл. подходит под условие возвращает true
//*** при использовании стрелочной записи функции return подставляется автоматически
const some = [4, 'Some', 'user'];
console.log(some.some(item => typeof(item) === 'number')); //true  сравниеваем эл. с типом number

//every - true если все эл. массива подходят под условие
console.log(some.every(item => typeof(item) === 'number')); //false  сравниеваем эл. с типом number


// 4) reduce - собирает массив в единое целое ( чаще всего работает с числами)
const arr = [4, 3, 2, 1];

const result = arr.reduce((sum, current) => sum + current); //10

//Можно проводить другие действия 
//*** Если не задавать значение по умолчанию для sum - тогда оно равняется первому элементу массива 
const resultMinus = arr.reduce((sum, current) => sum - current); // -2 (4 -3 -2 -1)
//*** Если задать 0
const resultMinus2 = arr.reduce((sum, current) => sum - current, 0); // -10 (0 -4 -3 -2 -1)

const resultDouble = arr.reduce((sum, current) => (sum + current)*2, 0); // 98 ((0+4)*2 = (8+3)*2 = (22+2)*2 = (48+1)*2 = 98)

//*** Массив со строками можно собрать в единую строку
const str = ['Apple', 'Juice', 'Awesome'];
//Метод 1 через конкатенацию
const solidStr = str.reduce((sum, current) => sum + ', ' + current); //Apple, Juice, Awesome
//Метод 2 через интерполяцию
const solidStr2 = str.reduce((sum, current) => `${sum}, ${current}`); //Apple, Juice, Awesome


//*** ПРАКТИЧЕСКИЙ ПРИМЕР
// После обращения к серверу с него пришел объект с поменяными сетами названиями и свойствами (так делают потому что объект не может
// содержать одинаковые названия свойств). Задача - вытащить имена пользователей ivan и ann, при том что расположение свойств 
//в объекте неизвестно (индекс не известен)
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

// entries - метод для преобразования объекта в матрицу (*НОВЫЙ массив с вложенными массивами)
    //const newArr = Object.entries(obj);  // [ ['ivan', 'persone'], ['ann', 'persone'], ['dog', 'animal'], ['cat', 'animal'] ]

//теперь фильтруем массив и оставляем те массивы у которых вторым эл. persone. Сделаем это методом цепочек(chaining) как промисы
const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')  //[ ['ivan', 'persone'], ['ann', 'persone'] ] снова используем цепочку
.map(item => item[0]);                  // ['ivan', 'ann']
}

{//009 Подробно про npm и проект. JSON-server

}

{//Деструктуризация / todo list

}