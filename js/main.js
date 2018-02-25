
!function(){
	let duration = 50;
	function bindEvents(){
		let buttons = document.querySelectorAll('.actions>button');
		for(let i=0;i<buttons.length;i++){
			buttons[i].onclick = function(e){
				
				for (let i = 0; i < buttons.length; i++) {
	                buttons[i].classList.remove('active');
	            }
	            e.srcElement.classList.add('active');

				var speed = e.srcElement.getAttribute('data-speed')
				console.log(speed);
				switch(speed){
					case 'slow':
						duration = 100;
						break;
					case 'normal':
						duration = 50;
						break;
					case 'fast':
						duration = 10;
						break;
				}
				console.log(duration);
			}
		}
	}
	bindEvents();
	function writeCode(prefix,code,fn){
		let container = document.querySelector('#code');
		let styleTag = document.querySelector("#styleTag");
		let n = 0;
		setTimeout(function run(){
			n=n+1;
			container.innerHTML = code.substring(0,n);
			container.scrollTop = container.scrollHeight;
			styleTag.innerHTML = code.substring(0,n);
			if(n>=code.length){
				fn&&fn.call();
			}else{
				setTimeout(run,duration);
			}
		},duration);
	}
	let code = `
/*首先,准备画皮卡丘的皮*/
.preview{
  height: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgb(255,229,0);
}
.wrapper{
  width:316px;
  height:177px;
  position:relative;
}
.wrapper>:not(:last-child){
  z-index: 1;
}
/*接下来,画皮卡丘的鼻子*/
.nose{
  border:1px solid;
  border-width:11px;
  border-color:black transparent transparent;
  border-radius:12px;
  position:absolute;
  left:50%;
  top:25px;
  margin-left:-9px;
}
/*画皮卡丘的眼睛*/
.eye{
  width:47px;
  height:47px;
  border-radius:50%;
  border:2px solid rgb(4,4,15);
  background:rgb(46,46,46);
  position:absolute;
}
/*画皮卡丘的眼珠子*/
.eye::before{
  display:block;
  content:'';
  height:20px;
  width:20px;
  border-radius:50%;
  border:2px solid white;
  background:white;
  position:absolute;
  left:6px;
  top:3px;
}
.eye.left{
  right:50%;
  margin-right:66px;
}
.eye.right{
  left:50%;
  margin-left:66px;
}
/*画皮卡丘的脸*/
.face{
  width:66px;
  height:66px;
  border:2px solid rgb(5,1,13);
  position:absolute;
  border-radius:50%;
  background:rgb(254,0,0);
  top:68px;
}
.face.left{
  right:50%;
  margin-right:92px;
}
.face.right{
  left:50%;
  margin-left:92px;
}
/*画皮卡丘的上嘴唇*/
.upperLip{
  width:80px;
  height:20px;
  border:2px solid black;
  position:absolute;
  top:52px;
  background:rgb(255,229,0);
}
.upperLip.left{
  right:50%;
  border-bottom-left-radius:30px 20px;
  border-top:none;
  border-right:none;
  transform:rotate(-15deg)
}
.upperLip.right{
  left:50%;
  border-bottom-right-radius:30px 20px;
  border-top:none;
  border-left:none;
  transform:rotate(15deg)
}
.lipWrapper{
  height:100px;
  width:150px;
  position:absolute;
  left:50%;
  margin-left:-75px;
  overflow:hidden;
  bottom:16px;
}
/*画皮卡丘的下嘴唇*/
.lowerLip{
  height:1000px;
  width:150px;
  border:2px solid black;
  border-radius:200px/1000px;
  position:absolute;
  bottom:0;
  background:rgb(155,1,10);
  overflow:hidden;
}
.lowerLip::before{
  display:block;
  content:'';
  position:absolute;
  bottom:0;
  background:rgb(255,71,95);
  left:50%;
  height:80px;
  width:100px;
  margin-left:-50px;
  border-radius:50%;
}
/*最后，把这只皮卡丘送给你*/
`
	writeCode('',code);
}.call();