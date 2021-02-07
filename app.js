const express = require("express");
const path = require("path");
const fromAnotherFile = require("./functions");
const port = process.env.PORT || 3000;
const app = express();

app.set("view engine","hbs");

const sample = () => {
    return 'proba'
}


app.use("/assets",express.static(path.join(__dirname,"./assets")))
app.use("/js",express.static(path.join(__dirname,"./js")))

app.get("/", function (req,res) {
    res.render('index',{
        pageTitle: "dzisiejsza lekcja",
        subTitle: fromAnotherFile.title,
        subsubTitle: sample()
    })
})
app.get("/about", function (req,res) {
    res.send("<h2>Strona o nas</h2>")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log("Działa na porcie",port)
})