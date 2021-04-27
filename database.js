const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/properties', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})


module.exports = mongoose