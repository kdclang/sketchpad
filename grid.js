var numBoxes = 16;
$(document).ready(function () { 
	setGrid();

	$('#grid').on('mouseenter', '[class="bx"]', function() {
		var clr = setColor($(this).css("background-color"));
        $(this).css("background-color",clr);
	});
	$('#grid').on('mouseleave', '[class="bx"]', function() {
		var clr = setColor($(this).css("background-color"));
        $(this).css("background-color",clr);
	});	

});
function setColor(clr) {
    var comma=clr.indexOf(",");    
	var r = parseInt(clr.substring(4,comma));
    comma++;
    var commaNext=clr.indexOf(",",comma);
	var g = parseInt(clr.substring(comma,commaNext));     
	var b = parseInt(clr.substring(commaNext+1,clr.indexOf(")",commaNext+1)));
  
	if (r==255 && g==255 && b==255) {
		r=Math.floor(Math.random()*256);
		g=Math.floor(Math.random()*256);
		b=Math.floor(Math.random()*256);                
	} else {
		r = Math.max(r-25,0);
		g = Math.max(g-25,0);
		b = Math.max(b-25,0);                
	}
	clr = "rgb("+r+","+g+","+b+")"; 
    return clr;

}
function setGrid() {
    var sz = $('#grid').css("width");
    sz = sz.substring(0,sz.length-2);

	var side = parseInt(sz)/numBoxes;
    sz = side+"px";
	for (var r=1; r<=numBoxes; r++) {
		var gstr = "grow"+r;
		$("#grid").append("<div id=\""+gstr+"\" class=\"gr\">");
		for (var i=1; i<=numBoxes; i++) {
			var str = "<div id=\"boxx"+r+i+"\" class=\"bx\"></div>";
			$("#"+gstr).append(str);
		}
		
	}
    var bx =$('.bx');
    bx.css("width", sz);
    bx.css("height", sz); 
	$('.gr').css("height",sz);
	
}
function clearGrid() {
        $('.bx').css("background-color", "white");  
        $('#grid').empty();
		numBoxes= prompt("How many 'pixels' wide would you like your drawing grid?");
		setGrid();
}


