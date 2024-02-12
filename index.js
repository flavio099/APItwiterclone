const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000

app.use(express.json());


const tweets = require('./routes/tweetsRoute.js');

const users = [
  {
    name: "jamess",
    password: "12345"
  }, {
    name: "michel",
    password: "02154"
  }, {
    name: "flavio",
    password: "004586"
  }, {
    name: "mali",
    password: "0000484878"
  }, {
    name: "marc",
    password: "478562"
  }]

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAn4EGal0uqxoTY6ScKJrUZlnbO24RsAH1ysWHMEqz9mfiDde1
jT/XraX5aUZo9is/swfoc+Cqy+Kc3B5dkTu0gLTEIWSkUKTYhE0NSSaEJEGWSH7P
zK5uGI7bZ7QKkdYv8moDyxJhni2oaTlrta9jzTemHAPtQdygdCXMR1lkPNRnwWKp
Mwq5OSXnEArhGjtRzbZEKqh+P15qWQsjdbtw1UpBRg+nPjLnOxeMqC45lpEGnGzN
aOVwVyo5T9SEANAp8VZqpjb9cl+v50zbksPHF7ub2Jm+7FcxKWdvMRIxF0gheL6V
suiZup8/hDK9wXCsuZ+cBMwqQf+E3iAWMXFNIQIDAQABAoIBAGJfzXkkZ3gX6QV3
rOhONdm6acBJrpcDXnjlQu/B4ySCBaXL+KlZSshKqX0IdAv/uJXOtsthMXX2GhCY
mdTNIhKPare9vqoOQYu3ig4ntzA1U17692ah3j0/PorDPBGeLIwyXoyMlbBdMJVV
WN0Bg2g6fjShJ1+Ll1qLRWZr96qbyzDLHVf8YjHiJT1gwzJh0XLlt/sGbPqcoHaq
314ptQ2z+3TYZSCJjylCMDEuYoIc3NQY2mOGqWGJi42L7/btqR+zwD6uJue+P9ug
eJjsTu9WbJngqw7um+aOJXbvebbvNXG5fZkMFn4awFyiHUaHtsMATwfj+6O/GqDX
siwt59ECgYEA43H0kX8lLw0rPf8EZBo0QdV/3jkK3gTJXMssL3N/TzAig/IaOoub
ik2lcwBAuvg8GM302IdE/afneJkj/SimpOMA1tnNpZ75LgQq/S6sSw0L1Zhhhlby
ExWtgZSFxV/g/iFLWCeAN07uYqXE0GVi65a/o5giuywEB8oTaUjCRXsCgYEAs4d0
SS+Keb2yt6lygj/p2nWr9H5UsHYbYS+ocmS6BWBKdxJRuqt0lNJhZVuheCE8ifwI
pgohEBvZW0G5yhaGMPBB3innchXLIvLpzZxtxeR/6zyQQC+xm7Nxs2mYjTfQptgt
zeGvRZoexXbSsZe1ggmSdfp839lkNEtJyYmA3xMCgYEAwrxe2fQysgZkb8BY0hxd
gcB6qpnMZCtU/M44Fqic6AAejTpMmrPNiKzSa5Rb17mSOuqcKIgo2cVYujjkR2z2
wVZa8ZmqKZPjZTLMW9oKSnfxGgBN/+eRfCWjWL8Biex9hxiame+4J6K9GFk2Gfe0
qmF302n+0qLtEH5EAHD7ZOECgYAoTHSO5QwJbcqLLY8Vq7Ebp6RUunLaNXjJ5P/D
xdZ31HiCp+sOouQFcAAK13m0VImZU6jBVK69RfMRZ/yDX3D51USD0RYx5rB1hN90
lvORI0yPikW7ErmkgLA6HK7wrCG7AfWuLEXCsujLXHPJB4vnx6xHrVWQjeTPVEMY
6TOzXwKBgQCFb5kdU+c8MRMEIkqtJu6ZcqrduoOn9pkZDtV2U1lTO5YdB8dHxhDl
gARajX+YCWKaLYdaecG54YWtts3cuKzkKgXMKCJxclFGVANusGbQZmyS+fZ9l6N6
Cok1dJOHmKCqhxQsKAIqwpwEAOdgOh5SsU4IpbtyDXzwtM3kyKFKSA==
-----END RSA PRIVATE KEY-----`

const publickey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAn4EGal0uqxoTY6ScKJrU
ZlnbO24RsAH1ysWHMEqz9mfiDde1jT/XraX5aUZo9is/swfoc+Cqy+Kc3B5dkTu0
gLTEIWSkUKTYhE0NSSaEJEGWSH7PzK5uGI7bZ7QKkdYv8moDyxJhni2oaTlrta9j
zTemHAPtQdygdCXMR1lkPNRnwWKpMwq5OSXnEArhGjtRzbZEKqh+P15qWQsjdbtw
1UpBRg+nPjLnOxeMqC45lpEGnGzNaOVwVyo5T9SEANAp8VZqpjb9cl+v50zbksPH
F7ub2Jm+7FcxKWdvMRIxF0gheL6VsuiZup8/hDK9wXCsuZ+cBMwqQf+E3iAWMXFN
IQIDAQAB
-----END PUBLIC KEY-----`



app.get("/post", (req, res) => {
  const idtoken = req.headers.authorization;

  jwt.verify(idtoken, publickey, (err, decoded) => {
    if (err) {
      res.send("non authorisé")
    } else {
      res.send(users)
    }
  })

})

app.post("/auth", (req, res) => {
  const { name, password } = req.body

  const validation = users.some((user) => user.name == name && user.password == password)

  if (validation) {
    const token = jwt.sign({ name, password }, privateKey, { algorithm: 'RS256' });
    res.send(token)
  } else {
    res.status(404).send('le nom ou le mot de passe est éroné ,veillez vérifier vos coordonées avant de les envoyer ')
  }
})


app.use(express.urlencoded({ extended: true }))
app.use("/", tweets);

app.listen(port, () => {
  console.log("Serveur en écoute sur le port 3000");
});
