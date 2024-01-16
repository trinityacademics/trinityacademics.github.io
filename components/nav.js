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
                    max-height: 160px;
                    background-image: linear-gradient(to bottom, #D4FCFF, #FFFAAF);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                nav a.icon {
                    color: black;
                    float: right;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    height: 160px;
                    width: 80px;
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
                <a href="../home/home.html">
                    <img src="../img/title.png" alt="Home" style="max-height:125px;width:auto;max-width:100vw;padding:10px" id="banner">
                </a>
                <a href="../math/math.html">Mathematics</a>
                <a href="../sci/sci.html">Science</a>
                <a href="../ss/ss.html">Social Studies</a>
                <a href="../ela/ela.html">English</a>
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