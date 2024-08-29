const express = require(`express`);
const app = express();
const request = require(`request`);

app.get('/', (req, res) => {
  let city = req.query.city;
  var request = require(`request`);
  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid={92ab6302688bb99a959762953a34514f}`,
    function (error, response, body) {
       let data = Json.parse(body);
      if (response.statusCode === 200) {
        res.send(`The Weather description in the city "${city}" is ${data.list[0].weather[0].description}`);
      }
      );
});

app.listen(3000, () => console.log(`Server started on port 3000`));
