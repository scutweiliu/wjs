$(function(){
	$("#news .nav-tabs-news>li").on('click',function(){
		var $ibt=$(this);
		$("#news .row>div>p>i").html($ibt.data('name'));
	});
	$('#nav').affix({
	  offset: {
	    top:40
	  }
	}).css({'width':'100%','top':'0'});
	
	//轮播图触动
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:0,
        loop: true
    });
})
