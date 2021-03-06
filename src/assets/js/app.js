$(document).ready(function() {

  $('.b--search').on('click', function(){
    var searchWords = encodeURIComponent($('.i--search').val()); 
    var url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+searchWords+'&format=json';

    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      url: url,
      success: function() {
        $('.wiki--page').html('<iframe class="wiki--api" src="https://en.m.wikipedia.org/w/index.php?title=Special:Search&search='+searchWords+'&fulltext=Search"></iframe>');
        var wikiHeight = $(window).height() - 250;
        $('.wiki--api').height(wikiHeight);
      }
    });

  });

  $('.b--random').on('click', function(){
    $('.wiki--page').html('<iframe class="wiki--api" src="https://en.m.wikipedia.org/wiki/Special:Random"></iframe>');

    var wikiHeight = $(window).height() - 250;
    $('.wiki--api').height(wikiHeight);
  });

  $(window).resize(function(){
    $('.wiki--api').height($(window).height() - 250);
  });
});
