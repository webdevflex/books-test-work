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

//burger-menu
let burgerMenu = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu-list');
let drop = document.querySelector('.menu-list-drop');
let menuAnimate = document.querySelector('.burger-span');
let burgerActive = document.querySelector('.burger-menu-active');

burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    menu.classList.toggle('burger-menu-active')
  
})

burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    if(search.classList.contains('search-active')){
        search.classList.remove('search-active')
    }
})

burgerMenu.addEventListener('click',function(){
    menuAnimate.classList.toggle('animate-menu')
})

langBtn.addEventListener('click',function(){
    if(menu.classList.contains('burger-menu-active')){
        menu.classList.remove('burger-menu-active')
        menuAnimate.classList.remove('animate-menu')
    }
})


//При клике на "поиск" проверяем открыто ли "меню" ели да "закрываем"
search.addEventListener('click',function(){
    if(menu.classList.contains('burger-menu-active')){
        menu.classList.remove('burger-menu-active')
        menuAnimate.classList.remove('animate-menu')
    }
})

//При клике на "поиск" проверяем открыто ли "язык" ели да "закрываем"
search.addEventListener('click',function(e){
    e.stopPropagation();
    langBtnHiden.forEach(elem=>{
       if(elem.classList.contains('header-lang-active')){
           elem.classList.remove('header-lang-active')
       }
    })  
})


//При клике на "меню" проверяем открыто ли "язык" ели да "закрываем"
burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    langBtnHiden.forEach(elem=>{
       if(elem.classList.contains('header-lang-active')){
           elem.classList.remove('header-lang-active')
       }
    })  
})

//
let logoText = document.querySelector('.logo-text')
let logoTextActive = document.querySelector('.logo-text-active')
let width =  body.clientWidth;
console.log(width)

search.addEventListener('click',function(){
    if(width <= 520){
        logoText .classList.add('logo-text-active')
    }
})
//при клике вне элемента "показываем лого"
body.addEventListener('click',function(){
    logoText.classList.remove('logo-text-active')
    
})
//при клике на "меню" "показываем лого"
burgerMenu.addEventListener('click',function(e){
    e.stopPropagation();
    logoText.classList.remove('logo-text-active')
    
})