
function menuToggle(){
    let nav = document.getElementById("nav");

    if(nav.classList.contains("show-menu") == false){
        nav.classList.add("show-menu");
    } else {
        nav.classList.remove("show-menu");
    }
}