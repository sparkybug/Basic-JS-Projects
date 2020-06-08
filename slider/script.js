const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const imgContainer = document.querySelector(".images");

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

    function nextSlide(){
        imgContainer.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration: 1000, fill:'forwards'});

        if(counter === 4){
            counter = -1;
        }
        counter++;
            imgContainer.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;
    }

    function prevSlide(){
        imgContainer.animate([{opacity:'0.1'},{opacity:'1.0'}], {duration: 1000, fill:'forwards'});
        
        if(counter === 0){
            counter = 5;
        }
        counter--;
            imgContainer.style.backgroundImage = `url(img/bcg-${counter}.jpg)`;

    }