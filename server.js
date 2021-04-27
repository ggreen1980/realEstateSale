const mongoose = require('./database');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const logger = require('./lib/logger');
const app = express();
const exphbs = require("express-handlebars");
const err = require('./lib/error');

// POPULATE DATABASES ONE TIME WHEN SERVER FIRST FIRES 
const populateProperties = require('./lib/populateProperties');
const populateAssociates = require('./lib/populateAssociates');
const populateOffices = require('./lib/populateOffices');

// BODY-PARSER
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// EXTERNAL LOGGER
app.use(logger(':method :url'))


// HANDLEBARS
const hbs = exphbs.create({
  extname: '.hbs', 
  defaultLayout: "main",
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    }
  }
})

app.engine(".hbs", hbs.engine)
app.set("view engine", ".hbs")


// MONGOOSE
mongoose.connection
  .on('open', () => {
    const mc = mongoose.connection
    console.log(`MongoDB connection made at ${mc.host}:${mc.port}`)
  })
  .on('error', err => {
    console.error('MongoDB error: ' + err.message)
    process.exit(1)
  })


// ROUTING
routes(app)
app.use(express.static(__dirname + '/public'))


// ERROR HANDLING
err(app)


// START SERVER
const PORT = 4545
app.listen(PORT, () => logger(':start :port=' + PORT))