var printResp;
var lonGi;
var laTi;
var map;

if(google.loader.ClientLocation)
{
    visitor_lat = google.loader.ClientLocation.latitude;
    visitor_lon = google.loader.ClientLocation.longitude;
    visitor_city = google.loader.ClientLocation.address.city;
    visitor_region = google.loader.ClientLocation.address.region;
    visitor_country = google.loader.ClientLocation.address.country;
    visitor_countrycode = google.loader.ClientLocation.address.country_code;
	printResp="<p>You are at latititude: "+visitor_lat+", ";
	printResp+="Longitude: "+visitor_lon+"</p> ";
	printResp+="<p>Your City: "+visitor_city+", ";
	printResp+="Your Country: "+visitor_country+"</p>";
	lonGi=visitor_lon;
	laTi=visitor_lat;
}

else
{
    // ClientLocation not found or not populated
    // so perform error handling
	printResp="No location found";
}


function initialize() {
  var mapOptions = {
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
	center: new google.maps.LatLng(laTi, lonGi)
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyA3ue03Eatsdpnv-c4SvffPhwfPax1hLU0&sensor=true&callback=initialize";
  document.body.appendChild(script);
}

$(document).ready(function(){
	$('#submit').click(function() {
		loadScript();
		$('#printDat').html(printResp);
		/*
		$.ajax({
			type: 'GET',
			url: 'getLocation.php',
			dataType: 'html',
			success: function(response) {
				$('#theResults').html(response);
			}
		});*/
	});
	
	$('#submit2').click(function() { 
		var searchVal = $('#movText').val();
		$.ajax({
			type: 'GET',
			url: 'getMovie.php',
			data: 'title='+searchVal,
			dataType: 'html',
			success: function(response) {
				$('#movResults').html(response);
			}
		});
	});
});
