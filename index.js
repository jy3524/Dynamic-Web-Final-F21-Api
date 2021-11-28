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

app.use('/', indexRoute);
app.use('/article', articleRoute);
app.use('/create', createArticleRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});