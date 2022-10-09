


let data =[
  { id: "econ",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/giro_round.png",
    nameOld: "Jaume Giró"
    },

  { id: "ext",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/alsina_round.png",
    nameOld: "Victòria Alsina"
    },

    { id: "univ",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/geis_round.png",
    nameOld: "Gemma Geis"
    },

    { id: "sal",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/argimon_round.png",
    nameOld: "Josep Maria Argimon"
    },

    { id: "drets",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/violant_round.png",
    nameOld: "Violant Cervera"
    },

    { id: "just",
    nameNew: "Nombre Apellido", 
    textNew: "Perfil nuevo conseller tempus lobortis lectus, ac dapibus diam venenatis vel. Nam condimentum eros vitae porttitor euismod. Aliquam vel lacus",
    imgOld: "./img/round/ciuro_round.png",
    nameOld: "Lourdes Ciuró"
    }
    


]


window.onload = function() {
 
  $(".acF:has(.exc)").on("click", addText);
  $(".modalClose").on("click", closeModal);

/*var pMap = document.getElementById("svg3157").getBoundingClientRect().top;

console.log(pMap);

    $('#is').on('click', function(){

  $('#exampleModal').css('top', pMap)
      $('#exampleModal').modal('show')
    })*/


function addText(){
  var ident = this.id;
  var $this = $(this);
  var identLoc = $this.offset().top - 50;
  
  console.log(identLoc);
  data.forEach(function(item,pos){
  
    if(item.id == ident){
      console.log(item.nameNew);
      $("#nameNew").text(item.nameNew);
      $("#textNew").text(item.textNew);
      $(".fotoOld img").attr("src", item.imgOld);
      $("#nameOld").text(item.nameOld);
          
    }
   
  });

  fadeIn(identLoc);
}



function fadeIn(loc){
/*  $("#layer").css("display", "block");
*/  
  $('#modal').css('top', loc);

  $('#flTest').css("opacity", ".4");
  $('#modal').css("opacity", "1");
    
/*  var tl = gsap.timeline();
  tl.to("#flTest", {opacity: .4, duration: .2});
  tl.to("#modal", {opacity: 1, duration: .2, delay: -1});*/

}

function closeModal(){
/*  $("#layer").css("display", "block");
*/  
  $('#modal').css('top', "0");

  $('#modal').css("opacity", "0");
  $('#flTest').css("opacity", "1");
  
 /* var tl = gsap.timeline();
  tl.to("#modal", {opacity: 0, duration: .2});
  tl.to("#flTest", {opacity: 1, duration: .2, delay: -1});*/

}



 
};


