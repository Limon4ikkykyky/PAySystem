import express from 'express'
import path from 'path'
import hbs from 'hbs'
import {requestTime, logger} from './MiddleWares/firstTestMiddleWares.js'


//из-за специфики import мы не можем напрямую использывать __dirname
const __dirname = path.resolve();
//Заберем нужный порт с envariment (для продакшина, для разрабоктки и т.д), если такого нет возьмем 3001 по умолчанию
const PORT = process.env.PORT ?? 3001;
//создадим обьект приложения
const app = express();


//Установка движка представлений, в нашем случае Handlebars
app.set('view engine', 'hbs');
//Смена стандартной директориии хранения файлов .hbs на нужную нам
app.set('views', path.resolve(__dirname, "PaymentSystem.View/Templates"));
//Регистрация частичные представлений (partials) .hbs
hbs.registerPartials(__dirname + "/PaymentSystem.View/Templates/partials");



//middleware для облегчения запросов, express.static уже есть изначально и он загружает стратические страницы вместо get (при этом главная страница должна называться index)
app.use(express.static(path.resolve(__dirname, "PaymentSystem.View/StaticPages")));
//наши кастомные middlewares, один который дополняет запрос его временем при попадание в обработчик, второй выводить это в консоль 
app.use(requestTime);
app.use(logger);

//обработчик запроса по адресу "/", который с помощью Handlebars обращатся к нужной директории и подтягиевает документ по названию
//С помощью движка представлений мы можем передавать динамические переменнеые
app.get("/",(request, response)=>{
    response.render("testTemplates", {title: "Main Page"});
});

//обработчик запрос по адресу "/", который подгружает статический файл html
//app.get("/", (request, response) => {
//    response.sendFile(path.resolve(__dirname, "PaymentSystem.View/StaticPages","testStaticPage.html"));
//});

//обработчик запроса по адресу "/", который скачивает статический файл html (testStaticPage.html)
app.get("/download", (request, response) => {
    response.download(path.resolve(__dirname, "PaymentSystem.View/StaticPages","testStaticPage.html"));
});


//Запуск сервера на порту PORT
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
});