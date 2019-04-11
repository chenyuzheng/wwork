window.onload=function(){
    let textarea=document.getElementById('text')
	let ul=document.querySelector('.yonghu')
	textarea.onkeydown=function(e){
		if( e.shiftKey && e.keyCode==13 ){
			let value=this.value;
			this.value='';
			let lis=document.createElement('li')
			
			lis.innerHTML=`
			    <div class="left">
			  	<img src="img/mall_03_03.png"/>
			  </div>
			  <div class="right">
			  	<span>${value}</span>
			  </div> 
			`
		ul.prependChild(lis)
	    }
	}
	textarea.onkeyup=function(){
		let value=this.value
		let p=document.getElementsByClassName('dao')
		p[0].innerText =`${120 - value.length}`
	}
	let tijiao=document.getElementsByClassName('tijiao')
	tijiao[0].onclick=function(e){
			let value=textarea.value;
			textarea.value='';
			let lis=document.createElement('li')
			
			lis.innerHTML=`
			    <div class="left">
			  	<img src="img/mall_03_03.png"/>
			  </div>
			  <div class="right">
			  	<p>${value}</p>
			  </div> 
			`
		ul.prependChild(lis)
	}
}