const UserRepository = require("./Repositories/UserRepository");
const GenericRepository = require("./Repositories/GenericRepository");

class UnitOfWorkRepositories
{
    constructor(context) {
        this._context = context;
    }

    get UserRepository() {
        if (this._userRepository == null) {
            this._userRepository = new UserRepository(this._context);
        }
        return this._userRepository;
    }

    GetGenericRepository(type) {
        key = typeof(type).Name;
        if (this._genericRepositories === null) this._genericRepositories = new Map();
        if (!this._genericRepositories.has(key)) this._genericRepositories.set(key, CorrectTypeOfRepository(type));
        return this._genericRepositories.get(key);
    }

    CorrectTypeOfRepository(type)
    {
        //if() проверка на корректный ввод

        var correctCollection = {};
        switch(type)
        {
            case "Bank":
                correctCollection = this._context.BankPay;        
                break;

            default:
                //correctCollection = context.default;
                //throw Exp();
                break;    
            //здесь можно добавлять кейсы типов моделей   
        }
        return new GenericRepository(correctCollection);
    }

    SaveChanges()
    {
        //throw new NotImplementedException();
    }

}

exports = module.exports = UnitOfWorkRepositories;