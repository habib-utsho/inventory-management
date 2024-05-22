import mongoose from 'mongoose'
import app from './app'

app.listen(process.env.PORT || 5000, () => {
  mongoose

    .connect(`${process.env.MONGO_URI}` as string, {
      //No More Deprecation Warning Options in Mongoose 6
      //- these are no longer supported options in Mongoose 6 - only use it with old versions
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false
    })
    .then(() => {
      console.log('Database connected!')
    })
    .catch((e) => {
      console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD)
      console.log('Something went w rong', e)
    })
})
