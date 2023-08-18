$(function(){
     var header=$("#header"),
         introH = $("#intro").innerHeight(),
         scrolOffset = $(window).scrollTop();

        //-----  header fixed---------------------------
         checkScroll(scrolOffset);


    $(window).on("scroll", function(){
        scrolOffset  = $(this).scrollTop();

       
        checkScroll(scrolOffset);

    });

    function checkScroll(scrolOffset){

        scrolOffset  = $(this).scrollTop();

        if(scrolOffset >= introH){
            header.addClass("fixed");
        } else{
            header.removeClass("fixed")
        }
    }

    //------------ smooth scroll-----------------------------
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this =$(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("activ");
        $this.addClass("activ");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);    
    
    });

    // ---------------menu nav toggle---------------------------------

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // -------------------------------collaps----------------------------------

    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var $this =$(this),
            blockId = $this.data('collapse');
            console.log( blockId);
        

        $this.toggleClass("active");
        // $(blockId).slideToggle();
    });

    // $("[data-slider]").slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1

    // });

    $('.data-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
                      

});