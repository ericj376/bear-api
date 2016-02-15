var Calculator = function(){
	return {
		sum: function(a,b){
			console.log(a + b);
		},
		subtract: function(a,b){
			if(a > b){
				console.log(a - b);
			} else {
				console.log(b - a);
				}
			}
		}
	}

module.exports = Calculator;