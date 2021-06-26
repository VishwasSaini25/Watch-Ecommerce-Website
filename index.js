$(".carousel-control-prev-icon, .carousel-control-next-icon").click(function(){
    if ($(".carousel1").hasClass("active")) {
        $(".header").css("background-image","linear-gradient(to right, #716c69, #716c69, #716c69, #716c68, #716c68, #6f6966, #6c6664, #696362, #625d5e, #5a5759, #525254, #4b4c4e)")

    }
    else {
        $(".header").css("background-image","linear-gradient(to right, #968c8b, #9c9291, #a29897, #a89e9d, #aea4a3, #b3a9a9, #b9afae, #beb4b4, #c4babb, #cac1c1, #d1c7c8, #d7cecf)");

    }
    
        
})

window.addEventListener("scroll",function(){
    if(window.scrollY > 600){
        $(".card1").addClass("animate-card");
       setTimeout(function(){
        $(".card2").addClass("animate-card");
       }, 200);
       setTimeout(function(){
        $(".card3").addClass("animate-card");
       }, 300);
    }
});
window.addEventListener("scroll",function(){
    if(window.scrollY > 1700){
        $(".fitness-img").addClass("animate-fitness-image");
    }
});


$(".exerc").click(function(){
    $(".image-link").removeClass("active");
    $(".exerc").addClass("active");
    $(".fitness-img-r").attr("src","images/image3.png");
    $(".fitness-img-r").css("width","100%");
    $(".fitness-img-r").addClass("animate-card"); 
    setTimeout(function(){
        $(".fitness-img-r").removeClass("animate-card");  
            
        },1000);   
});
$(".heart").click(function(){
    $(".image-link").removeClass("active");
    $(".heart").addClass("active");
    $(".fitness-img-r").attr("src","images/image4.png");
    $(".fitness-img-r").css("width","100%");
    $(".fitness-img-r").addClass("animate-card");  
    setTimeout(function(){
        $(".fitness-img-r").removeClass("animate-card");  
            
        },1000);  
});
$(".sleep").click(function(){
    $(".image-link").removeClass("active");
    $(".sleep").addClass("active");
    $(".fitness-img-r").attr("src","images/image5.png");
    $(".fitness-img-r").css("width","100%");
    $(".fitness-img-r").addClass("animate-card");   
    setTimeout(function(){
        $(".fitness-img-r").removeClass("animate-card");  
            
        },1000); 
});
$(".nutri").click(function(){
    $(".image-link").removeClass("active");
    $(".nutri").addClass("active");
    $(".fitness-img-r").attr("src","images/image6.png");
    $(".fitness-img-r").css("width","100%");
    $(".fitness-img-r").addClass("animate-card");
    setTimeout(function(){
        $(".fitness-img-r").removeClass("animate-card");  
            
        },1000);   
        
});
$(".all-day").click(function(){
    $(".image-link").removeClass("active");
    $(".all-day").addClass("active");
    $(".fitness-img-r").attr("src","images/image2.png");
    $(".fitness-img-r").css("width","100%");
    $(".fitness-img-r").addClass("animate-card");  
    setTimeout(function(){
    $(".fitness-img-r").removeClass("animate-card");  
        
    },1000);
        
});
