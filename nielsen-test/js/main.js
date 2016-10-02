// original provided array with duplicate names
var duplicatesArray = ['Nick', 'jake', 'RAY', 'Kate', 'Nick', 'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN']
var duplicatesArrayToString = duplicatesArray.toString()
var duplicatesArrayLowerCase = duplicatesArrayToString.toLowerCase()

// remove duplicates and position elements
var uniqueArray = duplicatesArray.filter(function(elem, pos) {
return duplicatesArray.indexOf(elem) == pos
})

// onclick button
	$('#click').on('click',function(){

	// append marking for reference
	$('.unique').append('[')
		
		// for loop through each item of uniqueArray, append to unique div
		for (var i=0; i<duplicatesArrayLowerCase.length;i++){
			$('.unique').append("'" + duplicatesArrayLowerCase[i] +"', ")
			}

	// append marking for reference 
	$('.unique').append(']')

	// print filtered unique array to console
	console.log(duplicatesArrayLowerCase)
	})
// end onclick button