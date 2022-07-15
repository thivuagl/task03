$(document).ready(function(){
    var picture = $('.half');
    picture.each(function() {
        var w = $( this ).width();
        w = w/2;
        $( this ).width( w );
      });
    $("#myNav").click(function(){
        
        $(".c-nav--overlay").toggleClass("active");
    });
    var myFct = function() {
        var div = $(".group1");
        div.animate({top:'320px'});
        div.animate()
    }

    $(".viewmore").click(function() {
        $(this).parent().find(".u-open").fadeToggle();
        if ($(this).hasClass("c-show")) {
          $(this).removeClass("c-show");
          // $(this).find(".c-posts__item-info").hide();
        } else {
          $(this).addClass("c-show"); 
          // $(this).find(".c-posts__item-info").show();
        }
      });
});
