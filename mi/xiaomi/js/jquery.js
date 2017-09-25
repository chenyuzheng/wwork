$(function(){
	//轮播
	let index=1;
	let t=setInterval(function(){fnw('r')},1000)
	function fnw(num){
		if(num=='l'){
			index--;
		    if(index==0){
			   index=5;
		    }
		}
		if(num=='r'){
			index++;
		    if(index==6){
			   index=1;
		    }
		}
		$("ul[class=banner-right]>li").css({display:"none"})
		$(`ul[class=banner-right]>li:nth-of-type(${index})`).css({display:"block"})
	    $("ul[class=btn]>li").css({background:"none"})
		$(`ul[class=btn]>li:nth-of-type(${index})`).css({background:"orange"})
	}
	//左箭头
//	function fnw(){
//		index--;
//		if(index==0){
//			index=5;
//		}
//		$('ul[class=banner-right]>li').css({display:"none"});
//		$('ul[class=btn]>li').css({background:'none'})
//		$('ul[class=banner-right]>li').eq(index-1).css({display:"block"});
//		$('ul[class=btn]>li').eq(index-1).css({background:'orange'})
//	}
	$("div[class=iconfont3]").click(function(){
		fnw('l');
	})
	//右箭头
//	function fnm(){
//		index++;
//		if(index==6){
//			index=1;
//		}
//		$('ul[class=banner-right]>li').css({display:"none"});
//		$('ul[class=btn]>li').css({background:'none'})
//		$('ul[class=banner-right]>li').eq(index-1).css({display:"block"});
//		$('ul[class=btn]>li').eq(index-1).css({background:'orange'})
//	}
	$("div[class=iconfont4]").click(function(){
		fnw('r');
	})
	//左侧栏
	$(".aside1>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(this).css({display:"block",background:"#FF6700"})
			$(".item").eq(index).css({display:'block'})
		})
		$(this).mouseleave(function(){
			$(this).css({display:"block",background:'none'})
			$(".item").eq(index).css({display:'none'})
		})
	})
	//按钮
	$("ul[class=btn]>li").click(function(){
			index=$(this).index()+1
			fnw();
	})
	//banner
	$(".banner").mouseenter(function(){
		clearInterval(t)
	})
	$(".banner").mouseleave(function(){
		t=setInterval(function(){fnw('r')},1000)
	})
	//导航
	$(".mmm>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(this).css({color:"#FF6700"})
			$(".ite").eq(index).css({display:'block'})
		})
		$(this).mouseleave(function(){
			$(this).css({color:'none'})
			$(".ite").eq(index).css({display:'none'})
		})
	})
    //搜索
    $(".navi-right1").focus(function(){
		$(".hidden-xiala").css({display:'block'})
	})
    $(".navi-right1").blur(function(){
		$(".hidden-xiala").css({display:'none'})
	})
    //小米明星单品
    //1.轮播
    let n=0;
    let flag=true;
    let width=$(".five").width()
    let t1=window.setInterval(fn1,3000)
        function fn1(){
            if(flag){
            	if(n==3){
            		flag=false;
            		return;
            	}
            	n++;
            }else{
            	if(n==0){
            		flag=true;
            		return;
            	}
            	n--;
            }
            $(".five-main").css({marginLeft:`${-width*n}px`})
        }
    //2.左箭头
    $(".anjian1").click(function(){
    	if(n==0){
        		return
        	}n--;
        	$(".five-main").css({marginLeft:`${-width*n}px`})
        	return false;
    })
    //3.右箭头
    $(".anjian2").click(function(){
    	if(n==3){
        		this.classList.add('disabled')
        		return
        }
        	n++;
        	$(".five-main").css({marginLeft:`${-width*n}px`})
        	return false;
    })
    //智能硬件
    $(".wenzi22>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(".nine11>ul").css({display:'none'})
			$(this).css({color:"#424242"})
	        $(".nine11>ul").eq(index).css({display:'block'})
	        $(this).eq(index).css({color:'#ff6709'})
		})
	})
    //搭配
    $(".wenzi22two>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(".nine12>ul").css({display:'none'})
			$(this).css({color:"#424242"})
	        $(".nine12>ul").eq(index).css({display:'block'})
	        $(this).eq(index).css({color:'#ff6709'})
		})
	})
    //配件
    $(".wenzi22three>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(".nine13>ul").css({display:'none'})
			$(this).css({color:"#424242"})
	        $(".nine13>ul").eq(index).css({display:'block'})
	        $(this).eq(index).css({color:'#ff6709'})
		})
	})
    //周边
    $(".wenzif>li").each(function(index,obj){
		$(this).mouseenter(function(){
			$(".nine14>ul").css({display:'none'})
			$(this).css({color:"#424242"})
	        $(".nine14>ul").eq(index).css({display:'block'})
	        $(this).eq(index).css({color:'#ff6709'})
		})
	})
    //为你推荐
    let n1=0;
    let flag1=true;
    let width1=$(".fiveen").width()
    let t2=window.setInterval(fn2,3000)
        function fn2(){
            if(flag1){
            	if(n1==3){
            		flag1=false;
            		return;
            	}
            	n1++;
            }else{
            	if(n1==0){
            		flag1=true;
            		return;
            	}
            	n1--;
            }
            $(".five-mainn").css({marginLeft:`${-width1*n1}px`})
        }
    //2.左箭头
    $(".anjian11").click(function(){
    	if(n1==0){
        		return
        	}n1--;
        	$(".five-mainn").css({marginLeft:`${-width1*n1}px`})
        	return false;
    })
    //3.右箭头
    $(".anjian22").click(function(){
    	if(n1==3){
        		this.classList.add('disabled')
        		return
        }
        	n1++;
        	$(".five-mainn").css({marginLeft:`${-width1*n1}px`})
        	return false;
    })
    //内容
    //1.
    let index1=1;
    let height=$(".huantu").width()
	function fnyy(num1){
		if(num1=='l'){
			index1--;
		    if(index1==0){
			   index1=3;
		    }
		}
		if(num1=='r'){
			index1++;
		    if(index1==4){
			   index1=1;
		    }
		}
		$("div[class=iconfont7]>div").css({background:'#B0B0B0'})
		$(`div[class=iconfont7]>div:nth-of-type(${index1})`).css({background:"orange"})
	    $("div[class=bigboss]").css({marginLeft:`${-height*(index1-1)}px`})
	}
    $("div[class=iconfont5]").click(function(){
		fnyy('l');
	})
    
    $("div[class=iconfont7] div").click(function(){
			index1=$(this).index()+1
			fnyy();
	})
    $("div[class=iconfont6]").click(function(){
		fnyy('r');
	})
    //2.
    let index2=1;
    let height1=$(".huantu1").width()
	function fnyy1(num2){
		if(num2=='l'){
			index2--;
		    if(index2==0){
			   index2=3;
		    }
		}
		if(num2=='r'){
			index2++;
		    if(index2==4){
			   index2=1;
		    }
		}
		$("div[class=iconfont71]>div").css({background:'#B0B0B0'})
		$(`div[class=iconfont71]>div:nth-of-type(${index2})`).css({background:"orange"})
	    $("div[class=bigboss1]").css({marginLeft:`${-height1*(index2-1)}px`})
	}
    $("div[class=iconfont55]").click(function(){
		fnyy1('l');
	})
    
    $("div[class=iconfont71] div").click(function(){
			index2=$(this).index()+1
			fnyy1();
	})
    $("div[class=iconfont66]").click(function(){
		fnyy1('r');
	})
    //3.
    let index3=1;
    let height2=$(".huantu2").width()
	function fnyy2(num3){
		if(num3=='l'){
			index3--;
		    if(index3==0){
			   index3=3;
		    }
		}
		if(num3=='r'){
			index3++;
		    if(index3==4){
			   index3=1;
		    }
		}
		$("div[class=iconfont72]>div").css({background:'#B0B0B0'})
		$(`div[class=iconfont72]>div:nth-of-type(${index3})`).css({background:"orange"})
	    $("div[class=bigboss2]").css({marginLeft:`${-height2*(index3-1)}px`})
	}
    $("div[class=iconfont555]").click(function(){
		fnyy2('l');
	})
    
    $("div[class=iconfont72] div").click(function(){
			index3=$(this).index()+1
			fnyy2();
	})
    $("div[class=iconfont666]").click(function(){
		fnyy2('r');
	})
    //4.
    let index4=1;
    let height3=$(".huantu3").width()
	function fnyy3(num4){
		if(num4=='l'){
			index4--;
		    if(index4==0){
			   index4=3;
		    }
		}
		if(num4=='r'){
			index4++;
		    if(index4==4){
			   index4=1;
		    }
		}
		$("div[class=iconfont73]>div").css({background:'#B0B0B0'})
		$(`div[class=iconfont73]>div:nth-of-type(${index4})`).css({background:"orange"})
	    $("div[class=bigboss3]").css({marginLeft:`${-height3*(index4-1)}px`})
	}
    $("div[class=iconfont5555]").click(function(){
		fnyy3('l');
	})
    
    $("div[class=iconfont73] div").click(function(){
			index4=$(this).index()+1
			fnyy3();
	})
    $("div[class=iconfont6666]").click(function(){
		fnyy3('r');
	})
})
	  