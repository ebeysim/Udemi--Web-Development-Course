import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised= false;
const password= "ILoveProgramming";
app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req, res, next){
    if(req.body["password"]==="ILoveProgramming"){
        userIsAuthorised=true;
    }
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/check", (req, res) => {
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.redirect("/");
        userIsAuthorised=false;
    }
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
