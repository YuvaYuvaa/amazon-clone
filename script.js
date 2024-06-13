const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control-prev')
const next_btn = document.querySelector('.control-next')
//display images shows
let n = 0;

function changeSlide(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.display='none';  //images will not show
    }
    imgs[n].style.display='block';     //n=0 first images show
}
changeSlide()
//left side button images change
prev_btn.addEventListener('click', (e)=>{
    if(n>0){
        n--
    }
    else{
        n=imgs.length-1
    }
    changeSlide()
})
//right side button image change
next_btn.addEventListener('click', (e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0
    }
    changeSlide()
})

const scrollContainer = document.querySelectorAll('.produts');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollleft = scrollleft + evt.deltaY;
    })
}