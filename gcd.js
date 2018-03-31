// https://stackoverflow.com/questions/17445231/js-how-to-find-the-greatest-common-divisor?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
// https://en.wikipedia.org/wiki/Greatest_common_divisor

function gcd(a, b) {
	return !b ? a : gcd(b, a % b);
}

var out = gcd(18, 84);
console.log(out);
