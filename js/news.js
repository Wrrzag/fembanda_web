MAX_NEWS = 2;

function _newsSetup(begin, end, pagination){
	var params = getQueryParams(document.location.search);

	$.getJSON('content/news/' + params.lang + '.json', function(data){
      $("#posts").html('');

      createNews(data[params.lang], begin, end, pagination);
    }).fail(function(){
      console.log("Could not find any content in the selected language. Using default.");
      $.getJSON('content/news/' + defaultLang + '.json', function(data){
        $("#posts").html('');

        createNews(data[defaultLang], begin, end, pagination);
      });
    });
}

function defNewsSetup() {
	_newsSetup(0, MAX_NEWS, false);
}

function newsSetup(begin, end, pagination){
	_newsSetup(begin, end, pagination);
}


function createNews(data, begin, end, pagination) {
	$.each(data.slice(begin, end), function (i, post) {
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

	if(pagination) {
		//var step = end - begin;
		var current = Math.floor(begin/step) + 1;
		var totalPages = Math.ceil(getSize(data) / step);
		var html = "";

		console.log("current: " + current)
		console.log("step: " + step)
		console.log("pages: " + totalPages)

		if(totalPages > 1) {
			if(current == 1) html = "<ul class='pagination' role='menubar' aria-label='Pagination'><li class='arrow unavailable' aria-disabled='true'><a>&laquo; Previous</a></li>";
			else html = "<ul class='pagination' role='menubar' aria-label='Pagination'><li class='arrow'><a href='#top-posts' onclick='newsSetup(" + (current-2)*step + ", " + (current-1)*step + ", true)'>&laquo; Previous</a></li>";

	  		if(current == 1) html += "<li class='current'><a>1</a></li>";
	  		else html += "<li class=''><a href='#top-posts' onclick='newsSetup(0," + step + ", true);'>1</a></li>";
	  					
	  		if(totalPages > 1) {
				if(current == 2) html += "<li class='current'><a>2</a></li>";
		  		else html += "<li class=''><a href='#top-posts' onclick='newsSetup(" + step + "," + step*2 + ", true);''>2</a></li>";
	  		}		

	  		if(totalPages > 2) {
	  			for(var i = 3; i <= totalPages; i++) {
	  				if(current == i) html += "<li class='current'><a>" + i + "</a></li>";
		  			else html += "<li class=''><a href='#top-posts' onclick='newsSetup(" + step*(i-1) + "," + step*i + ", true);''>" + i + "</a></li>";
	  			}
	  		}

	  		if(totalPages == current) html += "<li class='arrow unavailable' aria-disabled='true'><a>Next &raquo;</a></li></ul>";
	  		else html += "<li class='arrow'><a href='#top-posts' onclick='newsSetup(" + current*step + ", " + (current+1)*step + ", true)'>Next &raquo;</a></li></ul>";
	  	}
  		$("#pagination").html(html);	
	}
}

function getSize(data) {
	var count = 0;
	var i;

	for (i in data) {
	    if (data.hasOwnProperty(i)) {
	        count++;
	    }
	}

	return count;
}