

$(document).ready(function(){		
	$("li a").hover(function(){
	$(this).css("color","orange");
},
function(){
	$(this).css("color","white");
});

//navbar background color
var scroll_start = 0
var startchange = $('#about');
var offset = startchange.offset();
if(startchange.length){
	$(document).scroll(function(){
		scroll_start=$(document).scrollTop();
		if (scroll_start > offset.top) {
			$(".navbar").css('background-color','#0C090A');
		}
		else{
			 $('.navbar').css('background-color', 'transparent');

		}
	});
}

// nairobi animation

$(".forth").mouseenter(function(){
	$(".Nairobi").fadeIn(1000)
})
$(".forth").mouseleave(function(){
	$(".Nairobi").fadeOut(2000)
})

});
