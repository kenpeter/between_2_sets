var arrBig = [16, 32, 96];
var arrSmall = [2, 4];

//
function sortNum(a, b) {
	return a - b;
}

//
function getFactors(integer){
  var factors = [],
  quotient = 0;

  for(var i = 1; i <= integer; i++){
    quotient = integer/i;

    if(quotient === Math.floor(quotient)){
      factors.push(i); 
    }
  }
  return factors;
}


function factorInArray(arr) {
	arr.sort(sortNum);	
	var size = arr.length;	
	var twoDArr = [];

	for(var i=0; i<size; i++) {
		var item = arr[i];
		twoDArr.push(getFactors(item));
	}

	return twoDArr;
}

function main(arrBig, arrSmall) {
	var facBig2D = factorInArray(arrBig);
	//console.log(arrBig2D);

	var facSmall2D = factorInArray(arrSmall);
	//console.log(arrSmall2D);

	// 2 d array
	for(var i=0; i<facBig2D.length; i++) {
		var facBig = facBig2D[i];

		// 1 d array
		for(var j=0; j<facBig.length; j++) {
			// item in 1 d array
			var facItemBig = facBig[j];
	
			// small array	
			for(var k=0; k<arrSmall; k++) {
				// item in small array
				var itemSmall = arrSmall[k];
				var condi = facItemBig % itemSmall;
				if(condi == 0) {
				
				} else {

				}	
			}	
		}	
	}	

}


main(arrBig, arrSmall);
