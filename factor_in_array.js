var arr = [2, 4, 5, 34, 7, 16];

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


function factorInArray() {
	arr.sort(sortNum);	
	var size = arr.length;	
	var twoDArr = [];

	for(var i=0; i<size; i++) {
		var item = arr[i];
		twoDArr.push(getFactors(item));
	}

	return twoDArr;
}

var out = factorInArray();
console.log(out);
