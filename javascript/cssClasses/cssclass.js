/* SETTING CSS AT */
document.addEventListener("DOMContentLoaded", function(){
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    function styleButton(){
        button1.style.backgroundColor = "pink";
        button1.style.padding = `${10}px ${30}px`;
        button1.style.border = "none";
        button1.style.fontWeight = "bold";
        button1.style.borderRadius = "10px";
        button1.style.cursor = "pointer";
        button1.style.color = "white";

        /*Copy to another id */
        button2.setAttribute("style", button1.getAttribute("style"))
    }

    styleButton();
})


