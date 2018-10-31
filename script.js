var about = document.querySelector(".nav-link");
var portfolio = document.querySelector(".portfolio");


about.addEventListener("mouseover", toggle);
//portfolio.addEventListener("mouseover", addLine);
about.addEventListener("mouseout", toggle);
//portfolio.addEventListener("mouseout", deleteLine);

//functions
function toggle(event){
    console.log("test");
    event.target.classList.toggle("done");
}
