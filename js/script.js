$(document).ready(function(){

	$("#encabezado2").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 10){
			if(!flag){
				$("#encabezado1").css({"height":"70px"});

				$("encabezado2").css({"background-color": "#f5f0f0"});
				flag = true;
			}
		}else{
			if(flag){
				$("#encabezado2").css({"height":"70px"});
                
                
				$("encabezado2").css({"background":""});
				flag = false;
			}
		}


	});

});