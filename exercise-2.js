function balikString (string) {
    var balik = ""
    for (var i = string.length - 1; i >= 0; i--){
        var balik = balik + string[i];
    }
    return balik;
}

console.log(balikString("hello world!"));