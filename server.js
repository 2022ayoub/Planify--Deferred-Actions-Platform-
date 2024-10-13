const express=require("express");
const app=express();
const path=require('path')
const methodOverride=require('method-override')
const port=5000;


const session = require('express-session');
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie:{
        secure:false,
    }
}));


app.use(methodOverride('_method'))
app.use(express.static("Public"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// ============ import routes:
const routerHome=require("./routes/home")
const routerAuth=require("./routes/auth")
const routerAction=require("./routes/action")
const routerProfil=require("./routes/profil")
const routerActivities=require("./routes/activities")
const routerCalendar=require("./routes/calendar")
const routerNotes=require("./routes/notes")
const routerTask=require("./routes/task")
const routerOut=require("./routes/logout")

// ===========use routes :
app.use(routerHome)
app.use('/auth',routerAuth)
app.use('/action',routerAction)
app.use('/profil',routerProfil)
app.use('/activities',routerActivities)
app.use('/calendar',routerCalendar)
app.use('/notes',routerNotes)
app.use('/task',routerTask)
app.use(routerOut)






app.listen(port,()=>{console.log(`start on port ${port}`)});