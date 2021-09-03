const API_KEY = `9a92c5eefe63333bd41b580dea175954`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temperature", temperature.main.temp);
  setInnerText("condition", temperature.weather[0].main);
  //   set weather Icon
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const iconImg = document.getElementById("icon-img");
  iconImg.setAttribute("src", url);
};
