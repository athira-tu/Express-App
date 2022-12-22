const express = require("express")
const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.get("/", (req, res) => {
    res.send("request working")

})
app.get("/main", (req, res) => {
    res.send("hai")
})
app.get("/home", (req, res) => {
    res.sendfile("./index.html")
})
app.post("/home", (req, res) => {
    let a = req.body.name
    let b = req.body.password
    res.send(a)
    res.send(b)
})

app.listen(5000, (err) => {
    if (err) {
        console.log("error")
    }
    else {
        console.log("success")
    }
})
