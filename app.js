function modoDark(){
    body.classList.toggle('modo-dark');

    if(document.body.classList.contains("modo-dark")){
        favicon.href = "img/Favicon-light.svg";
    } else {
        favicon.href = "img/Favicon-dark.svg";
    }
};

let body = document.querySelector('body');

let btnLM = document.getElementById('imgModoDark');

btnLM.addEventListener('click', () =>{
    modoDark(body);
})
