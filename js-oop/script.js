//const person={};

//person.firstName='John';//мы можем добавить через doc notation
//person.['lastName']='Smith'; // мы можем добавить через square brackets

const person = {
    firstName: 'John',
    lastName: 'Smith',
    gender: 'male',
    bio: function () {// анонимная функция, или функциональное выражение / bio поле в объекте person
        return this.firstName + ' ' + this.lastName + ' ' + this.gender;
    },
    greeting: function () {
        console.log("Hello, " + this.bio())
    }
}

// функции конструктора Person(c большой буквы). В этом варианте мы сначала создаем Person и должны вернуть его
// function Person(firstName, lastName, gender) {
//     const person = {};
//     person.firstName = firstName;
//     person.lastName = lastName;
//     person.gender = gender;
//     person.bio = function () {// полю bio присваиваем функциональное выражение
//         return person.firstName + ' ' + person.lastName + ' ' + person.gender;
//     };
//     person.greeting = function () {// полю greeting присваиваем функциональное выражение
//         console.log("Hello, " + person.bio());// био со скобками тут bio() - ему присвоено функциональное выражение
//     };
//     return person;
// }
//
// const person1 = Person('Vasya', 'Pupkin', 'male');
// const person2 = Person('Jack', 'Russel', 'terrier');

// используем классический конструктор Person, с использованием this и ничего не возвращаем, сам объект создается
// в момент вызова new Person. Тут класс Person наследуется от класса Object
function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

Person.prototype.bio = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.gender;
}
Person.prototype.greeting = function () {
    return "Hello, " + this.bio();// био со скобками тут bio() - ему присвоено персональное выражение
}

const person1 = new Person('Vasya', 'Pupkin', 'male');
const person2 = new Person('Jack', 'Russel', 'terrier');

Person.prototype.greetOtherPerson = function (person) { // добавив функцию greetOtherPerson в прототип Person, мы добавляем
    //эту функцию во все экземпляры этого класса
    return person.bio() + ' greets me ' + this.bio()
}
