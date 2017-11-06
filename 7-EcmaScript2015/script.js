// // --- IIFE

// {
//     const a = 5;
//     let b = 3;
// }

// // console.log(a + b);

// (function(){
//     var c = 5;
//     var d = 9;
//     console.log('Wynik wewnątrz: ');
//     console.log(c + d);
// })();

// console.log('Wynik zewnątrz: ');
// console.log(c + d);

// // --- STRINGS
// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirt = 1990;

// function calcAge(year){
//     return 2017 - year;
// }

// // --- ARROW FUNCTIONS
// const years = [1990, 1967, 1943, 1999, 2015];

// // ES5
// var ages5 = years.map(function(el){
//     return 2017 - el;
// });
// console.log(ages5);

// // ES6
// const ages6 = years.map((el, ind) => {
//     return `Age element ${ind + 1}:  ${new Date().getFullYear() - el}`;
// });
// console.log(ages6);

// --- ARROW FUNCTIONS 2
// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         document.querySelector('.green')
//                 .addEventstreetsArrener('click', function () {
//                     // tutaj this nie zadziała, bo this wskazuje na obiekt globalny (w przeglądarce jest to window)
//                     var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//                     alert(str);
//                 })
//     }
// }

// box5.clickMe();

// popularnym wzorcem jest zapisanie this w nowej zmiennej
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function(){
//         var self = this;
//         document.querySelector('.green')
//                 .addEventstreetsArrener('click', function () {
//                     // tutaj this nie zadziała, bo this wskazuje na obiekt globalny (w przeglądarce jest to window)
//                     var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//                     alert(str);
//                 })
//     }
// }

// box5.clickMe();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         document.querySelector('.green')
//                 .addEventstreetsArrener('click', () => {
//                     // tutaj this nie zadziała, bo this wskazuje na obiekt globalny (w przeglądarce jest to window)
//                     var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//                     alert(str);
//                 })
//     }
// }

// box6.clickMe();

// ES5
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function (friends) {
//     var arr = friends.map(function (el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));
//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];
// new Person('John').myFriends5(friends);

// // ES6

// Person.prototype.myFriends6 = function (friends) {
//     const arr = friends.map(el => `${this.name} is friends with  ${el}` );
//     console.log(arr);
// }

// new Person('Mike').myFriends6(friends);

// --- DESTRUCTURING
// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
// const [name, age] = john;
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'John',
//     lastName: 'Smith'
// }

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age, retirement] = calcAgeRetirement(1984);
// console.log(age);
// console.log(retirement);

// --- ARRAYS
// const boxes = document.querySelectorAll('.box');

// // var boxes5 = Array.prototype.slice.call(boxes);

// // for(var i = 0; i < boxes5.length; i++){
// //     if(boxes5[i].className === 'box blue') {
// //         continue;
// //     } 
// //     boxes5[i].textContent = 'I changed to blue!'; 
// // }

// // boxes5.forEach(function(element) {
// //     element.style.backgroundColor = 'dodgerblue';
// // });

// const boxes6 = Array.from(boxes);

// boxes6.forEach(element => element.style.backgroundColor = 'dodgerblue');

// for(const element of boxes6){
//     if(element.className.includes('blue')) {
//         continue;
//     } 

//     element.textContent = 'I changed to blue!'; 
// }

// var ages = [12, 11, 5, 13, 9, 19];
// // ES5

// var full = ages.map(function (ageEl) {
//     return ageEl >= 18;
// });
// // Znalezienie indeksu pełnoletniej osoby
// console.log(full.indexOf(true));
// // Wyświetlenie wieku tej osoby
// console.log(ages[full.indexOf(true)]);

// // console.log(ages);
// // console.log(full);

// // ES6
// // zwraca indeks elementu w którym wyrażenie będzie true:
// console.log(ages.findIndex(element => element >= 18));
// // zwraca wartość elementu w którym wyrażenie będzie true:
// console.log(ages.find(element => element >= 18));

// function addFourAges(a, b, c, d){
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 23, 34, 12);
// console.log(sum1);

// // ES5
// var ages = [18, 23, 34, 12];
// // pierwszy parametr w apply to zdefiniowanie this, które jest tutaj niepotrzebne
// // poniższy kod weźmie wartości z tablicy ages i użyje ich jako parametrów funkcji addFourAges
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];

// const bigFamily = [...familySmith, ...familyMiller];
// console.log(bigFamily);

// const heading = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// [heading, ...boxes].forEach(el => el.style.color = 'yellow');

// --- Parametry REST
// ES5

// function isFullAge5(){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function (cur) {
//         console.log((2016 - cur) >= 18);
//     })
// }

// isFullAge5(1990, 1999, 1967);
// isFullAge5(1990, 1999, 1967, 2016, 1987);

// ES6
// function isFullAge6(...years){
//     years.forEach(cur => console.log((2016 - cur) >= 18));
// }

// isFullAge6(1990, 1999, 1967);

// ----

// function isFullAge5(limit){
//     // przekazanie do argsArr wszystkich parametrów od indeksu 1
//     var argsArr = Array.prototype.slice.call(arguments, 1);
//     argsArr.forEach(function (cur) {
//         console.log((2016 - cur) >= limit);
//     })
// }

// isFullAge5(21, 1990, 1999, 1967);
// // isFullAge5(1990, 1999, 1967, 2016, 1987);

// // ES6
// function isFullAge6(limit, ...years){
//     years.forEach(cur => console.log((2016 - cur) >= limit));
// }

// isFullAge6(21, 1990, 1999, 1967);

// --- PARAMETRY DOMYŚLNE
// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'american' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// // --- MAPS

// const question = new Map();
// question.set('question', 'What is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
// question.set(true, 'Correct answer');
// question.set(false, 'Wrong, please try again');

// // pobranie wartości
// console.log(question.get('question'));
// // Sprawdzanie wielkości mapy:
// console.log(question.size);

// // Sprawdzenie czy mapa ma element o zadanym kluczu (nie jest niezbędne do usuwania):
// if(question.has(4)){
//     // Usuwanie elementów mapy:
//     question.delete(4);
// }

// // usunięcie wszystkich elementów:
// question.clear();

// // pętla forEach
// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// // pętla for of - wszystkie elementy mapy
// for (let [key, value] of question.entries()){
//     console.log(`This is ${key}, and it's set to ${value}`);
// }

// // wyświetlenie tylko odpowiedzi o kluczu numerycznym
// for (let [key, value] of question.entries()){
//     if(typeof(key) === 'number'){
//         console.log(`Answer ${key}: ${value}`);
//     }
// }

// // pobranie numeru odpowiedzi, sprawdzenie czy jest prawdziwa/fałszywa i wyświetlenie odpowiedniego komunikatu
// const ans = parseInt( prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct')));

// --- Klasy

// // ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

// // ES6
// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         const age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// Person6.greeting();

// --- Subklasy

// ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype.wonMedal = function () {
//     this.medals++;
//     console.log(this.medals);
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// ES6
// class Person6{
//     constructor(name, yearOfBirth, job){
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge(){
//         const age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

// }

// class Athlete6 extends Person6{
//     constructor(name, yearOfBirth, job, olympicGames, medals){
//         // wywołanie superklasy
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();

// CHALLENGE

class CityFacility{
    constructor(name, builtInYear){
        this.name = name;
        this.builtInYear = builtInYear;
    }

    age(){
        return new Date().getFullYear() - this.builtInYear;
    }
}

class Park extends CityFacility{
    constructor(name, builtInYear, area, numberOfTrees){
        super(name, builtInYear);
        this.area = area;
        this.numberOfTrees = numberOfTrees;
    }

    treeDensity(){
        return this.numberOfTrees / this.area;
    }

    report(){
        console.log(`Park ${this.name} has a tree density of ${this.treeDensity()} per square km`);
    }
}

class Street extends CityFacility{
    constructor(name, builtInYear, lengthKm, classification = 'normal'){
        super(name, builtInYear);
        this.lengthKm = lengthKm;
        this.classification = classification;
    }

    report(){
        console.log(`${this.name}, built in ${this.builtInYear}, is ${this.classification} street.`);
    }
}

class Streets{
    constructor(...streets){
        this.streetsArr = [];

        streets.forEach(street => this.addStreet(street));
    }

    addStreet(street){
        
        if(street instanceof Street){
            // zapobieganie zdublowaniu ulic
            if(this.streetsArr.indexOf(street) === -1){
                this.streetsArr.push(street);
            } else {
                console.log(`${street.name} znajduje się już wśród zapisanych ulic`);
            }
        } else {
            console.log(`${street} nie jest instancją klasy Street`);
        }
    }

    totalLength(){
        let lengthKm = 0;
        this.streetsArr.forEach(street => lengthKm += street.lengthKm);
        return lengthKm;
    }

    streetsNum(){
        return this.streetsArr.length;
    }

    averageLength(){
        return this.totalLength() / this.streetsNum();
    }

    lengthReport(){
        // raport łącznej i średniej długości ulic
        console.log(`Our ${this.streetsNum()} streets have a total length of ${this.totalLength()} km, with an average of ${this.averageLength()} km`);
    }

    streetsReport(){
        // raport dla każdej z ulic
        this.streetsArr.forEach(street => street.report());
    }

    report(){
        console.log(`----STREETS REPORT----`);

        // raport łącznej i średniej długości ulic
        this.lengthReport();

        // raport dla każdej z ulic
        this.streetsReport();
    }
}

class Parks{
    constructor(...parks){
        this.parksArr = [];

        parks.forEach(park => this.addPark(park));
    }

    addPark(park){
        
        if(park instanceof Park){
            // zapobieganie zdublowaniu parków
            if(this.parksArr.indexOf(park) === -1){
                this.parksArr.push(park);
            } else {
                console.log(`${park.name} znajduje się już wśród zapisanych parków`);
            }
        } else {
            console.log(`${park} nie jest instancją klasy Park`);
        }
    }

    moreThanXTreesReport(x){
        // raportuje w konsoli nazwy parków mających więcej niż x drzew
        let bigger = this.parksArr.filter( park => park.numberOfTrees > x);
        bigger.forEach(park => console.log(`Park ${park.name} has more than ${x} trees\n`));
    }

    averageAgeReport(){
        // Raport średniego wieku wszystkich parków
        let sumAge = 0;
        this.parksArr.forEach(park => sumAge += park.age());
        console.log(`Our ${this.parksArr.length} parks have an average age of ${sumAge /this.parksArr.length} years`);
    }

    report(){
        console.log(`----PARKS REPORT----`);

        // raport dla każdego z parków
        this.parksArr.forEach(park => park.report());

        this.averageAgeReport();

        // raport wszystkich parków mających więcej niż 1000 drzew
        this.moreThanXTreesReport(1000);
    }
}

// PARKI
const parks = new Parks(new Park('Odrzański', 2015, 12, 100), new Park('Oławski', 1890,2, 2453));

const parkMiejski = new Park('Miejski', 1984, 3, 1234);
parks.addPark(parkMiejski);

console.log(parks);
parks.report();

// ULICE
const brzeska = new Street('Brzeska', 1845, 0.5);
const trzeciegoMaja = new Street('3 Maja', 1956, 5, 'big');

const streets = new Streets(brzeska);
streets.addStreet(brzeska);
streets.addStreet(trzeciegoMaja);

console.log(streets);
streets.report();
