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
function test() {
    var h3 = document.getElementsByTagName("h3");
    if (h3.className === "red") {
        h3.className += "blue";
        console.log(h3.className);
    } else {
        h3.className = "red";
        console.log(h3.className);
    }
}
