//подключение классов и слоев
const UserRepository = require("../PaymentSystem.DAL/Repositories/UserRepository");
const Context = require("../PaymentSystem.DAL/TestContext/Context");
const UnitOfWorkRepositories = require("../PaymentSystem.DAL/UnitOfWorkRepositories");
const DIC = require("./DIContainer");
const AccountService = require("../PaymentSystem.BLL/Services/AccountService");
const TestControlller = require("../PaymentSystem.API/Controllers/testRouteController");


//создание экземпляра контейнера
const dic = new DIC();

//регистрациия зависимостей 
dic.register("context", Context);
dic.register("userRepository", UserRepository);
dic.register("unitOfWork", UnitOfWorkRepositories);
dic.register("accountService", AccountService);


//для получения обьекта с контейнера по ключи для дальнейшего его использования
dic.factory("account", AccountService);
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