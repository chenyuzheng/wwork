$(function(){
	$(".btn>li").each(function(index,obj){
		$(this).click(function(){
		$(".btn>li").css({background:"#fff"})	
		$(".btn>li").eq(index).css({background:"orange"})
		$(".ftop-main li").children().css({color:"#fff",fontSize:"15px"})
		$(`.ftop-main li:nth-of-type(${index+1})`).children().css({color:"orange",fontSize:"20px",lineHeight:"35px"})
	    })
	})
})
