const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyCsDi2Iuu_gDcF8MO61XxXItM6xmfW5M7o",
  authDomain: "final-f21-jeongin.firebaseapp.com",
  projectId: "final-f21-jeongin",
  storageBucket: "final-f21-jeongin.appspot.com",
  messagingSenderId: "646555176035",
  appId: "1:646555176035:web:a68df086013cfc33783c56"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index');
const articleRoute = require('./routes/article');
const createArticleRoute = require('./routes/createArticle');

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/create', createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});