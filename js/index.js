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
})
