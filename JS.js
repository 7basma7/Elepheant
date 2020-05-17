$(document).ready(function()
{
	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "what fish is the only known fish that can blink with both eyes.",
		alt: 'shark',
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "whta is the only English word that ends in the letters mt.",
		alt:'dreamt'
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "Almonds are a member of the what family.",
		alt:'peach'
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "Tigers have striped skin or  striped fur.",
		alt:'striped skin'
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "How many colours are in a rainbow?",
		alt:'7'
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "Name the school that Harry Potter attended?",
		alt:'Hogwarts'
	}).appendTo($("#quastion"));

	$("<option/>",{
		id: idChange(),
		class :"listOption",
		text: "What food do Giant Pandas normally eat",
		alt:'Bamboo'
	}).appendTo($("#quastion"));

})

var counter  = -1 ;
function idChange(){
	var string = "option";
	counter++;
	return (string + counter);
}



