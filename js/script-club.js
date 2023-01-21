window.addEventListener('scroll',()=>{
    // let content1 = document.querySelector('.partener-1');
    let content2 = document.querySelector('.C2E');
    let content3 = document.querySelector('.C3LF');
    let content4 = document.querySelector('.multimedia');
    let content5 = document.querySelector('.cyber');

    let contentposition2 = content2.getBoundingClientRect().top;
    let contentposition3 = content3.getBoundingClientRect().top;
    let contentposition4 = content4.getBoundingClientRect().top;
    let contentposition5 = content5.getBoundingClientRect().top;
    
    let screenposition = window.innerHeight / 1.5;



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
});