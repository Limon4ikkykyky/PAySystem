class PaySysParser
{
    //функция парсинга класса 
    classParser(obj)
    {
        //проверка на класс
        //if(!(obj instanceof Class)) return "the argument is not a class!"

        //аргументы класса
        var args = obj.toString()
                      .replace(/\s|['"]/g, '')
                      .replace(/.*(constructor\((?:\w+?,?)+\)).*/g, '$1')
                      .match(/\((.*)\)/)[1]
                      .split(',');
         
        //имя(тип) класса
        var name = obj.name;


        return { 
            args,
            name
        };
    }
}

exports = module.exports = PaySysParser;