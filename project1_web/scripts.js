$(function(){
    var pointer = $('.pointer')
    pointer.css('cursor','pointer')


	var interval = 4000;
	// 간격은 3초
    $('.set1>img:nth-child(2)').hide();

	$('.box1_set>div>.set1').each(function(){
	// slideshow 안에 있는 요소를 반복적으로 사용

		var container = $(this);
    
		function switchImg(){
		// 페이드 전환 1회분
			var imgs = container.find('img');
			// img 요소를 전부 취득
			var first = imgs.eq(0);
			// 선두의 img요소
			var second = imgs.eq(1);
			// 두번째 img요소
            
			first.appendTo(container)
			.fadeOut();
			// 처음의 img요소를 페이드아웃시켜, 가장 뒤로 이동
			second.fadeIn();
			// 두번째 img요소를 페이드인 시킨다.
		};
		setInterval(switchImg, interval);
		// 3초마다 switchImg를 실행
	});


});

$(function(){
	$('.s4_box2_r').each(function(){
		var dl = $(this);
		var alldt = dl.find('dt');
		var alldd = dl.find('dd');
		

		alldd.hide();
		alldt.css('cursor','pointer');

		alldt.click(function(){
            var dt = $(this);
			var dd = dt.next();
			
			if( alldd.is(":visible") ){alldd.slideUp();}else{dd.slideDown();}
		
	});
});

});
