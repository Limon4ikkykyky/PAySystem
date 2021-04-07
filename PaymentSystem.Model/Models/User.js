//подключение к бд
const mongoose = require('mongoose');

//Схема модели 
var UsersSchema = new mongoose.Schema({
    id:      { type: Number },
    name:    { type: String },
    surName: { type: String },
    password:{ type: String },
    phoneNum:{ type: String }
},{autoCreate:true});

UsersSchema.set('toJSON', { virtuals: true });

//Обьект модели
var User = mongoose.model('User',UsersSchema);

//Экспорт модели, для использование ее в других скриптах
exports = module.exports = User;