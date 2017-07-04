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
	 var swiper = new Swiper('#carou .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:0,
        autoplay : 2000,
        keyboardControl : true,
        loop: true
   });
   scrollchange();
   $(window).on('resize',scrollchange);
   
    function scrollchange(){
	    	if($(window).width()<992){
	    	//latiao
	    var mySwiper = new Swiper('#special .swiper-container',{
			slidesPerView : 3,
			slidesPerGroup :2
		})
	    	$('#special>.well>.swiper-container>.swiper-wrapper>.swiper-slide').css({'width':'13%','text-align':'center'});
	    	$('#special .swiper-container .swiper-wrapper').css({'width':'200%','display':'inline-block','padding-top':'10px'});
	    	$('#special .swiper-container .swiper-slide>a').css({'padding-bottom':'10px'});
	    }
    }
    
    
})
