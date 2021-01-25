var currentQuestion = 0,
	lastQuestion = questions.length - 1,
	local = !document.location.hostname;

function storyController(questions) {
	current = 0, createMessage(questions[0].question)
}

function createMessage(messagesArray, i, response) {
	response = void 0 !== response ? response : 0;
	var htmlWrapperBeginning = '<div class="line"><div class="message message-left animated fadeInUp bubbleLeft">',
		htmlWrapperEnding = "</div></div>",
		delay = (i = void 0 !== i ? i : 0) > 0 ? calculateDelay(messagesArray[i - 1]) : 1e3;
	!response && questions[currentQuestion].intro && 0 == i && (delay = 50), setTimeout((function () {
		if (i >= messagesArray.length) return response ? (currentQuestion++, createMessage(questions[currentQuestion].question), 1) : (createAnswerField(delay), 1);
		$("#chat-container").append(htmlWrapperBeginning + messagesArray[i] + "</div></div>"), "chat" == $(".active").attr("id") && smoothScrollBottom(), i++, createMessage(messagesArray, i, response)
	}), delay)
}

function createAnswerField() {
	var htmlAnswerField = '<div id="answer-container" class="line"><form action="#" onsubmit="return false;"><input required="required" autocomplete="on" min="2" max="40" formnovalidate="formnovalidate" autofocus="autofocus" type="text" name="answer" id="answer" class="message message-right animated fadeInUp" value="" placeholder="Type your response…"></form><div class="clear"></div></div>';
	if (questions[currentQuestion].ending) return 1;
	$("#chat-container").append(htmlAnswerField), $("#answer").keyup((function (event) {
		if (13 == event.keyCode) {
			var answer = $.trim($("#answer").val());
			"" != answer ? ($("#answer-container").remove(), createAnswerMessage(answer)) : ($("#answer").removeClass("shake").removeClass("fadeInUp"), $("#answer").addClass("shake"), $("#answer").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", (function () {
				$(this).removeClass("shake").removeClass("fadeInUp")
			})))
		}
	})), $("#answer").focus(), "chat" == $(".active").attr("id") && smoothScrollBottom()
}

function createAnswerMessage(answer) {
	var htmlWrapperBeginning = '<div class="line"><div class="message message-right animated fadeInUp bubbleRight">',
		htmlWrapperEnding = '</div></div><div class="clear"></div>';
	$("#chat-container").append(htmlWrapperBeginning + answer + htmlWrapperEnding), local && (console.log(answer), console.log(questions[currentQuestion]));
	var dimensions_question = questions[currentQuestion].name,
		dimensions_answer = answer,
		dimensions_created_at = String(Date.now());
	createMessage(findResponseForAnswer(answer, questions[currentQuestion].answers), 0, 1)
}

function findResponseForAnswer(answer, possibleAnswers) {
	for (key in possibleAnswers)
		if (answer.toLowerCase().match(key)) return possibleAnswers[key].replies;
	return possibleAnswers.default.replies
}

function calculateDelay(string) {
	var delayPerWord = 218,
		delay = 218 * string.split(" ").length;
	return delay = delay < 654 ? delay + 400 : delay
}

function smoothScrollBottom() {
	$("html,body").animate({
		scrollTop: $(document).height()
	}, 1e3)
}

function tabHandler() {
	$tab = $("#menu ul li"), $content = $(".content"), $defaultTab = $("#chat");
	var animationOver = !0;
	$defaultTab.addClass("active"), $("#" + $defaultTab.attr("data-content")).addClass("activeContent"), $tab.click((function () {
		if (!$(this).hasClass("active")) {
			animationOver = !1;
			var tabContent = "#" + $(this).attr("data-content");
			$tab.removeClass("active"), $(this).addClass("active"), $(".activeContent") != $(tabContent) && $(".activeContent").hide().removeClass("activeContent"), $(tabContent).show().addClass("activeContent"), "chat" == $(".active").attr("id") && (smoothScrollBottom(), $(".message").each((function () {
				$(this).removeClass("tada").removeClass("fadeInUp").addClass("fadeIn")
			}))), "about" == $(".active").attr("id") && $("html,body").animate({
				scrollTop: 0
			}, 0)
		}
	}))
}
$(document).ready((function () {
		$("#menu").show(), $("div").removeClass("displayNone")
	})),

	$(document).ready((function () {
		$("#chat").click((function () {
			$("#about-container").hide(), $("#chat-container").show()
		})), $("#about").click((function () {
			$("#chat-container").hide(), $("#about-container").show()
		}))
	})),

	$(document).ready((function () {
		var date = new Date,
			sec = date.getSeconds(),
			min = date.getMinutes(),
			hour = date.getHours(),
			copyrightYear = date.getFullYear();
		$("document").ready((function () {
			$("#copyright").text(copyrightYear)
		}))
	})),

	$(document).ready((function () {
		new storyController(questions), new tabHandler
	}));