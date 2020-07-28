let wow = new WOW({mobile:false});

wow.init();

(function ibg() {
	$.each($(".ibg"), function (index, val) {
		if ($(this).find("img").length > 0) {
			$(this).css(
				"background-image",
				'url("' + $(this).find("img").attr("src") + '")'
			);
		}
	});
})();

$("#signIn").click(function () {
	$(".modal-register").fadeIn("300").css("display", "flex");
	$(".form-signin").delay("200").addClass("showed");
	$("body").addClass("lock");
});

$("#signUp").click(function () {
	$(".modal-register").fadeIn("300").css("display", "flex");
	$(".form-sign-up").delay("200").addClass("showed");
	$("body").addClass("lock");
});

$(".modal-close").click(function () {
	$(".form-signin, .form-sign-up").removeClass("showed");
	$(".modal-register").fadeOut("300");
	$("body").removeClass("lock");
});

$('.tabs-menu[data-num="1"] .tab__button').click(function (event) {
	event.preventDefault();
	$('.tabs-menu[data-num="1"] .tab__button').parent().removeClass("active");
	$(this).parent().toggleClass("active");
});

$('.tabs-menu[data-num="2"] .tab__button').click(function (event) {
	event.preventDefault();
	$('.tabs-menu[data-num="2"] .tab__button').parent().removeClass("active");
	$(this).parent().toggleClass("active");
});
