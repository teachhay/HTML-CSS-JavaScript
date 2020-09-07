# HTML-CSS-JavaScript

## Task 1
  Create a single-page weather forecast website
  To obtain a forecast, use https://openweathermap.org/. Do not forget to register and get the key

  The page should have two tabs
  - Today is the weather forecast for today
  - 5-day forecast is the weather forecast for the next five days
  The Today tab is displayed when the page loads. The current city is determined by the user's coordinates; if the browser does not support geolocation, your city is displayed. To select another city, the user can enter its name in the search box
  
  The Today tab displays three blocks
  - Current weather summary
    * date
    * icon
    * text description
    * temperature
    * real feel
    * sunrise
    * sunset
    * day length (duration)
  - Hourly forecast for the rest of the day
    * time
    * icon
    * text description
    * temperature
    * real feel
    * wind speed and direction
  - Nearby cities and forecast
    * name
    * icon
    * temperature
      
  The search box must always display the name of the city, for which the forecast is displayed, even if the geolocation was determined

  If the user enters a non-existent city or if API cannot return information on the entered city, inform the user about it using this page

  The 5-day forecast displays 2 blocks
  - Short forecast for each of the five days
    * day of the week
    * date
    * icon
    * temperature
    * text description
  - Hourly forecast for the selected day
    * time
    * icon
    * text description
    * temperature
    * real feel
    * wind speed and direction
  
  When the short forecast of one of five days is clicked, it should be visually highlighted and have an hourly forecast below.
  When this tab opens, today must be selected by default

  Remember that this is a single-page site. This means that clicks—be it searching for another city or navigating through tabs—must NOT (!) refresh the page in the browser. Change the page structure with JavaScript
