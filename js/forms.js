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


    var link = "mailto:bandamunicipal@paeria.cat"
             + "&subject=" + "Inscripcio Fem Banda de " + encodeURI($("#mail").val())
             + "&body=" + encodeURI(text)
    ;

    window.location.href = link;
}

function sendContactForm(){
    var link = "mailto:bandamunicipal@paeria.cat"
             + "&subject=" + encodeURI("Contacte Fem Banda de " + encodeURI($("#mail").val()))
             + "&body=" + encodeURI($("#msg").val())
    ;

    window.location.href = link;
}