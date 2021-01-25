// Script for Chat window START
$("body").ready(function () {
    $(".chatbox_container").hide().delay(100).fadeIn(1000); // You can customize the time you want the chat window to be displayed with the 'delay' and 'fadeIn' properties
    $(".chatbox_container").removeClass("displayNoneChat"); //Removes class "displayNoneChat" and displays the Chatbox container
});
// Script for Chat window END

// Script for Chat window START
(function ($) {
    $(document).ready(function () {
        var $chatbox = $(".chatbox"),
            $chatboxTitle = $(".chatbox__title"),
            $chatboxTitleClose = $(".chatbox__title__close"),
            $chatboxCredentials = $(".chatbox__credentials");
        $("#instantChat").on("click", function () {
            $chatbox.removeClass("chatbox--closed");
            $chatbox.toggleClass("chatbox--tray");
        });
        $chatboxTitleClose.on("click", function (e) {
            e.stopPropagation();
            $chatbox.addClass("chatbox--closed");
        });
        $chatbox.on("transitionend", function () {
            if ($chatbox.hasClass("chatbox--closed")) $chatbox.remove();
        });
    });
})(jQuery);
// Script for Chat window END


// Script for overlay START
function openOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}
//   Script for overlay END
