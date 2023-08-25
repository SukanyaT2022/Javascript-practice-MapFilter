let num = [1,2,3,4,5,6,7,8,9]
let letter = ["apple", "cat", "bee", "ant", "beaver", 'cancoon']
//change number use map
function doubleMap(num){
return num*2
}
var newArray = num.map(doubleMap)

var changeNumber = ""
document.getElementById("changeNum").innerHTML = changeNumber
//print every value use loop
for (i=0; i<newArray.length; i++){
    changeNumber = changeNumber+newArray[i]+ ",&nbsp"
}
document.getElementById("changeNum").innerHTML = changeNumber


//show original
var original =""
document.getElementById("originalNum").innerHTML = original
//print every value use loop
for (i=0; i<num.length; i++){
    original = original+num[i]+ ",&nbsp"
}
document.getElementById("originalNum").innerHTML = original


//filter show only even number
function filterValue(num){
return num%2 == 0

}
var containEvenNum = num.filter(filterValue)

var emptyFilter = ""
document.getElementById("filterNum").innerHTML = emptyFilter
for (i=0; i<containEvenNum.length; i++){
   emptyFilter = emptyFilter+containEvenNum[i]+ ",&nbsp"
}
document.getElementById('filterNum').innerHTML=emptyFilter


//filterLetter -- only word start with letter a
//charAt(0) o is check position at position 0
function filterLetter(letter){
    return letter.charAt(0)=="a"

}
var filterLetterArray = letter.filter(filterLetter)

var emptyLetter = " "
document.getElementById("filterLetter").innerHTML = emptyLetter
for (i=0; i<filterLetterArray.length; i++){
   emptyLetter = emptyLetter+filterLetterArray[i]+ ",&nbsp"
}
document.getElementById('filterLetter').innerHTML=emptyLetter



