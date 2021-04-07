const Context = require("../TestContext/Context");

class UserRepository
{
    //в конструктор нужно передать BDcontext
    /*constructor(context)
    {
        this.context = context;
    }*/

    context = Context.getInstance();

    async Auntification()
    {
   
    }

    GetAllUsers(request, response)
    {
        return this.context.listOfUser;
        //return this.list;
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
