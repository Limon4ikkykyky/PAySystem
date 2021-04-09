import { Router } from 'express'
import {getAll} from '../PaymentSystem.API/Controllers/testRouteController.js'

const router = Router();

//обработчик через роутер, который кидает обращается к контроллеру к функции getAll по адресу /api/server. Далее регистрируем его в основной программе, как мидлвэйер через use
router.get("/api/server", getAll);


export default router;