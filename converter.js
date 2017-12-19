function some(){
	var a= $("#screen").val();
	 $("#min").html(a*60 + " minutes ");
	 $("#sec").html(a*3600 + " seconds");
	 $("#msec").html(a*6000 + " millseconds");

}
function meter()
{
	 var a = $("#mete").val();
    $("#cent").html(a/100 + " Centimeter ");
	$("#mill").html(a/1000 + " Millimeter ");
	$("#kilo").html(a/10000 + " Kilometer ");
}
function year()
{
	var a = $("#yy").val();
	$("#mon").html(a*12 + " months");
	$("#wee").html(a*52 + " weeks");
	$("#days").html(a*360 + " days");
}
function frah()
{
	var a= $("#hit").val();
	$("#cel").html(0.556*(a-32) + " C");
	$("#kel").html(0.556*(a-32)+273 + " K");
	$("#deg").html(((a-32)/1.8)*9500);
}