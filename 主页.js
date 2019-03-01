var count = 1;

function circle(){
	
	if (count < 0){
		count = 5;
	}
	var i = 0;
	var point = document.getElementsByClassName("point");
	var img = document.getElementById("beautiful");
	
	for (i = 0; i < 6; i++){
		point[i].style.backgroundColor = "gray";
	}
    point[count].style.backgroundColor = "red";
	
	img.src = "index" + count + ".jpg";
	
	count++;
	
	if (count === 6){
		count = 0;
	}
	

}

setInterval("circle()", 4000);

function back(){
	if (count == 0){
		count = 6;
	}
	count = count - 2;
	circle();
}

function up(){
	circle();
}
