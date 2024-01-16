var inRoot = false;
class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
                nav {
                    position: sticky;
                    top: 0;
                    margin: 0px;
                    padding; 0px;
                    height: 100px;
                    background-image: linear-gradient(to bottom, #D4FCFF, #FFFAAF);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                nav a.icon {
                    color: black;
                    float: right;
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 100px;
                    height: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .topnav.responsive a:not(:last-child) {
                    display: block;
                }
                .topnav a:not(:last-child) {
                    display: none;
                    color: black;
                    text-align: center;
                    padding: 10px;
                    margin: 0px;
                    background-color: #FFFAAF;
                    transition: background-color 0.5s ease 0s;
                }
                .topnav a:first-child {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    float: none;
                    padding: 0px;
                    margin: auto;
                    background: none;
                }
                .topnav a:first-child:hover {
                    background: none;
                }
                nav a:hover:not(:last-child) {
                    background-color: #D4FCFF;
                    transition: background-color 0.5s ease 0s;
                }
                nav a.active {
                    background-color: #75F6FF;
                }
            </style>
            <nav class="topnav" id="navbar">
                <a href="../index.html">
                    <img src=${inRoot === true ? "img/title.png" : "../img/title.png"} alt="Home" style="width:280px;margin-top:10px">
                </a>
                <a href=${inRoot === true ? "math/math.html" : "../math/math.html"}>Mathematics</a>
                <a href=${inRoot === true ? "sci/sci.html" : "../sci/sci.html"}>Science</a>
                <a href=${inRoot === true ? "ss/ss.html" : "../ss/ss.html"}>Social Studies</a>
                <a href=${inRoot === true ? "ela/ela.html" : "../ela/ela.html"}>English</a>
                <a href="javascript:void(0);" class="icon" onclick="responsiveNav()">
                    <i class="fa fa-bars"></i>
                </a>
            </nav>
        `;
    }
}
customElements.define('nav-component', Nav);
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
function rootPath() {
    inRoot = true;
}
function relPath() {
    inRoot = false;
}