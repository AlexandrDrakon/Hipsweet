$(document).ready(function() {



	//Tabs for section OURTEAM
	(function() {
		'use strict';

		var
			flag = true,
			durationAnimation = 300;

		$('.cook__item_link').on('click', function(e) {
			e.preventDefault();

			if(flag) {

				flag = false;

				var
					_this = $(this),
					item = _this.closest('.cook__item'),
					itemIndex = item.index(),
					container = _this.closest('.ourteam'),
					contentQuote = container.find('.cook__quote-item'),
					reqItemQuote = contentQuote.eq(itemIndex),
					actItemQuote = contentQuote.filter('.active'),
					contentDesc = container.find('.cook__desc-item'),
					reqItemDesc = contentDesc.eq(itemIndex),
					actItemDesc = contentDesc.filter('.active');

				if (!item.hasClass('active')) {

					item.addClass('active')
						.siblings()
						.removeClass('active');

					actItemQuote.fadeOut(durationAnimation, function() {
						reqItemQuote.fadeIn(durationAnimation, function() {
							$(this).addClass('active')
								.siblings()
								.removeClass('active');
							flag = true;
						});
					});

					actItemDesc.fadeOut(durationAnimation, function() {
						reqItemDesc.fadeIn(durationAnimation, function() {
							$(this).addClass('active')
								.siblings()
								.removeClass('active');
							flag = true;
						});
					});

				} else {

					flag = true;

				}
			}
		});

	})();



});