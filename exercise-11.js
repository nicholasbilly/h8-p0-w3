function tentukanDeretAritmatika(arr) {
    var balik = arr.reverse();
    var deret = [];
    for (var i = 0; i < arr.length - 1; i++) {
      deret[i] = arr[i] - arr[i + 1];
    }
    for (var j = 0; j < deret.length; j++) {
      if (deret[j] === deret[j + 1]) {
        return true;
      } else {
        return false;
      }
    }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false