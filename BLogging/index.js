const express = require('express')
const path = require('path');
const cookieParser=require('cookie-parser')
const mongoose = require('mongoose');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const Blog=require('./models/blog')

const app = express();
const port = 8000;


const userRoute = require("./routes/user")
const blogRoute = require("./routes/blog")

mongoose.connect('mongodb://127.0.0.1:27017/blogify').
then((e)=>console.log('mongodb connected'))


app.set("view engine" , 'ejs'),
app.set("views" , path.resolve("./views"))

app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))


app.use("/user" , userRoute)
app.use("/blog" , blogRoute)

app.get("/" , async (req ,res)=>{
    const allBlogs=await Blog.find({})
    res.render("home",{
        user:req.user,
        blogs:allBlogs
    })
})

app.listen(port  , ()=>console.log(`server started at port:${port}`));
