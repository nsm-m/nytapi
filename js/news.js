
$(document).ready(function () {

    //



    $('select').on('change', function () {


        var selected = $('select').val();



        fetch(`/.netlify/functions/fetch-news?select=${selected}`)
            .then(res => res.json()

            )
            .then(data =>

                showNews(data)

            );


    });

    function isEmpty(dataString) {

        if (!dataString || dataString === 0) {
            return true
        } else {
            return false
        }
    }


    function showNews(results) {

        let news = results;
        let articleList = news.results;
        console.log(articleList);

        articleList.forEach(article => {

            // console.log(article);
            let thumbnailArray = article.multimedia;
            let ArrayExist = Array.isArray(thumbnailArray)


            if ((isEmpty(article.title) === false) && ((ArrayExist === true) && (thumbnailArray.length !== 0))) {

                let thumbnail;

                switch (thumbnailArray.length) {

                    case 1:
                        // console.log(thumbnailArray.length);
                        thumbnail = thumbnailArray[0].url;

                        break;
                    case 2:
                        thumbnail = thumbnailArray[1].url;
                        //  console.log(thumbnailArray.length);

                        break;
                    case 3:

                        thumbnail = thumbnailArray[2].url;
                        // console.log(thumbnailArray.length);
                        break;
                    default:
                        thumbnail = thumbnailArray[1].url;


                        return thumbnail
                }

                $('.stories').append('<div class=\'newsbackground\'> <img src=\'' + thumbnail + '\'></img><div class="test">  <a href=\'' + article.url + '\' class=\'newslink\'>' + article.title + '</a></div></div>');

            }

        });

    }


});



$('#selection').change(function () {
    var selected = $('select').val();

    $('.image').animate({

        width: '50px',

    });
    $('.header').animate({

        height: 'auto',

    });
    $('.category').append(selected);

    document.getElementById('banner').style.height = 'auto';

    document.getElementById('banner').style.flexDirection = 'row';
    document.getElementById('banner').style.display = 'flex';
    document.getElementById('banner').style.margin = 'auto';

    document.getElementById('header').style.flexDirection = 'row-reverse';
    document.getElementById('choice').style.justifyContent = 'start';
    document.getElementById('header').style.height = '15vh';
    // document.getElementById('banner').style.margin = '1%';
    // document.getElementById('banner').style.flexWrap = 'wrap';
    document.getElementById('banner').style.width = '40%';

    // document.getElementById('weather').style.display = 'none';
    // document.getElementById('banner').style.padding = '1%';
    // document.getElementById('banner').style.justifyContent = 'center';

    // document.getElementById('logo').style.width = 'auto';
    // document.getElementById('logo').style.padding = '2%';
    document.getElementById('weather').style.margin = '0 5%';
    document.getElementById('weather').style.alignSelf = 'center';
    // document.getElementById('logo').style.border = '4px solid #f6f6f4';

    // document.getElementById('selection').style.width = 'auto';

    // document.getElementById('choice').style.minWidth = '300px';

    // document.getElementById('header').style.justifyContent = 'flex-start';
    document.getElementById('topstories').style.display = 'flex';


});


