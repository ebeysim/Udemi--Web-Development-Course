import express, {response} from "express";
import axios from "axios";
import res from "express/lib/response.js";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const APILink='https://secrets-api.appbrewery.com'
const yourUsername = "Erb";
const yourPassword = "2910";
const yourAPIKey = "d3cb1af3-9c78-4820-9dbf-35a40691ff53";
const yourBearerToken = "7d3c28d5-900e-49b0-8f12-e2386eadbfa2";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get(APILink+'/random');
    const content = response.data;
    res.render("index.ejs", {content: JSON.stringify(content)});
  }
  catch(error){
    console.error('Failed to make request'+ error.message);
    res.render("index.ejs", {error: error.message});
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try{
    const response = await axios.get(APILink+'/all?page=2',{
      auth:{
        username: yourUsername,
        password: yourPassword,
      },
    });
    const content = response.data;
    res.render("index.ejs", {content: JSON.stringify(content)});
  }catch(error){
    console.error('Failed to make request'+ error.message);
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response = await axios.get(APILink+'/filter?score=5&apiKey='+ yourAPIKey);
    const content = response.data;
    res.render("index.ejs", {content: JSON.stringify(content)});
  }catch (error){
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get(APILink + '/secrets/42', {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    });
    const content = response.data;
    res.render("index.ejs", {content: JSON.stringify(content)});
  }catch (error){
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
