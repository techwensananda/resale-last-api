
const express = require('express')
const mongoose = require('mongoose')
const path = require("path");
const multer = require('multer')
const cors = require('cors')
const app = express()
app.use(cors())
const port = 9000

const categoryRoute = require('./v1/routes/category.route')
const productRoute = require('./v1/routes/product.route')
const userRoute = require('./v1/routes/user.route')

const connetToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://resale-market:9FS3yfrDwolrpHMK@cluster0.3nz93gn.mongodb.net/resale-market?retryWrites=true&w=majority');
        console.log("coonented to db")
    } catch (error) {
        console.log(error);
    }
}








app.use(express.static("images"));


app.use(express.static(path.join(__dirname, 'images')));
const storage = multer.diskStorage({
    destination: "images/",
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + "-" + file.originalname.toLowerCase()?.split(" ")?.join("-"));

    },
});

const upload = multer({ storage: storage })
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    console.log("first")
    if (!req.file) {
        res.send | ({ code: 500, msg: 'error' })
    } else {

        const result = (req.file)
        res.send({ code: 200, msg: "upload successfully", result })
    }
})



app.use("/api/v1/category", categoryRoute)
app.use("/api/v1/product", productRoute)
app.use("/api/v1/user", userRoute)



app.get('/', (req, res) => {
    res.send("resale last aapi")
})

app.listen(port, () => {
    connetToDb()
    console.log(`Example app listening on port ${port}`)
})