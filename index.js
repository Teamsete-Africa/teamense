

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

// practice area
$(".first").mouseenter(function(){
	$(".learn").css('background-color','white'),5000
	$(".learn").css('color','#FBB917')

})

// $("#ict").mouseenter(function(){
//   $("#lap").css('padding-top','5px')
// })

// $("#ict").mouseleave(function(){
// 		$("#lap").css('padding-top','0px')
// })

$(".first").mouseleave(function(){
	$(".learn").css('background-color','transparent')
	$(".learn").css('color','white')

})
});
