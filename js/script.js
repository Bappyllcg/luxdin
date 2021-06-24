$(document).ready(function(){

	//Video Popup
    $('.video-btn').click(function(){
        $('.video-popup').fadeIn();
        $('#iframeHolder').html('');
        var link = $(this).attr("link");
        $('#iframeHolder').html('<iframe src="'+link+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    });
	$('.close-video').click(function(){
        $('.video-popup').fadeOut();
        $('#iframeHolder').html('');
    });


    $('.bar-btn').click(function(){
    	$('.menu-area').addClass('open-menu');
    	$('body').addClass('hide-body');
    })
    $('.close-btn').click(function(){
    	$('.menu-area').removeClass('open-menu');
    	$('body').removeClass('hide-body');
    })

    //DROPDOWN
    var width = $(document).width();
    if (width < 4000) {
        $(function () {
            $('.menu-area ul li.menu-item-has-children').append(
                '<span class="dropdown-menu-items"><span class="menu-plus"></span></span>');
            // list item click events
            $('.dropdown-menu-items').on('click', function (e) {
                e.preventDefault();
                $(this).prev('ul').slideToggle(250);
                $(this).toggleClass('rotate');
            });
        });
    }

})