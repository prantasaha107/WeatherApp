const apiKey= "c9eee163ac3a781f0dd090f034cbb6c1 ";
    const apiUrl= " https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon= document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response =await fetch(apiUrl +city+ `&appid=${apiKey}`);
        let data =await response.json();
        console.log(data)
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed+ "Km/h";
        //Change picture according to weather
        if (data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if (data.weather[0].main=="Haze"){
           weatherIcon.src="images/mist.png";
        }
        else if (data.weather[0].main=="Smoke"){
           weatherIcon.src="images/mist.png";
        }
        else if (data.weather[0].main=="Clear"){
           weatherIcon.src="images/clear.png";
        }
        
    }
    searchBtn.onclick=()=>{
        checkWeather(searchBox.value);
    }