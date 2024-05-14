// chenge - item ----------------------------

// select all the image in the footer
const footerImages = document.querySelectorAll('.footer .images img');

// select the image in foodbar
const foodbarImage =document.querySelector('.footer img');


//add a click event listener to each FOOTer image 
footerImages.forEach(image => {
    image.addEventListener('click', () => {

        // Update the source of the foodbar image
        foodbarImage.scr =image.scr;

    });
    
});


// remove - animation---------------------------------------


const itemImages =document.querySelectorAll('.item-img');
itemImages.forEach(img => {
    img.addEventListener('click', () => {

        // Remove the 'animated' class from all image
        itemImages.forEach(img => img.classList.remove('animated'));


        // Add the 'animated' class to the class to the clicked image
        img.classList.add('animated');
    });
});

















const themeSwitch = document.getElementById('theme-switch');
const body= document.body;
themeSwitch.addEventListener('chenge', function() {
    body.classList.toggle('dark-mode');

});