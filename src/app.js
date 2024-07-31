const express = require('express');
const path = require('path')
const { PORT, MONGO_PATH } = require('./config/envoirment');
const cookieParser = require('cookie-parser')

const app = express();
const routes = require('./router/routes');
const Mongo = require('./config/db');
const userInMiddle = require('./middleware/userInMiddle');
const authMiddle = require('./middleware/authMiddle');
const userRole = require('./middleware/userRoleMiddle');
app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"));



app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());
Mongo.connect(MONGO_PATH)


app.use('/',userInMiddle, userRole, routes)
app.use('*',(req,res)=>{
    res.redirect('/')
})



// app.get('/about',(req,res)=>{
//     res.status(200).render('about',{
//         pageName:"about"
//     });
// })
// app.get('/contact',(req,res)=>{
//     res.status(200).render('contact',{
//         pageName:"contact"
//     });
// })
// app.get('/courses',(req,res)=>{
//     res.status(200).render('courses',{
//         pageName:"courses"
//     });
// })
// app.get('/dashboard',(req,res)=>{
//     res.status(200).render('dashboard',{
//         pageName:"dashboard"
//     });
// })



app.listen(PORT,()=>{
    console.log(`Server listening on Port ${PORT}`);
})