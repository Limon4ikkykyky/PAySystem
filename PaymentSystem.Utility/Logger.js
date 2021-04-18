class Logger 
{
    constructor(){}

    debug(str)
    {
        console.log(str);
    }

    error(str)
    {
        console.log(str);
    }
}

exports = module.exports = Logger;