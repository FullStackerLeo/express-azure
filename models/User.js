const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGO_NOTA_URI

console.log('connecting to', url.slice(0,30))
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const UserSchema = new mongoose.Schema({

   email:String,
   password:String
})

UserSchema.set('toJSON', {
   transform: (document, returnedObject) => {
     returnedObject.id = returnedObject._id.toString()
     delete returnedObject._id
     delete returnedObject.__v
   }
 })
 
const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel