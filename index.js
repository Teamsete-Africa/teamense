

$(document).ready(function(){		
	$("nav li a").hover(function(){
	$(this).css("color","orange");
},
function(){
	$(this).css("color","white");
});

//navbar background color
var scroll_start = 0
var startchange = $('#turn');
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



// volunter page

$(function(){

	// get the form
	var form = $('#ajax-contact');

	// get the message div 
    var formMessages= $('.form-messages');
    
	// setting up an event listner for contact form
	$(form).submit(function(event){
    //   stop submission of an empty form
	  event.preventDefault(); 

	// serialize the form data
	var formData = $(form).serialize();

	// submit the form using AJAX
	$.ajax({
		type:'POST',
		url: $(form).attr('action'),
		data: formData
	})
	.done(function(response){
		// ensuring div 'success' class exists.
		$(formMessages).removeClass('error');
		$(formMessages).addClass('success');

		// set the message Text
		$(formMessages).text(response);

		// clear the form
		$('#name').val('');
        $('#email').val('');
    	$('#contact').val('');
		$('#subject').val('');
		$('#message').val('');
	})
	.fail(function(data){
		$(formMessages).removeClass('success');
    	$(formMessages).addClass('error');

		// set the message
		if (data.responseText !== '') {
			$(formMessages).text(data.responseText);
		}
		else{
			$(formMessages).text('Oops! An error occured and your message could not be sent.');
		}
	});
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