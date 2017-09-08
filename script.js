$(document).ready(function(){
  function getQuotes(){
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=xml&lang=en",
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(res) {
       quote = res.quoteText;
       author = res.quoteAuthor;
        console.log(res);
        $(".quote").text('"' + quote + '"');
        if (author){
          $(".author").text("― " + author);
        } else {
          $(".author").text("― " + "Unknown");
        }
      }
    });
  }
  getQuotes();

    $("#main-btn").on("click", function(event){
      event.preventDefault();
      getQuotes();
    });

    $("#tweet-btn").on("click", function(event){
      event.preventDefault();
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "―" + author));
    });
});