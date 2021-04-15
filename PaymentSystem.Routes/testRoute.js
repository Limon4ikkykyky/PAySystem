const { Router } = require('express');
//const TestControlller = require('../PaymentSystem.API/Controllers/testRouteController');
const { testContr } = require('../PaymentSystem.IoC/DIRegister');
const { HelloTest } = require('../PaymentSystem.IoC/DIRegister');

const router = Router();

//создание обьекта контроллера
//const test = new TestControlller();
const test = testContr;

//обработчик через роутер, который кидает обращается к контроллеру к функции getAll по адресу /api/server. Далее регистрируем его в основной программе, как мидлвэйер через use
router.get("/api/server", test.getAll);


exports = module.exports = router;