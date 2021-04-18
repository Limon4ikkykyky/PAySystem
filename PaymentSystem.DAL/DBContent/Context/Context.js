const fs = require("fs");
const path = require("path");

let models = [];

//Ищет файлы в текущей директории имеющих "." (model.js), 
//и которій не является данным скриптом,
//и у которых разширение .js
//это позволяет нам абстрагироватся от ручного переноса моделей в список
//а просто создавать их в нужной директории по правильному шаблону
var correctPath = path.join(__dirname,"../Models");
fs.readdirSync(correctPath).filter(file=>
    (file.indexOf(".") !== 0) && 
   // (file !== path.basename(__filename)) &&
    (file.slice(-3)=== ".js")
)
.forEach(file => {
    let model = require(path.join(correctPath, file));//получение модели по обьедененному пути
    models[model.modelName] = model;//перенос модели в список моделей 
});

console.log(models);
exports = module.exports = models;//экспорт списка моделей
