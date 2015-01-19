function sendRegistrationForm(){
    var text = "Sr/Sra: " + $("#sir-madam").val() + "<br/>" +
                "En representacio de: " + $("#representing").val() + "<br/>" +
                "En qualitat de: " + $("#as").val() + "<br/>" +
                "Amb domicili social: " + $("#social-dom").val() + "<br/>" +
                "Numero: " + $("#number").val() + "<br/>" +
                "Pis: " + $("#floor").val() + "<br/>" +
                "Localitat: " + $("#town").val() + "<br/>" +
                "Codi Postal: " + $("#postal-code").val() + "<br/>" +
                "Provincia: " + $("#province").val() + "<br/>" +
                "CIF: " + $("#CIF").val() + "<br/>" +
                "Telefon: " + $("#phone").val() + "<br/>" +
                "Fax: " + $("#fax").val() + "<br/>" +
                "e-mail: " + $("#mail").val() + "<br/>" +
                "web: " + $("#webpage").val() + "<br/>" +
                "Modul: " + $('input[name=module]:checked').val() + "<br/>" +
                "Director: " + $("#conductor").val() + "<br/>" +
                "Numero de musics: " + $("#musician-num").val() + "<br/>"


    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '_S657t5eRNgrwUl35YiAzg',
        'message': {
          'from_email': $("#mail").val(),
          'to': [
              {
                'email': 'bandadelleida@gmail.com',
               // 'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': "Inscripció Fem Banda de " + $("#representing").val(),
          'html': "Dades de la inscripció: <br/>" + text
        }
      }
     }).done(function(response) {
        alert($("#success").html());
        console.log(response); // if you're into that sorta thing
 });
    // var link = "mailto:bandamunicipal@paeria.cat"
    //          + "&subject=" + "Inscripcio Fem Banda de " + encodeURI($("#mail").val())
    //          + "&body=" + encodeURI(text)
    // ;

    // window.location.href = link;
}

function sendContactForm(){
    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '_S657t5eRNgrwUl35YiAzg',
        'message': {
          'from_email': $("#mail").val(),
          'to': [
              {
                'email': 'bandadelleida@gmail.com',
               // 'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': "Contacte Fem Banda de " + $("#mail").val(),
          'html': "Ha enviat el següent missatge: <br/>" + $("#msg").val().replace(/[\r\n]/g, "<br/>")
        }
      }
     }).done(function(response) {
        alert($("#success").html());
        console.log(response); // if you're into that sorta thing
 });
    // var link = "mailto:bandamunicipal@paeria.cat"
    //          + "&subject=" + encodeURI("Contacte Fem Banda de " + encodeURI($("#mail").val()))
    //          + "&body=" + encodeURI($("#msg").val())
    // ;

    // window.location.href = link;
}