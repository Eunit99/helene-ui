// -----------------------------

//   js index
/* =================== */
/*  

*/
// -----------------------------

jQuery(document).ready(function () {

	//  Some cool User Experiences, Maybe!
	var service0 = $("#service-single0"),
		service1 = $("#service-single1"),
		service2 = $("#service-single2"),
		sliderImg = $(".slider-img"),
		uiButton = $("#showMoreUI"),
		uiTwo = $("#ui-2"),
		uiMoreBtn = $(".uiMoreBtn"),
		uiHomeBtn = $(".uiHomeBtn"),
		$serviceSingle0 = $("#service-single0"),
		$serviceSingle1 = $("#service-single1"),
		$serviceSingle2 = $("#service-single2");

	//Hide the services description by default
	$serviceSingle0.addClass("visibilityHidden");
	$serviceSingle1.addClass("visibilityHidden");
	$serviceSingle2.addClass("visibilityHidden");

	service0.mouseover(function () {
		service0.children().addClass("bounceIn")
	});
	service0.mouseleave(function () {
		service0.children().removeClass("bounceIn")
	});

	service1.mouseover(function () {
		service1.children().addClass("bounceIn")
	});
	service1.mouseleave(function () {
		service1.children().removeClass("bounceIn")
	});

	service2.mouseover(function () {
		service2.children().addClass("bounceIn")
	});
	service2.mouseleave(function () {
		service2.children().removeClass("bounceIn")
	});

	sliderImg.mouseover(function () {
		sliderImg.children().addClass("bounceIn")
	});
	sliderImg.mouseleave(function () {
		sliderImg.children().removeClass("bounceIn")
	});
	setTimeout(function () {
		uiButton.click(function () {
			uiTwo.removeClass("displayNone");
			uiMoreBtn.addClass("displayNone");
			uiHomeBtn.removeClass("displayNone");
		})
	}, 2000) // Why this? I don't even know!

	// Do some great magic for the UX on scroll

	$(window).scroll(function () {
		var $scrollPosition = $(window).scrollTop();

		if ($scrollPosition >= 300) {
			$serviceSingle0.removeClass("visibilityHidden").addClass("bounceIn");
			$serviceSingle1.removeClass("visibilityHidden").addClass("bounceIn");
			$serviceSingle2.removeClass("visibilityHidden").addClass("bounceIn");
		} else {
			$serviceSingle0.removeClass("bounceIn");
			$serviceSingle1.removeClass("bounceIn");
			$serviceSingle2.removeClass("bounceIn");
		}
	})
});

(function ($) {
	"use strict";



	/*---------------------
	preloader
	--------------------- */

	$(window).on('load', function () {
		$('#preloader').delay(1000).fadeOut('slow', function () {
			$(this).remove();
		});
	});

	//=========================
	//  Active current menu while scrolling
	//=========================

	//ACTIVE CURRENT MENU WHILE SCROLLING

	$(window).on("scroll", function () {

		activeMenuItem($(".nav-menu"));

	});

	// function for active menuitem
	function activeMenuItem($links) {
		var top = $(window).scrollTop(),
			windowHeight = $(window).height(),
			documentHeight = $(document).height(),
			cur_pos = top + 2,
			sections = $("section"),
			nav = $links,
			nav_height = nav.outerHeight(),
			home = nav.find(" > ul > li:first");


		sections.each(function () {
			var top = $(this).offset().top - nav_height - 40,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find("> ul > li > a").parent().removeClass("active");
				nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
			} else if (cur_pos === 2) {
				nav.find("> ul > li > a").parent().removeClass("active");
				home.addClass("active");
			} else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
				nav.find("> ul > li > a").parent().removeClass("active");
			}
		});
	}

	//=========================
	// Smoth Scroll
	//=========================

	function smoothScrolling($links, $topGap) {
		var links = $links;
		var topGap = $topGap;

		links.on("click", function () {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
				if (target.length) {
					$("html, body").animate({
						scrollTop: target.offset().top - topGap
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
			return false;
		});
	}

	$(window).on("load", function () {
		smoothScrolling($(".main-menu > nav > ul > li > a[href^='#']"), 70);
	});

	//=========================
	// Slick Nav Activation
	//=========================
	$('.nav-menu > ul').slicknav({
		'prependTo': '.mobile_menu'
	});

	/*---------------------
	screen slider
	--------------------- */
	function screen_slider() {
		var owl = $(".screen-slider");
		owl.owlCarousel({
			loop: true,
			margin: 20,
			navigation: false,
			items: 5,
			smartSpeed: 1000,
			dots: true,
			autoplay: true,
			center: true,
			autoplayTimeout: 2000,
			dotsEach: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 3
				},
				760: {
					items: 3
				},
				1080: {
					items: 5
				},
				1920: {
					items: 5
				}
			}
		});
	}
	screen_slider();

	/*---------------------
	featured carousel
	--------------------- */
	function featured_carousel() {
		var owl = $(".featured-carousel");
		owl.owlCarousel({
			loop: true,
			margin: 60,
			navigation: false,
			items: 4,
			smartSpeed: 1000,
			dots: false,
			autoplay: true,
			autoplayTimeout: 5000,
			dotsEach: true,
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 3
				},
				760: {
					items: 4
				},
				1080: {
					items: 4
				},
				1920: {
					items: 4
				}
			}
		});
	}
	featured_carousel();

	/*---------------------
	testimonial slider
	--------------------- */
	function testimonial_slider() {
		var owl = $(".testimonial-slider");
		owl.owlCarousel({
			loop: true,
			margin: 20,
			navigation: false,
			items: 1,
			smartSpeed: 1000,
			dots: true,
			autoplay: false,
			autoplayTimeout: 2000,
			dotsEach: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				760: {
					items: 1
				},
				1080: {
					items: 2
				},
				1920: {
					items: 2
				}
			}
		});
	}
	testimonial_slider();

	/*------------------------------
	MagnificPopup Activation
	-------------------------------- */
	/* magnificPopup video view */
	$('.expand-video').magnificPopup({
		type: 'iframe'
	});

	/*------------------------------
	YTP activation
	-------------------------------- */
	$(window).on('load', function () {
		var myPlayer = $("#bgndVideo").YTPlayer();
	});

	/*-----------------------------
	Warm Canvas activation
	------------------------------- */
	if ($('.warm-canvas').length) {
		$('.warm-canvas').glassyWorms({
			colors: ['#fff', '#c2c2c2'],
			useStyles: true,
			numParticles: 500,
			tailLength: 20,
			maxForce: 8,
			friction: 0.75,
			gravity: 9.81,
			interval: 3
			// colors: ['#000'],
			// element: $('<canvas class="worms"></canvas>')[0]
		});
	}

	/*------------------------------
	     counter
	------------------------------ */

	$('.counter').counterUp({
		delay: 20,
		time: 2000
	});

	/*-----------------------------
	Background Paralax activation
	------------------------------- */
	function bgParallax() {
		if ($(".parallax").length) {
			$(".parallax").each(function () {
				var height = $(this).position().top;
				var resize = height - $(window).scrollTop();
				var parallaxSpeed = $(this).data("speed");
				var doParallax = -(resize / parallaxSpeed);
				var positionValue = doParallax + "px";
				var img = $(this).data("bg-image");

				$(this).css({
					backgroundImage: "url(" + img + ")",
					backgroundPosition: "50%" + positionValue,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				});

				if (window.innerWidth < 768) {
					$(this).css({
						backgroundPosition: "center center"
					});
				}
			});
		}
	}
	bgParallax();

	$(window).on("scroll", function () {

		bgParallax();
	});

	$(document).ready(function () {
		// Add smooth scrolling to all links
		$("a.js-scroll").on('click', function (event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Store hash
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function () {

					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End if
		});
	});

}(jQuery));