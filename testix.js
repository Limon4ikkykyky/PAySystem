const { testContr } = require('./PaymentSystem.IoC/DIRegister');
const ManageDB = require("./PaymentSystem.DAL/DBContent/ManageDB");
const Logger = require("./PaymentSystem.Utility/Logger");
const DBconfig = require("./PaymentSystem.DAL/DBContent/DBconfig.json");

//создание обьекта контроллера
//const test = new TestControlller();
const test = testContr;


//4 нижние строки перенести куда-то в другое место, чтобы здесь осталась только модель 
const logger = new Logger();
var config = JSON.parse(JSON.stringify(DBconfig));
config = "mongodb+srv://barsbass:pay300sys@paymentcluster.20osi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const obj = {config: config, logger: logger};
const managedb = new ManageDB(obj);

managedb.connect();

setTimeout(()=>{console.log(managedb.isConnected)}, 1000);

//setTimeout(()=>{test.testCreate()}, 1000);

var result = 0;
result=test.testPrintText();


setTimeout(()=>
{
    console.log(result);
    if(result.length)console.log(result);
    else console.log("Empty model list!");
}, 3000);

setTimeout(()=>
{
    managedb.close();
}, 3000);
//куда-то нужно перенести, оно работает, но из-за асинхронности приходиться брать таймауты
//скорее всего перенести в репезитории, а лучше в unitOfWork




//Singleton пример
/*var Context = (function () {
 
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
});*/




