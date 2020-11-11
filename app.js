const imgDb = [
    {
        img: "/img/dishes_1.jpg",
    },
    {
        img: "/img/dishes_2.jpg",
    },
    {
        img: "/img/dishes_3.jpg",
    },
    {
        img: "/img/dishes_4.jpg",
    },
    {
        img: "/img/dishes_5.jpg",
    },
    {
        img: "/img/hero_1.jpg",
    }
];

//console.log(imgDb[4].img);
const imgContainer = document.querySelector('.image-container');

window.addEventListener('load', createElement);

function createElement(){
     //console.log('Windows is loaded');

    //ARRAY COUNTER
    let count = 0;  


    //CREATING THE ELEMENTS
     //LEFT BUTTON
     const leftBtn = document.createElement("span"); 
     leftBtn.classList.add("left-btn");
     leftBtn.innerHTML = `<i class='icon-chevron-left'></i>`;
     imgContainer.appendChild(leftBtn);
     //console.log(rightBtn);


     //IMAGE
     let imgBox = document.createElement("div");
     imgBox.classList.add("img-box");
     imgBox.innerHTML = `<img src= ${imgDb[count].img} class='west-img'>`;
     imgContainer.appendChild(imgBox);
     //console.log(imgBox);


     //RIGHT BUTTON
     const rightBtn = document.createElement("span"); 
     rightBtn.classList.add("right-btn");
     rightBtn.innerHTML = `<i class='icon-chevron-right'></i>`;
     imgContainer.appendChild(rightBtn);
     //console.log(rightBtn);


    

     //SLIDE FUNCTION
     //RIGHT BTN
     rightBtn.addEventListener('click', function(){
         //console.log('it works')
         imgBox.innerHTML = `<img src= ${imgDb[count].img} class='west-img'>`;
         count++;

         if(count == 5){
             count = 0;
         }
     })

     
      //LEFT BTN
      leftBtn.addEventListener('click', function(){
        //console.log('it works')
        imgBox.innerHTML = `<img src= ${imgDb[count].img} class='west-img'>`;
        count--;

        if(count == 0){
            count = 5;
        }
    })
} 
   
