// let btn = document.querySelector('.button');
// let div = document.querySelector('.div');

// btn.onclick = function(){
//     div.classList.toggle('show');
//     if(div.classList.contains('show')){
//         btn.textContent = 'hidden'
//     }
//     else{
//         btn.textContent ='show'
//     }
//     // console.log('ok');
// }

// let btn2 = document.querySelector('.button2');
// let div2 = document.querySelector('.div2');

// btn2.onclick = function(){
//     div2.classList.toggle('show');
//     if(div2.classList.contains('show')){
//         btn2.innerHTML = `<i class="fa-solid fa-xmark"></i>`
//     }
//     else{
//         btn2.innerHTML =`<i class="fa-solid fa-list"></i>`
//     }
    // console.log('ok');
// }

// let larg_img = document.querySelector('.larg_img');
// let larg = larg_img.src;
// let images = document.querySelectorAll('.img img');

// images.forEach(image => {
//      image.onmouseover = function(){
//         larg_img.src= image.src;
//      }
//      image.onmouseout = function(){
//         larg_img.src= larg;
//      }
// });


let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('.data2 a')
let search = document.querySelector('.search');
let search_icon = document.querySelector('.search2');


window.onscroll = function(){
sections.forEach(section => {
      if(window.scrollY >= section.offsetTop -300){
         links.forEach(element => {
            if(section.dataset.grop == element.getAttribute('href')){
               element.classList.add('active');
            }
            else{
               element.classList.remove('active');
            }
         });
      }
});
}


search_icon.onclick =function(){
   if(search.classList.contains('block')){
      search.classList.remove('block');
   }
   else{
      search.classList.add('block');
   }
}


// btn.onclick = function(){
//     div.classList.toggle('show');
//     if(div.classList.contains('show')){
//         btn.textContent = 'hidden'
//     }
//     else{
//         btn.textContent ='show'
//     }
//     // console.log('ok');
// }

//  let id= window.setInterval(()=>{
//             let i = parseInt(Math.random()*sections.length);
//             sections.forEach(img => {
//                img.style.display ='none';
//             });
//             sections[i].style.display ='block';

// } , 1000);
