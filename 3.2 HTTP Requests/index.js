import express from "express";

const app=express();
const port=3000;

app.get("/", (req, res)=>{
  res.send("<h1>Hello world!</h1>");
});

app.get("/about", (req, res)=>{
  res.send("<h1>About me</h1>");
});

app.get("/contact", (req, res)=>{
  res.send("<h1>My contacts</h1>");
});

app.listen(port, ()=>{
  console.log(`Server started on port ${port}`)
});