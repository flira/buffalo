$(document).ready(function( ) {
    ajustaFooter();
});
$(window).resize(function () {
    ajustaFooter();
});

function ajustaFooter() {
	  var a = $("header").outerHeight(true) +  $("section").outerHeight(true) +  $("footer").outerHeight(true);
	  if (a < $(window).height()){
		  $("footer").css({
		  "position":"absolute",
		  "bottom":"0"});
	  } else {
		  $("footer").css("position","relative");
	  }
}

$(".dropdown").click(
	function () {
		$(this).toggleClass("selecionado");
		$("div#navegacaoinferior ul li ul").toggle("fade","fast");		
	}
);	
