//----------------------------------------


$(window).on('scroll',function(){
	
	var header= $("#header-inner");
	var scrollTop = $(window).scrollTop();
	if(scrollTop>110){
		header.css('padding','1% 0');
		}else{
		  header.css('padding','2% 0');
			}
	});
	
//--------------------show menu-------------------------
$(document).ready(function showMenu(){
	var menuLogo = $("#menu-div");
	var navHeader = $("#nav-header");
	var logoPic = $("#logo-pic");
	var classOpen = $("#menu-logo").hasClass("open");
 	  menuLogo.click(function(){
		   navHeader.slideToggle("slow");
		  logoPic.css('display','block');		 
		  });
});


/*-----read more-----*/
$(document).ready(function( ){
	
	var a=0;
	$(".more-icon").click(function(){
	$(this).addClass('act');
	var readP = $(this).parent().children('.srv-section-p');
	readP.slideToggle('slow', function(){
		if( $('img.act').attr('src') == 'pics/content_qs-icons-add.png' ){
			$('img.act').attr('src', 'pics/content_qs-icons-minus.png');
			$('img.act').removeClass('act');
			}else{
				$('img.act').attr('src', 'pics/content_qs-icons-add.png');
				$('img.act').removeClass('act');
				};
		
		});
	 
	 });
	});



//--------------------------slider--------------

$(document).ready(function slider() {	 
var srcArray = ["pics/attractive-web2.jpg","pics/responsive-website2.jpg","pics/business-people2.jpg", "pics/web-designe.jpg"];
var textArray = ["Making your website the main attraction","We prepare you a responsive website","We build websites to build your business", "We do website design and development"]
var s = 0;


function slideIt(){
var textContainer = $('#text-container');
var sliceText = $('#text-container #slice-text');
var picUrl = $('#top-content #slice-pictures');
var Photoadd = "";
var appearText = "";

	if( s < srcArray.length ){
	
		Photoadd = srcArray[s];
		
		
		picUrl.fadeOut('slow', function(){
		picUrl.attr('src',Photoadd).fadeIn('slow');
		});
		
		appearText = textArray[s];
		
		sliceText.fadeOut('slow', function(){
			sliceText.html(appearText);
			sliceText.fadeIn({queue: false, duration: 'slow'});
			textContainer.animate({ top: "84%" }, 'slow', function(){
			textContainer.delay(3500).animate({ top: "105%" },'slow');
			});
		});
		s++;
		}
	else 
	{
		s=0;
	}
	
  }
  setInterval(slideIt,5000);
  
 });
 

//-----------------pricing----------

$(document).ready(function(){
$("#calculate-submit").click(function(){
	



    var pages = parseInt( $("#pages-number").find(':selected').attr('cost'), 10);
    var hostdomain = parseInt($("#host-domain").find(':selected').attr('cost'),10);
	var support = parseInt($("#support").find(':selected').attr('cost'), 10);
	var ecommerce = parseInt($("#ecommerce").find(':selected').attr('cost'), 10);
	var seo = parseInt($("#seo").find(':selected').attr('cost'), 10);
	if ($('#f1').prop('checked')){
		var f1 = parseInt($('#f1').attr('cost'), 10);
		}else{
			var f1 =0
			}
	if ($('#f2').prop('checked')){
		var f2 = parseInt($('#f2').attr('cost'), 10);
		}else{
			var f2 =0
			}
	if ($('#f3').prop('checked')){
		var f3 = parseInt($('#f3').attr('cost'), 10);
		}else{
			var f3 =0
			}
	if ($('#f4').prop('checked')){
		var f4 = parseInt($('#f4').attr('cost'), 10);
		}else{
			var f4 =0
			}
	
	var total = pages + hostdomain + support + ecommerce + seo + f1 + f2 + f3 + f4 +50;
    
	$('#total-price').html("Arround"+"$"+ total);
	});
});

