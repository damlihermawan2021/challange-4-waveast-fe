/***************************************************************************************
*                                                                                      *
*                                                                                      *
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function dashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *
*  Dash Insert                                                                         *
*  Buat sebuah function yang akan memasukkan dashes ('-') di antara 2 angka            *
*  ganjil di dalam str. Contoh: jika str adalah 454793 maka yang akan di return adalah *
*  4547-9-3. Jangan menghitung 0 (nol) sebagai angka ganjil.                           *
*                                                                                      *
*                                                                                      *
***************************************************************************************/


function dashInsert(str) {
 // write your magic here!
 console.log(str)
 return str
}


console.log(dashInsert('450093')) // 45009-3
// console.log(dashInsert('554297')) // 5-5429-7


module.exports = {
  dashInsert,
};
