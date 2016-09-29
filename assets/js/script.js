// simple jquery to change preview by selecting picture from gallery.

$(document).ready(function(){


 $('.pic').click(function(){
    $("#preview").attr("src",$(this).attr("src")); 
 });


	
	

	});