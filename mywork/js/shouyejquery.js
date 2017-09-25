$(function(){
	let flag=true;
    let now=next=0;
    let widths=$(".img").width();
    console.log(widths)
    //let t=setInterval(fn,2000);
//  $(".head").mouseenter(function(){
//  	clearInterval(t)
//  })
//  $(".head").mouseleave(function(){
//  	t=setInterval(fn,2000)
//  })
    function fn(){
	next++;
	if(next==$(".img>li").length){
		console.log($(".img>li").length)
		next=0;
	}
	$(".img>li").eq(next).css({left:`${widths}px`})
	$(".img>li").eq(now).animate({left:`-${widths}px`})
	$(".img>li").eq(next).animate({left:"0"})
	now=next;
	$(".dian>li").css({background:'none'})
	$(".dian>li").eq(next).css({background:'#EDE276'})
    }
    /*function fn1(){
	next--;
	if(next==0){
		next=$(".img>li").length;
	}
	$(`.img>li:nth-of-type(${next})`).css({left:`${-widths}px`})
	$(`.img>li:nth-of-type(${now})`).animate({left:"widths"})
	$(`.img>li:nth-of-type(${next})`).animate({left:"0"})
	now=next;
	$(".dian>li").css({background:'none'})
	$(`.dian>li:nth-of-type(${next})`).css({background:'#EDE276'})
    }*/
    $(".dian>li").each(function(index,obj){
    	$(this).click(function(){
    		if(index<now){
    			$(".img>li").eq(index).css({left:`${-widths}px`});
	            $(".img>li").eq(now).animate({left:`${widths}px`})
	            $(".img>li").eq(index).animate({left:"0"})
	            $(".dian>li").css({background:'none'})
	            $(".dian>li").eq(index).css({background:'#EDE276'})
	            now=next=index;
    		}
    		else if(index>now){
    			$(".img>li").eq(index).css({left:`${widths}px`});
	            $(".img>li").eq(now).animate({left:`${-widths}px`})
	            $(".img>li").eq(index).animate({left:"0"})
	            $(".dian>li").css({background:'none'})
	            $(".dian>li").eq(index).css({background:'#EDE276'})
	            now=next=index;
    		}
    	})
    })
    $(".back").click(function(){
    	if(flag){
    		flag=false;	
    	next++;
	    if(next==$(".img>li").length){
		     next=0;
	    }
	    $(".img>li").eq(next).css({left:`${widths}px`});
	    $(".img>li").eq(now).animate({left:`${-widths}px`},function(){
	    	return flag=true;})
	    $(".img>li").eq(next).animate({left:0})
	    now=next;
	    $(".dian>li").css({background:'none'})
	    $(".dian>li").eq(next).css({background:'#EDE276'})	
    }
    })
    $(".forward").click(function(){
    	if(flag){
    		flag=false;	
    	next--;
	    if(next==-1){
		     next=$(".img>li").length-1;
	    }
	    $(".img>li").eq(next).css({left:`${-widths}px`});
	    $(".img>li").eq(now).animate({left:`${widths}px`},function(){
	    	return flag=true;})
	    $(".img>li").eq(next).animate({left:0})
	    now=next;
	    $(".dian>li").css({background:'none'})
	    $(".dian>li").eq(next).css({background:'#EDE276'})	
    }
    })
    //按钮部分
    $(".jindu>li").each(function(index,obj){
    	$(this).click(function(){
    		$(".benji").css({marginTop:`-${index*1020}px`})
    	})
    })
    $(".biank").change(function(){
    	$(".y").click(function(){
    	   	let n=parseInt($(".biank").val())-1
    	   	console.log($(".biank").val())
    	   	if(n>3){
    	   		$(".benji").css({marginTop:"0px"})
    	   	}else{
    	   		$(".benji").css({marginTop:`-${n*1020}px`})
    	   	}
    	})  
    })
})
