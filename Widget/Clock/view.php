<script>
window.onload = function() {getTime();}
	// 
	function getTime() {
		var time = new Date();
	    var h = time.getHours();
	    var m = time.getMinutes();
	    var s = time.getSeconds();
	    m = checkTime(m);
	    s = checkTime(s);
	    document.querySelector('.clock').innerHTML = h + ":" + m + ":" + s;
	    var t = setTimeout(function(){getTime()},500);
	}


function checkTime(i) {
	    if (i<10) {i = "0" + i};  // +0 if <10 //
	    return i;
	}
</script>

<style>
    /*.clock {font-weight:300;font-size:5em;font-family: 'Lato', sans-serif;}*/
</style> 

<div class="row text-center">
	<h2 class="clock clock-widget">00:00:00</h2>
</div>