
$('.page-scrol').on('click', function(e){

	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap element 
	var element = $(tujuan);

	$('html,body').animate({

		scrollTop: element.offset().top - 50

	}, 1000, 'easeInOutExpo');//menambahkan jeda pada transisi 1000 ms (satuan milisecond)

	e.preventDefault;
	
});

