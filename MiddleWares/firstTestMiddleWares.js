const colors = require('colors');

//midlleware вызываются последовательно, то есть в конце каждого нужно прописать функцию next 
function requestTime(request, response, next) {
    request.requestTime = Date.now();
    next();
}

function logger(request, response, next) {
    console.log(colors.black(`Req. time: ${request.requestTime}`));
    next();
}

exports = module.exports = {requestTime, logger};