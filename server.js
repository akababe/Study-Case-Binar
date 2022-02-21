const express =  require("express")
const app = express()
const PORT = process.env.PORT || 5000;
const router = require("./router")
// const passport = require("./passport")
// const flash = require("express-flash")
// const bodyparser = require("bodyparser")


app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(router)
app.listen(PORT, ()=> console.log(`Server menyala pada port ${PORT}`))