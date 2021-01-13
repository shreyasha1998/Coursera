(function(window){
	var helloOb={};
	helloOb.greeting="Hello";
	helloOb.hello=function(name){
		console.log(helloOb.greeting+" "+name);
	};
	window.helloOb=helloOb;

})(window);