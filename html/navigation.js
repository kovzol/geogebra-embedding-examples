function addGithubLink(){
    var filename = window.location.pathname.split("/").slice(-1)[0];
    var menu =
        '<a href="#" id=drawerToggle class="material-icons">menu</a>' +
        '<div id=githubLink><a href="https://github.com/kovzol/geogebra-embedding-examples/blob/master/html/' + filename + '">View on GitHub</a></span>';
    var menuDiv = document.createElement('div');
    menuDiv.className = "sample-toolbar";
    menuDiv.innerHTML = menu;
    document.body.insertBefore(menuDiv, document.body.children[0]);

}

function addDrawer(){
    var filename = window.location.pathname.split("/").slice(-1)[0];
    var menu =
        '<h2>GeoGebra Apps</h2><h4>Examples</h4><ul><li> <a href="example-single.html">Single applet</a></li>' +
        '<li> <a href="example-3d.html">Single applet 3D</a></li>' +
        '<li> <a href="example-multiple.html">Two applets</a></li>' +
        '<li> <a href="example-api.html">Single applet + API</a></li>' +
        '<li> <a href="example-api-multiple.html">Two applets + API</a></li>' +
        '<li> <a href="example-api-save-state.html">Single applet + API for saving</a></li>' +
        '<li> <a href="example-graphing.html">Graphing Calculator with Toolbar</a></li>' +
        '<li> <a href="example-geometry.html">Geometry with Toolbar</a></li>' +
        '<li> <a href="example-tools.html">GeoGebra Classic with Toolbar</a></li>' +
        '<li> <a href="example-popup-graphing.html">Graphing Calculator in a Popup Dialog</a></li>' +
        '<li> <a href="example-popup-geometry.html">Geometry in a Popup Dialog</a></li>' +
        '<li> <a href="example-popup.html">GeoGebra Classic in a Popup Dialog</a></li>' +
        '<li> <a href="example-api-listeners.html">Event listeners</a></li>' +
        '<li> <a href="example-api-sync.html">Communication between applets</a></li>' +
        '<li> <a href="example-exercise.html">Exercise</a></li>' +
        '<li> <a href="example-animation.html">Animation</a></li>' +
        '<li> <a href="example-voronoi.html">Voronoi diagram</a></li>' +
        '<li> <a href="example-minimum-spanning-tree.html">Minimum spanning tree</a></li>' +
        '<li> <a href="example-djp.html">DJP algorithm</a></li>' +
        '<li> <a href="example-provedetails.html">ProveDetails</a></li></ul>' +

        '<h4>Documentation</h4><ul><li><a href="https://www.geogebra.org/manual/en/Reference:GeoGebra_Apps_Embedding">GeoGebra Apps Embedding</a></li>' +
        '<li><a href="https://www.geogebra.org/manual/en/Reference:JavaScript">JavaScript API</a></li></ul>';

    var menuDiv = document.createElement('div');
    menuDiv.id = "drawer";
    menuDiv.innerHTML = menu;
    document.body.insertBefore(menuDiv, document.body.children[1]);


    var glassDiv = document.createElement('div');
    glassDiv.id = "drawerGlass";
    document.body.insertBefore(glassDiv, document.body.children[1]);

    document.getElementById("drawerToggle").addEventListener("click", function () {
        var visible = menuDiv.style.display == "block";
        console.log(visible);
        if(!visible){
            menuDiv.style.display = glassDiv.style.display = "block";
        }else {
            menuDiv.className = glassDiv.className = "animateOut";
            var callback = function(){
                menuDiv.removeEventListener("animationend",callback);
                menuDiv.style.display = glassDiv.style.display = "none";
                menuDiv.className = glassDiv.className = "";
            };
            menuDiv.addEventListener("animationend",callback);
        }
    });
}

function loadNav(){
    insertStyle("https://fonts.googleapis.com/icon?family=Material+Icons");
    addGithubLink();
    addDrawer();
}

function insertStyle(url){
    var styleEl = document.createElement('link');
    styleEl.setAttribute("href", url);
    styleEl.setAttribute("type", "text/css");
    styleEl.setAttribute("rel", "stylesheet");
    document.getElementsByTagName("head")[0].appendChild(styleEl);
}

insertStyle("navigation.css");


if (window.addEventListener) {
    window.addEventListener('load', loadNav, false);
}
else if (window.attachEvent) {
    window.attachEvent('onload', loadNav);
}

