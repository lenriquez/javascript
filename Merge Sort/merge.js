var merge = function (a ) {
	// Stop 
	if(a.length <= 1) return a

	// Divide 
	var right_side = divide( a )
	// Combine
	return combine(merge(a),merge(right_side))
};


var divide = function (a) { 
	 mid = Math.floor(a.length / 2)
	 right = a.splice(mid)
	 return  right
};
//var tmp = []
var combine = function (a, b){

	if ( a.length <= 0 || b.length <= 0 ) {
		test = b.length <= 0 ? a : b
		return test
	}
	var smallest = a[0] > b[0] ? my_shift(b) : my_shift(a)
	//smallest_array.push(smallest)
	//combine(a,b)
	var tmp = combine(a,b)
	tmp.unshift(smallest)
	return tmp
};

var my_shift = function(a) {
	tmp = a.shift()
	return typeof tmp  === "undefined" ? [] : tmp 
};

//console.log(my_shift([1]))
//console.log(my_shift([]))
//console.log(combine([1,4],[2,3]))

console.log(merge([5,4,3,2,1]))