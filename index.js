const express = require('express');
const app = express();
const post= require("./controler/object.js")

app.get("/", (req, res,) => {
  res.send(post)
})

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  res.send(post.filter((e) => {
    return e.id === id
  }))
})


app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id)
  res.send(post.filter((e) => {
    return post.splice(id-1,1)

  }))
})

app.use(express.json());

app.post("/post", (req, res) => {
post.push(req.body)
res.send('votre post a été crée aveec succès')
})


app.put("/:id", (req, res) => {
  const Id= req.params.id

  res.send(post.filter((e)=>{
    return post.splice(Id-1,1,req.body)
  }))
  })

app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
