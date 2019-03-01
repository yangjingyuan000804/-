var bofangshunxu = 3;
var pau = 0;
var timer = null;

function changeBoFang(){
	
	var aud = document.getElementById("haha");
	
	if (bofangshunxu === 3){
	    bofangshunxu = 0;
	}
	
	bofangshunxu++;
	
	if (bofangshunxu === 1){
		document.getElementById("bofangshunxu").src="单曲循环.jpg";
		aud.loop = "loop";
	}
	
	else if (bofangshunxu === 2){
		document.getElementById("bofangshunxu").src="随机播放.jpg";
		aud.loop = "";
	}
	
	else if(bofangshunxu === 3) {
		document.getElementById("bofangshunxu").src="顺序播放.jpg";
		aud.loop = "";
	}
}

var go = 0;
var minu = 0;
var ti = null;

function goOn(){
	go++;
	
	if (go == 60){
		minu++;
		go = 0;
	}
	
	var div1 = document.getElementById("start");
	
	if (go >= 10){
	    div1.innerText = minu + ":" + go;
	}
	
	if (go < 10){
		div1.innerText = minu + ":0" + go;
	}
	
	var aud = document.getElementById("haha");
	if ((minu * 60 + go) == Math.round(aud.duration)){
		div1.innerText = "0:00";
		go = 0;
		minu = 0;
		if (!aud.loop){
			clearInterval(ti);
		    ti = null;
		}
	}
}

function pause(){
	var aud = document.getElementById("haha");
	
	if (pau == 0){
		var div = document.getElementById("end");
	    var cou = Math.round(aud.duration);
		var min = parseInt(cou / 60);
		var sec = cou - 60 * min;
		div.innerText = min + ":" + sec;
		document.getElementById("pause").src = "暂停.png";
		document.getElementById("haha").play();
		pau = 1;
		ti = setInterval("goOn()", 1000);
	}
	
	else{
		document.getElementById("pause").src = "播放.jpg";
		clearInterval(ti);
		ti = null;
		document.getElementById("haha").pause();
		pau = 0;
	}
}

var count = 0;

function drag(bar1){
	
	bar1.onmousedown = function(ev){
	clearTimeout(timer);
	timer = null;
		
	var bar1 = document.getElementById("bar1");
	var bar2 = document.getElementById("bar2");
	
		var oevent = ev;
		var distanceX = 350;

        document.onmousemove = function(eve){
		var e = eve;
		var con = e.clientX - distanceX;
		count = con;
		bar2.style.width = count + "px";
	    bar1.style.left = e.clientX - 18 + "px";
		if (x < 0)
		{
			bar1.style.left = distanceX - 18 + "px";
			bar2.style.width = 0 + "px";
		}
		
		if (x > 600)
		{
			bar1.style.left = distanceX + 580 + "px";
			bar2.style.width =  600 + "px";
		}
	}

	document.onmouseup = function(even){
		    var aud = document.getElementById("haha");
		    aud.currentTime = (even.clientX - 330) / 600 * aud.duration;
	        minu = parseInt(aud.currentTime / 60);
		    go = parseInt(aud.currentTime - minu * 60);
		    
			timer = setTimeout(function item(){
			var aud = document.getElementById("haha");
			var num1 = aud.duration;
			var num2 = aud.currentTime;
	        var count = parseInt((num2 / num1) * 600);
	
	        x.style.left = 330 + count + "px";
	        y.style.width = count + "px";
			
			
				if (pau == 1){
					timer = setTimeout(item,1000);
				}
				
	        if (parseInt(y.style.width) >= 600){
	            clearTimeout(timer);
				timer = null;
                 x.style.left = "330";
	             y.style.width = "0";
                 document.getElementById("pause").src = "播放.jpg";
		         pau = 0;
				 var aud = document.getElementById("haha");
				 
				 if (bofangshunxu == 3){
				     var list1 = document.getElementById("list");
					 
					 if (list1.selectedIndex == 3){ 
                     list1[1].selected = true;
					 music();
					 }
					 
					 else{
						  list1[list1.selectedIndex + 1].selected = true;
					      music();
					 }
                      					 
				 }
				 
				  if (bofangshunxu == 2){
					 var list1 = document.getElementById("list");
					 var ran = (parseInt(Math.random() * 10) % 3) + 1;
					 list1[ran].selected = true;
					 music();
				 }
				 
				 if (aud.loop == "loop")
		         {
			         pau = 1;
			         document.getElementById("pause").src = "暂停.png";
					 timer = setTimeout(item,1000);
		         }
	        }
	
            },1000);
		     
    　　　　document.onmousemove = null;
    　　　　document.onmouseup = null;
    　　}
	}
	
}
function jump(bar){
	bar.onclick = function(ev){
		var e = ev;
		bar1.style.left = e.clientX + "px";
		bar2.style.width = e.clientX - 330 + "px";
		var aud = document.getElementById("haha");
		aud.currentTime = (e.clientX - 330) / 600 * aud.duration;
	    minu = parseInt(aud.currentTime / 60);
		go = parseInt(aud.currentTime - minu * 60);
	}
}
function progress(){
	
	var x = document.getElementById("bar1");
	var y = document.getElementById("bar2");
	 
	 	if (pau == 1){
		    timer = setTimeout(function item(){
			var aud = document.getElementById("haha");
			var num1 = aud.duration;
			var num2 = aud.currentTime;
	        var count = parseInt((num2 / num1) * 600);
	
	        x.style.left = 330 + count + "px";
	        y.style.width = count + "px";
			
			
				if (pau == 1){
					timer = setTimeout(item,1000);
				}
				
	        if (parseInt(y.style.width) >= 600){
	            clearTimeout(timer);
				timer = null;
                 x.style.left = "330";
	             y.style.width = "0";
                 document.getElementById("pause").src = "播放.jpg";
		         pau = 0;
				 var aud = document.getElementById("haha");
				 
				 if (bofangshunxu == 3){
				     var list1 = document.getElementById("list");
					 
					 if (list1.selectedIndex == 3){ 
                     list1[1].selected = true;
					 music();
					 }
					 
					 else{
						  list1[list1.selectedIndex + 1].selected = true;
					      music();
					 }
                      					 
				 }
				 
				  if (bofangshunxu == 2){
					 var list1 = document.getElementById("list");
					 var ran = (parseInt(Math.random() * 10) % 3) + 1;
					 list1[ran].selected = true;
					 music();
				 }
				 
				 if (aud.loop == "loop")
		         {
			         pau = 1;
			         document.getElementById("pause").src = "暂停.png";
					 timer = setTimeout(item,1000);
		         }
	        }
	
            },1000);
		}		
}

function music(){
	var a = document.getElementById("haha");
	var list = document.getElementById("list");
		var music = list.selectedIndex;
	    switch (music)
	    {
			case 0:
		    case 1:{
			    a.src ="C:/Users/DX5/Desktop/新建文件夹/光年之外.mp3";
			    break;
		    }
		
		    case 2:{
			    a.src="C:/Users/DX5/Desktop/新建文件夹/岁月神偷.mp3";
			    break;
		    }
		    case 3:{
			    a.src="C:/Users/DX5/Desktop/新建文件夹/夜空中最亮的星.mp3";
			    break;
		    }
	    }
        a.load();
		clearTimeout(timer);
		clearInterval(ti);
		ti = null;
        go = 0;
        minu = 0;
        a.oncanplay = function(){
		var a = document.getElementById("haha");
		var cou = Math.round(a.duration);
		var div = document.getElementById("end");
		var min = parseInt(cou / 60);
		var sec = cou - 60 * min;
		div.innerText = min + ":" + sec;
		x.style.left = "330";
	    y.style.width = "0";
		document.getElementById("pause").src = "暂停.png";
		document.getElementById("haha").play();
		pau = 1;
		ti = setInterval("goOn()",1000);
		progress();
		}
}

function step(){
	var list1 = document.getElementById("list");
	
	if (list1.selectedIndex == 1 || list1.selectedIndex == 0){
		list1[3].selected = true;
		music();
	}
	else{
		list1[list1.selectedIndex - 1].selected = true;
	    music();
	}
}

function back(){
	var list1 = document.getElementById("list");
	
	if (list1.selectedIndex == 3){
		list1[1].selected = true;
		music();
	}
	else{
		list1[list1.selectedIndex + 1].selected = true;
	    music();
	}
}