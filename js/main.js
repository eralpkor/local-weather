// API Key 6514690fd982377cba22dc9a829e7f80




$(document).ready(function(){
	var lon;
	var lat;
	$.getJSON("http://ip-api.com/json", function(data2){
		lat = data2.lat;
		lon = data2.lon;

	var thunderstormId = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
	var drizzleId = [300, 301, 302, 310, 311, 312, 313, 314, 321];
	var rainId = [500, 501, 502, 503, 504, 511, 520, 521, 422, 531];
	var snowId = [600, 601, 602, 611, 612, 615, 616, 620, 621, 622];
	var atmosphereId = [701,711, 721, 731, 741, 751, 761, 762, 771, 781];
	var clearId = [800];
	var cloudId = ["801", "802", "803", "804"];
	var extremeId = [900, 901, 902, 903, 904, 905, 906];
	var additionalId = [951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962];

//var body = document.getElementByTagName("body")[0];
	
	var fahTemp;
	var celTemp;
	var windSpeedMi;
	var windSpeedKm;

	
	// if (navigator.geolocation) {
 //  navigator.geolocation.getCurrentPosition(function(position) {

 //  	lon = position.coords.longitude;
 //  	lat = position.coords.latitude;

	var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=6514690fd982377cba22dc9a829e7f80";

  	 $.getJSON(api, function(data){

  	 	var weatherType = data.weather[0].description;
		var kelvin = data.main.temp;
		var windSpeed = data.wind.speed;
		var location = data.name;
		var mainId = data.weather[0].id; // to get parameters (Rain, Snow, Extreme, Clouds etc.)
		//var icon = data.weather[0].icon;
		// Kelvin to Fahreneit formula
		fahTemp = kelvin * (9 / 5) - 459.67; //fahTemp = (kelvin * (9 / 5) - 459.67).toFixed(1);
		// Kelvin to celcius
		celTemp = kelvin - 273;
		// If user requests celcius vs fahrenheit
		var changeTemp = true;
		// If request km vs mph
		var changeWindSpeed = true;
		// console.log(data.coord.lat);
		windSpeedMi = (2.237 * windSpeed).toFixed(2);
		windSpeedKm = windSpeed.toFixed(2);
		console.log(data.coord.lon);
		console.log(location);
		console.log(api);
		console.log(mainId);
		//console.log(icon);
		console.log(celTemp.toFixed(2));
		console.log(weatherType);

		var celTemp = celTemp.toFixed(1);
		var fahTemp = fahTemp.toFixed(1);

		// Change background image on mouse click
		// $("#clickMe").click(function() {
		// 	src = $("#hero").attr("src"); //1
		// 	if (src) {
  //     $("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,q_100,w_2560/v1472843912/arizona_desert.jpg");
  //     	}
  // 		});

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
		
		//$('p').css({"color":"blue"});
		//$('body').css("background-image", "url(https://hd.unsplash.com/photo-1465572089651-8fde36c892dd)");
		//$("#hero").html(function)

		// if ("mainId").filter(cloudId) {
		// 	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472927594/clouds_q6jxw4.jpg");
		// }
if(mainId === rainId[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]){
	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472930478/rain1_illywl.jpg");
}else if(mainId === cloudId[0],[1],[2],[3]){
	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472927594/clouds_q6jxw4.jpg");
}else if (mainId === drizzleId[0],[1],[2],[3],[4],[5],[6],[7],[8]){
	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472930471/thunderstorm1_uhxbg2.jpg");
}else if (mainId == clearId[0]){
	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472843912/arizona_desert.jpg");//, $("#weatherIcon").css("background-image", "url(../img/rain_showers.png)");//$("#weatherIcon").replaceWith(iconSunny);
	console.log(clearId[0]);
}



//document.write(greeting);
// 		// if(fahTemp > 80){
// 		// 	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,q_100,w_2560/v1472843912/arizona_desert.jpg");
// 		// 	//$('body').css("background-image", "url(https://hd.unsplash.com/photo-1465572089651-8fde36c892dd)");
// 		// }else if(fahTemp > 70){
// 		// 	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,w_2560/v1472843912/cloudy_beach_rzey4m.jpg");
// 		// 	/*$('#hero').css("background", "url(http://res.cloudinary.com/default-ek/image/upload/c_scale,w_1920/v1472843912/cloudy_beach_rzey4m.jpg)");*/
// 		// }else if(fahTemp > 60){
// 		// 	$("#hero").backstretch("https://res.cloudinary.com/default-ek/image/upload/c_scale,q_100,w_2560/v1472843913/cloud_mountain_f6isvl.jpg");
			


	});
	});
  

});