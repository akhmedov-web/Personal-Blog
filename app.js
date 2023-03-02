const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector(".prev");
const items = document.querySelectorAll(".slider_items");
const number=document.querySelector(".number");
let index=0;
next.addEventListener('click',()=>{
    index++;
    getSlide();
    number.innerHTML=index+1;
})
prev.addEventListener('click',()=>{
    index--;
    getSlide();
    number.innerHTML=index+1;
})
function getSlide(){
    if(index>items.length-1){
        index=0
        }
    if(index<0){
        index=items.length-1
        }
    slider.style.transform = `translateX(${-index * 100}%)`;
    console.log(index);
}