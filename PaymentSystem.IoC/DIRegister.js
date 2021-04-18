//подключение классов и слоев
const Context = require("../PaymentSystem.DAL/DBContent/Context/Context");
const UnitOfWorkRepositories = require("../PaymentSystem.DAL/UnitOfWorkRepositories");
const DIC = require("./DIContainer");
const AccountService = require("../PaymentSystem.BLL/Services/AccountService");
const TestControlller = require("../PaymentSystem.API/Controllers/testRouteController");
const models = require("../PaymentSystem.DAL/DBContent/Context/Context");


//создание экземпляра контейнера
const dic = new DIC();

//регистрациия зависимостей 
dic.register("context", models);//регистрация списка моделей в конструктор репозиториев

//Регистрации классов для получения обьекта с контейнера по ключи для дальнейшего его использования
dic.factory("unitOfWork", UnitOfWorkRepositories);
dic.factory("accountService", AccountService);
dic.factory("testController", TestControlller);


//получения обьекта с контейнера по ключю 
const AccService = dic.get("accountService");//для примера
const testContr = dic.get("testController");


//экспорт обьектов 
exports = module.exports = 
{
    AccService,
    testContr
};