"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
app_1.default.listen(process.env.PORT || 5000, () => {
    mongoose_1.default
        .connect(`${process.env.MONGO_URI}`, {
    //No More Deprecation Warning Options in Mongoose 6
    //- these are no longer supported options in Mongoose 6 - only use it with old versions
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false
    })
        .then(() => {
        console.log('Database connected!');
    })
        .catch((e) => {
        console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD);
        console.log('Something went w rong', e);
    });
});
