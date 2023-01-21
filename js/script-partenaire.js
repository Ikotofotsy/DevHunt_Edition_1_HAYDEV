window.addEventListener('scroll',()=>{
    // let content1 = document.querySelector('.partener-1');
    let content2 = document.querySelector('.partener-2');
    let content3 = document.querySelector('.partener-3');
    let content4 = document.querySelector('.partener-4');
    let content5 = document.querySelector('.partener-5');
    let content6 = document.querySelector('.partener-6');
    let content7 = document.querySelector('.partener-7');
    // let contentposition1 = content1.getBoundingClientRect().top;
    let contentposition2 = content2.getBoundingClientRect().top;
    let contentposition3 = content3.getBoundingClientRect().top;
    let contentposition4 = content4.getBoundingClientRect().top;
    let contentposition5 = content5.getBoundingClientRect().top;
    let contentposition6 = content6.getBoundingClientRect().top;
    let contentposition7 = content7.getBoundingClientRect().top;
    let screenposition = window.innerHeight / 1.2;


    // if ( contentposition1 < screenposition ){
    //     content1.classList.add('active');
    // }
    // else{
    //     content1.classList.remove('active');
    // }

    if ( contentposition2 < screenposition ){
        content2.classList.add('active');
    }

    if ( contentposition3 < screenposition ){
        content3.classList.add('active');
    }

    if ( contentposition4 < screenposition ){
        content4.classList.add('active');
    }

    if ( contentposition5 < screenposition ){
        content5.classList.add('active');
    }

    if ( contentposition6 < screenposition ){
        content6.classList.add('active');
    }

    if ( contentposition7 < screenposition ){
        content7.classList.add('active');
    }
});