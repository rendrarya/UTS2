let kotak1 = document.getElementById('kotak1');

document.onmousemove = (event) => {
    var x = event.clientX;
    var y = event.clientY;
    kotak1.style.left = x - (kotak1.clientWidth/2) + "px";
    kotak1.style.top = y - (kotak1.clientWidth/2) + "px";
}