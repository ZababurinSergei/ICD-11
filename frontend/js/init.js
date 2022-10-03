
var langbuttonHTML = '<div id="langarea">'+
                     '   <a id="langbutton" class="btn-small light-blue darken-1" href="#" data-target="dropdown-language"><img id="mlimg" alt="language change icon" src="/img/globe.svg"><span id="langbuttontext"></span></a>'+
                     '   <ul id="dropdown-language" class="dropdown-content">'+
                     '      <li><a href="../ar">Arabic</a></li>' +
                     '      <li><a href="../zh">Chinese</a></li>' +
                     '      <li><a href="../en">English</a></li>' +
                     '      <li><a href="../fr">French</a></li>' +
                     '      <li><a href="../ru">Russian</a></li>' +
                     '      <li><a href="../es">Spanish</a></li>' +                     
                     '   </ul>'+
                     '</div >';

(function ($) {
    $(function () {

        var langFromUrl = window.location.href.replace(window.location.origin, "");
        langFromUrl = langFromUrl.replace(/\//g, "");
        $(langbuttonHTML).insertBefore("#index-banner");
        $("#langbuttontext").text(" " + langFromUrl.substring(0, 2));
                
        $('.button-collapse').sidenav(); //$('.button-collapse').sideNav(); // used by materialize v0.97.0
        $('.parallax').parallax();

        $('#langbutton').dropdown({
            "alignment": ($("body").hasClass("rtl")) ? "left" : "right",
            "hover": false
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space

