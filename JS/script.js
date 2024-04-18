
$(document).ready(function(){
    $('.floatingButton').on('click',
        function(e){
            e.preventDefault();
            $(this).toggleClass('open');
            if($(this).children('.fa').hasClass('fa-plus'))
            {
                $(this).children('.fa').removeClass('fa-plus');
                $(this).children('.fa').addClass('fa-close');
            } 
            else if ($(this).children('.fa').hasClass('fa-close')) 
            {
                $(this).children('.fa').removeClass('fa-close');
                $(this).children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').stop().slideToggle();
        }
    );
    $(this).on('click', function(e) {
      
        var container = $(".floatingButton");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && $('.floatingButtonWrap').has(e.target).length === 0) 
        {
            if(container.hasClass('open'))
            {
                container.removeClass('open');
            }
            if (container.children('.fa').hasClass('fa-close')) 
            {
                container.children('.fa').removeClass('fa-close');
                container.children('.fa').addClass('fa-plus');
            }
            $('.floatingMenu').hide();
        }
      
        // if the target of the click isn't the container and a descendant of the menu
        if(!container.is(e.target) && ($('.floatingMenu').has(e.target).length > 0)) 
        {
            $('.floatingButton').removeClass('open');
            $('.floatingMenu').stop().slideToggle();
        } 
    });
});


//      Typed js

const typed = new Typed('.multiple-text' , {
    strings: ['نقل عفش' , 'فك و تركيب الاثاث' , 'تغليف الاثاث' , 'بيع الكراتين'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

// $(document).ready(function() {
//     $(function(){
//         $('#menu-icon').click(function(){
//             $('.navbar-phone').slideToggle(500);
//         })
//     })
//     $(function(){
//         $('.nav-item').click(function(){
//             $('.navbar-phone').slideUp(500);
//         })
//     })
// });

function hideSlider(){
    const menuIcon = document.getElementById("menu-icon");
    menuIcon.style.display = 'none';
    const closeIcon = document.getElementById("close-icon");
    closeIcon.style.display = 'flex';
  
    const navToggle = document.querySelector(".navbar-phone");
    navToggle.style.top = '8.5%';
  }
  
  function showSlider(){
    const menuIcon = document.getElementById("menu-icon");
    menuIcon.style.display = 'flex';
    const closeIcon = document.querySelector("#close-icon");
    closeIcon.style.display = 'none';
    const navToggle = document.querySelector(".navbar-phone");
    navToggle.style.top = '-50%';
  }
  
  
  