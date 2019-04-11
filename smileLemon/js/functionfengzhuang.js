HTMLElement.prototype.insertAfter=function(insert){
    let next=this.nextElementSibling;
    let parent=this.parentNode;
    if(next){
        parent.insertBefore(insert,next);
    }else{
        parent.appendChild(insert);
    }
}  
HTMLElement.prototype.prependChild=function(insert){
		let first=this.firstElementChild
		if(first){
	        this.insertBefore(insert,first)
		}else{ 
			this.appendChild(insert)
		}	   
    }
HTMLElement.prototype.prependTo=function(parent){
		parent.prependChild(this)
}
HTMLElement.prototype.empty=function(){
   	   let child=this.childNodes;
// 	   child.forEach((value)=>{
// 	   	    this.removeChild(value)
// 	   })
// 	   for(let i=0;i<child.length;i++){
// 	   	    this.removeChild(child[i])
// 	   }
   	   for(let i=child.length;i>0;i--){
   	   	    this.removeChild(child[i])
   	   }
// 	   this.innerHTML='' //识别标签对,标签对删除
   	     //从前往后删会改变它的下标,删除它的空格部分,所以不成功
   	     //遍历要注意下标改变的问题
   }
HTMLElement.prototype.empty=function(){
    	let parent=this.parentNode;
    	parent.removeChild(this);
}
HTMLElement.prototype.next=function(){
        let next=this.nextElementSibling;
        if(next){
        	return next;
        }else{
        	return false;
        }
}
HTMLElement.prototype.nextAll=function(){
        let nexte=this.next()
        let newarr=[]
        if(nexte){
        	newarr.push(nexte);
        }else{
        	return false;
        }
        while(nexte){
        	nexte=nexte.next()
        	newarr.push(nexte);
        }
        newarr.pop();
        return newarr;
}