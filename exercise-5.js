function palindrome(kata) {
    var a = kata.split("");
    var b = a.reverse();
    var c = b.join("")

    if (kata === c) {
        return true;
    } else {
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); 
console.log(palindrome('blanket')); 
console.log(palindrome('civic')); 
console.log(palindrome('kasur rusak')); 
console.log(palindrome('mister')); 