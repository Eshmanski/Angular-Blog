// 1 Базовые типы
{
    let str: string = 'Hello TypeScript';
    let num: number = 42;
    let isActive: boolean = false;

    let strArray: string[] = ['H', 'e', 'l'];
    let numArray: Array<number> = [1, 1, 2, 3];
}
//2 Работа с функциями
{
    function logInfo(name: string, age: number): void {
        console.log(`Info: ${name}, ${age}`);
    }

    logInfo('Vladilen', 25);

    function calc(a: number, b: number | string): number {
        if (typeof b === 'string') b = +b;
        return a + b;
    }

    console.log(calc(2, 'f'));
}
//3 Работа с классом
{
    class Server {
        static VERSION = '1.0.3';

        private status: string = 'warking';

        constructor(public name: string, protected ip: number) {}

        public turnOn(): void {
            this.status = 'working';
        }

        protected turnOf(): void {
            this.status = 'offline';
        }

        public getStatus(): string {
            return this.status;
        }
    }

    const server: Server = new Server('AWS', 1234);
}
//4 Интерфейсы и объекты
{
    interface UserInterface {
        name: string;
        age: number;
        logInfo: () => void;
        id?: any;
    }

    const user: UserInterface = {
        name: 'Pavel',
        age: 25,
        logInfo() {
            console.log(this.name + ' ' + this.age);
        },
    }
}
//5 Интерфейсы и классы
{
    interface SayHello {
        sayHello: () => void;
    }

    class User implements SayHello {
        constructor(private name: string, private age: number) {}

        sayHello() {
            console.log(this.name + ' Hello!');
        }
    }

    const Ivan: SayHello = new User('Ivan', 23);

    Ivan.sayHello();
}
//6 Генерик
{
    const arr: Array<number | string> = [1, 2, 3, 4, 5, 'f'];

    interface User {
        id: number;
        name: string;
        age: number;
    }

    const user1: Array<User> = [
        {id: 1, name: 'V', age: 23},
        {id: 2, name: 'E', age: 42}
    ]

    const user2: User[] = [
        {id: 1, name: 'V', age: 23},
        {id: 2, name: 'E', age: 42}
    ]

    function show<T>(a: T): T {
        console.log(a);

        return a;
    }

    let sum: number = show(2);
}