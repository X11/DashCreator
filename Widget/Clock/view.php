<div class="row text-center">
	<h1 id="clock-widget" class="clock clock-widget">00:00:00</h1>
</div>

<script type="text/javascript" charset="utf-8">
    function getTime(){
        return (new Date()).toLocaleString().split(' ')[1];
    };
    var el = document.querySelector('#clock-widget');
    el.innerHTML = getTime();
    setInterval(function(){
        el.innerHTML = getTime();
    }, 1000);
</script>
