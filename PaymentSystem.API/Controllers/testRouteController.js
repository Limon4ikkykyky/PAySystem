export const getAll= (request, response) => {
    //формируем ответ со статусом (по умолчанию 200) и тестовый json(данные, которого должны прилетать с СУБД)
    response.status(200).json({
        Hello: 0,
        Hey: 1,
        Pups: 2
    });
}