function languageSetup() {
	// LANG
    // var defaultLang = 'ca'
    var params = getQueryParams(document.location.search);
    lang = params.lang;

    if(!params.lang) {
      console.log("No language is selected, using default.");
      lang = defaultLang;
    }
  
    // Set i18n'd GUI
    $.getJSON('strings/gui.json', function(data){
      if(data[lang] == undefined) {
        console.log("Unsupported language '" + params.lang + "', using default.");
        lang = defaultLang;
      }

      $.each(data[lang], function (i, str) {
        $("." + i).html(str);
      });
    }).fail(function(err){
      console.log("ERROR READING i18n FILE: " + err.statusText);
    });

    $(".link_ca").attr('href', '//' + location.host + location.pathname + '?lang=ca');
    $(".link_es").attr('href', '//' + location.host + location.pathname + '?lang=es');
    $(".link_en").attr('href', '//' + location.host + location.pathname + '?lang=en');
    $(".link_de").attr('href', '//' + location.host + location.pathname + '?lang=de');
    $(".link_fr").attr('href', '//' + location.host + location.pathname + '?lang=fr');

    if(params.lang) {
      $.each($("a.internal-link"), function(){
        $(this).attr('href', $(this).attr('href') + '?lang=' + params.lang);
      });

      var msg = $(".link_" + params.lang).html();
      $(".link_" + params.lang).html('<strong>' + msg + '</strong>');
    }
    else {
      var msg = $(".link_" + defaultLang).html();
      $(".link_" + defaultLang).html('<strong>' + msg + '</strong>');
    }
}

function getQueryParams(qs) {
	qs = qs.split("+").join(" ");

	var params = {}, tokens,
	    re = /[?&]?([^=]+)=([^&]*)/g;

	while (tokens = re.exec(qs)) {
	    params[decodeURIComponent(tokens[1])]
	        = decodeURIComponent(tokens[2]);
	}

	return params;
}