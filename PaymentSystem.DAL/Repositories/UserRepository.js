class UserRepository
{
    //в конструктор нужно передать BDcontext
    constructor(unitContext)
    {
        this.userCollection = unitContext.User;
    }

    async Auntification()
    {
   
    }

    async GetAllUsers()
    {
        return this.userCollection.find({});
    }
    
    //Get user by id
    async GetByUserId(id)
    {
        // return await User.findById(id).select()
    }
    
    // validate
    async CreateUser(userParam)
    {
        
        const document = new this.userCollection(userParam);

        return document.save((err)=>
        {
            if(err) return console.log(err);
     
            console.log("Сохранен объект user", document);
        });
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
