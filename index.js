const express  = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

const visited = [
  {name: "Salmon Creek", image: "https://www.nps.gov/zion/planyourvisit/images/South_CG_r_1.jpg?maxwidth=650&autorotate=false"}
]

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/parks", function(req,res){
    res.render("parks", {visited: visited})
});

app.post("/parks", function(req,res){
   var name = req.body.name
   var image = req.body.image
   var newPark = {name: name, image: image}
   visited.push(newPark);
   res.redirect("/parks");
});

app.listen(port, function (){
  if(err){
    console.log("Error");
  } else {
  console.log("Server running");
 }
});
