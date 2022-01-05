// FUNCTIONS TO CHECK THE STRING AGAINST CARACTERS [] () and {}

function check(given_string) {
    const regex = new RegExp('((\[{1}\]{1})*(\({1}\){1})*(\{{1}\}{1})*)*');
    if(regex.test(given_string)) return true ;
    return false;
}

// SCROLL TO SPECIFIC SECTION ON PAGE AFTER PAGE LOADED (Jquery)
function scroll(){
    // Handler for .ready() called.
    $('html, body').animate({
        scrollTop: $('#what').offset().top
    }, 'slow'); 
}