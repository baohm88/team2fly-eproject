import { useEffect } from "react";

const Slider = () => {
    useEffect(() => {
    let index = 0
    const leftbtn = document.querySelector('.chevron-fa-two');
    const rightbtn = document.querySelector('.chevron-fa-one');
    const imgNumber = document.querySelectorAll('.box-slider');
    
        rightbtn.addEventListener("click", function(){
            index = index+1;
     
        if(index>imgNumber.length-1){
            index=0;
        }
        document.querySelector(".box-box").style.right = index *100+"%"
    })


    leftbtn.addEventListener("click", function(){
        index = index-1;
        if(index<=0){
            index=imgNumber.length-1;
        }
        document.querySelector(".box-box").style.right = index *100+"%"
    })

    
    console.log(imgNumber);
    console.log(rightbtn);
    console.log(leftbtn);
});
}




export default Slider;
