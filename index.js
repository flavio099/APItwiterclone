const express = require('express');
const app = express();
const port=3000
const tweets=require('./routes/tweetsRoute.js')


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",tweets);



app.listen(port,() => {
  console.log("Serveur en écoute sur le port 3000");
});
