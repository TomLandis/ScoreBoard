var numberOfPlayers;
var minus = false;
var mb;
function refresh(){
 $('.howMany').show();
  $('.fight').remove();
  $('.reset').remove();
  $('.changer').remove();
  $('.box').remove();
  minus = false;
  
}
function ClickHandler(e) {
  var num = e.currentTarget.attributes.id.value;
  numberOfPlayers = num;
  
  $('.howMany').hide();
  var board="";
  for(var i=1; i<=num; i++){
    board = board + "<div class='box'><p>Team <br>" + i + "</p><button class='fight' id='0" + i +"' >0</button></div>";
  }
  var but = "<button class='changer'>+</button>";
  $('.change').append(but);
  $('.team').append(board);
  $('.rs').append("<button class='reset'>Reset</button>");
  $('.fight').click(function(event){ClickHandler2(event);});
  $('.changer').click(function(event){
    ClickHandler3(event)
  });
  
}

function ClickHandler2(e){
 var me, doIt;
  let num = e.currentTarget.attributes.id.value;
 //  console.log(num);
  
 var info = document.getElementById(num);
   doIt = "#" + info.id;
  var val = $(doIt).html();
  me = parseInt(val);
  if(minus){
    me--;
  }else{
  me++;
 }
  //console.log(doIt);
  $(doIt).html(me);
 // console.log(me);
 
}
function ClickHandler3(e){
  
  var info = e.currentTarget.childNodes[0].nodeValue;
  //console.log(info);
  if(info === "+"){
    minus = true;
    mb = true;
    $('.changer').text("-");
    $('.changer').addClass('danger');
  }else{
    minus = false;
    mb = false;
    $(".changer").text("+");
    $('.changer').removeClass('danger')
  }
  
}
$('.choose').click(function(event){ClickHandler(event);});

$(".rs").click(function(){refresh();});

//keyboard support here
document.addEventListener("keydown", function(event) {
  if(event.which === 83){
    minus = true;
  }
  //console.log(event.which);
  
});

document.addEventListener("keyup", function(event) {
  

  if(mb){
     console.log("here");
     }
  minus = false;
 // console.log("up");
});
