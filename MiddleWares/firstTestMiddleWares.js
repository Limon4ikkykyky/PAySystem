import colors from 'colors'

//midlleware вызываются последовательно, то есть в конце каждого нужно прописать функцию next 
export function requestTime(request, response, next) {
    request.requestTime = Date.now();
    next();
}

export function logger(request, response, next) {
    console.log(colors.black(`Req. time: ${request.requestTime}`));
    next();
}