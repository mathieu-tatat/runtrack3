
function nombrepremier(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i == 0) return false;

        else {
            return true
        }
    }

}

function sommenombrespremiers(n1, n2) {
    if (nombrepremier(n1) != false && nombrepremier(n2) != false) {
        var total = n1 + n2;
        return console.log(total + " ce sont des nombres premier")
    } else {
        console.log('faux ces nombres ne sont pas premier');
    }

}

sommenombrespremiers(2,11);
