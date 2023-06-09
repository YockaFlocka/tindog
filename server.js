const path = require('path');
const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const helpers = require('./utils/helpers')

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const hbs = exphbs.create({ helpers });

app.use(express.static('public'));

app.get('./public/js/matches.js', (req, res) => {
  res.type('application/javascript');
  res.sendFile(path.join(__dirname, 'public', 'js', 'matches.js'));
})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

// The line below prevents sequelize from syncing the database in a production environment.
// If you don't want it to sync locally either, change the true value to false at the end.
const forceValue = (process.env.NODE_ENV === "production") ? false : true
// const forceValue = false;
sequelize.sync({ force: forceValue }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
