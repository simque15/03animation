// .face-menu img를 클릭하면
$('.face-menu img').on('click',function(){	
	// 그 클릭한 .face-menu img의 class명을 가져와서
	var thisClass = $(this).attr('class');
	// .face에 그 클래스명을 더해준다.
	$('.face').removeClass().addClass('face ' + thisClass);
});
