
var newsArray = ["firstnews","secondnews","thirdnews"];
var counter =1;

$("#firstnews").css('box-shadow', '0px 35px 2px #ddd');
$("#firstnews").css('border-top', '1px solid red');

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
var myvar=setInterval(transitionAnimation,2000);
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
   
    if(window.pageYOffset >=70){
  		// alert('');
  		$('#news').css('width','1100px');
	}


    if(window.pageYOffset >=450){
  		// alert('');
  		$('#news').css('width','1400px');
	}

  }


  else{
  	$('#main').css('position', 'relative');
    $('#main').css('top', '0');
    $('#main').css('width', '100%');
    $('#main').removeClass("sticky");

    $('#news').css('width','1400px');
      }
  
}

function showSearch(){

	$('#search').toggleClass('searc');
	if($('#search').css('display') == "inline-block"){
		$('.searchhide').css('display', 'none');
		$('#search').fadeOut(0);
		$('#search').fadeIn(500);
		$('.realogo').removeClass('fa-search');
		$('.realogo').addClass('fa-window-close');
	}
	
	else{
		$('.searchhide').css('display', 'inline-block');
		$('#searchLogo').removeClass('searchlogo');
		$('.realogo').removeClass('fa-window-close');
		$('.realogo').addClass('fa-search');
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

