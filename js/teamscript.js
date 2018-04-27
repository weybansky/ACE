$('.page1').css('display','inline-block');
$('.tab1').addClass('active');

function page1(){
	$('.page2').css('display','none');
	$('.tab2').removeClass('active');
	$('.page3').css('display','none');
	$('.tab3').removeClass('active');
	$('.page1').css('display','inline-block');
	$('.tab1').addClass('active');
}

function page2(){

	$('.page1').css('display','none');
	$('.tab1').removeClass('active');
	$('.page3').css('display','none');
	$('.tab3').removeClass('active');
	$('.page2').css('display','inline-block');
	$('.tab2').addClass('active');
}

function page3(){

	$('.page1').css('display','none');
	$('.tab1').removeClass('active');
	$('.page2').css('display','none');
	$('.tab2').removeClass('active');
	$('.page3').css('display','inline-block');
	$('.tab3').addClass('active');
}