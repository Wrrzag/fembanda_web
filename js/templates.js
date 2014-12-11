function templateSetup() {
    $.ajaxSetup({
      async: false
    });

	$("#header").load('templates/header.html');
	$("#lateral-bar").load('templates/lateral-bar.html');
	$("#footer").load('templates/footer.html');

    $("#footer").css({'margin-top' : $("#overlap").height() + 30});
    $( window ).scroll(function() {
        if($(document.body).hasClass('f-topbar-fixed')) {
            $("#nav-logo").removeAttr('hidden');
        }
        else {
            $("#nav-logo").attr('hidden', true);
        }
    });


    $(document).foundation();
}