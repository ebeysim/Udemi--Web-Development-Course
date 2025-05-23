import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let result, advice;

app.use(bodyParser.urlencoded({extended: true}));

function dayCheck(req, res, next){
    let day=new Date();
    let today= day.getDay();
    if(today>=1 && today<=6){
        result="weekday";
        advice="Time to work hard!";
    }
    else{result="weekend";
        advice="Time to work hard!";
    }
    next();
}
app.use(dayCheck);


app.get("/", (req, res) => {
    res.render("index.ejs", {
        result: result,
        advice: advice
    });
});

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });



