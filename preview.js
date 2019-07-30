$(document).ready(function(){
	var x = 30;
	var y = 0;
	
	$('.galeria img').hover(function(e){
		$("body").append("<div id='preview'><img src='"+ this.src +"' alt='foto preview' /></div>");
		$("#preview").css("position","absolute").fadeIn("fast");	
	},
	function(){
		$('#preview').remove();
	});
	
	$(".galeria img").mousemove(function(e){
		var width = $("#preview").width();
		var height = $("#preview").height();
		
		if (e.clientX + 30 + width > $(window).width()) {
			$("#preview")
			.css("left",(e.pageX - x - width ) + "px");
			}
		else {$("#preview").css("left",(e.pageX + x) + "px");}
		if (e.clientY + 2 + height > $(window).height()) {
			$("#preview")
			.css("top",(e.pageY - y - height ) + "px");
			}
		else {$("#preview").css("top",(e.pageY - y) + "px");}
	});
})
