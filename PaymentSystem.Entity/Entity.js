class Entity
{
    constructor() 
    {
        this.id = "";
    }

    //Метод для сравнения обьектов по их ID 
    equals(other) 
    {
        if(other instanceof Entity === false)  return false;
        return other.id ? this.referenceEquals(other.id) : this === other;
    }

    //Метод сравнения по id
    referenceEquals(id) 
    {
        if(!this.id)
        {
            //Пробуем сравнить айдишки обьектов
            return this.equals(other);
        }

        //Создаем обьект айдишника (reference), если он не строка, то преобразуем
        const reference = typeof id !== "string" ? id.toString() : id;

        //Возвращаемм Bool сравнения айдишников текущего обьекта и другого (other)
        return this.id === reference;
    }

    toString() 
    {
        return this.id;
    }

}

exports = module.exports = Entity;