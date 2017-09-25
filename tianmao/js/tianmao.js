window.onload=function(){
	    let imgBox=document.getElementsByClassName('banner-bottom-right');
		let img=imgBox[0].getElementsByTagName('li');
		let btn=document.getElementsByClassName('dot');
		let click=btn[0].getElementsByTagName('li');
		let banner=document.getElementsByClassName('banner');
		let fish=0;
		banner[0].onmouseenter=function(){
			clearInterval(t)
		}
		banner[0].onmouseleave=function(){
			t=setInterval(fn,2000)
		}
		for (let i = 0; i <click.length; i++) {
			click[i].onclick=function(){
				for (let j = 0; j < img.length; j++) {
					img[j].style.display='none';
					click[j].style.background='rgba(0,0,0,0.5)';
			    }
			img[i].style.display='block';
			click[i].style.background='#ff6700';
			fish=i;
		    }
		}
		
		
        let t=window.setInterval(fn,3000)
        function fn(){
        	fish++;
        	for(let i=0;i<img.length;i++){
        		img[i].style.display='none';
				click[i].style.background='rgba(0,0,0,0.5)';
        	}
        	fish=fish%6;
        	img[fish].style.display='block';
			click[fish].style.background='#ff6700';
        }
        
        let ch=window.innerHeight;
	    let floor=document.querySelectorAll('section');
	    let sli=document.querySelectorAll('.btn1>li')
	    let posArr=[];
	    let nthFloor=0;
	    let sFlag=true;
	    let search=document.querySelector('.search')
	    floor.forEach(element=>{
		     posArr.push(element.offsetTop)
	    })
	    sli.forEach(function(element,index){
		   element.onclick=function(){
			//document.body.scrollTop=posArr[index]
			  animate(document.body,{scrollTop:posArr[index]})
		    }
	    })
        window.onscroll=function(){
//		let obj=document.body.scrollTop?document.body:document.documentElement
		let st=document.body.scrollTop
//		posArr.forEach(function(value,index){
//			if(ch+st>=value+300){
//				sli[nthFloor].classList.remove('active')
//				sli[index].classList.add('active')
//				nthFloor=index;
//				let imgs=floor[index].getElementsByTagName('img')
//				for(let i=0;i<imgs.length;i++){
//			        imgs[i].src=imgs[i].getAttribute('imgPath')
//				}
//			}
//		})
		if(st>500){
			if(sFlag){
				sFlag=false;
				animate(search,{top:0})
			}
		}else{
			if(!sFlag){
				sFlag=true;
				animate(search,{top:-50})
			}
		}
	}
        	
        let aside=document.getElementsByClassName('aside1');
		let lis=aside[0].getElementsByTagName('li');
		let item=document.getElementsByClassName('item');
	    for(let i=0;i<lis.length;i++){
	    	lis[i].onmouseenter=function(){
	    		item[i].style.display='block';
	        }
	    	lis[i].onmouseleave=function(){
	    		item[i].style.display='none';
	        }
	    }
	    
	    let mmm=document.getElementsByClassName('right1-3');
		let ite=document.getElementsByClassName('ite');
	    	mmm[0].onmouseenter=function(){
	    		ite[0].style.display='block';
	        }
	    	mmm[0].onmouseleave=function(){
	    		ite[0].style.display='none';
	       }
}
