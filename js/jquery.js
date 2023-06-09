$( document ).ready(function() {

$("#buttonSecure").on("click", function() {
        $("#buttonSecure").toggleClass("secure");
        $("#goodNavigation").toggleClass("secure")
    });
        
    $("#buttonGenius").on("click", function() {
        $("#zoomResponsive").toggleClass("zoomResponsiveButtonGenius");
        $("#fontAdaptive").toggleClass("fontAdaptiveButtonSmart");
    });

    $("#buttonSmart").on("click", function() {
        $("#ideeCreative").show();
        $("#altAudio").hide();
    });

    $("#buttonErgonomic").on("click", function() {
        $("#helloWorld").toggleClass("goldHi");
        $("#helloUser").toggleClass("goldHi");
        $("#ideeCreative").toggleClass("litBulb")
    });

    $("#buttonLoginUser").on("click", function() {
        $("#helloWorld").hide();
        $("#helloWorldMirror").hide();

        $("#helloUser").show();
        $("#helloUserMirror").show();

    });    

    $("#lienCodeSourceHtml").on("click", function() {
        window.alert("In order to take full advantage of this EXPERIENCE, I invite you to browse my Portfolio and inspect the source codes of my pages! (Ctrl+U)");
    });

    console.log( "ready!" );
});
