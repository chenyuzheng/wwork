window.onload=function(){
	let imgbox=document.getElementsByClassName('img');
	let head=document.getElementsByClassName('head');
    let imgs=imgbox[0].getElementsByTagName('li');
    let widths=imgbox[0].offsetWidth;
    let forward=document.getElementsByClassName('back');
    let back=document.getElementsByClassName('forward');
    let btn=document.getElementsByClassName('dian');
    let click=btn[0].getElementsByTagName('li');
    let flag=true;
    let now=next=0;
    let t;
    head[0].onmouseenter=function(){
    	clearInterval(t)
    }
    head[0].onmouseleave=function(){
    	 t=setInterval(fn,3000)
    }
    t=setInterval(fn,3000)
    function fn(){
	next++;
	if(next==imgs.length){
		next=0;
	}
	imgs[next].style.left=`${widths}px`;
	animate(imgs[now],{left:-widths})
	animate(imgs[next],{left:0})
	now=next;
	for(let j=0;j<click.length;j++){
        click[j].style.background='none';
    	}
	    click[next].style.background='#EDE276';
    }
    
    function fn1(){
	next--;
	if(next==-1){
		next=imgs.length-1;
	}
	imgs[next].style.left=`${-widths}px`;
	
	animate(imgs[now],{left:widths})
	animate(imgs[next],{left:0})
	now=next;
	for(let j=0;j<click.length;j++){
        click[j].style.background='none';
    	}
	    click[next].style.background='#EDE276';
    }
    
    for(let i=0;i<click.length;i++){
    	click[i].onclick=function(){
    		if(i<now){
    			imgs[i].style.left=`${-widths}px`;
	            animate(imgs[now],{left:widths})
	            animate(imgs[i],{left:0})
	            for(let j=0;j<click.length;j++){
    		        click[j].style.background='none';
    	        }
	            click[i].style.background='#EDE276';
	            now=next=i;
    		}
    		else if(i>now){
    			imgs[i].style.left=`${widths}px`;
	            animate(imgs[now],{left:-widths})
	            animate(imgs[i],{left:0})
	            for(let j=0;j<click.length;j++){
    		        click[j].style.background='none';
    	        }
	            click[i].style.background='#EDE276';
	            now=next=i;
    		}
    	}
    	
    }
    
    forward[0].onclick=function(){
    	if(flag){
    		flag=false;	
    	next++;
	    if(next==imgs.length){
		     next=0;
	    }
	    imgs[next].style.left=`${widths}px`;
	    animate(imgs[now],{left:-widths},function(){
	    	return flag=true;
	    })
	    animate(imgs[next],{left:0})
	    now=next;
	    for(let j=0;j<click.length;j++){
        click[j].style.background='none';
    	}
	    click[next].style.background='#EDE276';
        }	
    }
     
    back[0].onclick=function(){
    	if(flag){
    		flag=false;	
    	next--;
	    if(next==-1){
		     next=imgs.length-1;
	    }
	    imgs[next].style.left=`${-widths}px`;
	    animate(imgs[now],{left:widths},function(){
	    	return flag=true;
	    })
	    animate(imgs[next],{left:0})
	    now=next;
	    for(let j=0;j<click.length;j++){
        click[j].style.background='none';
    	}
	    click[next].style.background='#EDE276';
        }	
    }
}
