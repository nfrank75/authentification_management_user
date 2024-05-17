const bcrypt = require('bcrypt');

const User = require('../models/user');

const jwt = require('jsonwebtoken');





exports.signup = async (req, res) => {
    const { email,  password} = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email: email,
        password: hashedPassword
      });
      await user.save();
      res.status(201).json({ 
        userId: user._id,
        message: 'User created successfully',
        status: 201
     });


    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

exports.login = async (req, res, next) => {
    const { email,  password} = req.body;
    User.findOne({ email}) // email : req.body.email
        .then(user => {
            console.log(user);
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(password, user.password) 
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(  
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET', 
                            { expiresIn: '24h' }  
                        ),
                        message: 'Connected successfully',
                        status : 200,
                        expiresIn: '24h'
                    });
                })
                .catch(error => res.status(500).json({ error: error.message }));
        })
        .catch(error => res.status(500).json({ error: error.message }));
 };

 exports.logout = (req, res, next) => {
 
  };

 exports.delete_user = (req, res, next) => {

 }

 exports.get_account_user = (req, res, next) => {

 }
