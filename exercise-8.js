var num = 0;

function pasanganTerbesar (num) {
    var a = num.toString().split('');
    var besar = Math.max.apply(null, a);
    var num = a.join('');
    var index = num.indexOf(besar);
    return num.substr(index, 2);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99