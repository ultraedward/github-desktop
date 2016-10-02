// original provided array with duplicate names
var duplicatesArray = ['Nick', 'jake', 'RAY', 'Kate', 'Nick', 'Jeremy', 'nick', 'AMOL', 'rAY', 'VIANNEY', 'Shilpika', 'nick', 'THOMAS', 'tom', 'james', 'JERM', 'amOl', 'kate', 'SCOTT', 'Jenifer', 'bill', 'jenny', 'STEVEN'];

// remove duplicates and position elements
var uniqueArray = duplicatesArray.filter(function(elem, pos) {
return duplicatesArray.indexOf(elem) == pos
})

uniqueArray.toString(console.log('string'))

var noCommaArray = uniqueArray.replace(/,\s*$/, '')

// onclick button
	$('#click').on('click',function(){

	// append marking for reference
	$('.unique').append('[')
		
		// for loop through each item of uniqueArray, append to unique div
		for (var i=0; i<noCommaArray.length;i++){
			$('.unique').append("'" + noCommaArray[i] +"', ")
			}

	// append marking for reference 
	$('.unique').append(']')

	// print filtered unique array to console
	console.log(noCommaArray)
	})
// end onclick button