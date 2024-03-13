const jwt=require('jsonwebtoken');

const secret = "superMan@123";

function createTokenForUser(user){
    const payLoad={
        fullName:user.fullName,
        _id:user.id,
        email:user.email,
        profilePhoto:user.profilePhoto,
        role:user.role
    }
    const token = jwt.sign(payLoad,secret)
    return token;
}

function validateToken(token){
    const payLoad = jwt.verify(token , secret)
    return payLoad;
}

module.exports={
    createTokenForUser,validateToken
}