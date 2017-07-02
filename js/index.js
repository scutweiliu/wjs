//$.noConflict();
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
	console.log(Zepto("#carousel-example-generic .item")[1])
//	Zepto("#carousel-example-generic .item").on('touchstart',function(ev){
//		var oriX=ev.touches[0].clientX;
//		Zepto(this).on('touchmove',function(ev){
//			var changeX=ev.changedTouches[0].clientX;
//			$('.carousel-inner .item.active').css('transform','translate3d('+ (-changeX+oriX)+',0,0)');
//			console.log($('.carousel-inner .item.active').css('transform'))
//		})
//	});
    $("#carousel-example-generic .item").each(function(i){
    	Zepto(this).on('touchstart',function(ev){
		var oriX=ev.touches[0].clientX;
		    Zepto(this).on('touchmove',function(ev){
			    var changeX=ev.changedTouches[0].clientX;
			    if(oriX-changeX>0){
				    Zepto("#carousel-example-generic .item").removeClass('active prev next left right');
	                if(i<3){
	                $(Zepto("#carousel-example-generic .item")[i+1]).addClass('next left');
				    $(Zepto("#carousel-example-generic .item")[i]).addClass('active left');}
	                else{
	                $(Zepto("#carousel-example-generic .item")[0]).addClass('next left');
				    $(Zepto("#carousel-example-generic .item")[i]).addClass('active left');
	                }
			    }else if(oriX-changeX<0){
			    	Zepto("#carousel-example-generic .item").removeClass('active prev next left right');
	                if(i=0){
	                $(Zepto("#carousel-example-generic .item")[3]).addClass('prev right');
				    $(Zepto("#carousel-example-generic .item")[i]).addClass('active right');}
	                else{
	                $(Zepto("#carousel-example-generic .item")[i-1]).addClass('prev right');
				    $(Zepto("#carousel-example-generic .item")[i]).addClass('active right');
	                }
			    }
 			    
			    
//			    $(this).css('transform','translateX('+ (changeX-oriX)+'px)');
		    })
		})
    })
})
