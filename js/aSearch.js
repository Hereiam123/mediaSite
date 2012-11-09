var printResp;

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
}

else
{
    // ClientLocation not found or not populated
    // so perform error handling
	printResp="No location found";
}



$(document).ready(function(){
	$('#submit').click(function() { 
		/*
		$.ajax({
			type: 'GET',
			url: 'getLocation.php',
			dataType: 'html',
			success: function(response) {
				$('#theResults').html(response);
			}
		});*/
		$('#theResults').html(printResp);
	});
	
	$('#submit2').click(function() { 
		var searchVal = $('#movText').val();
		$.ajax({
			type: 'GET',
			url: 'getLocation.php',
			data: 'title='+searchVal,
			dataType: 'html',
			success: function(response) {
				$('#movResults').html(response);
			}
		});
	});
});
