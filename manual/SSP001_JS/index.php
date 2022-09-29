<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>SSPART</title>
<link href="_css/indexHTMLcss.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="_images/ssp001_logo.ico">
</head>

<body>

<!-- The video -->
<video autoplay muted loop id="myVideo">
  <source src="_images/Dark Background Web.mp4" type="video/mp4">
</video>

<!-- Optional: some overlay text to describe the video -->
<div class="content">
<form method="post" action="index.php" id="menu">
	<div id="menubtn">
    <img src="_images/threelinenavicon0.png" title="Menu" alt="" onClick="closemenuDropDown()"/>
    </div>
</form>
<div id="videocontainer">
	<video autoplay controls id="videoElement">
	<source src="_videos/SSPART 3D.mp4">
	</video>
	<div id="videomenu2">
	<div id="vidbtn0" onClick="ssp001playBackMedia()">
	-Back
	</div>
	<div id="vidbtn0" onClick="ssp001playNextMedia()">
	Next+
	</div>
	</div>
</div>
<div id="videoplaylist" class="mymenussp0">
<?php

if( isset($_REQUEST['menutextfild']) && ($_REQUEST['menutextfild'])!="")
{
//**************File database******************
	$srch = $_REQUEST['menutextfild'];
	foreach(glob("_videos/*.*") as $filessp){
			if(   ( substr($filessp, (strlen($filessp)-strlen(".mp4")), strlen($filessp)) === ".mp4" )
			  && (strpos(strtolower($filessp),strtolower($srch),0))	)
			{
			$video_name = substr( $filessp, (strlen("_videos/")), strlen($filessp) );
	echo'<div id="playlistitem">
	<img src="_images/SSP skwis Anim sspart.png" width="72" height="72" alt="">
	<a href="javascript:void(0);" title="'.$filessp.'" onclick="playvidNoSpaces(this.title)">
	'.substr( $video_name, 0, (strlen($video_name)-4) ).'</a>
	</div>';
			}
	}
//**************File database******************
}
else
{
//********************************
	foreach(glob("_videos/*.*") as $filessp){
			if(   ( substr($filessp, (strlen($filessp)-strlen(".mp4")), strlen($filessp)) === ".mp4" )    )
			{
			$video_name = substr( $filessp, (strlen("_videos/")), strlen($filessp) );
	echo'<div id="playlistitem">
	<img src="_images/SSP skwis Anim sspart.png" width="72" height="72" alt="">
	<a href="javascript:void(0);" title="'.$filessp.'" onclick="playvidNoSpaces(this.title)">
	'.substr( $video_name, 0, (strlen($video_name)-4) ).'</a>
	</div>';
			}
	}
//********************************
}
?>
</div>
<div id="clearor"></div>
</div>


<!--<div id="menuDropDown" class="mymenussp0">---->

<script>
 var video = document.querySelector("#videoElement");
 
function stringReplaceAllspaces(Sourcez) {
//string=string.replace(/^s+|s+$/g, '');
//string=string.replace(/s/g,"%20");
	var temp = Sourcez
	var index = temp.indexOf(" ")
    while (index != -1) {
        temp = temp.replace(" ", "%20")
        index = temp.indexOf(" ")
    }
    return temp
}
	
function playvidNoSpaces(thevid){
viddeourl=stringReplaceAllspaces(thevid)
video.src = viddeourl;
video.play;
}
	
	Anaeeay = document.querySelectorAll("#playlistitem a");
	var home_video = new Array();
   for (var i=0; i<=(Anaeeay.length-1); i++)
   {
	  home_video[i]=Anaeeay[i].title;
   }
	
   var counttracks=0;  
function ssp001playNextMedia(){
	if(counttracks<(Anaeeay.length-1))
		{
		counttracks++;
		}
	else{
		counttracks=0;
		}
	var vidsspxxx=home_video[counttracks];
	playvidNoSpaces(vidsspxxx);
} 
function ssp001playBackMedia(){
	if(counttracks<0)
		{
		counttracks=(Anaeeay.length-1);
		}
	else{
		counttracks--;
		}
	var vidsspxxx=home_video[counttracks];
	playvidNoSpaces(vidsspxxx);
}
	
	video.addEventListener('ended', function() {
	this.pause()
	ssp001playNextMedia()
	}, false);
</script>
	
	
<script> 
	function closemenuDropDown(){	
 	var menuvideoplaylist = document.getElementById("videoplaylist");
 	var videocontainerElement = document.getElementById("videocontainer");
    if (menuvideoplaylist.className === "mymenussp0") {
        menuvideoplaylist.className = "mymenussp1";
		videocontainerElement.style.width = "60%";
    	} else {
		menuvideoplaylist.className = "mymenussp0";
		videocontainerElement.style.width = "100%";
		}
	}
</script>

</body>
</html>
