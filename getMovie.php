<?php

	$mov=$_GET['title'];
	$mov=explode(' ',$mov);
	$mov=implode('+',$mov);
	$url = 'http://imdbapi.org/?vq=';
	$url .= $mov;
	$url .= "&yg=0&limit=5";

	
	$ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $curlResponse = curl_exec($ch);
    curl_close($ch);
	
	$jsonObject = json_decode($curlResponse);
	
	
	/*if(!is_object($jsonObject))
	{
		print "It's not working.";
	}
	else
	{*/
	
	/*foreach($jsonObject as $json)
	{
		print $json->title."</br>";	
	}*/
	
	$url2='http://gdata.youtube.com/feeds/api/videos/?v=2&alt=json&max-results=3&q=';
	$url2.=$mov;

	
	$ch = curl_init();
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url2);
    $curlResponse = curl_exec($ch);
    curl_close($ch);
	
	$jsonObject2 = json_decode($curlResponse, true);
	
	
	foreach($jsonObject2['feed']['entry'] as $json2)
	{
		print "<div class='embVid'>";
		$href=$json2['content']['src'];
		print "<embed width='300' height='200' src='".$href."'>";
		print "</embed>";
		print "</div>";
	}
?>