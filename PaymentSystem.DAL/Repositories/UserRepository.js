//import Context from "../TestContext/Context.js";
const Context = require("../TestContext/Context");
const User = require("../../PaymentSystem.Model/Models/User");

class UserRepository
{
    //в конструктор нужно передать BDcontext
    constructor(context)
    {
        this.context = context;
    }

    async Auntification()
    {
   
    }

    GetAllUsers()
    {
        //for testing (Mock data)
        return this.context.listOfUser;

        //for mongoDB
        //return User.find().select();
    }
    
    //Get user by id
    async GetByUserId(id)
    {
        // return await User.findById(id).select()
    }
    
    // validate
    CreateUser(userParam)
    {
        this.context.listOfUser.push(userParam);
       //this.list.push(userParam);
    }
    
    //update
    async UpdateUser(id, userParam)
    {

    }

    //_delete
    async DeleteUser(id)
    {

    }

    async GetCurrentUser()
    {

    }

    async DoCurrentUserGuest()
    {

    }

    async CountOfUsers() 
    {

    }
}

exports = module.exports = UserRepository;
