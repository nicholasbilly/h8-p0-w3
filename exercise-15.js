function groupAnimals(animals) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var binatang = [];

    for (var i = 0; i < huruf.length; i++) {
        var abc = [];
        for (var j = 0; j < animals.length; j++) {
            if (animals[j][0] == huruf[i]) {
                abc[abc.length] = animals[j];
            }
        }

        if (abc.length > 0) {
            binatang[binatang.length] = abc;
        }
    }
    return binatang;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]