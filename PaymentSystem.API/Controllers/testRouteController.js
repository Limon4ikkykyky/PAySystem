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

        //for testing
        response.status(200).json(this.accountService.GetAllUsers());
    }


    async testPrintText(){
        return await this.accountService.GetAllUsers();
    }

    async testCreate(){
       await this.accountService.Registration("max","ivanov","baks","mypassword");
    }
}

exports = module.exports = TestControlller;