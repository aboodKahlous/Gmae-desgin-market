
// search popup

function togglepopup(){
    document.getElementById("popup-1").classList.toggle("active"); 
}

// scroll to top 

var scrollButtom = $("#scroolup");
$(window).scroll(function() {

    if ($(this).scrollTop() >= 300) {
        scrollButtom.fadeIn(1000);
    } else if ($(this).scrollTop() <= 300) {
        scrollButtom.fadeOut(1000);
    }
})
scrollButtom.click(function() {
    $("html,body").animate({ scrollTop: 0 }, 200);
})


// change active link

$(".pagination a").on('click' , function(){
    $(this).addClass('active').siblings().removeClass('active');
})



// animation on scroll
AOS.init();

// toggle-menu

$(document).ready(function(){
    
    $('.toggle-menu').on('click' , function(){
        $('.main-nav').slideToggle(500);
    })

});


$(document).ready(function(){
    
    $('.toggle-menuu').on('click' , function(){
        $('.headre-bottom').slideToggle(500);
    })

});