const currentImage = document.querySelector('#image');
const images = ['img/pic1.png','img/pic2.png','img/pic3.png'];


function changeImage(){
    console.log("Whats uppp");
    let rnd = Math.floor(Math.random()* images.length);
    console.log(rnd);
}

