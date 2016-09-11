// API Key 6514690fd982377cba22dc9a829e7f80

$(document).ready(function(){
	var lon, lat, fahTemp, celTemp, windSpeedMi, windSpeedKm;
	
	$.getJSON("https://crossorigin.me/http://ip-api.com/json", function(data2){
		lat = data2.lat;
		lon = data2.lon;

	var thunderstormId = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
	var drizzleId = [300, 301, 302, 310, 311, 312, 313, 314, 321];
	var rainId = [500, 501, 502, 503, 504, 511, 520, 521, 422, 531];
	var snowId = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
	var atmosphereId = [701,711, 721, 731, 741, 751, 761, 762, 771, 781];
	var clearId = [800];
	var cloudId = [801, 802, 803, 804];
	var extremeId = [900, 901, 902, 903, 904, 905, 906];
	var additionalId = [951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962];


	var api = "https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=6514690fd982377cba22dc9a829e7f80";

  	 $.getJSON(api, function(data){

  	 	var weatherType = data.weather[0].description;
		var kelvin = data.main.temp;
		var windSpeed = data.wind.speed;
		var location = data.name;
		var weatherID = data.weather[0].id; // to get parameters (Rain, Snow, Extreme, Clouds etc.)
		
		// Kelvin to Fahreneit formula
		fahTemp = kelvin * (9 / 5) - 459.67; //fahTemp = (kelvin * (9 / 5) - 459.67).toFixed(1);
		// Kelvin to celcius
		celTemp = kelvin - 273;
		// If user requests celcius vs fahrenheit
		var changeTemp = true;
		// If request km vs mph
		var changeWindSpeed = true;
		// console.log(data.coord.lat);
		windSpeedMi = windSpeed.toFixed(2);
		windSpeedKm = (2.234 * windSpeed).toFixed(2);


		var celTemp = celTemp.toFixed(1);
		var fahTemp = fahTemp.toFixed(1);


		$("#location").html(location);
		$("#fahTemp").html(fahTemp + " &#x2109;");
		$("#weatherType").html(weatherType);
		$("#windSpeed").html(windSpeedMi + " mph");

		$("#windSpeed").click(function(){
			if (changeWindSpeed === false) {
				$("#windSpeed").html(windSpeedMi + " mph");
				changeWindSpeed = true;
			}else{
				$("#windSpeed").html(windSpeedKm + " km/h");
				changeWindSpeed = false;
			}
		});

		$("#fahTemp").click(function(){

			if(changeTemp === false){
				$("#fahTemp").html(fahTemp + " &#x2109;");
				changeTemp = true;
			}else{
				$("#fahTemp").html(celTemp + " &#x2103;");
				changeTemp = false;
			}
		});

					// Greeting 
		var today = new Date();
		var hourNow = today.getHours();
		var greeting;

		if (hourNow >= 18){
			$("#greeting").replaceWith(greeting = "Good Evening " + location);
		} else if (hourNow >= 12) {
			$("#greeting").replaceWith(greeting = "Good Afternoon " + location);
		} else{
			$("#greeting").replaceWith(greeting = "Good Morning " + location);
		}

		//  Change background image according to weather condition
	var a = new Set(thunderstormId);
	var b = new Set(drizzleId);
	var c = new Set (rainId);
	var d = new Set(snowId);
	var e = new Set(atmosphereId);
	var f = new Set(clearId);
	var g = new Set(cloudId);
	var h = new Set(extremeId);
	var dayLight;
	if (hourNow >= 6 && hourNow <= 18){
		console.log("Good day");
		dayLight = true;
	}else{
		dayLight = false;
	}
		// Change background image according to weather conditions and hour of the day
	if (a.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472930471/thunderstorm1_uhxbg2.jpg");
		
	}else if(b.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472930471/drizzle1_vzxn7s.jpg");
		
	}else if( c.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472930478/rain1_illywl.jpg");
		
	}else if(d.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472843912/avalanche_danger_p9v6q1.jpg");
		
	}else if(e.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473382645/haze-day2_lztgbz.jpg");
		
	}else if(f.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472843912/arizona_desert.jpg");
		
	}else if(g.has(weatherID) === true && dayLight == true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2650/v1472843912/cloudy_beach_rzey4m.jpg");
		
	}else if(h.has(weatherID) === true && dayLight === true){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473207578/extreme_iftjjo.jpg");
		
	}else if(a.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473216423/night-thunderstorm.jpg");
		
	}else if(b.has(weatherID) === true && dayLight == false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473216428/drizzle.jpg");
	}else if(c.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473217960/night-rain_fbrzif.jpg");
	}else if(d.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/v1473216425/snow_nelk8u.jpg");
	}else if(e.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473382646/haze-night_fzzcst.jpg");
		
	}else if(f.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473216430/city-scape_tbhxor.jpg");
	}else if(g.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473216439/photo-1442310205806-e3ff990dfd46_g7rkbl.jpg");
	}else if(h.has(weatherID) === true && dayLight === false){
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1473216423/night-thunderstorm.jpg");
	}else{
		$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/v1469635013/buda-1_g6faip.jpg");
	}

	});
	});
  
});

