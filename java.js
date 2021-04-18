$(document).ready(function() {
  var button = $('.btn');
  var recentSearchList = $('.recentSearches');
  var userGeoCity = $('.userGeoCity');
  var citiesArray = [];
  var dayCount = 0;
  var apiKey = 'f68f78ae750362d69b3e0a6310ed1d91';
  var savedSearches = JSON.parse(localStorage.getItem("city"));
  if (savedSearches !== null) {
    citiesArray = savedSearches;
    arrToUl();
  }

  function setTime(timezone) {
  d = new Date()
  localTime = d.getTime()
  localOffset = d.getTimezoneOffset() * 60000
  utc = localTime + localOffset
  var time = utc + (1000 * timezone)
  nd = new Date(time) + '';
  splitDate = nd.split(" ");
  finalDate = splitDate.slice(0, 4);
  stringDate = finalDate.join(" ")
  $(".date").text(stringDate);

  $('.weather-fiveDay-block .card').each(function() {
    dayCount++;
    var nextDay =moment(stringDate).add(dayCount, 'd')._d;
    $('.day', this).html(moment(nextDay).format("dddd"));
  });
    // change background pending time.
   var currentHour = moment().format("kk");
    $(".time").html(currentHour);
    console.log(currentHour);

    if(currentHour > 6 && currentHour < 18) {
      $('body').css({'background':'#2282a0'})
    }
    else {
      $('body').css({'background':'#000'})
    }
}

// get user location on load 
  function getUserLocationOnLoad () {
   $.ajax({
      url: "https://geoip-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(location) {
        var lat = location.latitude;
        var lon = location.longitude;
        var city = location.city;
        userGeoCity.html(city);
        fillData(lat, lon);
      }
  });
 }
     //fucntion to fill out data on the screen
  function fillData(lat, lon){
    var urlWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey + '&units=metric';
    $.ajax({
      url: urlWeather,
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(current) {
        var currentWeatherIcon = current.current.weather[0].icon;
              var currentIconUrl = 'http://openweathermap.org/img/wn/' + currentWeatherIcon + '.png';
              var currentTemp = Math.round(current.current.temp);
              $(".currentWeatherIcon").html('<span class="icon-temp"><img src="' + currentIconUrl + '">' + currentTemp + '</span>');

              var currentWeather = current.current.weather[0].description;
              $(".currentWeather").html("Outlook: " + currentWeather);

              var currentUVIndex = current.current.uvi;
              $(".currentUVIndex").html("UVI: " + currentUVIndex);

              var currentHumidity = current.current.humidity;
              $(".currentHumidity").html("Humiditiy: " + currentHumidity + '%');

              var currentWindSpeed = current.current.wind_speed;
              $(".currentWindSpeed").html("Wind speed: " + currentWindSpeed + " km/h");

              var dayOneWeatherIcon = current.daily[0].weather[0].icon;
              var dayOneIconUrl = 'http://openweathermap.org/img/wn/' + dayOneWeatherIcon + '.png';
              $(".dayOneicon").html('<img src="' + dayOneIconUrl + '">');

              var dayOneTemp = current.daily[0].temp.max;
              $(".dayOneTemp").html("max temp: " + dayOneTemp);

              var dayOneWeather = current.daily[0].weather[0].description;
              $(".dayOneWeather").html(dayOneWeather);

              var dayOneUVI = current.daily[0].uvi;
              $(".dayOneUVI").html("UV: " + dayOneUVI);

              var dayOneHumidity = current.daily[0].humidity;
              $(".dayOneHumidity").html("Humidity: " + dayOneHumidity + "%");

              var dayOneWindSpeed = current.daily[0].wind_speed;
              $(".dayOneWindSpeed").html(dayOneWindSpeed + " km/h");

              var dayTwoWeatherIcon = current.daily[1].weather[0].icon;
              var dayTwoIconUrl = 'http://openweathermap.org/img/wn/' + dayTwoWeatherIcon + '.png';
              $(".dayTwoIcon").html('<img src="' + dayTwoIconUrl + '">');
              
              var dayTwoTemp = current.daily[1].temp.max;
              $(".dayTwoTemp").html("Max Temp: " + dayTwoTemp);

              var dayTwoWeather = current.daily[1].weather[0].description;
              $(".dayTwoWeather").html(dayTwoWeather);
              
              var dayTwoUVI = current.daily[1].uvi;
              $(".dayTwoUVI").html("UV: " + dayTwoUVI);

              var dayTwoHumidity = current.daily[1].humidity;
              $(".dayTwoHumidity").html("Humiditiy: " + dayTwoHumidity + "%");

              var dayTwoWindSpeed = current.daily[1].wind_speed;
              $(".dayTwoWindSpeed").html(dayTwoWindSpeed + " km/h");

              var dayThreeWeatherIcon = current.daily[2].weather[0].icon;
              var dayThreeIconUrl = 'http://openweathermap.org/img/wn/' + dayThreeWeatherIcon + '.png';
              $(".dayThreeIcon").html('<img src="' + dayThreeIconUrl + '">');
              
              var dayThreeTemp = current.daily[2].temp.max;
              $(".dayThreeTemp").html("Max Temp: " + dayThreeTemp);

              var dayThreeWeather = current.daily[2].weather[0].description;
              $(".dayThreeWeather").html(dayThreeWeather);
              
              var dayThreeUVI = current.daily[2].uvi;
              $(".dayThreeUVI").html("UV: " + dayThreeUVI);

              var dayThreeHumidity = current.daily[2].humidity;
              $(".dayThreeHumidity").html("Humidity: " + dayThreeHumidity + "%");

              var dayThreeWindSpeed = current.daily[2].wind_speed;
              $(".dayThreeWindSpeed").html(dayThreeWindSpeed + " km/h");

              var dayFourWeatherIcon = current.daily[3].weather[0].icon;
              var dayFourIconUrl = 'http://openweathermap.org/img/wn/' + dayFourWeatherIcon + '.png';
              $(".dayFourIcon").html('<img src="' + dayFourIconUrl + '">');

              var dayFourTemp = current.daily[3].temp.max;
              $(".dayFourTemp").html("Max Temp: " + dayFourTemp);

              var dayFourWeather = current.daily[3].weather[0].description;
              $(".dayFourWeather").html(dayFourWeather);
              
              var dayFourUVI = current.daily[3].uvi;
              $(".dayFourUVI").html("UV: " + dayFourUVI);

              var dayFourHumidity = current.daily[3].humidity;
              $(".dayFourHumidity").html("Humidity: " + dayFourHumidity + "%");

              var dayFourWindSpeed = current.daily[3].wind_speed;
              $(".dayFourWindSpeed").html(dayFourWindSpeed + " km/h");


              var dayFiveWeatherIcon = current.daily[4].weather[0].icon;
              var dayFiveIconUrl = 'http://openweathermap.org/img/wn/' + dayFiveWeatherIcon + '.png';
              $(".dayFiveIcon").html('<img src="' + dayFiveIconUrl + '">');

              var dayFiveTemp = current.daily[4].temp.max;
              $(".dayFiveTemp").html("Max Temp: " + dayFiveTemp);

              var dayFiveWeather = current.daily[4].weather[0].description;
              $(".dayFiveWeather").html(dayFiveWeather);
              
              var dayFiveUVI = current.daily[4].uvi;
              $(".dayFiveUVI").html("UV: " + dayFiveUVI);

              var dayFiveHumidity = current.daily[4].humidity;
              $(".dayFiveHumidity").html("Humidity: " + dayFiveHumidity + "%");

              var dayFiveWindSpeed = current.daily[4].wind_speed;
              $(".dayFiveWindSpeed").html(dayFiveWindSpeed + " km/h");

              var timezone = current.timezone_offset;

              setTime(timezone);
              console.log(timezone)
    }
  });
  }
    // search bar input, returns weather and actions fill data function
  function userSearch() {
    var cityName = $('#weather-search').val();
    console.log(cityName);
    userGeoCity.html(cityName);
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey, function(data) {
      var latitude = data.coord.lat;
      var longitude = data.coord.lon;
      fillData(latitude, longitude);
    });

    if(citiesArray.includes(cityName)) {
      //pushes array to local storage  
    } else { 
     citiesArray.push(cityName);
     console.log('Array ' + citiesArray);
     localStorage.setItem('city',JSON.stringify(citiesArray));
     arrToUl();
   }
  }

  button.on("click", function () {
    userSearch();
  });
    //turns array to list
  function arrToUl() {
    recentSearchList.empty();
    var recentSearches = localStorage.getItem('city');
    recentSearches = JSON.parse(recentSearches);
    console.log('Searches:' + recentSearches);
    for(i=0;i < recentSearches.length;i++) {
      console.log(recentSearches[i]);
      recentSearchList.append('<li>' + recentSearches[i] +'</li>');
    } 
  }
  
  getUserLocationOnLoad();
});



