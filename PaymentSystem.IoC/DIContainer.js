//подключаем парсер для парсинга аргументов методов классов или функций 
const PaySysParser = require("../PaymentSystem.Utility/Parser/PaySysParser");

//инициализируем обьект приложения для парсинга 
const parser = new PaySysParser();

//Контейнер внедрения зависимостей
class DIC 
{
    //конструктор, который инициализирует хранилище классов и функций (factories), а так же хранилище зависимостей (dependencies)
    constructor() 
    {
      this.dependencies = {};//хранилище зависимостей типа (имя аргумента, нужная реализация)
      this.factories = {};//хранилище классов и функций
    }
  
    //метод регистрации аргументов функций/классов
    register(name, dependency) 
    {
      this.dependencies[name] = dependency;
    }
  
    //метод регистрации функций/классов
    factory(name, factory) 
    {
      this.factories[name] = factory;
    }
  
    //Метод получения зависимости по имени аргумента (ключу зависимости)
    get(name) 
    {
        if (!this.dependencies[name]) 
        {
          //получаем класс/функцию с хранилища factories
          const factory = this.factories[name];
          //Если мы нашли что-то, то делаем иньекцию в хранилище зависимостей по ключу
          if (factory)   this.dependencies[name] = this.inject(factory);
          //в противном случае возвращаем, что модуль не найден 
          else throw new Error('No module found for: ' + name);
        }
        //возвращаем с хранилища зависимостей нужный модуль
        return this.dependencies[name];
    }
  
    //Метод иньекции
    inject(factory)
    {
        //парсим функцию/класс на имена зависимостей функции (аргументов) и берем их из своего dependencies свойства
        const fnArgs = parser.classParser(factory).args.map((arg) => this.get(arg));
        //вызываем функцию и вводит ее аргументы, возвращая результат
        return new factory(...fnArgs);
    }
}

exports = module.exports = DIC;
