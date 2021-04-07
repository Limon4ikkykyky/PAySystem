const UserRepository = require("../../PaymentSystem.DAL/Repositories/UserRepository");
const User = require("../../PaymentSystem.Model/Models/User");

class AccountService
{
    constructor(userRepository)
    {
        this.userRepository = userRepository;
    }
    
    Registration(name, surName, login, password)
    {
        if (name == null || surName == null || login == null || password == null)
        {
          //  throw new ArgumentNullException("Some of the fields are equal to zero");
        }

        this.userRepository.CreateUser(new User({
            id: 9, 
            name: name,   
            surName: surName,
            password: password
        }));
    }

    GetAllUsers()
    {
        return this.userRepository.GetAllUsers();
    }
}

exports = module.exports = AccountService;