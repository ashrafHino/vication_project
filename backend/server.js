const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routesUrls = require('./routers/router')
const User = require('./models/signupdetales')
const Location = require('./models/locationtable')
const jwt = require('jsonwebtoken')
dotenv.config()
app.use(express.json())
app.use(cors())

///////////////conction to user db and pull and insert data
mongoose.connect("mongodb+srv://ashraf1994:ashraf1994@cluster0.eveglgh.mongodb.net/signuptable?retryWrites=true&w=majority", () => console.log("data base conected"))
app.post('/register', async (req, res) => {
    console.log(req.body)
    try {
        const olduser = await User.findOne({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        if (!olduser) {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password

            })
            console.log(olduser)
            res.json({ status: 'ok' })
        }
        else {
            res.json(null)

        }
    }
    catch (err) {
        console.log(err)
        res.json({ status: 'err' })
    }
})

app.post('/login', async (req, res) => {
    console.log(req.body)

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, 'secret1')
        return res.json({ status: 'ok', user: token })
    }
    else
        return res.json({ status: 'err', user: false })

})


///////////////location table
app.post('/infotable', async (req, res) => {
    console.log(req.body)

    const location = await Location.create({
        location_id:req.body.location_id,
        location_name: req.body.location_name,
        price: req.body.price
    })
    if (location) {
        return res.json({ status: 'ok', location: true })
    }
    else
        return res.json({ status: 'err', location: false })

})

app.get('/infotable', async (req, res) => {
    Location.find({}).then((items) => res.json(items)).catch((err) => console.loge(err))
})
app.listen(3001, () => { console.log("server is listeninig to port 3001") })