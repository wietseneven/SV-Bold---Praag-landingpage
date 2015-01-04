"use strict";
$(document).ready(function() {
	
	/* ***************************
	Give the body a class when the document is ready
	*************************** */
	$('body').addClass('loaded');
	
	
	/* ***************************
	Give the body a class when the logo reaches the nav bar
	*************************** */
	// First get the height of the intro logo
	$('#introduction .intrologo').css({'position':'relative', 'display':'inline-block'});
	var logoHeight = $('#introduction .intrologo').height();
	$('#introduction .intrologo').removeAttr('style').height(logoHeight);
	
	var headerHeight = $('#main-head').height();
	
	// the height of the page changes when the user resizes the screen
	$(window).resize(function() {
		var introHeight = $('#introduction').height();
		var logoTopHeight = ((introHeight - logoHeight) / 2) - headerHeight;
		
		$(document).scroll(function() {
			$('body').toggleClass('scrolled', $(document).scrollTop() >= logoTopHeight);
			
			$('.page-section').each(function() {
				var pageTop = $(this).offset().top;
				$(this).toggleClass('nowVisible', $(document).scrollTop() >= (pageTop - 200));
			});
		}).scroll();
	}).resize();
	
	
	/* ***************************
	Give the navigation a class
	*************************** */  
	$('.button--menu').click(function(e){
		e.preventDefault();
		$(this).toggleClass('on').parent().toggleClass('open').parent().parent('#main-head').toggleClass('nav-open');
	});
	
	
	/* ***************************
	Give the elements with given class their height or width
	*************************** */
	// Elements with this class
	var giveHeightEl = $('.give-height');
	var giveWidthEl = $('.give-width');
	$('.give-height, .give-width').each(function(){
		
		// Make it relative for correct height
		$(this).css({'position':'relative', 'display':'inline-block'});
		
		// Get the height and width
		var elHeight = $(this).height();
		var elWidth = $(this).innerWidth();
		
		// Remove position style attribute, because I saved the height
		$(this).removeAttr('style');
		
		// if height
		if ($(this).hasClass('give-height')){
			// Remove the relative position attribute and give the height
			$(this).height(elHeight);
		}
		
		// if width
		if ($(this).hasClass('give-width')) {
			// Remove the relative position attribute and give the width
			$(this).width(elWidth);
		}
	});
	
	
	/* ***************************
	Go to the next section when you click on next
	*************************** */
	var nextBtn = $('.goto');
	$(nextBtn).click(function(e) {
		e.preventDefault();
		var GoToID = $(this).data('goto');
		var GoToPos = $('#'+GoToID).offset().top;
		
		// If it's page2, then stop at the header
		if (GoToID == 'page-2') {
			GoToPos = GoToPos - headerHeight;
		}
		$('html, body').animate({
			scrollTop: GoToPos + 1
		}, 1000);
	});
	
	
	/* ***************************
	Button hover effects on #page-2
	*************************** */
	$('#page-2 .buttons').children().each(function() {
		var thisBTN = $(this);
		$(this).hover(
			function() {
				$(this).addClass('hovert').parent().children().not($(this)).addClass('noHover');
			}, function() {
				$(this).addClass('go');
				setTimeout(function() {
				//	alert('gone.');
					$(thisBTN).removeClass('hovert go').parent().children().not($(thisBTN)).removeClass('noHover');
				}, 400);
			}
		);
	});
	
	
	/* ***************************
	Enable jQuery Fastclick
	*************************** */
	$(function() {
		FastClick.attach(document.body);
	});
	
	
	/* ***************************
	Sticky elements
	*************************** */	
	$('.fixattop').each(function() {
		var thisEl = $(this);
		var elHeight = thisEl.height();
	//	var elTopHeight = thisEl.offset().top;
		$(window).resize(function() {
			var elTopHeight = thisEl.offset().top;
			$(document).scroll(function() {
				$(thisEl).toggleClass('yourefixed', $(document).scrollTop() >= elTopHeight);
				$(thisEl).toggleClass('restisgone', $(document).scrollTop() >= elTopHeight + (elHeight - 10));
			});
		}).resize();
	});
	
	/* ***************************
	Elke pagina een z-index
	*************************** */	
/*	var articleZindex = 100;
    $('.page-section').each(function(){
        $(this).css('z-index', articleZindex);
        --articleZindex;
    });
*/
});