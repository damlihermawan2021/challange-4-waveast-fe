/***************************************************************************************
*                                                                                      *
*                                                                                      *
*  Letter Capitalize                                                                   *
*  Using the JavaScript language, have the function LetterCapitalize(str) take the     *
*  str parameter being passed and capitalize the first letter of each word. Words      *
*  will be separated by only one space.                                                *
***************************************************************************************/

function letterCapitalize(str) { 
 // magic 
 let splitStr = str.toLowerCase().split(' ');
   for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

console.log(letterCapitalize('waveast')) // Waveast
console.log(letterCapitalize('nasi padang')) // Nasi Padang
console.log(letterCapitalize('winner Winner Chicken dinner')) // Winner Winner Chicken Dinner


module.exports = {
  letterCapitalize
}