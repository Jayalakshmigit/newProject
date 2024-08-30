const express = require("express");
const app = express();
const request = require("request");

app.get("/", (req, res) => {
  let city = req.query.city;
  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={92ab6302688bb99a957962953a34514f}`,
    function (error, response, body) {
      let data = JSON.parse(body);
      if (response.statusCode === 200) {
        res.send(
          `Sky Conditions of "${city}" is ${data.list[0].weather[0].description}`
        );
      }
    }
  );
});

app.listen(3000, () => console.log(`Server started on port 3000`));
