const { validateToken } = require("../services/auth");

function checkForAuthenticationCookie(cookieName){
    return (req ,res ,next)=>{
        const tokencookieValue = req.cookies[cookieName]
        if(!tokencookieValue){
        return next();
        }
        try {
            const payload = validateToken(tokencookieValue)
            req.user=payload;
        } catch (error) {
            
        }
       return next();

    }
}

module.exports={
    checkForAuthenticationCookie
}