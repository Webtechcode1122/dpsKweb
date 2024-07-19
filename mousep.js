const cdot = document.querySelector(".c_dot");
const coutline = document.querySelector(".c_outline");

window.addEventListener('mousemove',function(e){
    
    var posX = e.clientX
    var posY = e.clientY

    cdot.style.left = `${posX}px`;
    cdot.style.top = `${posY}px`;
    coutline.style.left = `${posX}px`;
    coutline.style.top = `${posY}px`;
    coutline.animate({left: `${posX}px`,
top: `${posY}px`},{duration: 500, fill: "both"})
});

