$(document).ready(function() {

			// accordion menu
			
			var accordion_head = $('.accordion > li > a'),
				accordion_body = $('.accordion li > .sub-menu');

			// Open the first tab on load

			accordion_head.first().addClass('active').next().slideDown('normal');

			// Click function

			accordion_head.on('click', function(event) {

				// Disable header links
				
				event.preventDefault();

				// Show and hide the tabs on click

				if ($(this).attr('class') != 'active'){
					accordion_body.slideUp('normal');
					$(this).next().stop(true,true).slideToggle('normal');
					accordion_head.removeClass('active');
					$(this).addClass('active');
				}

			});
			
			//modal
			var triggers = $(".modalInput").overlay({

			      // some mask tweaks suitable for modal dialogs
			      mask: {
			        color: '#000',
			        loadSpeed: 200,
			        opacity: 0.8
			      },

			      closeOnClick: false
			  });

			// var buttons = $("#yesno button").click(function(e) {
			// 
			// 			      // get user input
			// 			      var yes = buttons.index(this) === 0;
			// 
			// 			      // do something with the answer
			// 			      triggers.eq(0).html("You clicked " + (yes ? "yes" : "no"));
			// 			  });
			 $("#prompt form").submit(function(e) {

			      // close the overlay
			      triggers.eq(1).overlay().close();

			      // get user input
			      var input = $("input", this).val();

			      // do something with the answer
			      triggers.eq(1).html(input);

			      // do not submit the form
			      return e.preventDefault();
			  });
			

		});

