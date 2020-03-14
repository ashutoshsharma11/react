//slider JS//
$(document).ready(function() {
$('.job-category-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoplay:true,
	margin:40,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
		768:{
            items:2
        },
		1024:{
            items:3
        },
		1300:{
            items:4
        }
		
    }
})
});

$(document).ready(function() {
$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1 
        },
        767:{
            items:1
        },
		1024:{
            items:1
        },
		1300:{
            items:1
        }
		
    }
})
});