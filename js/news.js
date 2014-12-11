MAX_NEWS = 2;

function newsSetup(){
	var params = getQueryParams(document.location.search);

	$.getJSON('content/news/' + params.lang + '.json', function(data){
      $("#posts").html('');

      createNews(data[params.lang]);
    }).fail(function(){
      console.log("Could not find any content in the selected language. Using default.");
      $.getJSON('content/news/' + defaultLang + '.json', function(data){
        $("#posts").html('');

        createNews(data[defaultLang]);
      });
    });
}

function createNews(data) {
	$.each(data.slice(0, MAX_NEWS), function (i, post) {
	  var html = "<article>"   

	  if(post.title != undefined) {
	    html += "<h3><a href='#'>" + post.title + "</a></h3>";
	  }
	  if(post.date != undefined) {
	    html += "<h4><small>Creada el " + post.date + "</small></h4>";
	  }
	  if(post.body != undefined) {
	    html += "<div class='row'>";

	    if(post.body.nextToPicture != undefined) {
	      html += "<div class='large-6 columns text-justify'>" + post.body.nextToPicture + "</div>";
	    }
	    if(post.body.picture != undefined) {
	      html += "<div class='large-6 columns'><img src='" + post.body.picture + "'/></div>";
	    }

	    html += "</div>"

	    if(post.body.text != undefined) {
	      html += post.body.text;
	    }

	    html += "</article><hr/>";

	    $("#posts").html($("#posts").html() + html);

	    //return i < MAX_NEWS - 1;
	  }
	});
}