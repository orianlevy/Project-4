    $(document).ready(function() {
        
    		var $photoGallery = $('#lightgallery');

        	$($photoGallery).lightGallery({
        		getCaptionFromTitleOrAlt: true,
        		thumbnail: false
        	}); 



            // Input filter keyup listener
 			$('input').keyup(function(event) {
    		// Hide anchors with titles that don't contain the input string
    		$photoGallery.find('a').filter(function(index, element){
      		return !$(element).attr('title').toLowerCase().includes((event.currentTarget.value.toLowerCase()));
    		})// Hide elements
      		.animate({opacity: '0'}, 'fast').addClass('hidden');
    		// Move still matching elements to the front of the list
    		$photoGallery.find('a').filter(function(index, element){
      		return $(element).attr('title').toLowerCase().includes((event.currentTarget.value.toLowerCase()));
    		})// Sort elements by image filename
      		.sort(sortByHref)
      		// Move to beginning of thumbnail list
      		.prependTo($photoGallery);
    		// Show anchors with titles that do contain the input string
    		$photoGallery.find('a').filter(function(index, element){
      		return $(element).attr('title').toLowerCase().includes((event.currentTarget.value.toLowerCase()));
    	     })// Show elements
      		.removeClass('hidden').animate({opacity: '1'}, 'fast');
  			});

 			// Sort utility
  			function sortByHref(a, b) {
    			var aSrc = $(a).attr('href');
    			var bSrc = $(b).attr('href');
    			return (aSrc < bSrc) ? -1 : (aSrc > bSrc) ? 1 : 0;
  			}

    });




