// scrollreveal animations
ScrollReveal().reveal('.hero-text', {
distance:'100px',
origin:'left',
duration:1300
})
ScrollReveal().reveal('.hero-img', {
distance:'100px',
origin:'right',
duration:1300
})
ScrollReveal().reveal('.about', {
distance:'100px',
origin:'top',
duration:1300
})
ScrollReveal().reveal('.card-01', {
distance:'150px',
origin:'left',
duration:1000
})
ScrollReveal().reveal('.card-02', {
distance:'150px',
origin:'left',
duration:1000
})
ScrollReveal().reveal('.card-03', {
distance:'150px',
origin:'right',
duration:1000
})
ScrollReveal().reveal('.card-04', {
distance:'150px',
origin:'right',
duration:1000
})
ScrollReveal().reveal('.card-05', {
distance:'150px',
origin:'bottom',
duration:1000
})
ScrollReveal().reveal('.card-06', {
distance:'150px',
origin:'bottom',
duration:1000
})
ScrollReveal().reveal('.card-07', {
distance:'150px',
origin:'bottom',
duration:1000
})
ScrollReveal().reveal('.card-08', {
distance:'150px',
origin:'bottom',
duration:1000
})

//  banner image change
document.getElementById('change-color').onclick = function(){
    document.getElementById('image-cb').src = './assets/img/cb-red.webp';
}
document.getElementById('change-color red').onclick = function(){
    document.getElementById('image-cb').src = './assets/img/cb-black.png';
}

const btnElement = document.querySelector('.popup-btn');
const trailerElement = document.querySelector('.trailer-container');
const closeButtonElement = document.querySelector('.close-icon');
const videoElement = document.querySelector('trailer-container video'); 

btnElement.addEventListener('click',()=>{
    trailerElement.classList.remove('active');
})

closeButtonElement.addEventListener('click',()=>{
    trailerElement.classList.add('active');
    videoElement.pause();
    videoElement.currentTime = 0;
});

