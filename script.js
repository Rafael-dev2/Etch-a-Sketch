canvas = document.querySelector("#Sketch");
for(i = 0;i < 5;i++){
    pixel = document.createElement("div");
    pixel.setAttribute("style","background-color: blue");
    pixel.setAttribute("style","border-radius: 3px");
    pixel.textContent = "ola";
    canvas.appendChild(pixel);
}