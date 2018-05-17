$(document).foundation();
$(document).ready(function(){
    $('.off-canvas a').on('click', function() {
        $('.off-canvas').foundation('close');
    });
});
