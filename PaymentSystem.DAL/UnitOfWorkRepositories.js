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
        if (!this._genericRepositories.has(key)) this._genericRepositories.set(key, new GenericRepository(this._context, key));
        return this._genericRepositories.get(key);
    }

    SaveChanges()
    {
        //throw new NotImplementedException();
    }

}

exports = module.exports = UnitOfWorkRepositories;