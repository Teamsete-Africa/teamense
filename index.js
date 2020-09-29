alert("hello kent");

$(document).ready(function(){	
	$("li a").hover(function(){
	$(this).css("color","orange");
},
function(){
	$(this).css("color","white");
});
});
