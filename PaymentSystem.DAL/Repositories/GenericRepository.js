class GenericRepository
{
    constructor(context,type)
    {
        //скорее всего логику определения типа нужно перенести из конструктора 
        // в статический метод определения
        switch(type)
        {
            case "User":
                this.contextList = context.users;
                break;

            case "Bank":
                this.contextList = context.banks;
                break;

            default:
                this.contextList = context.default;
                break;    
            //здесь можно добавлять кейсы типов моделей   
        }
    }


    Create(item) {
       //обращение в бд к нужной таблице исходя из типа item
       //так как это дженерик репозиторий
       this.context.users.push(item);
    }

    FindById(id) {
       return this.context.users[id];
    }

    Get() {
        return this.context.users;
    }

    Get(condition) {
       //condition это лямда функция условия выборки
       return this.context.users.filter(condition);
    }

    Remove(item) {
        this.context.users.
        splice(context.users.IndexOf(item), 1);
    }

    Update(item) {
        this.context.users.
        splice(context.users.IndexOf(item), 1, item);
    }
}

exports = module.exports = GenericRepository;
