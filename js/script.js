jQuery().noConflict


$(document).ready(function() {
	
/*header*/
$(window).scroll(function(){
	var nowHeight = $(window).scrollTop();
	var needHeight = $('.body_site').offset().top;
	if(nowHeight>needHeight-60){
		$('.header').addClass('scr_hea');
	}else {
		$('.header').removeClass('scr_hea');
	}
});

/*top menu mobile*/
$('#tm_nav').click(function(){
	$(this).toggleClass('open');
	$('.topmenu').toggleClass('tm_mob_open');
});

/*personal area*/

$('.personal').click(function(){
	$('#per_area').modal();
});

$('#pa_reg_body, #pa_body, .pam_title').hide();
$('#pa_reg').click(function(){
	$('#pa_reg_body').slideDown(300);
	$('#pa_auth_body').slideUp(300);
	$(this).addClass('pam_active');
	$('#pa_auth').removeClass('pam_active');
});
$('#pa_auth').click(function(){
	$('#pa_auth_body').slideDown(300);
	$('#pa_reg_body').slideUp(300);
	$(this).addClass('pam_active');
	$('#pa_reg').removeClass('pam_active');
});
$('#paa_submit, #par_submit').click(function(){
	$('#pa_auth_body, #pa_reg_body, .pam_item').slideUp(300);
	$('#pa_body, .pam_title').slideDown(300);
});

$('.par_avatar_img').slideUp(0);
$('#par_avatar').click(function(){
	function readURL(input) {
    	if (input.files && input.files[0]) {
        	var reader = new FileReader();
	        reader.onload = function (e) {
    	        $('.par_avatar_img').attr('src', e.target.result);
        	}
			reader.readAsDataURL(input.files[0]);
    	}
	}
	$('#par_avatar').change(function(){
    	readURL(this);
		$(this).slideUp(300);
		var w_img = $('.par_avatar_img').width();
		var h_img = $('.par_avatar_img').height();
		if (w_img>h_img) {
			$('.par_avatar_img').width(200);
		} else {
			$('.par_avatar_img').height(100);
		}
		$('.par_avatar_img').slideDown(300);
	});
});

if (typeof cartoon_background !== "undefined") {
	
$('#tp_anim, .tp_points').hide(0);
var anim = function() {
	var c_i1 = new cartoon_background();
	c_i1.stop();
	$('#pak_submit').click(function(){
		var num_points = $('#pa_key input').val();
		$('.tpp_sum').text('+'+num_points);
		$('#tp_anim').fadeIn(500).delay(1500).fadeOut(500);
		$('.tp_points').css({'top':180,opacity:1}).hide(0).delay(800).slideDown(500).delay(1200).animate({top:230,opacity:0},500);
		c_i1.play({
			id: 'tp_anim',
			src: 'images/tpanim.jpg',
			frames_x: 5,
			frames_y: 10,
			width: 1500,
			height: 3000,
			fps: 40,
			reverse: false,
			playandstop: true,
			next: function() {}
		});
	});
}();

}
/*main event*/
$('.mect_but').hover(function(){
	$('.me_fade').height($(this).parent().parent().height()).toggleClass('me_fade_act');
	$('.mec_text').toggleClass('mec_text_act');
	$('.mect_but').toggleClass('mect_but_act');
});

/*event list*/

/*event list item*/
$('.event_list .el_item').hover(function(){
	$(this).each(function(i, e) {
		$(this).toggleClass('el_item_act');
		var eli_item = $(this).find('.eli_img');
		var eli_fade = $(this).find('.eli_fade');
		var elic_text = $(this).find('.elic_text');
		var eli_img = $(this).find('.eli_img');
		var elic_title = $(this).find('.elic_title');
		var eli_fade_w = eli_item.width();
		var eli_fade_h = eli_item.height();
		$(eli_fade).width(eli_fade_w).height(eli_fade_h);
		$(eli_fade).toggleClass('eli_fade_act');
		$(elic_text).toggleClass('elic_text_act');
		$(eli_img).toggleClass('eli_img_act');
		$(elic_title).toggleClass('elic_title_act');
	});   
});

/*arhive events*/
$('.carousel-inner').swipe( {
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
		$(this).parent().carousel('next');
	}, swipeRight: function() {
		$(this).parent().carousel('prev');
	},threshold:50
});

});