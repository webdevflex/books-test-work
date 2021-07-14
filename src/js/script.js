//search 
let search = document.querySelector('.search');
let body = document.querySelector('body');

search.addEventListener('click',function(e){
    e.stopPropagation();
    this.classList.add('search-active')
})
body.addEventListener('click',function(){
    search.classList.remove('search-active')
})



//language
let langBtn = document.querySelector('.header-language-item');
let langBtnHiden = document.querySelectorAll('.language-item-hiden');


langBtn.addEventListener('click',function(e){
    e.stopPropagation();
    langBtnHiden.forEach(elem=>{
        elem.classList.toggle('header-lang-active')
    })  
})
body.addEventListener('click',function(){
    langBtnHiden.forEach(element =>{
        element.classList.remove('header-lang-active')
    })
})
langBtn.addEventListener('click',function(){
    if(search.classList.contains('search-active')){
        search.classList.remove('search-active')
    }
})

search.addEventListener('click',function(){
    langBtnHiden.forEach(elements =>{
        elements.classList.remove('header-lang-active')
    })
})
 
//burger-menu
let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu-list')
let drop = document.querySelector('.menu-list-drop')

burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    menu.classList.toggle('burger-menu-active')
    burgerMenu.classList.toggle('burger-close')
})


burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    if(search.classList.contains('search-active')){
        search.classList.remove('search-active')
    }
})
search.addEventListener('click',function(e){
    e.stopPropagation();
    if(menu.classList.contains('burger-menu-active')){
        menu.classList.remove('burger-menu-active')
        burgerMenu.classList.remove('burger-close')
    }
})