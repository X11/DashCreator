<div class="sound-board text-center">
	<div class="btn-group-vertical">
 	   	<a class="btn btn-default shots-fired">Shots fired</a>
    	<a class="btn btn-default airhorn">Airhorns</a>
    	<a class="btn btn-default wow">Wow</a>
    	<a class="btn btn-default sanic">Sanic</a>
	</div>
</div>

<script>
	var shots = new Audio('../Widget/Soundboard/audio/shots.mp3');
	var airhorn = new Audio('../Widget/Soundboard/audio/airhorn.mp3');
	var wow = new Audio('../Widget/Soundboard/audio/wow.mp3');
	var sanic = new Audio('../Widget/Soundboard/audio/sanic.mp3');
	$(".shots-fired").click(function(){shots.play();})
	$(".airhorn").click(function(){airhorn.play();})
	$(".wow").click(function(){wow.play();})
	$(".sanic").click(function(){sanic.play();})
</script>