
$('select').on('change', function () {
  var mykey = config.API_KEY;
  //$(document).on("ready", function () {
  $('.stories').empty();
  $('.category').empty();
  var select = $('select').val();

  var url = 'https://api.nytimes.com/svc/topstories/v2/' + select + '.json';
  url += '?' + $.param({
    'api-key': mykey
  });


  $.ajax({
   // url: url,
    method: 'GET',
  }).done(function (data) {

    // console.log(data.results);

    let articleList = data.results;

    // let articleList = [{
    //   "title": "Duobam Will you lend me your book?",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://google.com.au/in/blandit/ultrices/enim/lorem/ipsum.png?maecenas=tellus&ut=nisi&massa=eu&quis=orci&augue=mauris"
    // }, {
    //   "title": "Viva Still, mapping them is instructive",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://columbia.edu/at/ipsum/ac/tellus.jpg?maecenas=mauris&leo=morbi&odio=non&condimentum=lectus&id=aliquam&luctus=sit&nec=amet&molestie=diam&sed=in&justo=magna&pellentesque=bibendum&viverra=imperdiet&pede=nullam&ac=orci&diam=pede&cras=venenatis&pellentesque=non&volutpat=sodales&dui=sed&maecenas=tincidunt&tristique=eu&est=felis&et=fusce&tempus=posuere&semper=felis&est=sed&quam=lacus&pharetra=morbi&magna=sem&ac=mauris&consequat=laoreet&metus=ut&sapien=rhoncus&ut=aliquet&nunc=pulvinar"
    // }, {
    //   "title": "So how to help those who want to go it alone (or don't have access to health care!) succeed?",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://list-manage.com/cras.js?dignissim=congue&vestibulum=etiam&vestibulum=justo&ante=etiam&ipsum=pretium&primis=iaculis&in=justo&faucibus=in&orci=hac&luctus=habitasse&et=platea&ultrices=dictumst&posuere=etiam&cubilia=faucibus&curae=cursus&nulla=urna&dapibus=ut&dolor=tellus&vel=nulla&est=ut&donec=erat&odio=id&justo=mauris&sollicitudin=vulputate&ut=elementum&suscipit=nullam&a=varius&feugiat=nulla&et=facilisi&eros=cras&vestibulum=non&ac=velit&est=nec&lacinia=nisi"
    // }, {
    //   "title": "But when I hear certain politicians use the Boston bombings as a pretext for scotching immigration reform ... I wince.",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://nps.gov/vestibulum/ante/ipsum/primis/in.xml?ipsum=hac&dolor=habitasse&sit=platea&amet=dictumst&consectetuer=maecenas&adipiscing=ut&elit=massa&proin=quis&interdum=augue&mauris=luctus&non=tincidunt&ligula=nulla&pellentesque=mollis&ultrices=molestie&phasellus=lorem&id=quisque&sapien=ut&in=erat&sapien=curabitur&iaculis=gravida&congue=nisi&vivamus=at&metus=nibh&arcu=in&adipiscing=hac&molestie=habitasse&hendrerit=platea&at=dictumst&vulputate=aliquam&vitae=augue&nisl=quam&aenean=sollicitudin&lectus=vitae&pellentesque=consectetuer&eget=eget&nunc=rutrum&donec=at&quis=lorem&orci=integer&eget=tincidunt&orci=ante&vehicula=vel&condimentum=ipsum&curabitur=praesent&in=blandit&libero=lacinia&ut=erat&massa=vestibulum&volutpat=sed&convallis=magna&morbi=at&odio=nunc&odio=commodo&elementum=placerat&eu=praesent&interdum=blandit&eu=nam"
    // }, {
    //   "title": "Stronghold I’m not anticipating that.",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://bloomberg.com/elementum/in/hac/habitasse/platea/dictumst/morbi.js?vestibulum=erat&rutrum=fermentum&rutrum=justo&neque=nec&aenean=condimentum&auctor=neque&gravida=sapien&sem=placerat&praesent=ante&id=nulla&massa=justo&id=aliquam&nisl=quis&venenatis=turpis&lacinia=eget&aenean=elit&sit=sodales&amet=scelerisque&justo=mauris&morbi=sit&ut=amet&odio=eros&cras=suspendisse&mi=accumsan&pede=tortor&malesuada=quis&in=turpis&imperdiet=sed&et=ante&commodo=vivamus&vulputate=tortor&justo=duis&in=mattis&blandit=egestas&ultrices=metus&enim=aenean&lorem=fermentum&ipsum=donec&dolor=ut&sit=mauris&amet=eget&consectetuer=massa&adipiscing=tempor&elit=convallis&proin=nulla&interdum=neque&mauris=libero&non=convallis&ligula=eget&pellentesque=eleifend"
    // }, {
    //   "title": "Stim It becomes another kind of place.",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://furl.net/integer.html?platea=eu&dictumst=massa&morbi=donec&vestibulum=dapibus&velit=duis&id=at&pretium=velit&iaculis=eu&diam=est&erat=congue&fermentum=elementum&justo=in&nec=hac&condimentum=habitasse&neque=platea&sapien=dictumst&placerat=morbi&ante=vestibulum&nulla=velit&justo=id&aliquam=pretium&quis=iaculis&turpis=diam&eget=erat&elit=fermentum&sodales=justo&scelerisque=nec&mauris=condimentum&sit=neque&amet=sapien&eros=placerat&suspendisse=ante&accumsan=nulla&tortor=justo&quis=aliquam&turpis=quis&sed=turpis&ante=eget&vivamus=elit&tortor=sodales&duis=scelerisque&mattis=mauris&egestas=sit&metus=amet&aenean=eros&fermentum=suspendisse&donec=accumsan&ut=tortor&mauris=quis&eget=turpis&massa=sed&tempor=ante&convallis=vivamus&nulla=tortor&neque=duis&libero=mattis&convallis=egestas&eget=metus&eleifend=aenean&luctus=fermentum&ultricies=donec&eu=ut&nibh=mauris&quisque=eget&id=massa&justo=tempor&sit=convallis&amet=nulla&sapien=neque&dignissim=libero&vestibulum=convallis&vestibulum=eget&ante=eleifend&ipsum=luctus&primis=ultricies&in=eu&faucibus=nibh&orci=quisque&luctus=id&et=justo&ultrices=sit&posuere=amet&cubilia=sapien&curae=dignissim&nulla=vestibulum"
    // }, {
    //   "title": "The New York Times has been called a lot of things in the 160 years of its existence",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://t.co/vestibulum/ac.jsp?integer=leo&a=maecenas&nibh=pulvinar&in=lobortis&quis=est&justo=phasellus&maecenas=sit&rhoncus=amet&aliquam=erat&lacus=nulla&morbi=tempus&quis=vivamus&tortor=in&id=felis&nulla=eu&ultrices=sapien&aliquet=cursus&maecenas=vestibulum&leo=proin&odio=eu&condimentum=mi&id=nulla&luctus=ac"
    // }, {
    //   "title": "I was surprised about it",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://symantec.com/ut/ultrices/vel/augue/vestibulum/ante/ipsum.html?nascetur=felis&ridiculus=eu&mus=sapien&vivamus=cursus&vestibulum=vestibulum&sagittis=proin&sapien=eu&cum=mi&sociis=nulla&natoque=ac&penatibus=enim&et=in&magnis=tempor&dis=turpis&parturient=nec&montes=euismod&nascetur=scelerisque&ridiculus=quam&mus=turpis&etiam=adipiscing&vel=lorem&augue=vitae&vestibulum=mattis&rutrum=nibh&rutrum=ligula&neque=nec&aenean=sem"
    // }, {
    //   "title": "Bands like Enslaved (from Norway) or Drudkh (from the Ukraine) work to link their music to a pagan volk past",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://yelp.com/et/ultrices/posuere/cubilia/curae/nulla/dapibus.jpg?velit=aliquam&vivamus=convallis&vel=nunc&nulla=proin&eget=at&eros=turpis&elementum=a&pellentesque=pede&quisque=posuere&porta=nonummy&volutpat=integer&erat=non&quisque=velit&erat=donec&eros=diam&viverra=neque&eget=vestibulum&congue=eget&eget=vulputate&semper=ut&rutrum=ultrices&nulla=vel&nunc=augue&purus=vestibulum&phasellus=ante&in=ipsum&felis=primis&donec=in&semper=faucibus&sapien=orci&a=luctus&libero=et&nam=ultrices&dui=posuere&proin=cubilia&leo=curae&odio=donec&porttitor=pharetra&id=magna&consequat=vestibulum&in=aliquet&consequat=ultrices&ut=erat&nulla=tortor&sed=sollicitudin&accumsan=mi&felis=sit&ut=amet&at=lobortis&dolor=sapien&quis=sapien&odio=non&consequat=mi&varius=integer&integer=ac&ac=neque&leo=duis&pellentesque=bibendum&ultrices=morbi&mattis=non&odio=quam&donec=nec&vitae=dui&nisi=luctus&nam=rutrum&ultrices=nulla&libero=tellus&non=in&mattis=sagittis&pulvinar=dui&nulla=vel&pede=nisl&ullamcorper=duis&augue=ac&a=nibh&suscipit=fusce&nulla=lacus&elit=purus&ac=aliquet&nulla=at&sed=feugiat&vel=non&enim=pretium&sit=quis"
    // }, {
    //   "title": "Below the fold is Psilocybin Mushrooms",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://nih.gov/ut/rhoncus/aliquet/pulvinar/sed/nisl/nunc.aspx?ipsum=ante&integer=nulla&a=justo&nibh=aliquam&in=quis&quis=turpis&justo=eget&maecenas=elit&rhoncus=sodales&aliquam=scelerisque&lacus=mauris&morbi=sit&quis=amet&tortor=eros&id=suspendisse&nulla=accumsan&ultrices=tortor&aliquet=quis&maecenas=turpis&leo=sed&odio=ante&condimentum=vivamus&id=tortor&luctus=duis&nec=mattis&molestie=egestas&sed=metus&justo=aenean&pellentesque=fermentum&viverra=donec&pede=ut&ac=mauris&diam=eget&cras=massa&pellentesque=tempor&volutpat=convallis&dui=nulla&maecenas=neque&tristique=libero&est=convallis&et=eget&tempus=eleifend&semper=luctus&est=ultricies&quam=eu&pharetra=nibh&magna=quisque&ac=id&consequat=justo&metus=sit&sapien=amet&ut=sapien&nunc=dignissim&vestibulum=vestibulum&ante=vestibulum&ipsum=ante&primis=ipsum&in=primis&faucibus=in&orci=faucibus&luctus=orci&et=luctus&ultrices=et"
    // }, {
    //   "title": "And what impression are you creating for visitors?",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://tinypic.com/pharetra/magna/ac/consequat.html?in=nibh&hac=in&habitasse=quis"
    // }, {
    //   "title": "There will always be students who enjoy hookups",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://mail.ru/facilisi/cras/non/velit/nec/nisi.jsp?et=in&ultrices=faucibus&posuere=orci&cubilia=luctus&curae=et&mauris=ultrices&viverra=posuere&diam=cubilia&vitae=curae&quam=mauris&suspendisse=viverra&potenti=diam&nullam=vitae&porttitor=quam&lacus=suspendisse&at=potenti&turpis=nullam&donec=porttitor&posuere=lacus&metus=at&vitae=turpis&ipsum=donec&aliquam=posuere&non=metus&mauris=vitae&morbi=ipsum&non=aliquam&lectus=non&aliquam=mauris&sit=morbi&amet=non&diam=lectus&in=aliquam&magna=sit&bibendum=amet&imperdiet=diam&nullam=in&orci=magna&pede=bibendum&venenatis=imperdiet&non=nullam"
    // }, {
    //   "title": "A photograph doesn't have to be front-page news",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://rediff.com/lorem/ipsum/dolor/sit/amet.aspx?pede=sem&justo=duis&lacinia=aliquam&eget=convallis&tincidunt=nunc&eget=proin&tempus=at&vel=turpis&pede=a&morbi=pede&porttitor=posuere&lorem=nonummy&id=integer&ligula=non&suspendisse=velit&ornare=donec&consequat=diam&lectus=neque&in=vestibulum&est=eget&risus=vulputate&auctor=ut&sed=ultrices&tristique=vel&in=augue&tempus=vestibulum&sit=ante&amet=ipsum&sem=primis&fusce=in&consequat=faucibus&nulla=orci&nisl=luctus&nunc=et&nisl=ultrices&duis=posuere&bibendum=cubilia&felis=curae&sed=donec&interdum=pharetra&venenatis=magna&turpis=vestibulum&enim=aliquet&blandit=ultrices&mi=erat&in=tortor&porttitor=sollicitudin&pede=mi&justo=sit&eu=amet&massa=lobortis&donec=sapien&dapibus=sapien&duis=non&at=mi&velit=integer&eu=ac&est=neque&congue=duis&elementum=bibendum&in=morbi&hac=non&habitasse=quam&platea=nec&dictumst=dui&morbi=luctus&vestibulum=rutrum&velit=nulla&id=tellus"
    // }, {
    //   "title": "The Romney campaign isn't alone in seeing its social-media attempts at controlling the news flow ",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://hud.gov/est/et/tempus.json?non=et&ligula=magnis&pellentesque=dis&ultrices=parturient&phasellus=montes&id=nascetur&sapien=ridiculus&in=mus&sapien=vivamus&iaculis=vestibulum&congue=sagittis&vivamus=sapien&metus=cum&arcu=sociis&adipiscing=natoque&molestie=penatibus&hendrerit=et&at=magnis&vulputate=dis&vitae=parturient&nisl=montes&aenean=nascetur&lectus=ridiculus&pellentesque=mus&eget=etiam&nunc=vel&donec=augue&quis=vestibulum&orci=rutrum&eget=rutrum&orci=neque&vehicula=aenean&condimentum=auctor&curabitur=gravida&in=sem&libero=praesent&ut=id&massa=massa&volutpat=id&convallis=nisl&morbi=venenatis&odio=lacinia&odio=aenean&elementum=sit&eu=amet&interdum=justo&eu=morbi&tincidunt=ut&in=odio&leo=cras&maecenas=mi&pulvinar=pede&lobortis=malesuada&est=in&phasellus=imperdiet&sit=et&amet=commodo&erat=vulputate&nulla=justo"
    // }, {
    //   "title": "A small point, but one that’s nonetheless bothered me.",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://time.com/in/hac/habitasse/platea/dictumst/aliquam/augue.json?at=id&nulla=turpis&suspendisse=integer&potenti=aliquet&cras=massa&in=id&purus=lobortis&eu=convallis&magna=tortor&vulputate=risus&luctus=dapibus&cum=augue&sociis=vel&natoque=accumsan&penatibus=tellus&et=nisi&magnis=eu&dis=orci&parturient=mauris&montes=lacinia&nascetur=sapien&ridiculus=quis&mus=libero&vivamus=nullam&vestibulum=sit&sagittis=amet&sapien=turpis&cum=elementum&sociis=ligula&natoque=vehicula&penatibus=consequat&et=morbi&magnis=a&dis=ipsum&parturient=integer&montes=a&nascetur=nibh&ridiculus=in"
    // }, {
    //   "title": "The immediate charges, some warned, could be the tip of a larger iceberg.",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://quantcast.com/lacus/morbi/quis/tortor/id.jpg?amet=dis&justo=parturient&morbi=montes&ut=nascetur&odio=ridiculus&cras=mus&mi=vivamus&pede=vestibulum&malesuada=sagittis&in=sapien&imperdiet=cum&et=sociis&commodo=natoque&vulputate=penatibus&justo=et&in=magnis&blandit=dis&ultrices=parturient&enim=montes&lorem=nascetur&ipsum=ridiculus&dolor=mus&sit=etiam&amet=vel&consectetuer=augue&adipiscing=vestibulum&elit=rutrum&proin=rutrum&interdum=neque&mauris=aenean&non=auctor&ligula=gravida&pellentesque=sem&ultrices=praesent&phasellus=id&id=massa&sapien=id&in=nisl&sapien=venenatis&iaculis=lacinia&congue=aenean&vivamus=sit&metus=amet&arcu=justo&adipiscing=morbi&molestie=ut&hendrerit=odio&at=cras&vulputate=mi&vitae=pede&nisl=malesuada&aenean=in&lectus=imperdiet&pellentesque=et&eget=commodo&nunc=vulputate&donec=justo&quis=in&orci=blandit&eget=ultrices&orci=enim&vehicula=lorem&condimentum=ipsum&curabitur=dolor&in=sit&libero=amet&ut=consectetuer&massa=adipiscing&volutpat=elit&convallis=proin&morbi=interdum&odio=mauris&odio=non&elementum=ligula&eu=pellentesque&interdum=ultrices&eu=phasellus&tincidunt=id&in=sapien&leo=in"
    // }, {
    //   "title": "The $900 cameras weighed 108 grams and were small enough to fit on each officer's collar or sunglasses",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://furl.net/venenatis/lacinia/aenean.png?quisque=integer&ut=non&erat=velit"
    // }, {
    //   "title": "Sudden, disorienting swerves into the dark side?",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "https://newyorker.com/ultrices/mattis/odio/donec/vitae/nisi.js?auctor=nam&sed=nulla&tristique=integer&in=pede&tempus=justo&sit=lacinia&amet=eget&sem=tincidunt&fusce=eget&consequat=tempus&nulla=vel&nisl=pede&nunc=morbi&nisl=porttitor&duis=lorem&bibendum=id&felis=ligula&sed=suspendisse&interdum=ornare&venenatis=consequat&turpis=lectus&enim=in&blandit=est&mi=risus&in=auctor&porttitor=sed&pede=tristique&justo=in&eu=tempus&massa=sit&donec=amet&dapibus=sem"
    // }, {
    //   "title": "Mike Farren, now 30, is spending between $15,000 and $20,000 to transition to a career as a physical-therapist assistant",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://blog.com/vestibulum/ante/ipsum/primis/in.jsp?et=id&magnis=consequat&dis=in&parturient=consequat&montes=ut&nascetur=nulla&ridiculus=sed&mus=accumsan&etiam=felis&vel=ut&augue=at&vestibulum=dolor&rutrum=quis&rutrum=odio&neque=consequat&aenean=varius&auctor=integer&gravida=ac&sem=leo&praesent=pellentesque&id=ultrices&massa=mattis&id=odio&nisl=donec&venenatis=vitae&lacinia=nisi&aenean=nam&sit=ultrices&amet=libero&justo=non&morbi=mattis&ut=pulvinar&odio=nulla&cras=pede&mi=ullamcorper&pede=augue&malesuada=a&in=suscipit&imperdiet=nulla&et=elit&commodo=ac&vulputate=nulla&justo=sed&in=vel&blandit=enim&ultrices=sit&enim=amet&lorem=nunc&ipsum=viverra&dolor=dapibus&sit=nulla&amet=suscipit&consectetuer=ligula&adipiscing=in&elit=lacus&proin=curabitur&interdum=at&mauris=ipsum&non=ac"
    // }, {
    //   "title": "Showtime is back, and the L.A",
    //   "multimedia": "https://picsum.photos/800",
    //   "url": "http://mail.ru/nunc/vestibulum/ante.jpg?lacinia=rhoncus&sapien=dui&quis=vel&libero=sem"
    // }]
    $(".category").append(select);
    articleList.forEach(article => {

      let thumbnailArray = article.multimedia;
      let test = Array.isArray(thumbnailArray)
      //  console.log(test);
      if ((isEmpty(article.title) === false) && ((Array.isArray(thumbnailArray) === true) && (thumbnailArray.length !== 0))) {

        let thumbnail;

        switch (thumbnailArray.length) {

          case 1:
            console.log(thumbnailArray.length);
            thumbnail = thumbnailArray[0].url;
            // code block
            break;
          case 2:
            thumbnail = thumbnailArray[1].url;
            console.log(thumbnailArray.length);
            // code block
            break;
          case 3:
            // code block
            thumbnail = thumbnailArray[2].url;
            console.log(thumbnailArray.length);
            break;
          default:
            thumbnail = thumbnailArray[1].url;
            console.log(thumbnailArray.length);
            // code block
            return thumbnail
        }
        console.log(thumbnail);
        // if (article.multimedia[2]) {
        //   $(".stories").append("<a href='" + article.url + "' class='newslink'><div class='newsbackground' style='background-image: url(" + article.multimedia[2].url + ")'> <p class = 'newstitle'>" + article.abstract + "</p></div></a>");

        $('.stories').append('<div class=\'newsbackground\'> <img src=\'' + thumbnail + '\'></img>  <a href=\'' + article.url + '\' class=\'newslink\'> <p class = \'newstitle\'>' + article.title + '</p></a></div>');
      }
      //test
      //  $(".stories").append("<div class='newsbackground'> <img src='" + article.multimedia + "'></img>  <a href='" + article.url + "' class='newslink'> <p class = 'newstitle'>" + article.title + "</p></a></div>");

      //  $(".stories").append("<div class='newsbackground' style='background-image: url(" + article.multimedia[2].url + ")'> <a href='" + article.url + "' class='newslink'> <p class = 'newstitle'>" + article.title + "</p></a></div>");


      // } else {
      //   article.splice(i, 1);
      //   i--;
      // }
      // }
      // $(".stories").append("<a href='" + data.results[i].url + "' class='newslink'><div class='newsbackground' style='background-image: url(" + data.results[i].multimedia[4].url + ")'> <p class = 'newstitle'>" + data.results[i].abstract + "</p></div></a>");

      //
      //
      //
      //
      //
      //  if (data.results[i].multimedia[4]) {
      //     $(".stories").append("<a href='" + data.results[i].url + "' class='newslink'><div class='newsbackground' style='background-image: url(" + data.results[i].multimedia[4].url + ")'> <p class = 'newstitle'>" + data.results[i].abstract + "</p></div></a>");


      //   } else {
      //     data.results.splice(i, 1);
      //     i--;
      //   }

    });


    // for (var i = 0; i < 12; ++i) {
    //   if (data.results[i].multimedia[4]) {
    //     $(".stories").append("<a href='" + data.results[i].url + "' class='newslink'><div class='newsbackground' style='background-image: url(" + data.results[i].multimedia[4].url + ")'> <p class = 'newstitle'>" + data.results[i].abstract + "</p></div></a>");


    //   } else {
    //     data.results.splice(i, 1);
    //     i--;
    //   }
    //   console.log(data.results[i].multimedia);


    // }

  })



});


// get the header logo to resize

// 

// $("select").click(function () {
//   $(".logo").animate({

//     width: '4rem',
//     marginTop: '-5rem',
//   });
// });

// $("select").click(function () {
//   $(".choice").animate({

//     marginTop: '-5rem',

//   });
// });

// $("select").click(function () {
//   $(".header").animate({

//     height: 'auto',

//   });
// });



//resizing animation test









//$(document).on("ready", function () {
$('#selection').change(function () {
  var selected = $('select').val();


  //console.log(selected);

  $('.image').animate({

    width: '50px',
    // marginTop: '-5rem',
  });
  $('.header').animate({

    height: 'auto',

  });
  $('.choice').animate({

    //  marginTop: '-5rem',

  });
  //alert();
  document.getElementById('banner').style.flexDirection = 'row';
  document.getElementById('banner').style.margin = '1%';
  document.getElementById('banner').style.flexWrap = 'wrap';
  document.getElementById('banner').style.width = '80%';
  document.getElementById('banner').style.padding = '1%';
  document.getElementById('banner').style.justifyContent = 'center';
  //  document.getElementById("choose").style.fontSize = "1.8em";
  document.getElementById('logo').style.width = 'auto';
  document.getElementById('logo').style.padding = '2%';
  document.getElementById('logo').style.margin = '2%';

  document.getElementById('logo').style.border = '4px solid whitesmoke';
  document.getElementById('selection').style.width = 'auto';
  document.getElementById('choice').style.minWidth = '300px';
  // document.getElementById("header").style.gridColumnStart = "2";
  // document.getElementById("header").style.gridColumnEnd = "12";
  // document.getElementById("header").style.gridRowStart = "1";
  // document.getElementById("header").style.gridRowEnd = "2";
  document.getElementById('header').style.justifyContent = 'flex-start';
  document.getElementById('topstories').style.display = 'flex';
  // document.getElementById("topstories").style. = "";
  // document.getElementById("topstories").style.= "";
  // document.getElementById("topstories").style. = "";
  // document.getElementById("topstories").style. = "";

  //document.getElementById("choice").style.flexGrow = "4";
  // document.getElementsByClassName("banner").style.flexDirection = "row";


});

function isEmpty(dataString) {

  if (!dataString || dataString === 0) {
    return true
  } else {
    return false
  }
  //return (!dataString || dataString === 0);
}
