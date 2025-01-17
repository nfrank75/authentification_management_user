const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

app = express();
app.use(express.json());
app.use('/api/auth', userRoutes); // use the api of auth user (signup & login)

dotenv.config();
const PORT = process.env.PORT;

const MONGODB_URL = process.env.MONGODB_URL;


//connect to db
mongoose.connect(MONGODB_URL,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log(`Connexion à MongoDB réussie ! port: ${PORT}`))
  
  .catch(() => console.log('Connexion à MongoDB échouée !'));




app.get("/", function(req,res, next) {
  res.send('ok')
});



app.use((req, res, next) => { // pour la sécurité CORS ; la communication entre differents origins
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });





  
module.exports = app;