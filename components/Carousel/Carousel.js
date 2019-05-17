// class Carousel {

// }

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

!function(doc) {
	let itemClassName = 'carousel__photo';
	(items = doc.querySelect(itemClassName)), (totalItems = items.length), (slide = 0), (moving = true);

	function setInitialClasses() {
		items[totalImages - 1].classList.add('left-button');
		items[0].classList.add('active');
		items[1].classList.add('rigth-button');
	}
	function setEventListeners() {
		let next = doc.getElementsByClassName('carousel__button--next')[0],
			prev = doc.getElementsByClassName('carousel__button--prev')[0];

		next.addEventListener('click', moveNext);
		prev.addEventListener('click', movePrev);
    }
    
    function disableInteraction() {
        moving = true;
        setTimeout(function(){
            moving = false}, 500);
        }
    funcion moveCarouselTo(slide) {
        if(!moving) {
            disableInteraction();
            let newPrevious = slide -1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide +2;
            
            if(slide === 0){
                newPrevious = (totalItems - 1)
            }

        
        }
    }
    }
};
