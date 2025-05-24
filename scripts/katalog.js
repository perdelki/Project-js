let currentIndex = 0;
const images = document.querySelectorAll('.comp-item');
const totalComps = images.length;
const comp = document.querySelector('.comp')
const compCon = document.querySelector('.assort-cont')
function updateGallery()
{
    const offset = -currentIndex * 100;
    comp.style.transform = `translateX(${offset}%)`;
}
function nextImage(){
    if(currentIndex < totalComps-1){
        currentIndex++
        }
    else{
        currentIndex = 0
    }
    updateGallery
}
function prevImage(){
    if(currentIndex > 0){
        currentIndex--
        }
    else{
        currentIndex = totalComps - 1
    }
    updateGallery
}
document.getElementById('nextbutton').addEventListener('click', nextImage)
document.getElementById('prevbutton').addEventListener('click', prevImage)