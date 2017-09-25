$(function(){
	//轮播
	let index=1;
	let t=setInterval(function(){fnw('r')},2000)
	function fnw(num){
		if(num=='l'){
			index--;
		    if(index==0){
			   index=6;
		    }
		}
		if(num=='r'){
			index++;
		    if(index==7){
			   index=1;
		    }
		}
		$("ul[class=banner-bottom-right]>li").css({display:"none"})
		$(`ul[class=banner-bottom-right]>li:nth-of-type(${index})`).css({display:"block"})
	    $("ul[class=dot]>li").css({background:"none"})
		$(`ul[class=dot]>li:nth-of-type(${index})`).css({background:"orange"})
	}
	$(".banner").mouseenter(function(){
			clearInterval(t)
	})
	$(".banner").mouseleave(function(){
			t=setInterval(function(){fnw('r')},2000)
	})
	$("ul[class=dot]>li").click(function(){
			index=$(this).index()+1
			fnw();
	})
	
	$(".right1-3").mouseenter(function(){
		$(".ite").css({display:'block'})
	})
	$(".right1-3").mouseleave(function(){
		$(".ite").css({display:'none'})
	})
	
	$(".aside1>li").each(function(index,obj){
   		 $(".aside1>li").eq(index).mouseenter(function(){
	    	$(".item").css({display:'block'});
		})
	})
	$(".aside1>li").each(function(index,obj){
	    $(".aside1>li").eq(index).mouseleave(function(){
	    	$(".item").css({display:'none'});
	    })
	})
	
	$(window).scroll(function(){
//		let obj=document.body.scrollTop?document.body:document.documentElement
		var st=document.body.scrollTop

		var sFlag=true;
		var ch=window.innerHeight
		if(st>500){
			if(sFlag){
				sFlag=false;
				$(".search").animate({top:0},1000)
				console.log(sFlag)
			}
		}
		if(st<500){ 
			console.log(sFlag)
			if(!sFlag){
				sFlag=true;
				
				$(".search").animate({top:"-50px"},1000)
			}
		}
	})

})
