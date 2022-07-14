const util = require('../utils/helper');
const jwt = util.jwt;
const key = util.jwt;
const verifyToken = (req, res, next)=>{
    const Header = req.headers['x-access-token'];
    
    if(!Header){
        res.status(404).send({
            message : 'Please enter access Token'
        });
        return;
    }
    if(Header){
        jwt.verify(Header,key,(err, decodeToken)=>{
            if(err){
                res.status(404).send({
                    message : 'Token is not valid !'
                });
                return;
            }
            next();
        })
    }
}

module.exports = {
    token : verifyToken
}