function sendRegistrationForm(){
    var text = "Sr/Sra: " + $("#sir-madam").val() + "\n" +
                "En representacio de: " + $("#representing").val() + "\n" +
                "En qualitat de: " + $("#as").val() + "\n" +
                "Amb domicili social: " + $("#social-dom").val() + "\n" +
                "Numero: " + $("#number").val() + "\n" +
                "Pis: " + $("#floor").val() + "\n" +
                "Localitat: " + $("#town").val() + "\n" +
                "Codi Postal: " + $("#postal-code").val() + "\n" +
                "Provincia: " + $("#province").val() + "\n" +
                "CIF: " + $("#CIF").val() + "\n" +
                "Telefon: " + $("#phone").val() + "\n" +
                "Fax: " + $("#fax").val() + "\n" +
                "e-mail: " + $("#mail").val() + "\n" +
                "web: " + $("#webpage").val() + "\n" +
                "Modul: " + $('input[name=module]:checked').val() + "\n" +
                "Director: " + $("#conductor").val() + "\n" +
                "Numero de musics: " + $("#musician-num").val() + "\n"


    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '_S657t5eRNgrwUl35YiAzg',
        'message': {
          'from_email': $("#mail").val(),
          'to': [
              {
                'email': 'wrrzag666@gmail.com',
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
                'email': 'wrrzag666@gmail.com',
               // 'name': 'RECIPIENT NAME (OPTIONAL)',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': "Contacte Fem Banda de " + $("#mail").val(),
          'html': "Ha enviat el següent missatge: <br/>" + $("#msg").val()
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
 });
    // var link = "mailto:bandamunicipal@paeria.cat"
    //          + "&subject=" + encodeURI("Contacte Fem Banda de " + encodeURI($("#mail").val()))
    //          + "&body=" + encodeURI($("#msg").val())
    // ;

    // window.location.href = link;
}