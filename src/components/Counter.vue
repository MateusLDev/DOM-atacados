<template>
    <div class="counter">
        <div class="wrap">
            <h1 class="count day">10</h1>
            <p class="description">DIAS</p>
        </div>
        <div class="wrap">
            <h1 class="count hour">21</h1>
            <p class="description">HORAS</p>
        </div>
        <div class="wrap">
            <h1 class="count minute">06</h1>
            <p class="description">MINUTOS</p>
        </div>
        <div class="wrap">
            <h1 class="count second">45</h1>
            <p class="description">SEGUNDOS</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var countDate = new Date('Jan 25, 2021 00:00:00').getTime();

        function newYear(){
            var now = new Date().getTime();
            var gap = countDate - now;
            
            var second = 1000;
            var minute = second *60;
            var hour = minute * 60;
            var day = hour * 24;

            var d = Math.floor(gap / (day));
            var h = Math.floor((gap % (day)) / (hour));
            var m = Math.floor((gap % (hour)) / (minute));
            var s = Math.floor((gap % (minute)) / (second));

            document.getElementsByClassName('day').innerText = d;
            document.getElementsByClassName('hour').innerText = h;
            document.getElementsByClassName('minute').innerText = m;
            document.getElementsByClassName('second').innerText = s;
        }

        setInterval(function(){
            newYear();
        },1000)
    }
}
</script>

<style>

</style>