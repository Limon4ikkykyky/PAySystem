//подключение к бд
const mongoose = require("mongoose");

const UserEntity = require("../../../PaymentSystem.Entity/Entities/UserEntity");








//Схема модели 
/*var UsersSchema = new mongoose.Schema({
    id:      { type: Number },
    name:    { type: String },
    surName: { type: String },
    password:{ type: String },
    phoneNum:{ type: String }
},{autoCreate:true});

UsersSchema.set("toJSON", { virtuals: true });

//Обьект модели
var User = mongoose.model("User",UsersSchema);

//Экспорт модели, для использование ее в других скриптах
exports = module.exports = User;*/







//Новая модель работающая с сущностями
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: "NoName"
        //unique: true,
       // required: true,
       // select: false
    },
    surName: {
        type: String,
        default: "NoSurName"
       // unique: true,
       // required: true,
       // select: false 
    },
    password: {
        type: String,
       // required: true,
       // select: false
    },
    phoneNum: {
        type: String,
        default: "NoPhone"
       // required: true,
       // select: false
    },
    lastLogin: {
        type: Date,
        default: null
    },
    roles: {
        type: [String],
        default: ["USER"]
    }
}, { timestamps: true },
   { autoCreate: true });

   
// Indexes
UserSchema.index({ name: 1 });
UserSchema.index({ surName: 1 });
UserSchema.index({ roles: 1 });

// Загружаем методы сущности пользователя в модель
UserSchema.loadClass(UserEntity);

//Обьект модели
var User = mongoose.model("User",UserSchema);

//Экспорт модели, для использование ее в других скриптах
exports = module.exports = User;// иногда пишут export default

