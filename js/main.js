// My own arbitrary use of isMobile, as an example
(function () {
    // I only want to redirect iPhones phones and Android.
    if (isMobile.apple.phone || isMobile.android.phone) {

        // Get the body by ID and bind : isMobileAddClass class
        // The class will be added with ( apple.phone and android.phone ) as we wrote on the above line
        var element = document.getElementById("bodyID");
        element.classList.add("isMobileAddClass");

        // by checking if a "noredirect" cookie exists
        if ( document.cookie.indexOf(NO_REDIRECT) === -1 ) {
            document.location = MOBILE_SITE;
        }
    }
})();
