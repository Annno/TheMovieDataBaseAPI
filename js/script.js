$(document).ready(function() {
    var movieCounter = 0;
    var movieN = "";
    var descriptionI = "";
    $('.btn').on('click', function() {
        movieN = $('#movieName').val();

        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie',
            type: 'get',
            callback: $,
            data: {
                api_key: '66ff9aa5ee1f3bc9fddc41b144b234af',
                query: movieN
            },
            success: function(data) {
                console.log(data);
                descriptionI = data.results[0];
                addData(descriptionI);
            }
        })
    })



    function addData(data) {
        $('.container').append(' <div class="row appendMov"><div class="col s12 z-depth-2 mainC"><img src="http://image.tmdb.org/t/p/w154' + data.poster_path + '"><h4>' + data.original_title + '</h4><p class="date">' + data.release_date + '  </p><p>' + data.overview + '  </p></div></div>');

    };


})
