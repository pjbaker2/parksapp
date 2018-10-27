const express  = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const visited = [
  {name: "Yosemite", image: "https://thenypost.files.wordpress.com/2018/10/yosemite-national-park.jpg?quality=90&strip=all&w=618&h=410&crop=1"}
]

app.get("/", function(req, res){
   res.render("landing");
});

app.get("/parks", function(req, res){
    res.render("parks", {visited: visited})
});

app.post("/parks", function(req, res){
   var name = req.body.parkName;
   var image = req.body.parkImage;
   var newPark = {name: name, image: image};
   visited.push(newPark);
   res.redirect("/parks");
});

app.listen(port, function (){
  console.log("Server running");
  console.log(visited);
});
