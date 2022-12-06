'USE STRICT';

const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');

hamburger.addEventListener('click',()=>{
    console.log('hello');
    header.classList.toggle('open');
});

const options = {};
const observer = new  IntersectionObserver(callback,options);

const targets = document.querySelectorAll('.slide,.inview-balloon');
targets.forEach(target=>observer.observe(target));

function callback(targets){
    targets.forEach(target=>{
        console.log(target.isIntersecting);
        if(target.isIntersecting){
            target.target.classList.add('show');
        }else{
            target.target.classList.remove('show');
        }
    });
};