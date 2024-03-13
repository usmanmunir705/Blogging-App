const dotenv = require('dotenv').config()

const CLOUD_NAME=process.env.CLOUD_NAME
const API_SECRET=process.env.API_SECRET
const API_KEY=process.env.API_KEY
module.exports={
    CLOUD_NAME,
    API_SECRET,
    API_KEY
}