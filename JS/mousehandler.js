const cursor = document.querySelector(".cursor");
const innerPoint = document.querySelector('.inner-point');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', "top: "+(e.pageY - 15)+"px; left: "+(e.pageX - 15)+"px;")
    cursor.style.opacity = 1;
})

document.addEventListener('mousemove', e => {
    innerPoint.setAttribute('style', "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px;")
    innerPoint.style.opacity = 1;
})

document.addEventListener('mousedown', () => {
    cursor.classList.add('click');
    setTimeout(clearAnim, 100);
})

function clearAnim(){
    cursor.classList.remove('click')
}

