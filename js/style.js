var DOWN_ARROW_SIZE = 50;

$(document).ready(function(){

	$(".full-page-panel").height($(window).height());

	// call helper functions to vertically align content
	// in each panel
	setSpacerDiv1();
//
	setSpacerDiv2();
//
	setSpacerDiv3();

	setSpacerDiv4();

	setSpacerDiv5();

});

$(window).resize(function(){

	$(".full-page-panel").height($(window).height());

	// call helper functions to vertically align content
	// in each panel
	setSpacerDiv1();
//
	setSpacerDiv2();
//
	setSpacerDiv3();

	setSpacerDiv4();

	setSpacerDiv5();

});

/*
 calculating the height of each panel's spacer
 div so that the elements are roughly centered
 values are obtained by adding the height of all elements
 in that panel
*/
function setSpacerDiv1(){
//	// ele heights
//	// 218
//	// 32
//	// 149
//	// 140
	var contentHeight = $('.fact-text').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer1").height(emptySpace/2);
}
//
function setSpacerDiv2(){
	var contentHeight = $('.fact-text').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer2").height(emptySpace/2);
}
//
function setSpacerDiv3(){
	var contentHeight = $('.fact-text').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer3").height(emptySpace/2);
}
//
function setSpacerDiv4(){
	var contentHeight = $('.fact-text').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer4").height(emptySpace/2);
}
//
function setSpacerDiv5(){
	var contentHeight = $('.fact-text').outerHeight(true);

	var emptySpace = $(window).height() - contentHeight;

	$("#spacer5").height(emptySpace/2);
}


