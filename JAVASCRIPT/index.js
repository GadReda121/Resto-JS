$(document).ready(function(){
    // Scroll
    $(window).scroll(function(){
        if( this.scrollY > 20){
            $(".header").addClass("headTog");
            $(".header .logo h1").css("color","#f9f8fa");
            $(".header .menu nav ul li a").css("color","#f9f8fa");
        }else{
            $(".header").removeClass("headTog");
            $(".header .menu nav ul li a").css("color","#192a56");
            $(".header .logo h1").css("color","#192a56");
        }
    });

    // Tools
    $(".tools .searchh").click(function(){
        $(".search").slideToggle(1000);
        $(".search").css("display","flex");
    });
    // hearts
    $(".tools .heartt").click(function(){
        $(".hearts").slideToggle(1000);
    });
        // 1
    $(".parent-dish .dish-child1 .heart-head").click(function(){
        $(".shop1").css("display","grid");
        $(".hearts").html($(".shop1"));
    });
    $(".shop1 .btn-h4 button").click(function(){
        $(".shop1").css("display","none");
    });
    // 2
    $(".parent-dish .dish-child2 .heart-head").click(function(){
        $(".shop2").css("display","grid");
        $(".hearts").html($(".shop2"));
    });
    $(".shop2 .btn-h4 button").click(function(){
        $(".shop2").css("display","none");
    });
    // 3
    $(".parent-dish .dish-child3 .heart-head").click(function(){
        $(".shop3").css("display","grid");
        $(".hearts").html($(".shop3"));
    });
    $(".shop3 .btn-h4 button").click(function(){
        $(".shop3").css("display","none");
    });
    // 4
    $(".parent-dish .dish-child4 .heart-head").click(function(){
        $(".shop4").css("display","grid");
        $(".hearts").html($(".shop4"));
    });
    $(".shop4 .btn-h4 button").click(function(){
        $(".shop4").css("display","none");
    });
    // 5
    $(".parent-dish .dish-child5 .heart-head").click(function(){
        $(".shop5").css("display","grid");
        $(".hearts").html($(".shop5"));
    });
    $(".shop5 .btn-h4 button").click(function(){
        $(".shop5").css("display","none");
    });
    // 6
    $(".parent-dish .dish-child6 .heart-head").click(function(){
        $(".shop6").css("display","grid");
        $(".hearts").html($(".shop6"));
    });
    $(".shop6 .btn-h4 button").click(function(){
        $(".shop6").css("display","none");
    });
    // 7
    $(".parent-menu .menu-child1 .heart-menu").click(function(){
        $(".shop7").css("display","grid");
        $(".hearts").html($(".shop7"));
    });
    $(".shop7 .btn-h4 button").click(function(){
        $(".shop7").css("display","none");
    });
    // 8
    $(".parent-menu .menu-child2 .heart-menu").click(function(){
        $(".shop8").css("display","grid");
        $(".hearts").html($(".shop8"));
    });
    $(".shop8 .btn-h4 button").click(function(){
        $(".shop8").css("display","none");
    });
    // 9
    $(".parent-menu .menu-child3 .heart-menu").click(function(){
        $(".shop9").css("display","grid");
        $(".hearts").html($(".shop9"));
    });
    $(".shop9 .btn-h4 button").click(function(){
        $(".shop9").css("display","none");
    });
    // 10
    $(".parent-menu .menu-child4 .heart-menu").click(function(){
        $(".shop10").css("display","grid");
        $(".hearts").html($(".shop10"));
    });
    $(".shop10 .btn-h4 button").click(function(){
        $(".shop10").css("display","none");
    });
    // 11
    $(".parent-menu .menu-child5 .heart-menu").click(function(){
        $(".shop11").css("display","grid");
        $(".hearts").html($(".shop11"));
    });
    $(".shop11 .btn-h4 button").click(function(){
        $(".shop11").css("display","none");
    });
    // 12
    $(".parent-menu .menu-child6 .heart-menu").click(function(){
        $(".shop12").css("display","grid");
        $(".hearts").html($(".shop12"));
    });
    $(".shop12 .btn-h4 button").click(function(){
        $(".shop12").css("display","none");
    });



    // buying
    $(".tools .basket").click(function(){
        $(".shopping").slideToggle(1000);
    });
    // 1
    $(".parent-dish .dish-child1 .btn-h4 button").click(function(){
        $(".shop1").css("display","grid");
        $(".shopping").html($(".shop1"));
    });
    $(".shop1 .btn-h4 button").click(function(){
        $(".shop1").css("display","none");
    });
    // 2
    $(".parent-dish .dish-child2 .btn-h4 button").click(function(){
        $(".shop2").css("display","grid");
        $(".shopping").html($(".shop2"));
    });
    $(".shop2 .btn-h4 button").click(function(){
        $(".shop2").css("display","none");
    });
    // 3
    $(".parent-dish .dish-child3 .btn-h4 button").click(function(){
        $(".shop3").css("display","grid");
        $(".shopping").html($(".shop3"));
    });
    $(".shop3 .btn-h4 button").click(function(){
        $(".shop3").css("display","none");
    });
    // 4
    $(".parent-dish .dish-child4 .btn-h4 button").click(function(){
        $(".shop4").css("display","grid");
        $(".shopping").html($(".shop4"));
    });
    $(".shop4 .btn-h4 button").click(function(){
        $(".shop4").css("display","none");
    });
    // 5
    $(".parent-dish .dish-child5 .btn-h4 button").click(function(){
        $(".shop5").css("display","grid");
        $(".shopping").html($(".shop5"));
    });
    $(".shop5 .btn-h4 button").click(function(){
        $(".shop5").css("display","none");
    });
    // 6
    $(".parent-dish .dish-child6 .btn-h4 button").click(function(){
        $(".shop6").css("display","grid");
        $(".shopping").html($(".shop6"));
    });
    $(".shop6 .btn-h4 button").click(function(){
        $(".shop6").css("display","none");
    });
    // 7
    $(".parent-menu .menu-child1 .text-menu button").click(function(){
        $(".shop7").css("display","grid");
        $(".shopping").html($(".shop7"));
    });
    $(".shop7 .btn-h4 button").click(function(){
        $(".shop7").css("display","none");
    });
    // 8
    $(".parent-menu .menu-child2 .text-menu button").click(function(){
        $(".shop8").css("display","grid");
        $(".shopping").html($(".shop8"));
    });
    $(".shop8 .btn-h4 button").click(function(){
        $(".shop8").css("display","none");
    });
    // 9
    $(".parent-menu .menu-child3 .text-menu button").click(function(){
        $(".shop9").css("display","grid");
        $(".shopping").html($(".shop9"));
    });
    $(".shop9 .btn-h4 button").click(function(){
        $(".shop9").css("display","none");
    });
    // 10
    $(".parent-menu .menu-child4 .text-menu button").click(function(){
        $(".shop10").css("display","grid");
        $(".shopping").html($(".shop10"));
    });
    $(".shop10 .btn-h4 button").click(function(){
        $(".shop10").css("display","none");
    });
    // 11
    $(".parent-menu .menu-child5 .text-menu button").click(function(){
        $(".shop11").css("display","grid");
        $(".shopping").html($(".shop11"));
    });
    $(".shop11 .btn-h4 button").click(function(){
        $(".shop11").css("display","none");
    });
    // 12
    $(".parent-menu .menu-child6 .text-menu button").click(function(){
        $(".shop12").css("display","grid");
        $(".shopping").html($(".shop12"));
    });
    $(".shop12 .btn-h4 button").click(function(){
        $(".shop12").css("display","none");
    });

    // menu Mood
    $(".tools .listmenu").click(function(){
        $(".menu-mob").slideDown(1000);
        $(".tools .listmenu").css("display","none");
        $(".tools .listmenuexit").css("display","inline-block");
    });
    $(".tools .listmenuexit").click(function(){
        $(".menu-mob").slideUp(1000);
        $(".tools .listmenuexit").css("display","none");
        $(".tools .listmenu").css("display","inline-block");
    });
    $(".header .menu-mob nav ul li a").click(function(){
        $(".header .menu-mob").slideUp(1000);
        $(".tools .listmenuexit").css("display","none");
        $(".tools .listmenu").css("display","inline-block");
    });

    // Slides

    // Next
    $(".next-prev .hom-next").click(function(){
        if ($(".point1").hasClass("active-point")){
            $(".home-child1").css("display","none");
            $(".home-child2").css("display","grid");
            $(".point1").toggleClass("active-point");
            $(".point2").toggleClass("active-point");
        } else if ($(".point2").hasClass("active-point")){
            $(".home-child2").css("display","none");
            $(".home-child3").css("display","grid");
            $(".point2").toggleClass("active-point");
            $(".point3").toggleClass("active-point");
        } else if ($(".point3").hasClass("active-point")){
            $(".home-child3").css("display","none");
            $(".home-child1").css("display","grid");
            $(".point3").toggleClass("active-point");
            $(".point1").toggleClass("active-point");
        }
    });
    // Previous
    $(".next-prev .hom-prev").click(function(){
        if ($(".point1").hasClass("active-point")){
            $(".home-child1").css("display","none");
            $(".home-child3").css("display","grid");
            $(".point1").toggleClass("active-point");
            $(".point3").toggleClass("active-point");
        } else if ($(".point2").hasClass("active-point")){
            $(".home-child2").css("display","none");
            $(".home-child1").css("display","grid");
            $(".point2").toggleClass("active-point");
            $(".point1").toggleClass("active-point");
        } else if ($(".point3").hasClass("active-point")){
            $(".home-child3").css("display","none");
            $(".home-child2").css("display","grid");
            $(".point3").toggleClass("active-point");
            $(".point2").toggleClass("active-point");
        }
    });



    // Dishes
    // 1
    $(".dish-child1").hover(function(){
        $(".dish-child1 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child1 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child1").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child1 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child1 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child1").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    });
    // 2
    $(".dish-child2").hover(function(){
        $(".dish-child2 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child2 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child2").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child2 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child2 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child2").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    });
    // 3
    $(".dish-child3").hover(function(){
        $(".dish-child3 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child3 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child3").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child3 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child3 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child3").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    // 4
    $(".dish-child4").hover(function(){
        $(".dish-child4 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child4 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child4").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child4 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child4 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child4").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    });
    // 5
    $(".dish-child5").hover(function(){
        $(".dish-child5 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child5 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child5").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child5 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child5 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child5").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    });
    // 6
    $(".dish-child6").hover(function(){
        $(".dish-child6 .heart-head img").css({
            "display":"inline-block",
            "transition":"all .5s"
        });
        $(".dish-child6 .heart-head img").animate({
            position : "absolute",
            right:"3%"
        },50);
        $(".dish-child6").css({
            "transition":"all .3s",
            "border":"#192156 2px solid",
            "box-shadow":"#192156 0px 2px 6px",
            "transform":"translateY(-15px)",
            "cursor":"pointer"
        });
    },function(){
        $(".dish-child6 .heart-head img").css({
            "display":"none",
            "transition":"all .5s"
        });
        $(".dish-child6 .heart-head img").animate({
            position : "absolute",
            right:"0%"
        },50);
        $(".dish-child6").css({
            "transition":"all .3s",
            "border":"none",
            "box-shadow":"none",
            "transform":"translateY(0px)"
        });
    });

});
    // End Dishes

});