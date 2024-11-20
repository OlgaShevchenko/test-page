$(document).ready(function(){
	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('hamburger_is_active');
		$('.header').toggleClass('header_fixed');
		$('.header__mobmenu').slideToggle();
		$('body').toggleClass('overflow');		
	});	
	$('.header__nav-item').click(function () {
		if ($(window).width() < 768) {
			$('.hamburger').removeClass('hamburger_is_active');
			$('.header').removeClass('header_fixed');
			$('.header__mobmenu').slideUp();	
			$('body').removeClass('overflow');
		}		
	});	
	
	
	
	
	let paginationStart = 1;
	let paginationEnd = 10; 	
	$('.pagination__item_current').text(paginationStart);
	for(let i = paginationStart+1; i<paginationEnd; i++ ) {		
		if(i>4) {
			$(".pagination__item__expand").before('<li class="pagination__item pagination__item_hidden"><a href="#" class="pagination__item-link">' +i+ '</a></li>');
		}
		else {
			$(".pagination__item__expand").before('<li class="pagination__item"><a href="#" class="pagination__item-link">' +i+ '</a></li>');
		}
	}
	$(".pagination__item__expand").after('<li class="pagination__item"><a href="#" class="pagination__item-link">' +paginationEnd+ '</a></li>');
	if (paginationEnd - (paginationStart + 1) <4 ){
		$(".pagination__item__expand").remove();
	}
	
	
	$(".pagination__item__expand").click(function () {
		$('.pagination__item').removeClass('pagination__item_hidden');
		$(".pagination__item__expand").remove();
	});
	
	let cardsNum = $('.card').length;
	let cardsHiddenNum = cardsNum - 6;
	hidePosts(cardsHiddenNum);
	
	$(".show-more").click(function () {	
		if($(".show-more").hasClass('open')){		
			$(".card").slice(-5).hide();		
			$(".show-more_text").text("Показать еще");
			$(".show-more").removeClass('open')
		}
		else {
			$(".card").show();		
			$(".show-more_text").text("Скрыть");
			$(".show-more").addClass('open')
		}
	});
	
	
	$(window).on('resize', function(){
		let winWidth = $(window).width();		
		if (winWidth >= 768) { 
			$('.header__mobmenu').removeAttr("style");
			$('.hamburger').removeClass('hamburger_is_active');
			$('.header').removeClass('header_fixed');				
			$('body').removeClass('overflow');
			$('.card').removeAttr("style");	
			$('.show-more').removeAttr("style");		
		}
		else {
			hidePosts(cardsHiddenNum);
		}		
	});
	
	
	
	
});
function hidePosts(cardsHiddenNum){
	if(cardsHiddenNum > 0 && $(window).width() <768) {
		$(".show-more_number").text(cardsHiddenNum);
		$(".card").slice(-5).hide();
		$(".show-more").show();
	}	
}
function IsEmail(email) {
	const regex =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!regex.test(email)) {
		return false;
	}
	else {
		return true;
	}
}