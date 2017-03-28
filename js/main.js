$(document).ready(function() {

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 60,
        values: [20, 40],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + "          -          $" + ui.values[1]);
        }
    });

    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        "          -          $" + $("#slider-range").slider("values", 1));

});

$('.selectpicker').selectpicker({
    style: 'btn-info',
    size: 4
});
