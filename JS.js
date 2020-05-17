$(document).ready(function()
{
	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "cars",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));
	
	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "carsss",
	}).appendTo($("#quastion"));
})

var counter  = -1 ;
function idChange(){
	var string = "option";
	counter++;
	return (string + counter);
}