var controller = new ScrollMagic.Controller();
var controller = new ScrollMagic.Controller({
	globalSceneOptions: {
		triggerHook: 'onLeave'
	}
});


$(function () { // wait for document ready
		// build scene
		// var scene = new ScrollMagic.Scene({triggerElement: "#trigger1" })
		// .setPin("#pin1")
		// 				// .setClassToggle("#pin2")
		// 				.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
		// 				.addTo(controller);


		// 				var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
		// 				.setPin("#pin2")
		// 				.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
		// 				.addTo(controller);



		// 				var scene = new ScrollMagic.Scene({triggerElement: "#header-freeze"})
		// 				.setPin("#header-freeze")
		// 				.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
		// 				.addTo(controller);


		// 				var scene = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: 300, offset: -200})
		// 				.setPin("#pin3")
		// 				.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
		// 				.addTo(controller);


		// 				var scene = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: 300, offset: -200})
		// 				.setPin("#pin4")
		// 				.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
		// 				.addTo(controller);


					
//Change color of the word Interactive - Desktop
						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset:1
						})
						.setTween("#color-pin1", .5, {color: "rgb(251, 91, 78)", scale:1.05 }) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 30
						})
						.setTween("#color-pin2", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);


						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 60
						})
						.setTween("#color-pin3", .5, {color: "rgb(251, 91, 78)", scale:1.05, offset: 100}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);


						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 90
						})
						.setTween("#color-pin4", .5, {color: "rgb(251, 91, 78)", scale:1.05, offset: 150}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);


						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 120
						})
						.setTween("#color-pin5", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 150
						})

						.setTween("#color-pin6", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 180
						})
						.setTween("#color-pin7", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 210
						})
						.setTween("#color-pin8", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);

						var scene = new ScrollMagic.Scene({
								triggerElement: "#color-trigger-intro-desk",
							offset: 240
						})
						.setTween("#color-pin9", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
						
						var scene = new ScrollMagic.Scene({
								triggerElement: "#color-trigger-intro-desk",
							offset: 270
						})
						.setTween("#color-pin10", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
						
						var scene = new ScrollMagic.Scene({
							triggerElement: "#color-trigger-intro-desk",
							offset: 300
						})
						.setTween("#color-pin11", .5, {color: "rgb(251, 91, 78)", scale:1.05}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);









						// var scene = new ScrollMagic.Scene({
						// 	triggerElement: "#trigger3",
						// 	offset: -200
						// })
						// .setTween("#pin1", .7, {color: "rgb(251, 91, 78)", scale:1}) // trigger a TweenMax.to tween
						// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						// .addTo(controller);




						var scene = new ScrollMagic.Scene({
							triggerElement: "#trigger1",
							offset: 500
						})
						.setTween("#pin1", .7, {color: "rgb(251, 91, 78)", backgroundColor: "rgb(251, 91, 78)", scale:1}) // trigger a TweenMax.to tween
						.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);




						// var scene = new ScrollMagic.Scene({triggerElement: "#trigger5", offset: 80})
						// .setPin("#pin5")
						// .addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
						// .addTo(controller);


						/* make panel come up in front, and freeze the panel after text*/

							$(function () { // wait for document ready
							// init
							var controller = new ScrollMagic.Controller({
								globalSceneOptions: {
									triggerHook: 'onLeave'
								}
							});

								// get all slides
								var slides = document.querySelectorAll("section.panel");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
			}
		});



							var scene = new ScrollMagic.Scene({triggerElement: ".panel", duration: 400})
							.setPin(".red-section")
						.addIndicators({name: "1 (duration: 200)"}) // add indicators (requires plugin)
						.addTo(controller);




					});










/* hamburger */
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});












//** Scrolling to links **//

$(function() {
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    if (target.length) {
     $('html,body').animate({
      scrollTop: target.offset().top
    }, 700);

     return false;
   }
 }
});
});
