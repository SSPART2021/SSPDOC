<?php
session_start();



//******************SSPAI1_FNS**************************
include('../../../../ai1_connector.php');
//******************SSPAI1_FNS**************************

?>
<html>
<head>
<head>
<link href="../../sspbkscss.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="layout.css" type="text/css" />
<script type="text/javascript" src="jquery.min.js"></script>
<style type="text/css">
<!--
@import url("fl_left.css");
-->
</style>
<!-- fl_left Only Scripts -->
<script type="text/javascript" src="jquery.cycle.min.js"></script>
<script type="text/javascript">
$(function() {
    $('#hpage_slider').after('<div id="fsn"><ul id="fs_pagination">').cycle({
        timeout: 5000,
        fx: 'fade',
        pager: '#fs_pagination',
        pause: 1,
        pauseOnPagerHover: 0
    });
});
</script>
<!-- End fl_left Only Scripts -->
</head>

<body onLoad="newGame(false)">

<ul class="topnav" id="myTopnav">
  <li><a class="active" href="../../index.html">Content</a></li>
  <li><a href="../../about.html">About</a></li>
  <li><a href="../../../../">SSP001</a></li>
  <li class="icon">
    <a href="javascript:void(0);" style="font-size:15px;" onclick="myFunction()">
	<img src="_images/three line navicon.png" width="70" height="70">
	</a>
  </li>
</ul>

<div class="bodycontent">
  <!-- -->
  
<!-- -->
      <div class="fl_left">
        <div id="hpage_slider">
		<?php
			$qryxxemail='select * from `content` ';
			$qryxxemailresult = mysqli_query($con, $qryxxemail);
			$number_Of_Raws=mysqli_num_rows($qryxxemailresult);
			
			for($i=0;$i<$number_Of_Raws;$i++){
			$RowxxXBviewinerslideshowDataRow=mysqli_fetch_array($qryxxemailresult);
			echo'<div class="item"><img id="sspai1_c_img" src="../../../../'.$RowxxXBviewinerslideshowDataRow['uploaded_image'].'" /></div>';
			}
		?>
        </div>
      </div>
<!-- -->



<xmp>
<!-- sumple code -->
<html>
<head>
<link rel="stylesheet" href="layout.css" type="text/css" />
<script type="text/javascript" src="jquery.min.js"></script>
<style type="text/css">
<!--
@import url("fl_left.css");
-->
</style>
<!-- fl_left Only Scripts -->
<script type="text/javascript" src="jquery.cycle.min.js"></script>
<script type="text/javascript">
$(function() {
    $('#hpage_slider').after('<div id="fsn"><ul id="fs_pagination">').cycle({
        timeout: 5000,
        fx: 'fade',
        pager: '#fs_pagination',
        pause: 1,
        pauseOnPagerHover: 0
    });
});
</script>
<!-- End fl_left Only Scripts -->
</head>


<body>
<!-- -->
      <div class="fl_left">
        <h2>SSP</h2>
        <div id="hpage_slider">
          <div class="item"><img src="images/demo/featured-project/1.jpg" alt="" /></div>
          <div class="item"><img src="images/demo/featured-project/2.jpg" alt="" /></div>
          <div class="item"><img src="images/demo/featured-project/3.jpg" alt="" /></div>
          <div class="item"><img src="images/demo/featured-project/4.jpg" alt="" /></div>
          <div class="item"><img src="images/demo/featured-project/5.jpg" alt="" /></div>
        </div>
      </div>
<!-- -->
</body>


</html>
<!-- -->
</xmp>


<!-- -->
</div>

<script>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
</script>

</body>
</html>