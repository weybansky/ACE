var image = ["img/back9.jpg","img/back1.jpg","img/back2.jpg","img/deolu2.jpg","img/back7.jpg","img/back5.jpg"];
var newsArray = ["firstnews","secondnews","thirdnews"];
var counter =1;
var imgcounter=0;

$('.imgHolder').focus();
$("#firstnews").css('box-shadow', '0px 35px 2px #ddd');
$("#firstnews").css('border-top', '1px solid red');
$(".imgHolder").focus(function(){
    alert('s');
	});

function search_form(){

}

function transitionAnimation(){
	// alert(counter);
	$("#"+(newsArray[counter-1])).css('box-shadow', '0px 5px 2px #ddd');
	$("#"+(newsArray[counter-1])).css('border-top', '0px solid red');
		$("#"+(newsArray[counter-1])).css('border-bottom', '0px solid red');
	if(counter==3)
		counter = 0;
	$("#"+(newsArray[counter])).css('box-shadow', '0px 30px 2px #ddd');
	$("#"+(newsArray[counter])).css('border-top', '1px solid red');
	// $("#"+(newsArray[counter])).css('border-bottom', '1px solid red');

		counter+=1;
}


function changeBackground(){
	
	imgcounter+=1;
	$('#our-goals').css({'background':'url('+image[imgcounter-1]+') no-repeat','background-position': 'center -200px','background-size': 'cover'});
	// $('#our-goals').css('opacity', '0.2');
	// $('#our-goals').fadeTo(1,1000);
	if(imgcounter==6)
		imgcounter=0;
}

var myvar=setInterval(transitionAnimation,4000);
setInterval(changeBackground, 4000);
// clearInt();
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
  	$('#main').addClass("sticky");
    $('#main').css('position', 'fixed');
    // $('#contactus').css('position', 'fixed');
    $('#main').css('top', '0');
    // $('#contactus').css('position', 'fixed');
    $('#main').css('width', '100%');
    // $('#contactus').css('position', 'fixed');
   
    if(window.pageYOffset >=70 ){
  		// alert('');
  		$('#news').css('margin-left','60px');
  		// $('#contactus').css('display', 'block');
	}

	if(window.pageYOffset <=95){
		$('#news').css('margin-left','-1300px');
	}

  }


  else{
  	$('#main').css('position', 'relative');
    $('#main').css('top', '0');
    $('#main').css('width', '100%');
    $('#main').removeClass("sticky");

    // $('#news').css('width','1400px');
      }
  
}

function showSearch(){

	$('#search').toggleClass('searc');
	if($('#search').css('display') == "inline-block"){
		$('.searchhide').css('display', 'none');
		$('#search').fadeOut(0);
		$('#search').fadeIn(500);
		// $('.realogo').removeClass('fa-search');
		// $('.realogo').addClass('close');
		// $('.realogo').html("&times");
		$('.realogo').css('display','none');
		$('#closeSearch').css('display', 'block');
	}
	
	else{
		$('.searchhide').css('display', 'inline-block');
		$('#searchLogo').removeClass('searchlogo');
		$('#closeSearch').css('display', 'none');
		$('.realogo').css('display','block');
		// $('.realogo').removeClass('close');
		// $('.realogo').html("");
		// $('.realogo').addClass('fa-search');
	}
}

function showPointer(){
	$('.pointer').addClass('fa-hand-point-right');
}

function hidePointer(){

	$('.pointer').removeClass('fa-hand-point-right');
}

function clearInt(){
	clearInterval(myvar);
}

function setInt(){
	myvar=setInterval(transitionAnimation,2000);
}


=======
// function populateModal(content){
// 	image=$('.'+content).children('img:first');
// 	$(image).addClass('modalImage');
// 	$('.imgHolder').html(image);
// 	// $($(content).parent()).html(content);
// 	// $('.imgHolder').html(image);
// 	// $('#myModal').modal();
// 	reput(content);

// }

// function reput( content ){
// 	$('.'+content).html(image);
// }

function populateModal(content){

	$('.src').attr('src',$(content).attr('src'));
	
}

function downloadImage(content){
	// alert($(content).attr('src'));
	 // window.location.assign($(content).attr('src'));
	 window.moveTo(0,3000);

}


