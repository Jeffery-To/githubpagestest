window.onload=function(){
	var slider = document.getElementById("slider");
	var sid = slider.childNodes;
	var page = 0;

	var time = setInterval(function(){
			if(0 == page) {
				sid[1].style.display = "block";
				sid[3].style.display = "none";
				page = 1;
			}else{
				sid[1].style.display = "none";
				sid[3].style.display = "block";
				page = 0;
			}
	},3000);


	var prevnext = document.getElementById("prevnext");
	var pna = prevnext.getElementsByTagName("a");// 5.prev 6.next
	var lipic = prevnext.getElementsByTagName("li");
	var n = 1;

	pna[5].onclick = function(){
		n++;
		for(var i = 0; i < lipic.length; i ++){
			var m = (i+n-1)%5+1;
				lipic[i].setAttribute("class", "board" + m);		
		}
	}
	pna[6].onclick = function(){
		n++;
		for(var i = 0; i < lipic.length; i ++){
			var m = (i+n-1)%5+1;
				lipic[i].setAttribute("class", "board" + m);		
		}
	}
}