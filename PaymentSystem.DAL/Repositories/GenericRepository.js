class GenericRepository
{
    constructor(collection)
    {
        this.collection = collection;
    }


    Create(item) {
       //обращение в бд к нужной таблице исходя из типа item
       //так как это дженерик репозиторий
       this.collection.users.push(item);
    }

    FindById(id) {
       return this.collection.users[id];
    }

    Get() {
        return this.collection.users;
    }

    Get(condition) {
       //condition это лямда функция условия выборки
       return this.collection.users.filter(condition);
    }

    Remove(item) {
        this.collection.users.
        splice(collection.users.IndexOf(item), 1);
    }

    Update(item) {
        this.collection.users.
        splice(collection.users.IndexOf(item), 1, item);
    }
}

exports = module.exports = GenericRepository;
