let slideIndex=0;
ShowSlide();

function   ShowSlide(){
    let slide=document.getElementsByClassName("slides");
    let dots=document.getElementsByClassName("dots");
    let i;
    for(i=0; i<slide.length; i++){
        slide[i].style.display="none";
    }
    slideIndex++;
    if(slideIndex>slide.length){slideIndex=1}
    for(i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace("  active","");
    }

    slide[slideIndex-1].style.display="block";
    dots[slideIndex-1].className += " active";

setTimeout(ShowSlide,1500);


}



    counters=document.querySelectorAll(".counter");

    counters.forEach(counter => {

        counter.innerText='0';
        const updateCounter=()=>{
            const target=parseInt(counter.getAttribute("data-target"));
            const counter1=parseInt(counter.innerText);
            const increment=target/1000;
            if(counter1<target){
                counter.innerText=`${Math.ceil(counter1+increment)}`;

            }
            setTimeout(updateCounter,10)

        }
updateCounter();
        
    });


     