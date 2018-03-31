function gcd(a, b) {
	return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
	return (a * b) / gcd(a, b);   
}


var output = lcm(48, 180);
console.log(output);
