
$("select").on("change",function(){

  var select = $("select").val();

   
    
    var url = "https://api.nytimes.com/svc/topstories/v2/" + select+ ".json";
url += '?' + $.param({
  'api-key': "b004981c2f014cbaa934004bdf7f33b3"
});

    
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {
      $(".stories").empty();



      for (var i=0; i<12; ++i ){
        if (data.results[i].multimedia[4]) {
          $(".stories").append("<a href='"+data.results[i].url+"' class='newslink'><div class='newsbackground' style='background-image: url("+data.results[i].multimedia[3].url+")'> <p class = 'newstitle'>"+data.results[i].abstract+"</p></div></a>"); 
          
         
        } else {
          data.results.splice(i, 1);
          i--;
        }
        console.log(data.results[i].multimedia);
        
    
      }
    
    })

   

    });

  
 // get the header logo to resize

    // 
    
    $("select").click(function(){
      $(".logo").animate({
       
       width:'4rem',
       marginTop: '-5rem',
      });
  });
    
  $("select").click(function(){
    $(".choice").animate({
     
      marginTop: '-5rem',
        
    });
  });
  
  $("select").click(function(){
    $(".header").animate({
     
        height: 'auto',
        
    });
});
  




    