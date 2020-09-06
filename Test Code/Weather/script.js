var inputcity = document.querySelector(".cityname");
var city = document.querySelector(".city");
var date = document.querySelector(".date");
var icon = document.querySelector(".icon");
var description = document.querySelector(".description");
var temperature = document.querySelector(".temperature");
var realfeel = document.querySelector(".realfeel");
var sunrise = document.querySelector(".sunrise");
var sunset = document.querySelector(".sunset");
var duration = document.querySelector(".duration");

var submit = document.querySelector(".submit");
var generate = document.querySelector(".generate");
var btntest = document.querySelector(".btntest");

var bot = document.querySelector(".bot");

var currentWeather = {};
const key = "26ff797d4fd97e497a2930d751f93566";
const part = {"current" : "current",  "minutely" : "minutely", "hourly" : "hourly", "daily": "daily"};

submit.addEventListener("click", load);
generate.addEventListener("click", test);
btntest.addEventListener("click", test2);

function load(){
    //inputcity.value = "london";
    data();
}

function data(){
    let weather = `http://api.openweathermap.org/data/2.5/weather?q=${inputcity.value}&APPID=${key}`;
    let forecast = `http://api.openweathermap.org/data/2.5/forecast?q=${inputcity.value}&APPID=${key}`;

    fetch(weather)
    .then(response => response.json())
    .then(function(data){
        let today = new Date();
        let tempsunrise = new Date( (data.sys.sunrise + (( (new Date()).getTimezoneOffset() * 60) + data.timezone)) * 1000);
        let tempsunset = new Date( (data.sys.sunrise + (( (new Date()).getTimezoneOffset() * 60) + data.timezone)) * 1000);

        currentWeather.city = data.name,
        currentWeather.weather = data.weather[0]["main"];
        currentWeather.date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`,
        currentWeather.icon = data.weather[0]["icon"];
        currentWeather.description = data.weather[0]["description"];
        currentWeather.temperature = Math.round(data.main.temp - 273),
        currentWeather.realfeel = Math.round(data.main.feels_like - 273);
        currentWeather.country = data.sys.country;
        currentWeather.timezone = data.timezone;
        
        currentWeather.sunrise = new Date( (data.sys.sunrise + (( (new Date()).getTimezoneOffset() * 60) + data.timezone)) * 1000);
        currentWeather.sunset = new Date( (data.sys.sunset + (( (new Date()).getTimezoneOffset() * 60) + data.timezone)) * 1000);

        currentWeather.duration = (23 - today.getHours()) + ":" + (60 - today.getMinutes());
        currentWeather.coord = data.coord;

        console.log(data);

    }
    )
    .then(function(){
        display();
        onecall();
    })
    .catch(
        err => alert("Invalid City Name"),
        inputcity.value = "",
        inputcity.focus(),
    );

    console.log(currentWeather);
}

function display(){
    city.innerHTML = `City : ${currentWeather.city}`;
    date.innerHTML =  `Date : ${currentWeather.date}`;
    icon.src = `../../images/${currentWeather.icon}.png`;
    description.innerHTML =  `Description : ${currentWeather.description}`;
    temperature.innerHTML =  `Temperature : ${currentWeather.temperature}&#8451;`;
    realfeel.innerHTML =  `Real Feel : ${currentWeather.realfeel}&#8451;`;
    sunrise.innerHTML =  `Sunrise : ${currentWeather.sunrise}`;
    sunset.innerHTML =  `Sunset : ${currentWeather.sunset}`;
    duration.innerHTML =  `Duration : ${currentWeather.duration} hr`;
}

function onecall(){
    let call = `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&exclude=${part.current}&appid=${key}`

    fetch(call)
    .then(response => response.json())
    .then(function(data){
        currentWeather.hourly = data.hourly;
        currentWeather.daily = data.daily;
    })
}

function test(){
    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    var atlanta = utc + (1000 * 3600)
    nd = new Date(atlanta);

    console.log(nd);
}

function test2(){
    while (bot.firstChild) {
        bot.removeChild(bot.lastChild);
    }

    var placeholder = document.createElement("div");
    placeholder.className += "test";

    var p1 = document.createElement("p");
    p1.innerHTML = "Today"
    var p2 = document.createElement("img");
    p2.src = "../../images/unknown.png";
    var p3 = document.createElement("p");
    p3.innerHTML = "Forecast"
    var p4 = document.createElement("p");
    p4.innerHTML = "Temp"
    var p5 = document.createElement("p");
    p5.innerHTML = "Real Feel"
    var p6 = document.createElement("p");
    p6.innerHTML = "Wind";

    placeholder.appendChild(p1);
    placeholder.appendChild(p2);
    placeholder.appendChild(p3);
    placeholder.appendChild(p4);
    placeholder.appendChild(p5);
    placeholder.appendChild(p6);

    bot.appendChild(placeholder);

    for(var i = 0; i < 10; i ++){
        var temp = document.createElement("DIV");
        temp.className += "test";
    
        var t1 = document.createElement("p");
        var t2 = document.createElement("img");
        var t3 = document.createElement("p");
        var t4 = document.createElement("p");
        var t5 = document.createElement("p");
        var t6 = document.createElement("p");

        var t = new Date(currentWeather.hourly[i].dt * 1000);

        t1.innerHTML = t.getHours();
        t2.src = `../../images/${currentWeather.hourly[i].weather[0].icon}.png`;
        t3.innerHTML = currentWeather.hourly[i].weather[0].main;
        t4.innerHTML = `${Math.round(currentWeather.hourly[i].temp - 273)}&#8451;`;
        t5.innerHTML = `${Math.round(currentWeather.hourly[i].feels_like - 273)}&#8451;`;
        t6.innerHTML = getwindDirection(currentWeather.hourly[i].wind_deg);

        temp.appendChild(t1);
        temp.appendChild(t2);
        temp.appendChild(t3);
        temp.appendChild(t4);
        temp.appendChild(t5);
        temp.appendChild(t6);
    
        bot.appendChild(temp);

        // console.log("hour : " + t.getHours());
        // console.log(`Icon ${currentWeather.hourly[i].weather[0].icon}`);
        // console.log(`Weather ${currentWeather.hourly[i].weather[0].main}`);
        // console.log(`Temperature ${Math.round(currentWeather.hourly[i].temp - 273)}`);
        // console.log(`Real Feel ${Math.round(currentWeather.hourly[i].feels_like - 273)}`);
        // console.log(`Wind Direction ${getwindDirection(currentWeather.hourly[i].wind_deg)}`);

        if(t.getHours() == 0){
            i = 11;
        }
    }
}

function getwindDirection(dreg){
    var option = {
        N : ["348.75", "11.25"],
        NNE : ["11.25", "33.75"],
        NE : ["33.75", "56.25"],
        ENE : ["56.25", "78.75"],
        E : ["78.75", "101.25"],
        ESE : ["101.25", "123.75"],
        SE : ["123.75", "146.25"],
        SSE : ["146.25", "168.75"],
        S : ["168.75", "191.25"],
        SSW : ["191.25", "213.75"],
        SW : ["213.75", "236.25"],
        WSW : ["236.25", "258.75"],
        W : ["258.75", "281.25"],
        WNW : ["281.25", "303.75"],
        NW : ["303.75", "326.25"],
        NNW : ["326.25", "348.75"],
    }

    for(let [key, value] of Object.entries(option)){
        if(dreg > value[0] && dreg < value[1]){
            return key;
        }
    }
}
