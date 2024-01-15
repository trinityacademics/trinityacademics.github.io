function responsiveNav() {
    var nav = document.getElementById("navbar");
    console.log(nav.className);
    if (nav.className === "topnav") {
        nav.className += " responsive";
        console.log(nav.className)
    } else {
        nav.className = "topnav";
        console.log(nav.className)
    }
}
