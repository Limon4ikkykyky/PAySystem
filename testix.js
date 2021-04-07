//подключение репозитория и сервиса
const AccountService = require("./PaymentSystem.BLL/Services/AccountService");
const UserRepository = require("./PaymentSystem.DAL/Repositories/UserRepository");


acc = new AccountService(new UserRepository([]));

//Регистрация 
acc.Registration("gggg","ffff","cccc","tttt");

//Вывод результата
console.log(acc.GetAllUsers());