var $loader = $(".loader");
var $btnSuccessTest = $loader.find(".success-test");
var $btnErrorTest = $loader.find(".error-test");
var $btnLoadingTest = $loader.find(".loading-test");

var $loadingMessage = $loader.find(".loader-message");
var $btnRetry = $loader.find(".retry");
var $btnCancel = $loader.find(".cancel");

var errorMessage = "Unable to load data";
var successMessage = "Congo, data loaded successfully";
var loadingMessage = "Loading your data...";

$btnSuccessTest.on('click', function () {
    if ($loader.hasClass("error")) {
        $loader.removeClass("error");
    }

    $loader.addClass("success");
    $loadingMessage.text(successMessage);

});

$btnErrorTest.on('click', function () {
    if ($loader.hasClass("success")) {
        $loader.removeClass("success");
    }

    $loader.addClass("error");
    $loadingMessage.text(errorMessage);
});

$btnLoadingTest.on('click', function () {
    if ($loader.hasClass("success")) {
        $loader.removeClass("success");
    }
    else if ($loader.hasClass("error")) {
        $loader.removeClass("error");
    }
    $loadingMessage.text(loadingMessage);
});

$btnRetry.on('click', function () {
    if ($loader.hasClass("success")) {
        $loader.removeClass("success");
    }
    if ($loader.hasClass("error")) {
        $loader.removeClass("error");
    }
    $loadingMessage.text(loadingMessage);
});



$('form').on('submit', function (e) {
    // e.preventDefault()
    $('.loader').removeClass('none')

    setTimeout(() => {
        $('.loader-message').html('Almost Done...')
    }, 3000);
})

$(window).on('beforeunload', function () {
    $('.loader-message').html('Start Collecting Results..')
});