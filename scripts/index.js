/* global $ */

/* http://jsfiddle.net/ryXFt/3/ as reference */
(function() {
	$('a').click(function(e){
		if(e.currentTarget.hash){
			e.preventDefault();
			$('html, body').animate(
				{
					scrollTop: $(e.currentTarget.hash).offset().top
				},
				'slow', function(){
					window.location.hash = e.currentTarget.hash;
				});
		}
	});

	const username = 'gianl' + 'uca.' + 'paterson';

	$('#contact-form').attr('action', 'https://formspree.io/' + `${username}` + '@' + 'gmail.com');

})();