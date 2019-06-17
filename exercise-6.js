
function angkaPalindrome(num) {
    var angkaAwal = num
    var check = true
    while (check) {
    var angka = num.toString();
    var split = angka.split('');
    var balik = split.reverse();
    var angkaBalik = balik.join('');
        if (num == angkaBalik) {
            if (angkaAwal == num) {
                num ++
            } else {
                check = false;
            }
        } else {
            num++
        }
    }
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001