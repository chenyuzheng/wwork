window.onload=function(){
		/*let aside=document.getElementsByClassName('aside1');
		let lis=aside[0].getElementsByTagName('li');
		let item=document.getElementsByClassName('item');
	    for(let i=0;i<lis.length;i++){
	    	lis[i].onmouseenter=function(){
	    		item[i].style.display='block';
	        }
	    	lis[i].onmouseleave=function(){
	    		item[i].style.display='none';
	        }
	    }*/

		/*let imgBox=document.getElementsByClassName('banner-right');
		let img=imgBox[0].getElementsByTagName('li');
		let btn=document.getElementsByClassName('btn');
		let click=btn[0].getElementsByTagName('li');
		let banner=document.getElementsByClassName('banner');
		let fish=0;
		banner[0].onmouseenter=function(){
			clearInterval(t)
		}
		banner[0].onmouseleave=function(){
			t=setInterval(fn,3000)
		}
		for (let i = 0; i <click.length; i++) {
			click[i].onclick=function(){
				for (let j = 0; j < img.length; j++) {
					img[j].style.display='none';
//					img[j].style.display='block';
					click[j].style.background='rgba(0,0,0,0.5)';
			    }
			img[i].style.display='block';
			click[i].style.background='#ff6700';
			fish=i;
		    }
		}

//      let num=0;
//	    for (let i = 0; i < img.length; i++) {
//		click[i].onclick=function(){
//			img[num].style.display='none';
//			img[i].style.display='block';
//			num=i;
//			click[i].style.background='#ff6700';
//			click[j].style.background='none';
//		    }	
//	    }

//		let t;
//		t=setInterval(fn,3000)
//		fn=function(){
//			num++;
//			if(num==img.length){
//				num=0;
//			}
//			for(let i=0;i<img.length;i++){
//				img[i].style.display='none';
//			}
//			img[num].style.display='block';
//		}
//      let fish=0;
//      let t=window.setInterval(function(){
//      	for(let i=0;i<img.length;i++){
//      		img[i].style.display='none';
//				click[i].style.background='rgba(0,0,0,0.5)';
//      	}
//      	fish=fish%5;
//      	img[fish].style.display='block';
//			click[fish].style.background='#ff6700';
//			fish++;
//      },3000)
//      
        
        let t=window.setInterval(fn,3000)
        function fn(){
        	fish++;
        	for(let i=0;i<img.length;i++){
        		img[i].style.display='none';
				click[i].style.background='rgba(0,0,0,0.5)';
        	}
        	fish=fish%5;
        	img[fish].style.display='block';
			click[fish].style.background='#ff6700';
        }
        
        let forward=document.getElementsByClassName('iconfont4')
        let back=document.getElementsByClassName('iconfont3')
        forward[0].onclick=function(){
        	fish++;
        	fish=fish%5;
            for(let i=0;i<img.length;i++){
        			img[i].style.display='none';
					click[i].style.background='rgba(0,0,0,0.5)';
        	}
        	img[fish].style.display='block';
			click[fish].style.background='#ff6700';
			fish=i;
        }
        back[0].onclick=function(){
        	fish--;
        	fish=fish%5;
        	if(fish<0){
        		fish=4;
        	}
        	for(let i=0;i<img.length;i++){
        			img[i].style.display='none';
					click[i].style.background='rgba(0,0,0,0.5)';
        	}
        	img[fish].style.display='block';
			click[fish].style.background='#ff6700';
	        fish=i;
        	
        }*/
        
        /*let mmm=document.getElementsByClassName('mmm');
		let liss=mmm[0].getElementsByTagName('li');
		let ite=document.getElementsByClassName('ite');
	    for(let i=0;i<liss.length;i++){
	    	liss[i].onmouseenter=function(){
	    		ite[i].style.display='block';
	        }
	    	liss[i].onmouseleave=function(){
	    		ite[i].style.display='none';
	        }
	    }*/
	    
	    /*let navi=document.getElementsByClassName('navi-right1');
	    let hidden=document.getElementsByClassName('hidden-xiala');
	    navi[0].onfocus=function(){
	    		hidden[0].style.display='block';
	        }
	    navi[0].onblur=function(){
	    		hidden[0].style.display='none';
	       }*/
	    
	   /* let five=document.getElementsByClassName('five')
	    let main=five[0].getElementsByClassName('five-main')
	    let anjian=document.getElementsByClassName('anjian')
	    let qian=anjian[0].getElementsByClassName('anjian2')
	    let hou=anjian[0].getElementsByClassName('anjian1')
	    let childNum=main[0].childElementCount
	    let width=five[0].offsetWidth
	    let num=0;
	    let flag=true;
	    let t1=window.setInterval(fn1,3000)
        function fn1(){
            if(flag){
            	if(num==3){
            		flag=false;
            		return;
            	}
            	num++;
            }else{
            	if(num==0){
            		flag=true;
            		return;
            	}
            	num--;
            }
            main[0].style.marginLeft=`${-width*num}px`;
        }
        qian[0].onclick=function(){
        	if(num==3){
        		this.classList.add('disabled')
        		return
        	}
        	hou[0].classList.remove('disabled')
        	num++;
        	main[0].style.marginLeft=`${-width*num}px`;
        	return false;
        }
        hou[0].onclick=function(){
        	if(num==0){
        		return
        	}num--;
        	main[0].style.marginLeft=`${-width*num}px`;
        	return false;
        }*/
        
        /*let hover=document.getElementsByClassName('wenzi22')
        let hoverr=hover[0].getElementsByTagName('li')
        let xianshi=document.getElementsByClassName('nine11')
        let xian=xianshi[0].getElementsByTagName('ul')
        for (let i = 0; i <hoverr.length; i++) {
			hoverr[i].onmouseenter=function(){
				for (let j = 0; j < xian.length; j++) {
					xian[j].style.display='none';
					hoverr[j].style.color='#424242';
			    }
			xian[i].style.display='block';
			hoverr[i].style.color='#ff6709';
		    }
		}*/
        
        /*let hover1=document.getElementsByClassName('wenzi22two')
        let hoverr1=hover1[0].getElementsByTagName('li')
        let xianshi1=document.getElementsByClassName('nine12')
        let xian1=xianshi1[0].getElementsByTagName('ul')
        for (let i = 0; i <hoverr1.length; i++) {
			hoverr1[i].onmouseenter=function(){
				for (let j = 0; j < xian1.length; j++) {
					xian1[j].style.display='none';
					hoverr1[j].style.color='#424242';
			    }
			xian1[i].style.display='block';
			hoverr1[i].style.color='#ff6709';
		    }
		}*/
        
        /*let hover2=document.getElementsByClassName('wenzi22three')
        let hoverr2=hover2[0].getElementsByTagName('li')
        let xianshi2=document.getElementsByClassName('nine13')
        let xian2=xianshi2[0].getElementsByTagName('ul')
        for (let i = 0; i <hoverr2.length; i++) {
			hoverr2[i].onmouseenter=function(){
				for (let j = 0; j < xian2.length; j++) {
					xian2[j].style.display='none';
					hoverr2[j].style.color='#424242';
			    }
			xian2[i].style.display='block';
			hoverr2[i].style.color='#ff6709';
		    }
		}*/
        
        /*let hover3=document.getElementsByClassName('wenzif')
        let hoverr3=hover3[0].getElementsByTagName('li')
        let xianshi3=document.getElementsByClassName('nine14')
        let xian3=xianshi3[0].getElementsByTagName('ul')
        for (let i = 0; i <hoverr3.length; i++) {
			hoverr3[i].onmouseenter=function(){
				for (let j = 0; j < xian3.length; j++) {
					xian3[j].style.display='none';
					hoverr3[j].style.color='#424242';
			    }
			xian3[i].style.display='block';
			hoverr3[i].style.color='#ff6709';
		    }
		}*/
        
        /*let fivee=document.getElementsByClassName('fiveen')
	    let mainn=fivee[0].getElementsByClassName('five-mainn')
	    let anjiann=document.getElementsByClassName('anjiann')
	    let qiann=anjiann[0].getElementsByClassName('anjian22')
	    let houu=anjiann[0].getElementsByClassName('anjian11')
//	    let childNum=mainn[0].childElementCount
	    let widthh=fivee[0].offsetWidth
	    let numm=0;
	    let flagg=true;
	    let t2=window.setInterval(fn2,3000)
        function fn2(){
            if(flagg){
            	if(numm==3){
            		flagg=false;
            		return;
            	}
            	numm++;
            }else{
            	if(numm==0){
            		flagg=true;
            		return;
            	}
            	numm--;
            }
            mainn[0].style.marginLeft=`${-widthh*numm}px`;
        }
        qiann[0].onclick=function(){
        	if(numm==3){
        		this.classList.add('disabled')
        		return
        	}
        	houu[0].classList.remove('disabled')
        	numm++;
        	mainn[0].style.marginLeft=`${-widthh*numm}px`;
        	return false;
        }
        houu[0].onclick=function(){
        	if(numm==0){
        		return
        	}numm--;
        	mainn[0].style.marginLeft=`${-widthh*numm}px`;
        	return false;
        }*/
        
     /* let bigboss=document.getElementsByClassName('bigboss')
      let anniu=document.getElementsByClassName('iconfont7')
      let yuan=anniu[0].getElementsByClassName('iconfont77')
      let huantu=document.getElementsByClassName('huantu')
      let height=huantu[0].offsetHeight
      let you=document.getElementsByClassName('iconfont6')
      let zuo=document.getElementsByClassName('iconfont5')
      let fishh=0;
      for (let i = 0; i <yuan.length; i++) {
			yuan[i].onclick=function(){
				for(let j=0;j<huantu.length;j++){
					 yuan[j].style.background='#B0B0B0';
				}
			    yuan[i].style.background='orange';
			    bigboss[0].style.marginLeft=`${-height*i}px`
		    }
		}
      you[0].onclick=function(){
      	fishh++;
        	fishh=fishh%3;
            for(let i=0;i<huantu.length;i++){
				yuan[i].style.background='#B0B0B0';
        	}
        	yuan[fishh].style.background='orange';
			bigboss[0].style.marginLeft=`${-height*fishh}px`
//			fishh=i;
      }
      zuo[0].onclick=function(){
      	fishh--;
        	fishh=fishh%3;
        	if(fishh<0){
        		fishh=2;
        	}
        	for(let i=0;i<huantu.length;i++){
        		yuan[i].style.background='#B0B0B0';	
        	}
        	yuan[fishh].style.background='orange';
			bigboss[0].style.marginLeft=`${-height*fishh}px`
//	        fishh=i;
        	
      }*/
      
      /*let bigboss2=document.getElementsByClassName('bigboss2')
      let anniu2=document.getElementsByClassName('iconfont72')
      let yuan2=anniu2[0].getElementsByClassName('iconfont772')
      let huantu2=document.getElementsByClassName('huantu2')
      let height2=huantu2[0].offsetHeight
      let you2=document.getElementsByClassName('iconfont666')
      let zuo2=document.getElementsByClassName('iconfont555')
      let fishh2=0;
      for (let i = 0; i <yuan2.length; i++) {
			yuan2[i].onclick=function(){
				for(let j=0;j<huantu2.length;j++){
					 yuan2[j].style.background='#B0B0B0';
				}
			    yuan2[i].style.background='orange';
			    bigboss2[0].style.marginLeft=`${-height2*i}px`
		    }
		}
      you2[0].onclick=function(){
      	fishh2++;
        	fishh2=fishh2%3;
            for(let i=0;i<huantu2.length;i++){
				yuan2[i].style.background='#B0B0B0';
        	}
        	yuan2[fishh2].style.background='orange';
			bigboss2[0].style.marginLeft=`${-height2*fishh2}px`
			fishh2=i;
      }
      zuo2[0].onclick=function(){
      	fishh2--;
        	fishh2=fishh2%3;
        	if(fishh2<0){
        		fishh2=2;
        	}
        	for(let i=0;i<huantu2.length;i++){
        		yuan2[i].style.background='#B0B0B0';	
        	}
        	yuan2[fishh2].style.background='orange';
			bigboss2[0].style.marginLeft=`${-height2*fishh2}px`
	        fishh2=i;
        	
      }*/
      
      /*let bigboss1=document.getElementsByClassName('bigboss1')
      let anniu1=document.getElementsByClassName('iconfont71')
      let yuan1=anniu1[0].getElementsByClassName('iconfont771')
      let huantu1=document.getElementsByClassName('huantu1')
      let height1=huantu1[0].offsetHeight
      let you1=document.getElementsByClassName('iconfont66')
      let zuo1=document.getElementsByClassName('iconfont55')
      let fishh1=0;
      for (let i = 0; i <yuan1.length; i++) {
			yuan1[i].onclick=function(){
				for(let j=0;j<huantu1.length;j++){
					 yuan1[j].style.background='#B0B0B0';
				}
			    yuan1[i].style.background='orange';
			    bigboss1[0].style.marginLeft=`${-height1*i}px`
		    }
		}
      you1[0].onclick=function(){
      	fishh1++;
        	fishh1=fishh1%3;
            for(let i=0;i<huantu1.length;i++){
				yuan1[i].style.background='#B0B0B0';
        	}
        	yuan1[fishh1].style.background='orange';
			bigboss1[0].style.marginLeft=`${-height1*fishh1}px`
			fishh1=i;
      }
      zuo1[0].onclick=function(){
      	fishh1--;
        	fishh1=fishh1%3;
        	if(fishh1<0){
        		fishh1=2;
        	}
        	for(let i=0;i<huantu1.length;i++){
        		yuan1[i].style.background='#B0B0B0';	
        	}
        	yuan1[fishh1].style.background='orange';
			bigboss1[0].style.marginLeft=`${-height1*fishh1}px`
	        fishh1=i;
      }*/
      
      /*let bigboss3=document.getElementsByClassName('bigboss3')
      let anniu3=document.getElementsByClassName('iconfont73')
      let yuan3=anniu3[0].getElementsByClassName('iconfont773')
      let huantu3=document.getElementsByClassName('huantu3')
      let height3=huantu3[0].offsetHeight
      let you3=document.getElementsByClassName('iconfont6666')
      let zuo3=document.getElementsByClassName('iconfont5555')
      let fishh3=0;
      for (let i = 0; i <yuan3.length; i++) {
			yuan3[i].onclick=function(){
				for(let j=0;j<huantu3.length;j++){
					 yuan3[j].style.background='#B0B0B0';
				}
			    yuan3[i].style.background='orange';
			    bigboss3[0].style.marginLeft=`${-height3*i}px`
		    }
		}
      you3[0].onclick=function(){
      	fishh3++;
        	fishh3=fishh3%3;
            for(let i=0;i<huantu3.length;i++){
				yuan3[i].style.background='#B0B0B0';
        	}
        	yuan3[fishh3].style.background='orange';
			bigboss3[0].style.marginLeft=`${-height3*fishh3}px`
			fishh3=i;
      }
      zuo3[0].onclick=function(){
      	fishh3--;
        	fishh3=fishh3%3;
        	if(fishh3<0){
        		fishh3=2;
        	}
        	for(let i=0;i<huantu3.length;i++){
        		yuan3[i].style.background='#B0B0B0';	
        	}
        	yuan3[fishh3].style.background='orange';
			bigboss3[0].style.marginLeft=`${-height3*fishh3}px`
	        fishh3=i;
        	
      }*/
}