// FUNCTIONS TO CHECK THE STRING AGAINST CARACTERS [] () and {}

function check(given_string) {
    const regex = new RegExp('((\[{1}\]{1})*(\({1}\){1})*(\{{1}\}{1})*)*');
    if(regex.test(given_string)) return true ;
    return false;
}