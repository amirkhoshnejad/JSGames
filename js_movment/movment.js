document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("MyButton");
    const img = document.getElementById("AliPic");
    const step = 20;

    let top=0;
    let left=0;
    document.addEventListener("keydown", (event) => {
        switch(event.key) {
            case "ArrowUp":
                top -= step;
                break; 
            case "ArrowDown":
                top += step;
                break;
            case "ArrowLeft":
                left -= step;
                break;
            case "ArrowRight":
                left += step;
                break;
        }
        img.style.top = top + "px";
        img.style.left = left + "px";

        left = Math.max(0, Math.min(window.innerWidth - img.width, left));
        top = Math.max(0, Math.min(window.innerHeight - img.height, top));
    });
    
    btn.addEventListener("click", () => {
        if(img.style.display === "none"||img.style.display === "") {
            img.style.display = "block";
        } else {
        img.style.display = "none";
        } 
    });
});