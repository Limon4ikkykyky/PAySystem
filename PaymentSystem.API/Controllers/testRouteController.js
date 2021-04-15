//import AccountService from '../../PaymentSystem.BLL/Services/AccountService.js'
//import UserRepository from '../../PaymentSystem.DAL/Repositories/UserRepository.js'

//const AccountService = require("../../PaymentSystem.BLL/Services/AccountService");
//const UserRepository = require("../../PaymentSystem.DAL/Repositories/UserRepository");

class TestControlller
{
    constructor(accountService)
    {
        this.accountService = accountService;
    }

    getAllTestAllFromJSON = (request, response) => {
        //формируем ответ со статусом (по умолчанию 200) и тестовый json(данные, которого должны прилетать с СУБД)
        response.status(200).json({
            Hello: 0,
            Hey: 1,
            Pups: 2
        });
    }

    getAll = (request, response) => {
        //for mongoDB
        //accService.GetAllUsers().
        //then(user => response.status(200).json(user));

        console.log(this.accountService.toString());

        //for testing
        response.status(200).json(this.accountService.toString());
    }


}

exports = module.exports = TestControlller;