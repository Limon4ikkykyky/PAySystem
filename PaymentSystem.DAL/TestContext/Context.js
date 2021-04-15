//import User from '../../PaymentSystem.Model/Models/User.js'
const User = require("../../PaymentSystem.Model/Models/User");


var Context = (function () {
 
    // настройки: объект содержит параметры для синглтона
    // var options = { name: "test", pointX: 5}
    function Singleton() {  
        // устанавливаем собственные параметры
        this.name = "Context";
    
        this.listOfUser = new Array();
        this.listOfUser.push(new User({id: 0, name: "John", surName: "Mart", password: "lol"}));
        this.listOfUser.push(new User({id: 1, name: "Alex", surName: "Bart", password: "lol1"}));
        this.listOfUser.push(new User({id: 2, name: "Pups", surName: "Sqard", password: "lol2"}));   
    }
    
    // наш экземпляр
    var instance;
    
    // эмуляция статических переменных и методов
    var _static = {
    
        name: "Context",
    
        // Метод получения экземпляра. Возвращает
        // экземпляр синглтона из объекта синглтона
        getInstance: function() 
        {
            if( instance === undefined ) {
                instance = new Singleton();
            }
            return instance;
        }
    };  
    return _static; 
})();

exports = module.exports = Context;

