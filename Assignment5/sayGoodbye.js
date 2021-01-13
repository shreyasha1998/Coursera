(function(window){
	var goodbyeOb={};
	goodbyeOb.greeting="Goodbye";
	goodbyeOb.goodbye=function(name){
		console.log(goodbyeOb.greeting+" "+name);
	};
	window.goodbyeOb=goodbyeOb;

})(window);