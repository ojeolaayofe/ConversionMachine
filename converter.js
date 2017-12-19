function some(){
	var a= $("#screen").val();
	alert(a);
	 var min=document.getElementById("min").innerHTML= parseInt(a)*60 + " minutes ";
	 var sec=document.getElementById("sec").innerHTML=parseInt(a)*3600 + " seconds";
	 var msec=document.getElementById("msec").innerHTML=parseInt(a)*6000 + " millseconds";

}
function meter()
{
	 var a = document.getElementById("mete").value;
    document.getElementById("cent").innerHTML=parseInt(a)/100 + " Centimeter ";
	 document.getElementById("mill").innerHTML=parseInt(a)/1000 + " Millimeter ";
	 document.getElementById("kilo").innerHTML=parseInt(a)/10000 + " Kilometer ";
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