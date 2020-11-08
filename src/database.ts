import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:dev123@josephpersonal.shwqp.mongodb.net/torreTest?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(db => console.log('Database is connected'))
  .catch(err => console.log(err))