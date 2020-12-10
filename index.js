

$(document).ready(function(){		
	$("nav li a").hover(function(){
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

$(".first").mouseleave(function(){
	$(".learn").css('background-color','transparent')
	$(".learn").css('color','#a9a9a9')

})

$(".second").mouseenter(function(){
	$(".pro").css('background-color','white'),5000
	$(".pro").css('color','#FBB917')
})

$(".second").mouseleave(function(){
	$(".pro").css('background-color','transparent'),5000
	$(".pro").css('color',' #a9a9a9')
})

$(".three").mouseenter(function(){
	$(".sol").css('background-color','white'),5000
	$(".sol").css('color','#FBB917')
})

$(".three").mouseleave(function(){
	$(".sol").css('background-color','transparent'),5000
	$(".sol").css('color',' #a9a9a9')
})

$(".four").mouseenter(function(){
	$(".con").css('background-color','white'),5000
	$(".con").css('color','#FBB917')
})

$(".four").mouseleave(function(){
	$(".con").css('background-color','transparent'),5000
	$(".con").css('color',' #a9a9a9')
})


// invest page navbar

$(function () {
  $(document).scroll(function () {
    var $nav = $(".invest-navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

});

// var myNav = document.getElementById('invest-navbar');
// window.onscroll = function () { 
//     "use strict";
//      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 )
//  {
//         invest-navbar.classList.add("nav-colored");
//        invest-navbar.classList.remove("nav-transparent");
//     } 
//     else {
//        invest-navbar.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// }; 