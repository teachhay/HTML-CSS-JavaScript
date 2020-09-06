//#region  Variable
//HTML element
var search = document.getElementById("search");
var innerbot = document.querySelector(".innerbot");
var rowBot = document.querySelector(".rowBot");
var nearbyrow = document.querySelector(".nearbyrow");
var modeToggle = document.querySelector(".modeToggle");
var currentDayLink = document.querySelector(".currentDayLink");
var fiveDayLink = document.querySelector(".fiveDayLink");
var topfiveDay = document.querySelector(".topfiveDay");

// JS temporary variable
var inputCity;
var isDark = true;

//JS Object
var objWeather = {};
var objtemp = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
};
//#endregion

//#region Event
search.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        inputCity = search.value;
        run();
    }
});

modeToggle.addEventListener("click", function () {
    darkmode();
});

fiveDayLink.addEventListener("click", () => {
    document.querySelector(".fiveDay").style.display = "block";
    document.querySelector(".currentDay").style.display = "none";
    document.querySelector(".errorpage").style.display = "none";
});

currentDayLink.addEventListener("click", () => {
    document.querySelector(".currentDay").style.display = "block";
    document.querySelector(".fiveDay").style.display = "none";
    document.querySelector(".errorpage").style.display = "none";
});

topfiveDay.addEventListener("click", (event) => {
    for (var i = 0; i < event.path.length; i++) {
        if (classlist[event.path[i].className.split(" ")[0]]) {
            fiveDayClick(classlist[event.path[i].className.split(" ")[0]]);
            break;
        }
    }
})
//#endregion

//#region Main Function
function run() {
    document.querySelector(".botFiveDayTitle").innerHTML = "Select option above to show hourly weather";
    removeHourlyCard(rowBot);
    document.querySelector(".errorpage").style.display = "none";
    document.querySelector(".currentDay").style.display = "block";
    document.querySelector(".fiveDay").style.display = "none";

    getData();
    
    search.value = "";
}

function getData() {
    openweather(inputCity)
        .then((data) => {
            let today = new Date();

            objWeather.city = data.name;
            objWeather.weather = data.weather[0]["main"];
            objWeather.date = today;
            objWeather.icon = data.weather[0]["icon"];
            objWeather.description = data.weather[0]["description"];
            objWeather.temperature = Math.round(data.main.temp - 273);
            objWeather.realfeel = Math.round(data.main.feels_like - 273);
            objWeather.countryShort = data.sys.country;
            objWeather.timezone = data.timezone;

            //New Time Zone Conversion Algorithm
            objWeather.sunrise = moment.tz(new Date(data.sys.sunrise * 1000), cities[objWeather.city]).format("h:m a");
            objWeather.sunset = moment.tz(new Date(data.sys.sunset * 1000), cities[objWeather.city]).format("h:m a");

            //Old Time Zone Conversion Algorithm (off by minutes, somtime an hours)
            // objWeather.sunrise = new Date((data.sys.sunrise + (new Date().getTimezoneOffset() * 60 + data.timezone)) * 1000);
            // objWeather.sunset = new Date((data.sys.sunset + (new Date().getTimezoneOffset() * 60 + data.timezone)) * 1000);

            objWeather.duration = 23 - today.getHours() + ":" + (60 - today.getMinutes());
            objWeather.coord = data.coord;
        })
        .then(() => {
            displayMainCard();
            call(objWeather.coord.lat, objWeather.coord.lon)
                .then((data) => {
                    objWeather.hourly = data.hourly;
                    objWeather.daily = data.daily;
                })
                .then(() => {
                    displayHourly(innerbot);
                    displayFiveDayCard();
                })
        })
        .then(() => {
            findNearbyCity(objWeather.countryShort)
                .then((data) => {
                    removeNearbyCard();

                    openweather(data.cities[Math.floor(Math.random() * data.cities.length) + 0].name.toLowerCase())
                        .then((data) => {
                            generateCustomNearbyCard(data.weather[0].icon, Math.round(data.main.temp - 273.15), data.name, data.main.humidity, getwindDirection(data.wind.deg));
                        })

                    openweather(data.cities[Math.floor(Math.random() * data.cities.length) + 0].name.toLowerCase())
                        .then((data) => {
                            generateCustomNearbyCard(data.weather[0].icon, Math.round(data.main.temp - 273.15), data.name, data.main.humidity, getwindDirection(data.wind.deg));
                        })

                    openweather(data.cities[Math.floor(Math.random() * data.cities.length) + 0].name.toLowerCase())
                        .then((data) => {
                            generateCustomNearbyCard(data.weather[0].icon, Math.round(data.main.temp - 273.15), data.name, data.main.humidity, getwindDirection(data.wind.deg));
                        })
                })
        })
        .then(() => {

        })
        .then(() => {
            fivedayHourly(objWeather.coord.lat, objWeather.coord.lon)
                .then((data) => {
                    var count = 1;
                    for (var i = 0; i < data.data.length - 1; i++) {
                        objtemp[`${count}`].push(data.data[i]);

                        if (data.data[i].timestamp_local.split("T")[1] == "00:00:00") {
                            count++;
                        }
                    }
                });
        })
        .catch((err) => {
            document.querySelector(".errorpage").style.display = "block";
            document.querySelector(".currentDay").style.display = "none";
            document.querySelector(".fiveDay").style.display = "none";

            console.log(err);
        })
}

function fiveDayClick(event) {
    document.querySelector(".botFiveDayTitle").innerHTML = "Hourly Weather";
    var t1 = $(`.${event}`).find(".title")[0].innerText.split(" ");
    var t2 = t1[1].length == 4 ? t1[1].slice(0, 2) : t1[1].slice(0, 1);
    var tempobj = {};

    if (t2.length == 1)
        t2 = `0${t2}`;

    for (var i = 1; i <= Object.keys(objtemp).length; i++) {

        if (objtemp[`${i}`][0].datetime.split("-")[2].split(":")[0] == t2) {
            tempobj.result = objtemp[`${i}`];
            break;
        };
    }
    displayFiveDayHourlyCard(tempobj);
}

async function getGeoLcoation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    }
}

async function setPosition(position){
    call(position.coords.latitude, position.coords.longitude)
    .then((data) => {
        inputCity = data.timezone.split("/")[1].replace("_", " ").toLowerCase();
        getData();
    });
}

function showError(){
    inputCity = "new york";
    alert("User not allow geolocation\r\nDefault Location set to New York");
    run();
}
//#endregion

//#region Asynchronous Function
// OpenWeather API
async function openweather(city) {
    let weather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=26ff797d4fd97e497a2930d751f93566`;

    const temp = await fetch(weather).then(response => response.json());

    return temp;
}

async function openweatherCoord(latitude, longitude) {
    let weather = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=26ff797d4fd97e497a2930d751f93566`;

    const temp = await fetch(weather).then(response => response.json());

    return temp;
}

async function call(lat, lon) {
    let call = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&appid=26ff797d4fd97e497a2930d751f93566`

    const response = await fetch(call);

    return response.json();
}

//Countries Cities API
async function findNearbyCity(country) {
    const temp = await fetch(`https://countries-cities.p.rapidapi.com/location/country/${country}/city/list?page=1&per_page=20&format=json&population=15000`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "countries-cities.p.rapidapi.com",
            "x-rapidapi-key": "ce8b34b1c7mshb4dbf9883179fd6p1f633ejsn7080ab266405"
        }
    })

    return temp.json();
}

//Weather API
async function fivedayHourly(lat, lon) {
    var otherkey = "ce8b34b1c7mshb4dbf9883179fd6p1f633ejsn7080ab266405";
    var key1 = "a497d024aemshb5c04754acf648cp1277d0jsn563159906d50";
    const temp = await fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/hourly?lang=en&hours=120&lat=51.51&lon=-0.13", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
            "x-rapidapi-key": "a497d024aemshb5c04754acf648cp1277d0jsn563159906d50"
        }
    })

    return temp.json();
}
//#endregion

//#region Display Function
function displayMainCard() {
    var todayTemp = document.querySelector(".temperature");
    var todayWeather = document.querySelector(".weather");
    var todayDate = document.querySelector(".date");
    var todayDescription = document.querySelector(".description");
    var todayCity = document.querySelector(".city");
    var todaySunrise = document.querySelector(".sunrise");
    var todaySunset = document.querySelector(".sunset");
    var todayDuration = document.querySelector(".duration");

    todayTemp.innerHTML = `${objWeather.temperature}&deg;<space class="celsius">c</space>`;
    todayWeather.innerHTML = objWeather.weather;
    todayDate.innerHTML = `${Day[objWeather.date.getDay()]} ${objWeather.date.getDate()}${showDate(objWeather.date.getDate())} ${Month[objWeather.date.getMonth()]}`;
    todayDescription.innerHTML = objWeather.description;
    todayCity.innerHTML = objWeather.city + ", " + objWeather.countryShort;

    //Use with old time zone conversion
    // todaySunrise.innerHTML = ((objWeather.sunrise.getHours() + 11) % 12 + 1) + ":" + objWeather.sunrise.getMinutes() + " AM";
    // todaySunset.innerHTML = ((objWeather.sunset.getHours() + 11) % 12 + 1) + ":" + objWeather.sunset.getMinutes() + " PM";

    todaySunrise.innerHTML = objWeather.sunrise;
    todaySunset.innerHTML = objWeather.sunset;
    todayDuration.innerHTML = objWeather.duration;
}

function displayHourly(row) {
    removeHourlyCard(row);

    //Incorrect Result
    for (var i = 0; i < objWeather.hourly.length; i++) {
        generateCustomHourlyCard(
            row,
            "animate__backInRight",
            Day[getDate(objWeather.hourly[i].dt, objWeather.timezone).getDay()],
            objWeather.hourly[i].weather[0].icon.toString(),
            moment.tz(new Date(objWeather.hourly[i].dt * 1000), cities[objWeather.city]).format("h a"),
            objWeather.hourly[i].weather[0].main,
            Math.round(objWeather.hourly[i].temp - 273),
            Math.round(objWeather.hourly[i].feels_like - 273),
            Math.round(objWeather.hourly[i].wind_speed),
            getwindDirection(objWeather.hourly[i].wind_deg)
        );

        if (new Date(((objWeather.hourly[i].dt) + (new Date().getTimezoneOffset() * 60 + objWeather.timezone)) * 1000).getHours() == 0) {
            break;
        }
    }
}

function displayFiveDayCard() {
    removeFiveDayCard();

    for (var i = 0; i < 5; i++) {
        var date = moment.tz(new Date(objWeather.daily[i].dt * 1000), cities[objWeather.city]);

        generateFiveDayCard(
            i,
            objWeather.daily[i].weather[0].icon,
            Math.floor(objWeather.daily[i].temp.day - 273.15),
            objWeather.daily[i].weather[0].main,
            objWeather.daily[i].weather[0].description,
            Day[date.day()],
            date.date(),
            Month[date.month()]
        );
    }
}

function displayFiveDayHourlyCard(data) {
    var tempElement = document.querySelector(".rowBot");

    removeHourlyCard(tempElement);

    for (var i = 0; i < data.result.length; i++) {
        generateCustomHourlyCard(
            tempElement,
            "animate__bounceInUp",
            Day[moment.tz((data.result[i].datetime).split(":")[0], cities[objWeather.city]).day()],
            data.result[i].weather.icon.slice(1, 4),
            moment.tz((data.result[i].timestamp_local), cities[objWeather.city]).format("h a"),
            data.result[i].weather.description,
            Math.floor(Math.round(data.result[i].temp)),
            Math.floor(Math.round(data.result[i].temp)),
            Math.floor(Math.round(data.result[i].wind_spd)),
            data.result[i].wind_cdir
        );
    }
}
//#endregion

//#region Remove Card Function
function removeHourlyCard(Card) {
    while (Card.firstChild) {
        Card.removeChild(Card.lastChild);
    }
}

function removeNearbyCard() {
    while (nearbyrow.firstChild) {
        nearbyrow.removeChild(nearbyrow.lastChild);
    }
}

function removeFiveDayCard() {
    var fivedayCard = document.querySelector(".topfiveDay");

    while (fivedayCard.firstChild) {
        fivedayCard.removeChild(fivedayCard.lastChild);
    }
}
//#endregion

//#region Generate Card Function
function generateFiveDayCard(index, icon, temperature, weat, forecast, day, date, month) {
    var fivedayCard = document.querySelector(".topfiveDay");

    //Main Card Layout
    var card = document.createElement("div");
    card.classList.add(`card${index}`, "card", "col-lg-2", "animate__animated", "animate__bounceInDown");

    //Card Body
    var cardbody = document.createElement("div");
    cardbody.classList.add("card-body");

    //Inner Row
    var rowDate = document.createElement("div");
    var rowImg = document.createElement("div");
    var rowWeather = document.createElement("div");

    rowDate.classList.add("row", "rowDate");
    rowImg.classList.add("row", "rowImg");
    rowWeather.classList.add("row", "rowWeather");

    //Child Element
    var title = document.createElement("div");
    var imgDiv = document.createElement("div");
    var img = document.createElement("img");
    var temp = document.createElement("div");
    var weather = document.createElement("div");

    //Add CSS Class to Child Element
    title.classList.add("title", "col-lg-12");
    imgDiv.classList.add("img", "col-lg-12");
    temp.classList.add("text", "col-lg-3");
    weather.classList.add("text", "col-lg-9");

    //Assign Data
    title.innerHTML = `${day} ${date}${showDate(date)} ${month}`;
    img.src = `${flipImage()}${icon}.png`;
    temp.innerHTML = `${temperature}&deg;c`;
    weather.innerHTML = `${weat}, ${forecast}`;

    //Add element to row
    rowDate.appendChild(title);
    rowImg.appendChild(imgDiv);
    imgDiv.appendChild(img);
    rowWeather.appendChild(temp);
    rowWeather.appendChild(weather);

    //Add row to CardBody
    cardbody.appendChild(rowDate);
    cardbody.appendChild(rowImg);
    cardbody.appendChild(rowWeather);

    //Add CardBody to Parent Card
    card.appendChild(cardbody);

    fivedayCard.appendChild(card);
}

function generateCustomNearbyCard(icon, temp, city, humind, wind) {
    //Card main layout container
    var card = document.createElement("div");
    card.classList.add("nearbybot", "col-lg-4", "col-md-10", "col-12", "animate__animated", "animate__bounceInUp");

    //Card layout
    var nearbyCard = document.createElement("div");
    nearbyCard.classList.add("nearbyCard", "card");

    //Card body layout
    var nearbyCardBody = document.createElement("div");
    nearbyCardBody.classList.add("nearbyCardBody", "card-body");

    //Card body row Top
    var nearbyCardrowTop = document.createElement("div");
    nearbyCardrowTop.classList.add("nearbyCardrowTop", "row");

    //Card body row Bottom
    var nearbyCardrowBot = document.createElement("div");
    nearbyCardrowBot.classList.add("nearbyCardrowBot", "row");

    //inner Card column
    var nearbyCardcol = document.createElement("div");
    nearbyCardcol.classList.add("nearbyCardcol", "col-lg-4", "col-md-3", "col-3");

    //Child Elements
    var img = document.createElement("img");
    var nearbyTemp = document.createElement("div");
    var nearbyCity = document.createElement("div");
    var outterHumid = document.createElement("div");
    var outterMark = document.createElement("div");
    var outterWind = document.createElement("div");
    var nearbyHumid = document.createElement("div");
    var nearbyMark = document.createElement("div");
    var nearbyWind = document.createElement("div");

    //Add class to elements
    nearbyTemp.classList.add("nearbyCardcol", "nearbyTemp", "mainText", "col-lg-3", "col-md-4", "col-4");
    nearbyCity.classList.add("nearbyCardcol", "nearbyCity", "mainText", "col-lg-5", "col-md-5", "col-5");
    outterHumid.classList.add("nearbyCardcol", "col-lg-5", "col-md-5", "col-5");
    outterMark.classList.add("nearbyCardcol", "col-lg-1", "col-md-2", "col-2");
    outterWind.classList.add("nearbyCardcol", "col-lg-6", "col-md-5", "col-5");
    nearbyHumid.classList.add("subText");
    nearbyMark.classList.add("subText");
    nearbyWind.classList.add("subText");

    //Add data to elements
    img.src = `${flipImage()}${icon}.png`;
    nearbyTemp.innerHTML = `${temp}&deg;c`;
    nearbyCity.innerHTML = city;
    nearbyHumid.innerHTML = `Humind ${humind}%`;
    nearbyMark.innerHTML = "|";
    nearbyWind.innerHTML = `Wind ${wind}`;

    //Add individual card layout to Card
    card.appendChild(nearbyCard);

    //Add Cardbody to Parent Card
    nearbyCard.appendChild(nearbyCardBody);

    //Add Card row to CardBody
    nearbyCardBody.appendChild(nearbyCardrowTop);
    nearbyCardBody.appendChild(nearbyCardrowBot);

    //Add Card col to Card row
    nearbyCardrowTop.appendChild(nearbyCardcol);

    //Add child element to Card col Top
    nearbyCardcol.appendChild(img);
    nearbyCardrowTop.appendChild(nearbyTemp);
    nearbyCardrowTop.appendChild(nearbyCity);

    //Add child element to outter Card
    outterHumid.appendChild(nearbyHumid);
    outterMark.appendChild(nearbyMark);
    outterWind.appendChild(nearbyWind);

    //Add child element to Card col Bottom
    nearbyCardrowBot.appendChild(outterHumid);
    nearbyCardrowBot.appendChild(outterMark);
    nearbyCardrowBot.appendChild(outterWind);

    //Add Card to Layout container
    nearbyrow.appendChild(card);
}

function generateCustomHourlyCard(ParentCard, animation, today, icons, time, forecast, temp, feel, windspeed, windDirection) {
    //Parent Card
    var card = document.createElement("div");
    card.classList.add("customCard", "card", "animate__animated", animation);

    //Child Body Card
    var cardBody = document.createElement("div");
    cardBody.className += "card-body";

    //Child Body Row Layout
    var bodyTop = document.createElement("div");
    bodyTop.classList.add("bodyTop", "row");
    var bodyIcon = document.createElement("div");
    bodyIcon.classList.add("bodyIcon", "row");
    var bodyTitle = document.createElement("div");
    bodyTitle.classList.add("bodyTitle", "row");
    var bodyMid = document.createElement("div");
    bodyMid.classList.add("bodyMid", "row");
    var bodyBot = document.createElement("div");
    bodyBot.classList.add("bodyBot", "row");

    //Child Body Col Layout
    var colTop = document.createElement("div");
    colTop.classList.add("col-lg-12");
    var colIcon = document.createElement("div");
    colIcon.classList.add("col-lg-12");
    var colTitleLeft = document.createElement("div");
    colTitleLeft.classList.add("col-lg-6", "col-md-6", "col-6");
    var colTitleRight = document.createElement("div");
    colTitleRight.classList.add("col-lg-6", "col-md-6", "col-6");
    var colMidLeft = document.createElement("div");
    colMidLeft.classList.add("col-lg-6", "col-md-6", "col-6");
    var colMidRight = document.createElement("div");
    colMidRight.classList.add("col-lg-6", "col-md-6", "col-6");
    var colBot = document.createElement("div");
    colBot.classList.add("col-lg-12");

    //Child Card
    var hourlyday = document.createElement("p");
    var icon = document.createElement("img");
    var hourlyTime = document.createElement("p");
    var timeSubtitle = document.createElement("p");
    var hourlyforecast = document.createElement("p");
    var forecastSubtitle = document.createElement("p");
    var hourelyTemp = document.createElement("p");
    var tempSubtitle = document.createElement("p");
    var horelyFeel = document.createElement("p");
    var feelSubtitle = document.createElement("p");
    var horelyWind = document.createElement("p");
    var windSubtitle = document.createElement("p");

    //Add CSS class to Child Card
    hourlyday.classList.add("cardTitle", "hourlyday");
    icon.classList.add("icon");
    hourlyTime.classList.add("cardText", "hourlyforecast");
    timeSubtitle.classList.add("cardSubtitle");
    hourlyforecast.classList.add("cardText", "hourlyforecast");
    forecastSubtitle.classList.add("cardSubtitle");
    hourelyTemp.classList.add("cardText", "hourlytemp");
    tempSubtitle.classList.add("cardSubtitle");
    horelyFeel.classList.add("cardText", "hourlyfeel");
    feelSubtitle.classList.add("cardSubtitle");
    horelyWind.classList.add("cardText", "hourlywind");
    windSubtitle.classList.add("cardSubtitle");

    //Add text to Child Card
    hourlyday.innerHTML = today;
    icon.src = `${flipImage()}${icons}.png`;
    hourlyTime.innerHTML = time;
    timeSubtitle.innerHTML = "time";
    hourlyforecast.innerHTML = forecast;
    forecastSubtitle.innerHTML = "forecast";
    hourelyTemp.innerHTML = `${temp}&deg;c`;
    tempSubtitle.innerHTML = "temperature";
    horelyFeel.innerHTML = `${feel}&deg;c`;
    feelSubtitle.innerHTML = "real feel";
    horelyWind.innerHTML = windspeed + " km/h" + " " + windDirection;
    windSubtitle.innerHTML = "wind";

    //Add Row to Child Card
    cardBody.appendChild(bodyTop);
    cardBody.appendChild(bodyIcon);
    cardBody.appendChild(bodyTitle);
    cardBody.appendChild(bodyMid);
    cardBody.appendChild(bodyBot);

    //Add Col to Row
    bodyTop.appendChild(colTop);
    bodyIcon.appendChild(colIcon);
    bodyTitle.appendChild(colTitleLeft);
    bodyTitle.appendChild(colTitleRight);
    bodyMid.appendChild(colMidLeft);
    bodyMid.appendChild(colMidRight);
    bodyBot.appendChild(colBot);

    //Add Child Card to Child Body
    colTop.appendChild(hourlyday);
    colIcon.appendChild(icon);
    colTitleLeft.appendChild(hourlyTime);
    colTitleLeft.appendChild(timeSubtitle);
    colTitleRight.appendChild(hourlyforecast);
    colTitleRight.appendChild(forecastSubtitle);
    colMidLeft.appendChild(hourelyTemp);
    colMidLeft.appendChild(tempSubtitle);
    colMidRight.appendChild(horelyFeel);
    colMidRight.appendChild(feelSubtitle);
    colBot.appendChild(horelyWind);
    colBot.appendChild(windSubtitle);

    //Add Child body to Card
    card.appendChild(cardBody);

    //Add Card to Parent
    ParentCard.appendChild(card);
}
//#endregion
