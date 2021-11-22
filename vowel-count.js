/***************************************************************************************
*                                                                                      *
*                                                                                      *
* Diberikan sebuah function untuk menghitung jumlah huruf vocal.                       *
* Sebagai contoh:                                                                      *
* Input: makan                                                                         *
* Output: 2                                                                            *
*                                                                                      *
*                                                                                      *
***************************************************************************************/


function vowelCount(str) {
  let totalVowel = 0;
  let vowels = 'aeiou';
  for(let i = 0; i<str.length;i++){
    if(vowels.indexOf(str[i].toLowerCase())> -1){
      totalVowel++;
  }
  }
  return `${totalVowel}`;
}

console.log(vowelCount('makan)) // 2 
module.exports = {
  vowelCount,
}