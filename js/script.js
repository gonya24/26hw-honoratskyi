function slider (arrList) {
    const img = document.getElementById('image');
    const prev = document.getElementById ('butPrev');
    const next = document.getElementById('butNext');
    prev.style.display = "none";
    
    let i = 0;
    img.src = arrList[i];
    prev.addEventListener ('click', function prevImg (){
        next.style.display = "";
        img.src = arrList[--i]
        if (i === 0) {
         prev.style.display= "none";   
            
        }
    })
    next.addEventListener ('click',  function nextImg (){
        prev.style.display = "";
        img.src = arrList[++i]
        if (i === arrList.length-1) {
            next.style.display ="none";
        }
         
    }) 
    
 }
 
 const listImg = ['img/1.png','img/2.png','img/3.png','img/4.png'];
slider (listImg);