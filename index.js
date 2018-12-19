const express  = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const visited = [
  {name: "Yosemite National Park", image: "https://thenypost.files.wordpress.com/2018/10/yosemite-national-park.jpg?quality=90&strip=all&w=618&h=410&crop=1"},
  {name: "Grand Canyon National Park", image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dawn_on_the_S_rim_of_the_Grand_Canyon_%288645178272%29.jpg"},
  {name: "Yellowstone National Park", image: "https://lonelyplanetwp.imgix.net/2017/06/lowerfalls-faacd9af928f.jpg?fit=min&q=40&sharp=10&vib=20&w=1470"}
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
});
