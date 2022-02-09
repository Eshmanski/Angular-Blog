// 1 Базовые типы
{
    var str = 'Hello TypeScript';
    var num = 42;
    var isActive = false;
    var strArray = ['H', 'e', 'l'];
    var numArray = [1, 1, 2, 3];
}
//2 Работа с функциями
{
    function logInfo(name, age) {
        console.log("Info: ".concat(name, ", ").concat(age));
    }
    logInfo('Vladilen', 25);
    function calc(a, b) {
        if (typeof b === 'string')
            b = +b;
        return a + b;
    }
    console.log(calc(2, 'f'));
}
//3 Работа с классом
{
    var Server = /** @class */ (function () {
        function Server(name, ip) {
            this.name = name;
            this.ip = ip;
            this.status = 'warking';
        }
        Server.prototype.turnOn = function () {
            this.status = 'working';
        };
        Server.prototype.turnOf = function () {
            this.status = 'offline';
        };
        Server.prototype.getStatus = function () {
            return this.status;
        };
        Server.VERSION = '1.0.3';
        return Server;
    }());
    var server = new Server('AWS', 1234);
}
//4 Интерфейсы и объекты
{
    var user = {
        name: 'Pavel',
        age: 25,
        logInfo: function () {
            console.log(this.name + ' ' + this.age);
        }
    };
}
//5 Интерфейсы и классы
{
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.sayHello = function () {
            console.log(this.name + ' Hello!');
        };
        return User;
    }());
    var Ivan = new User('Ivan', 23);
    Ivan.sayHello();
}
//6 Генерик
{
    var arr = [1, 2, 3, 4, 5, 'f'];
    var user1 = [
        { id: 1, name: 'V', age: 23 },
        { id: 2, name: 'E', age: 42 }
    ];
    var user2 = [
        { id: 1, name: 'V', age: 23 },
        { id: 2, name: 'E', age: 42 }
    ];
    function addNum(a, b) {
        return a + b;
    }
    var sum = addNum(2, 3);
}
