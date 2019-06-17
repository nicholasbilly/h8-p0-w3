/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;
 
  for (i = 0; i < cars.length; i++) {
    if (cars[i] === "A") {
      a++
    }
    if (cars[i] === "B") {
      b++
    }
    if (cars[i] === "C") {
      c++
    }
    if (cars[i] === "D") {
      d++
    }
  }
  var persenA = a / cars.length;
  var persenB = b / cars.length;
  var persenC = c / cars.length;
  var persenD = d / cars.length;
 
return ['A', persenA, 'B', persenB, 'C', persenC, 'D', persenD];
}
console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/