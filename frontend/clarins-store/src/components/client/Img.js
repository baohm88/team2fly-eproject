import { useEffect } from "react";


const Img = () => {
    useEffect(() => {
        const bigImg = document.querySelector(".product-img-big img");
        const smallImgs = document.querySelectorAll(".product-img-small img");
        
        smallImgs.forEach(function(imgItem, index) {
            imgItem.addEventListener("click", function() {
                bigImg.src = imgItem.src;
            });
           
        });
    }); 
}

export default Img