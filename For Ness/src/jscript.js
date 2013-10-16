/*AUTHOR:Tony Ling
Javascript code using jQuery 1.8.3 for website for ness
*/
$(document).ready(function(){
	$('#koala').hover(function(){
		$newSrc=$(this).attr('src');
		$newSrc=$newSrc.replace("koala","koalanose");
		$(this).attr('src',$newSrc);
	},
	function(){
		$newSrc=$(this).attr('src');
		$newSrc=$newSrc.replace("koalanose","koala");
		$(this).attr('src',$newSrc);
	});
	/*BACKGROUND IMG FROM 'http://www.goodfon.com/wallpaper/124390.html'*/
	$('#koala').click(function(){
		$src=$(this).attr('src');
		$src=$src.replace("koalanose","letter");
		popImage($src);
	});
	
	$('.toPhotos').click(function(){
		$link=$('.toPhotos a').attr('href');
		window.location.href=$link;
	});
	
	$('.toRealPhotos').click(function(){
		window.location.href=$('.toRealPhotos a').attr('href');
	});
	
	$('.toMain').click(function(){
		window.location.href=$('.toMain a').attr('href');
	});
	
	$('.content img').click(function(){
		$src=$(this).attr('src');
		popImage($src);
	});
	$('#specialfood').click(function(){
		$src='src/food.png';
		popImage($src);
	});
	$('#bgFade').click(function(){
		$('#tempimg').removeAttr('src');
		$('#tempimg').css('z-index','-1');
		$('#bgFade').css({'z-index':'-1',
							'opacity':'0'
							
		});

	});
	$('#tempimg').click(function(){
		$('#tempimg').removeAttr('src');
		$('#tempimg').css('z-index','-1');
		$('#bgFade').css({'z-index':'-1',
							'opacity':'0'
							
		});

	});
});  
//Single string argument containing image location
//Fades the background while creating and centering a copy of image
function popImage($src){
		$('#bgFade').css({'background-color':'black',
						'z-index':'2',
						'opacity':'0.5',
						'filter':'alpha(opacity=50)',
						'display':'none'
		});
		$('#bgFade').fadeIn(300);
		$('#tempimg').attr('src',$src);
		$('#tempimg').css({'position':'absolute',
							'z-index':'3',
							'top':'0',
							'bottom':'0',
							'left':'0',
							'right':'0',
							'opacity':'1',
							'margin':'auto',
							'max-width':'100%',
							'max-height':'100%',
							'display':'none'

		});
		$('#tempimg').fadeIn(300);

};
