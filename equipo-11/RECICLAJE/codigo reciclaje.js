'<'script>
var logo = document.getElementById('reciclaje')
deg = 1;
setInterval (function()   {logo.style.transformOrigin = "10, 10";
logo.style.transform = "rotateX (" + deg + "deg)";
logo.style.transform = "rotateY (" + deg + "deg)";
deg = (deg + 1) % 360}, 10;
</script>