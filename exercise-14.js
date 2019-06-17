function mengelompokkanAngka(arr) {
    var genap = [];
    var ganjil = [];
    var lipat3 = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            genap[genap.length] = arr[i];
        }
    }
    
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] % 2 === 1 && arr[j] % 3 !== 0) {
            ganjil[ganjil.length] = arr[j];
        }
    }

    for (var k = 0; k < arr.length; k++) {
        if (arr[k] % 3 === 0) {
            lipat3[lipat3.length] = arr[k];
        }
    }

    return [genap, ganjil, lipat3];

  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]