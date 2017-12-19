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
	var a = document.getElementById("yy").value;
	document.getElementById("mon").innerHTML=parseInt(a)*12 + " months";
	document.getElementById("wee").innerHTML=parseInt(a)*52 + " weeks";
	document.getElementById("days").innerHTML=parseInt(a)*360 + " days";
}
function frah()
{
	var a=document.getElementById("hit").value;
	document.getElementById("cel").innerHTML=0.556*(parseInt(a)-32) + " C";
	document.getElementById("kel").innerHTML=0.556*(parseInt(a)-32)+273 + " K";
	document.getElementById("deg").innerHTML=((parseInt(a)-32)/1.8)*9500;
}