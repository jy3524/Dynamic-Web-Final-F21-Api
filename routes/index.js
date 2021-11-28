const express  = require('express');
const router = express.Router();
const firestore = require('firebase/firestore');
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const blogposts = firestore.getDocs(firestore.collection(db, 'blogposts'));
  const blogpostsArray = [];
  
  blogposts
    .then((response) => {
      response.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      return res.send(blogpostsArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

module.exports = router;