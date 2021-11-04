$(function () {
    console.log("Connected to DOM");

    $('.dog-info').hide();
    $('.dog-container').hover(
        function () {
            $(this).find('.dog-info').show(500);
        },
        function () {
            $(this).find('.dog-info').delay(200).hide(500);
        }
    );
    let totalCost = 0;
    $('.dog-info button').click(function () {
        totalCost += 123.45;
        $('.checkout-icon p').text("$" + totalCost);
    });
});