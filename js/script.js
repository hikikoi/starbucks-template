function imgSlider(e) {
    document.querySelector('.starbucks').src = e;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}