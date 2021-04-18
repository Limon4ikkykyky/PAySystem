const UserEntity = require("../../PaymentSystem.Entity/Entities/UserEntity");
//const User = require("../../PaymentSystem.Model/Models/User");

class AccountService
{
    constructor(unitOfWork)
    {
        this.userRepository = unitOfWork.UserRepository;
    }
    
    async Registration(name, surName, login, password)
    {
        if (name == null || surName == null || login == null || password == null)
        {
          //  throw new ArgumentNullException("Some of the fields are equal to zero");
        }

        await this.userRepository.CreateUser(new UserEntity(name ,surName, login, password));
    }

    async GetAllUsers()
    {
        return await this.userRepository.GetAllUsers();
    }
}

exports = module.exports = AccountService;