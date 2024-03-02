
const apiKey = "08aad07b15dd8b555f4185304c7001a5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

    //  <!--weather image update-->
    const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);
        //  <!--weather update-->
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

           // <!--weather image update-->
           if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
           }
           else if (data.weather[0].main == "Clear"){
             weatherIcon.src = "images/clear.png";
           }
           else if (data.weather[0].main == "Clear"){
             weatherIcon.src = "images/rain.png";
           }
           else if (data.weather[0].main == "Drizzle"){
             weatherIcon.src = "images/drizzle.png";
           }
           else if (data.weather[0].main == "Mist"){
             weatherIcon.src = "images/mist.png";
           }
           
        //    <!--weather background-->
        //    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", ()=>{
       checkWeather(searchBox.value);
})
