$(".backg").mouseenter(function(){
    $(".create").animate({
       position:'absolute',
        top:'-210px',
        right:'-95'   },"slow");
    $(".create").animate({
        position:'absolute',
        top:'-200px',
        right:'-100'   },"slow");  
    $(".create").animate({
        position:'absolute',
        top:'-205px',
        right:'-90'   },"slow");        
});

$(".backg").mouseenter(function(){
    $(".bac").animate({
       position:'absolute',
        top:'290px',
        right:'155'   },"slow");
    $(".bac").animate({
        position:'absolute',
        top:'280px',
        right:'160'   },"slow");  
    $(".bac").animate({
        position:'absolute',
        top:'285px',
        right:'150'   },"slow");        
});
var info = [];


$(".submit").click(function(){
    info[0] = $(".name").val();
    info[3] = $(".address").val();
    info[2] = $(".year").val();
    info[1] = $(".email").val();
    clear_input();
    add_modal();
});


function clear_input(){
    $("#myForm").trigger("reset");

}

function add_modal(){
    $('#contact_page').html("<div class='pad' ><h3>Alumni Detail</h3><p><strong>Name:</strong>" + info[0] +"</p><p><strong>Email:</strong>" + info[1] +"</p><p><strong>Graduation Year:</strong> " 
    + info[2] +"</p><p><strong>Address:</strong>" + 
    info[3]+"</p></div><input class='back-for' type='button' value='Back'>");
}



$(".back-for").click(function(){
    var info =[];
    alert("f u");
});