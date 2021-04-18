const Entity = require("../Entity");

//Все сущности наследуются от базового класса
class UserEntity extends Entity 
{
    //Конструктор сущности юзера
    constructor(name, surName, password, phoneNumber, { roles = ["USER"] } = {}) 
    {
        super();
        this.name = name;
        this.surName = surName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.roles = roles;
        this.lastLogin = null;
    }


    //Метод, который работает с иерархией ролей, возвращает Bool, если роль есть
    hasRole (role, roles = {})
    {
        //Если обьект содержит в списке ролей данную, то возвращаем true
        if(!role || this.roles.includes(role)) return true;

        //Рекурсивно проверяем родительские роли,
        //которые находятся в иерархии ролей
        let hasRole = false;

        Object.keys(roles).forEach(key => 
        {
            if(!hasRole &&
                roles[key] && 
                roles[key].inherits && 
                roles[key].inherits.includes(role))
            {
                hasRoles = this.hasRole(key, roles);
            }
        });

        return hasRole;
    }
}

exports = module.exports = UserEntity;