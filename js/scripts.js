
$(document).ready(function() {
    // just a little bit easier than using this in the html, and cleaner!
    if ($("#sideNav").length) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            rootMargin: "0px 0px -40%",
        });
    }
});
