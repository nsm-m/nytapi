console.log("hello");

$("select").on("click",function(){

  var select = $("select").val();

   
    
    var url = "https://api.nytimes.com/svc/topstories/v2/" + select+ ".json";
url += '?' + $.param({
  'api-key': "b004981c2f014cbaa934004bdf7f33b3"
});

    
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(data) {

      for (var i=0; i<12; ++i ){
        $(".stories").append("<a href='"+data.results[i].url+"' class='newslink'><div class='newsbackground' style='background-image: url("+data.results[i].multimedia[3].url+")'> <p class = 'newstitle'>"+data.results[i].abstract+"</p></div></a>"); 
          
        
        
        // "<div+data.results[i].abstract+"</div>")
        // .append("<img src='"+data.results[i].multimedia[3].url+"'>");

      }
      //   $.each(data.results,function(key,value){
      // $(".stories").append("<div>"+value.abstract+"</div>")
      // .append("<img src='"+value.multimedia[3].url+"'>")
    })
    
    });
    
    