fetch(
  "api.openweathermap.org/data/2.5/weather?lat=17.50034&lon=41.77997&units=imperial&APPID=73ef2e1cc9d48faa3305c3090f8b537c"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);
  })
  .catch(function (error) {
    console.error("Something went wrong with retrieving the weather!");
    console.error(error);
  });
