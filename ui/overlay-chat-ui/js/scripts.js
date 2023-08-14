(function ($) {
  $(document).ready(function () {
    var $chatbox = $(".chatbox"),
      $chatboxTitleClose = $(".chatbox__title__close"),
      $chatbox_container = $(".chatbox_container"),
      $floatingBubble = $(".floatingBubble"),
      $chatbox__title = $(".chatbox__title");

    $("body").ready(function () {
      $(".chatbox_container").hide().delay(1000).fadeIn(1000); // You can customize the time you want the chat window to be displayed with the 'delay' and 'fadeIn' properties
      $(".chatbox_container").removeClass("displayNoneChat"); //Removes class "displayNoneChat" and displays the Chatbox container
      $floatingBubble.hide(); // Hide the floating bubble by default
    });
    $chatbox__title.on("click", function () {
      $floatingBubble.fadeOut(100).hide(); // fadeOut (100ms) of the floatingBubble
      $chatbox_container.removeClass("displayNoneChat"); // Removes .displayNoneChat to display the Chatbox container
      $chatbox.removeClass("chatbox--closed");
      $chatbox.toggleClass("chatbox--tray");
    });
    $(".floatingBubble").on("click", function () {
      $chatbox_container.removeClass("displayNoneChat");
      $chatbox.removeClass("chatbox--closed");
      $chatbox.toggleClass("chatbox--tray");
      $floatingBubble.fadeOut(1e3).hide(); // fadeOut (100ms) of the floatingBubble
    });
    $(".closeChatWindow").on("click", function () {
      // Closes the chat window once anywhere on the page is clicked apart from footer
      $chatbox.addClass("chatbox--tray");
    });
    $chatboxTitleClose.on("click", function (e) {
      e.stopPropagation();
      $chatbox.addClass("chatbox--closed");
      $(".floatingBubble")
        .hide()
        .fadeIn(1e3); // fadeIn (100ms) of the floatingBubble
    });
  });
})(jQuery);
// Chat window manipulation END


// Script for overlay START
function openOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
}
//   Script for overlay END

$(document).ready((function () {
  var date = new Date,
    sec = date.getSeconds(),
    min = date.getMinutes(),
    hour = date.getHours(),
    copyrightYear = date.getFullYear();
  $("document").ready((function () {
    $("#copyright").text(copyrightYear)
  }))
}))
