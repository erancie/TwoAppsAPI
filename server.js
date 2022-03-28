const express = require('express');
const axios = require("axios").default;
require('dotenv').config()

const app = express();


//------------------------------------- 



//APP 1 - Serever Side Rendering




//APP 2 - Client Side Rendering (SPA)




//------------------------------------- 
app.listen(3000, () => {
  console.log('listening on port 3000');
});


// //RAPID API EG.
// var options = {
//   method: 'GET',
//   url: 'https://dad-jokes.p.rapidapi.com/random/joke',
//   headers: {
//     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.RapidAPI_Key
//   }
// };

// axios.request(options).then(function (response) {
//     let joke = response.data;
//     // console.log(joke)
//     console.log(joke.body[0].setup)
//     console.log(joke.body[0].punchline)
//   }).catch(function (error) {
//     console.error(error);
// });


//JSON conversion methods

//object to string
// let obString = JSON.stringify(options)
// console.log(obString)

//string to object
// let jase = JSON.parse(obString)
// console.log(jase)