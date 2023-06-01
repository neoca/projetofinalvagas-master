const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://coderfriends:1234@cluster0.68ylode.mongodb.net/')
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
