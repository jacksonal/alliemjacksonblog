jQuery(document).ready(function($) {
	$('body').append('<img style="visibility:hidden;" class="loadpinitbutton" src="' + custom_pinit_button + '" >');
	$('#pinit-img-button').hide();
	var l;
	var m;
	var n;
	$('.loadpinitbutton').load(function() {
		m = $('.loadpinitbutton').outerWidth(true);
		n = $('.loadpinitbutton').outerHeight(true);
		$('.loadpinitbutton').remove()
	});
	var o = $('#pinit-img-button').html().indexOf("helplogger.blogspot.com");
	o != -1 && hoverCheck();

	function hoverCheck() {
		$('.entry-content img,.post-body img,.entry-summary img,.summary img,.separator img').not('.nopin,.nopin img').mouseenter(function() {
			$('.pinit-visibility').css("visibility", "hidden");
			clearTimeout(l);
			var a = $(this);
			var b = parseInt(a.css("margin-top"));
			var c = parseInt(a.css("margin-left"));
			var d;
			var e;
			switch (pinit_button_position) {
				case 'center':
					d = a.position().top + a.outerHeight(true) / 2 - n / 2;
					e = a.position().left + a.outerWidth(true) / 2 - m / 2;
					break;
				case 'topright':
					d = a.position().top + b + 5;
					e = a.position().left + c + a.outerWidth() - m - 5;
					break;
				case 'topleft':
					d = a.position().top + b + 5;
					e = a.position().left + c + 5;
					break;
				case 'bottomright':
					d = a.position().top + b + a.outerHeight() - n - 5;
					e = a.position().left + c + a.outerWidth() - m - 5;
					break;
				case 'bottomleft':
					d = a.position().top + b + a.outerHeight() - n - 5;
					e = a.position().left + c + 5;
					break
			}
			var f = a.prop('src');
			var g = a.closest('.post,.hentry,.entry').find('.post-title,.entry-title,.entry-header');
			var h = g.text();
			if (typeof pinit_button_before === 'undefined') {
				pinit_button_before = ''
			}
			if (typeof pinit_button_after === 'undefined') {
				pinit_button_after = ''
			}
			if (g.find('a').length) {
				pinitURL = g.find('a').attr('href').replace(/\#.+\b/gi, "")
			} else {
				pinitURL = $(location).attr('href').replace(/\#.+\b/gi, "")
			}
			var i = '<div class="pinit-visibility" style="display:none;position: absolute;z-index: 9999;" ><a href="http://pinterest.com/pin/create/button/?url=' + pinitURL + '&media=' + f + '&description=' + pinit_button_before + h + pinit_button_after + '" style="display:block;outline:none;" target="_blank"><img class="pinimg" style="-moz-box-shadow:none;-webkit-box-shadow:none;-o-box-shadow:none;box-shadow:none;opacity: 0.8;background:transparent;margin: 0;padding: 0;border:0;" src="' + custom_pinit_button + '" title="Pin on Pinterest" ></a></div>';
			var j = a.parent().is('a') ? a.parent() : a;
			if (!j.next().hasClass('pinit-visibility')) {
				j.after(i);
				if (typeof l === 'undefined') {
					j.next('.pinit-visibility').attr("onmouseover", "this.style.opacity=1;this.style.visibility='visible'")
				} else {
					j.next('.pinit-visibility').attr("onmouseover", "this.style.opacity=1;this.style.visibility='visible';clearTimeout(pinitOnHover)")
				}
			}
			var k = j.next(".pinit-visibility");
			k.css({
				"top": d,
				"left": e
			});
			k.css("visibility", "visible");
			k.stop().fadeTo(300, 1.0, function() {
				$(this).show()
			})
		});
		$('.entry-content img,.post-body img,.entry-summary img,.summary img,.separator img').on('mouseleave', function() {
				$('.pinit-visibility').stop().fadeTo(0, 0.0)
		})
	}
});
