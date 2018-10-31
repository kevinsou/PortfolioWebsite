var about = document.querySelector(".about");
var portfolio = document.querySelector(".portfolio");


about.addEventListener("mouseover", addLine);
portfolio.addEventListener("mouseover", addLine);
about.addEventListener("mouseout", deleteLine);
portfolio.addEventListener("mouseout", deleteLine);

//functions
function addLine(event){
    //console.log("test");
    event.target.classList.toggle("done");
}
function deleteLine(event){
    event.target.classList.toggle("done");
}